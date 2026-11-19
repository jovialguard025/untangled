# 📦 Reading Packet 3: Cognitive Forcing Functions & Overreliance Mitigation (Papers 21–30)
> **Domain:** Human-Computer Interaction (HCI) & AI Safety  
> **Key Objective:** Study how interface design can interrupt automation bias and prevent humans from blindly trusting AI output.

---

### Paper 21: Cognitive Forcing Functions to Prevent Overreliance on AI
* **Authors:** Zana Buçinca, Phoebe Lin, Krzysztof Z. Gajos
* **Venue / Publication:** ACM CHI (2021) / arXiv:2104.12213
* **Link / Reference:** [https://doi.org/10.1145/3411764.3445432](https://doi.org/10.1145/3411764.3445432)
* **Mathematical & Conceptual Core:**
  Cognitive Forcing Functions (CFFs) deliberately introduce interaction speed-bumps to trigger System 2 analytical thinking before revealing AI suggestions.
* **⚠️ Documented Limitations:**
  Users consistently assign lower subjective satisfaction ratings to CFF interfaces due to increased mental friction.
* **🎯 Impact on Untangled:**
  Proves that Untangled's multi-step pace is scientifically necessary: friction is a feature that protects human judgment.

---
### Paper 22: To Rely or Not to Rely: Evaluating Explainable AI and Cognitive Forcing Functions
* **Authors:** Zana Buçinca, M. Malaya, K. Z. Gajos
* **Venue / Publication:** ACM CSCW (2021)
* **Link / Reference:** [https://doi.org/10.1145/3479589](https://doi.org/10.1145/3479589)
* **Mathematical & Conceptual Core:**
  Comparing standard Explainable AI (XAI) feature attributions with CFFs; XAI alone actually increases overreliance by creating a false sense of security.
* **⚠️ Documented Limitations:**
  CFFs tested were system-centric (evaluating the AI's answer) rather than human-centric (deepening user reasoning).
* **🎯 Impact on Untangled:**
  Untangled builds a human-centric CFF: user formulates their own answers before any scores are calculated.

---
### Paper 23: Generation Mutual Information and Cognitive Forcing in Human-AI Interaction
* **Authors:** Helena Vasconcelos et al.
* **Venue / Publication:** ACM CHI (2023)
* **Link / Reference:** [https://doi.org/10.1145/3544548.3581504](https://doi.org/10.1145/3544548.3581504)
* **Mathematical & Conceptual Core:**
  Measures mutual information between user-generated text and AI suggestions to quantify independent human cognitive contribution.
* **⚠️ Documented Limitations:**
  High-tempo professional settings resist high mutual information forcing due to throughput demands.
* **🎯 Impact on Untangled:**
  Provides the metric for Untangled: success is measured by user thought coverage, not time-to-completion.

---
### Paper 24: Does the Whole Exceed Its Parts? The Effect of AI Explanations on Complementary Team Performance
* **Authors:** Gagan Bansal et al.
* **Venue / Publication:** ACM CHI (2021)
* **Link / Reference:** [https://doi.org/10.1145/3411764.3445717](https://doi.org/10.1145/3411764.3445717)
* **Mathematical & Conceptual Core:**
  Complementary human-AI performance occurs only when the human knows when to ignore the AI recommendation.
* **⚠️ Documented Limitations:**
  Explanations that are too fluent cause users to accept erroneous AI outputs 3x more often.
* **🎯 Impact on Untangled:**
  Explains why Untangled generates ZERO recommendations: recommendations destroy complementary performance.

---
### Paper 25: Who Goes First? Risk and Sequencing in Human-AI Deliberation
* **Authors:** Riccardo Fogliato et al.
* **Venue / Publication:** ACM FAccT (2022)
* **Link / Reference:** [https://doi.org/10.1145/3531146.3533190](https://doi.org/10.1145/3531146.3533190)
* **Mathematical & Conceptual Core:**
  Sequencing effects: showing an AI suggestion first anchors the human; having the human decide first preserves independence.
* **⚠️ Documented Limitations:**
  Human-first workflows require higher user energy and suffer from drop-off if the UI is cumbersome.
* **🎯 Impact on Untangled:**
  Validates Untangled's sequence: Stage 0-3 elicit human knowledge before any option scoring is permitted.

---
### Paper 26: Supporting Human Decision Making with AI: Decoupling Prediction and Explanation
* **Authors:** Charvi Rastogi et al.
* **Venue / Publication:** ACM CHI (2022)
* **Link / Reference:** [https://doi.org/10.1145/3491102.3502022](https://doi.org/10.1145/3491102.3502022)
* **Mathematical & Conceptual Core:**
  Decoupling model predictions from diagnostic explanations forces users to inspect evidence rather than anchor on outcomes.
* **⚠️ Documented Limitations:**
  Users occasionally feel disoriented when an explanation is provided without a concluding verdict.
* **🎯 Impact on Untangled:**
  Untangled's core design: provides the diagnostic questions (evidence) without giving a verdict.

---
### Paper 27: The Principles and Limits of Algorithm-in-the-Loop Decision Making
* **Authors:** Ben Green, Yiling Chen
* **Venue / Publication:** ACM CSCW (2019)
* **Link / Reference:** [https://doi.org/10.1145/3359242](https://doi.org/10.1145/3359242)
* **Mathematical & Conceptual Core:**
  Formalizes automation bias in high-stakes human decisions: humans defer to algorithmic authority even when explicitly warned.
* **⚠️ Documented Limitations:**
  Policy guidelines and disclaimer warnings fail to curb automation bias in real user behavior.
* **🎯 Impact on Untangled:**
  Shows why disclaimers are useless; interface constraints (disabling options) are required.

---
### Paper 28: Towards a Science of Human-AI Decision Making: An Overview of Design and Empirical Methodology
* **Authors:** Vivian Lai et al.
* **Venue / Publication:** ACM TiiS, 13(2), 1–43 (2021)
* **Link / Reference:** [https://doi.org/10.1145/3582496](https://doi.org/10.1145/3582496)
* **Mathematical & Conceptual Core:**
  Methodological taxonomy: calibrating human trust through task complexity, user expertise, and AI confidence intervals.
* **⚠️ Documented Limitations:**
  Focuses predominantly on binary classification tasks rather than open-ended personal dilemma reflection.
* **🎯 Impact on Untangled:**
  Extends Lai's taxonomy from binary classification to personal life decision analysis.

---
### Paper 29: Overreliance on AI: Literature Review of Human Cognitive Vulnerabilities
* **Authors:** Samia Passi, Mihaela Vorvoreanu
* **Venue / Publication:** Microsoft Research / ACM CHI (2022)
* **Link / Reference:** [https://www.microsoft.com/en-us/research/publication/overreliance-on-ai/](https://www.microsoft.com/en-us/research/publication/overreliance-on-ai/)
* **Mathematical & Conceptual Core:**
  Identifies 8 cognitive vulnerabilities exploited by generative AI: fluency bias, anthropomorphism, and conversational sycophancy.
* **⚠️ Documented Limitations:**
  Descriptive review; lacks concrete software reference implementations to counteract these vulnerabilities.
* **🎯 Impact on Untangled:**
  Untangled is a reference implementation designed specifically to eliminate all 8 vulnerabilities.

---
### Paper 30: Explanation in Artificial Intelligence: Insights from the Social Sciences
* **Authors:** Tim Miller
* **Venue / Publication:** Artificial Intelligence, 267, 1–38 (2019)
* **Link / Reference:** [https://doi.org/10.1016/j.artint.2018.07.007](https://doi.org/10.1016/j.artint.2018.07.007)
* **Mathematical & Conceptual Core:**
  Human explanations are contrastive ('Why P rather than Q?'), selected (not comprehensive), and social.
* **⚠️ Documented Limitations:**
  Standard AI explanations are non-contrastive feature lists that answer 'Why P?' but ignore 'Why not Q?'.
* **🎯 Impact on Untangled:**
  Direct foundation for Untangled's Stage 2: forces contrastive option generation.

---
