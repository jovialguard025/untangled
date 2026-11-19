const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function createRequestHandler() {
  return (req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
    
    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(DIST_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(filePath).pipe(res);
    });
  };
}

// Bind to both IPv4 (0.0.0.0) and IPv6 (::) to guarantee localhost works across all browsers
const handler = createRequestHandler();
const serverV4 = http.createServer(handler);
const serverV6 = http.createServer(handler);

serverV4.listen(PORT, '0.0.0.0', () => {
  console.log(`[IPv4] Server running at http://127.0.0.1:${PORT}/`);
});

serverV6.listen(PORT, '::', (err) => {
  if (err) {
    console.warn(`[IPv6] Could not bind IPv6: ${err.message}`);
  } else {
    console.log(`[IPv6] Server running at http://[::1]:${PORT}/ and http://localhost:${PORT}/`);
  }
});
