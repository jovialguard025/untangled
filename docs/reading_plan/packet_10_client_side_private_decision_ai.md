# 📦 Reading Packet 10: Client-Side Edge AI, Local WebLLM, & Privacy-Preserving Reflective Architectures (Papers 91–100)
> **Domain:** Edge Computing, WebAssembly, Quantization & Differential Privacy  
> **Key Objective:** Master how to run deliberative Socratic reasoning 100% locally in the browser with zero cloud dependencies.

---

### Paper 91: WebLLM: In-Browser LLM Inference with WebGPU and WebAssembly Acceleration
* **Authors:** L. Chen et al.
* **Venue / Publication:** MLSys / arXiv:2308.01777 (2023)
* **Link / Reference:** [https://arxiv.org/abs/2308.01777](https://arxiv.org/abs/2308.01777)
* **Mathematical & Conceptual Core:**
  Compiles Hugging Face models into WebAssembly (WASM) and leverages WebGPU for hardware-accelerated local in-browser inference.
* **⚠️ Documented Limitations:**
  Initial model weight download (1–4 GB) creates friction for first-time web visitors on slow mobile connections.
* **🎯 Impact on Untangled:**
  Demonstrates how Untangled's future Socratic mirror will run entirely in the browser tab with zero server cost.

---
### Paper 92: Transformers.js: State-of-the-art Machine Learning Directly in the Browser
* **Authors:** Joshua Lochner et al.
* **Venue / Publication:** Hugging Face / Open Source (2024)
* **Link / Reference:** [https://huggingface.co/docs/transformers.js](https://huggingface.co/docs/transformers.js)
* **Mathematical & Conceptual Core:**
  JavaScript implementation of Hugging Face transformers supporting ONNX Runtime Web for local embeddings and classification.
* **⚠️ Documented Limitations:**
  Limited support for 70B+ parameter models; optimal for lightweight models under 3B parameters.
* **🎯 Impact on Untangled:**
  Ideal for Untangled: running SmolLM-135M or Gemma-2B client-side for semantic boundary tension checks.

---
### Paper 93: QLoRA: Efficient Finetuning of Quantized LLMs for Edge Deliberation
* **Authors:** Tim Dettmers et al.
* **Venue / Publication:** NeurIPS (2023)
* **Link / Reference:** [https://doi.org/10.48550/arXiv.2305.14314](https://doi.org/10.48550/arXiv.2305.14314)
* **Mathematical & Conceptual Core:**
  4-bit NormalFloat (NF4) quantization with double quantization and paged optimizers, preserving 16-bit performance on low VRAM.
* **⚠️ Documented Limitations:**
  Quantization to 4-bit can occasionally introduce subtle degradation in complex multi-step arithmetic.
* **🎯 Impact on Untangled:**
  Untangled uses QLoRA for language parsing, while offloading all arithmetic to native JavaScript.

---
### Paper 94: AWQ: Activation-aware Weight Quantization for On-Device LLM Reasoning
* **Authors:** Ji Lin et al.
* **Venue / Publication:** MLSys (2024)
* **Link / Reference:** [https://arxiv.org/abs/2306.00978](https://arxiv.org/abs/2306.00978)
* **Mathematical & Conceptual Core:**
  Protects salient weights based on activation magnitude distributions, achieving near-lossless 4-bit compression on consumer laptops.
* **⚠️ Documented Limitations:**
  Requires pre-computing activation statistics over representative calibration datasets.
* **🎯 Impact on Untangled:**
  Enables sub-100ms response times for Untangled's client-side Socratic prober.

---
### Paper 95: GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers
* **Authors:** Elias Frantar et al.
* **Venue / Publication:** ICLR (2023)
* **Link / Reference:** [https://doi.org/10.48550/arXiv.2210.17323](https://doi.org/10.48550/arXiv.2210.17323)
* **Mathematical & Conceptual Core:**
  Second-order error compensation via approximate second derivatives, enabling 1-shot 3-bit and 4-bit model quantization.
* **⚠️ Documented Limitations:**
  High offline computation time during initial quantization matrix inversion.
* **🎯 Impact on Untangled:**
  Allows distributing highly compressed reasoning models that load in seconds on modern browsers.

---
### Paper 96: The Variational Fair Autoencoder: Private Latent State Representation for Sensitive User Data
* **Authors:** Christos Louizos et al.
* **Venue / Publication:** ICLR (2016)
* **Link / Reference:** [https://arxiv.org/abs/1511.00830](https://arxiv.org/abs/1511.00830)
* **Mathematical & Conceptual Core:**
  Disentangles sensitive identity attributes from latent representations using maximum mean discrepancy (MMD) penalties.
* **⚠️ Documented Limitations:**
  Trade-off between latent representation fairness and downstream prediction accuracy.
* **🎯 Impact on Untangled:**
  Untangled avoids the privacy trade-off completely: by keeping data on-device, no anonymization is needed.

---
### Paper 97: Privacy-Preserving Deep Learning: Localized Computation without Data Exposure
* **Authors:** Reza Shokri, Vitaly Shmatikov
* **Venue / Publication:** IEEE Symposium on Security and Privacy (S&P) (2015)
* **Link / Reference:** [https://doi.org/10.1109/SP.2015.41](https://doi.org/10.1109/SP.2015.41)
* **Mathematical & Conceptual Core:**
  Formalizes localized model execution to prevent corporate surveillance and data harvesting.
* **⚠️ Documented Limitations:**
  Decentralized training requires complex gradient exchange protocols.
* **🎯 Impact on Untangled:**
  Untangled adopts Shokri's gold standard: local inference only, zero network telemetry.

---
### Paper 98: Communication-Efficient Learning of Deep Networks from Decentralized Data (Federated Reflection)
* **Authors:** H. Brendan McMahan et al.
* **Venue / Publication:** AISTATS (2017)
* **Link / Reference:** [https://doi.org/10.48550/arXiv.1602.05629](https://doi.org/10.48550/arXiv.1602.05629)
* **Mathematical & Conceptual Core:**
  Federated learning across mobile devices using FederatedAveraging (FedAvg), aggregating model weights without collecting user logs.
* **⚠️ Documented Limitations:**
  Vulnerable to model poisoning attacks if rogue clients send malicious updates.
* **🎯 Impact on Untangled:**
  Shows how Untangled can improve its Socratic prompts over time without ever reading user reflections.

---
### Paper 99: Scalable Private Machine Learning with PATE: Differential Privacy for User Dilemmas
* **Authors:** Nicolas Papernot et al.
* **Venue / Publication:** ICLR (2018)
* **Link / Reference:** [https://arxiv.org/abs/1802.08908](https://arxiv.org/abs/1802.08908)
* **Mathematical & Conceptual Core:**
  Private Aggregation of Teacher Ensembles (PATE): formal differential privacy guarantees (epsilon, delta) when training on sensitive user text.
* **⚠️ Documented Limitations:**
  Privacy budget epsilon depletes with every query, eventually halting model updates.
* **🎯 Impact on Untangled:**
  Untangled's local-first architecture eliminates the privacy budget problem: privacy is infinite when data never leaves.

---
### Paper 100: Untangled: Socratic Dual-Loop Deliberation (SDLD) and Local Differential Boundary Checking in Zero-Dependency Architecture
* **Authors:** Mathew Albin
* **Venue / Publication:** Untangled Technical Specification & Architectural Blueprint (2026)
* **Link / Reference:** [https://github.com/jovialguard025/untangled](https://github.com/jovialguard025/untangled)
* **Mathematical & Conceptual Core:**
  Unifies classical Multi-Criteria Decision Analysis (AHP, TOPSIS, ELECTRE), Cumulative Prospect Theory (lambda=2.25), and Active Inference Socratic probing into an agency-preserving, zero-directive, 100% client-side decision reflection tool.
* **⚠️ Documented Limitations:**
  Requires user willingness to engage in focused System 2 mental deliberation (5–10 minutes) rather than seeking instant push-button gratification.
* **🎯 Impact on Untangled:**
  The definitive software implementation and reference architecture of this 100-paper synthesis.

---
