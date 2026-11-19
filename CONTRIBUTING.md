# Contributing to Untangled

Thanks for considering a contribution! Untangled is a small, intentional project — here's how to work with it.

## Philosophy

Untangled is a **reflection tool, not an advice engine**. Contributions should:

- Help people think more clearly, not think for them
- Keep the app zero-dependency and framework-free
- Respect user privacy (no tracking, no external data transmission)
- Maintain the calm, thoughtful tone

## Getting Started

```bash
git clone https://github.com/jovialguard025/untangled.git
cd untangled
python -m http.server 8000 --directory dist
# Visit http://localhost:8000
```

No build step required. Edit the files in `dist/` directly.

## What to Contribute

### ✅ Welcome

- **Bug fixes** — especially around localStorage edge cases or mobile layout
- **Accessibility improvements** — screen reader support, keyboard navigation, contrast
- **Translations** — i18n support for the question content
- **Print stylesheet** improvements
- **Documentation** — clearer instructions, better examples

### ⚠️ Discuss First

Open an issue before working on:

- New stages or question flows
- Changes to the scoring system
- UI redesigns or new color schemes
- Adding any external dependency

### ❌ Out of Scope

- AI/LLM integration or generated advice
- User accounts, authentication, or cloud sync
- Analytics, tracking, or telemetry
- npm packages, build tools, or frameworks

## Code Style

- The JavaScript is minified in one file — this is intentional for the original build
- CSS uses custom properties defined in `:root`
- HTML is a single-page shell; all content is rendered by `app.js`
- User input is escaped with `esc()` before HTML insertion

## Pull Request Process

1. Fork the repo and create a feature branch
2. Make your changes in `dist/`
3. Run `node --check dist/app.js` to verify syntax
4. Test manually through all 6 stages + summary
5. Verify save/resume/delete works
6. Submit a PR with a clear description of what and why

## Code of Conduct

Be kind. This is a tool about helping people think through hard moments — bring that same thoughtfulness to how you collaborate.

---

*Made by [Mathew Albin](https://github.com/jovialguard025)*
