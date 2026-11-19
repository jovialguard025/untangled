# 📦 Reading Packet 5: Active Inference, Free Energy Principle & Bayesian Epistemic Probing (Papers 41–50)
> **Domain:** Theoretical Neuroscience, Information Theory & Cybernetics  
> **Key Objective:** Understand how the minimization of Expected Free Energy balances goal-directed action with epistemic uncertainty resolution (curiosity).

---

### Paper 41: Active Inference and Epistemic Value
* **Authors:** Karl Friston et al.
* **Venue / Publication:** Cognitive Neuroscience, 6(4), 187–214 (2015)
* **Link / Reference:** [https://doi.org/10.1080/17588928.2015.1020053](https://doi.org/10.1080/17588928.2015.1020053)
* **Mathematical & Conceptual Core:**
  Expected Free Energy decomposition: $G(\pi) = \text{Pragmatic Value} + \text{Epistemic Value}$. Epistemic value represents information gain.
* **⚠️ Documented Limitations:**
  Discrete state-space formulations are mathematically intricate and hard to translate into natural language prompts.
* **🎯 Impact on Untangled:**
  Provides the theoretical cornerstone of Untangled's probing engine: maximize epistemic value over unstated assumptions.

---
### Paper 42: Active Inference, Curiosity and Insight
* **Authors:** Karl Friston, Thomas Parr, et al.
* **Venue / Publication:** Neural Computation, 29(10), 2633–2683 (2017)
* **Link / Reference:** [https://doi.org/10.1162/neco_a_00999](https://doi.org/10.1162/neco_a_00999)
* **Mathematical & Conceptual Core:**
  Formalizes curiosity as epistemic foraging: selecting sensory observations that minimize Shannon entropy over model parameters.
* **⚠️ Documented Limitations:**
  Assumes generative models have stationary transition matrices, which human life dilemmas rarely exhibit.
* **🎯 Impact on Untangled:**
  Untangled acts as an epistemic foraging tool, helping users explore the dark corners of their decision space.

---
### Paper 43: On a Measure of the Information Provided by an Experiment
* **Authors:** D. V. Lindley
* **Venue / Publication:** The Annals of Mathematical Statistics, 27(4), 986–1005 (1956)
* **Link / Reference:** [https://doi.org/10.1214/aoms/1177728069](https://doi.org/10.1214/aoms/1177728069)
* **Mathematical & Conceptual Core:**
  Expected Information Gain (EIG): $\mathcal{I}(X, Y) = \mathcal{H}(X) - \mathbb{E}[\mathcal{H}(X|Y)]$. Experiments are ranked by expected entropy reduction.
* **⚠️ Documented Limitations:**
  Exact calculation requires evaluating high-dimensional continuous integrals over prior distributions.
* **🎯 Impact on Untangled:**
  Untangled uses EIG principles to select which single question to ask in Stage 3 based on the category selected.

---
### Paper 44: Bayesian Experimental Design: A Review
* **Authors:** Kathryn Chaloner, Isabella Verdinelli
* **Venue / Publication:** Statistical Science, 10(3), 273–304 (1995)
* **Link / Reference:** [https://doi.org/10.1214/ss/1177009864](https://doi.org/10.1214/ss/1177009864)
* **Mathematical & Conceptual Core:**
  Optimal Experimental Design (OED) utility functions: D-optimality (determinant of Fisher information matrix) and Shannon information.
* **⚠️ Documented Limitations:**
  Computational complexity scales exponentially with parameter dimensions.
* **🎯 Impact on Untangled:**
  Guides how Untangled structures user inputs into mutually informative contrasts.

---
### Paper 45: Active Inference: Demystified and Compared
* **Authors:** Noor Sajid, Philip J. Ball, Karl J. Friston
* **Venue / Publication:** Neural Computation, 33(3), 674–712 (2021)
* **Link / Reference:** [https://doi.org/10.1162/neco_a_01357](https://doi.org/10.1162/neco_a_01357)
* **Mathematical & Conceptual Core:**
  Comparative mathematical mapping between Reinforcement Learning (Q-learning), Control as Inference, and Active Inference.
* **⚠️ Documented Limitations:**
  Demonstrates that reward-maximization agents fail at exploration when rewards are sparse, whereas active inference excels.
* **🎯 Impact on Untangled:**
  Explains why reward-driven AI chatbots rush to give answers, while active inference systems ask probing questions.

---
### Paper 46: Generalised Free Energy and Active Inference
* **Authors:** Thomas Parr, Karl J. Friston
* **Venue / Publication:** Frontiers in Psychology, 10, 1970 (2019)
* **Link / Reference:** [https://doi.org/10.3389/fpsyg.2019.01970](https://doi.org/10.3389/fpsyg.2019.01970)
* **Mathematical & Conceptual Core:**
  Extends variational free energy to generalized states of motion, incorporating temporal trajectories and path integrals.
* **⚠️ Documented Limitations:**
  Highly abstract tensor mechanics requiring specialized matrix calculus libraries.
* **🎯 Impact on Untangled:**
  Inspires Untangled's multi-stage temporal flow from past facts to future review dates.

---
### Paper 47: Active Inference on Discrete State-Spaces: A Synthesis
* **Authors:** Lancelot Da Costa et al.
* **Venue / Publication:** Journal of Mathematical Psychology, 99, 102447 (2020)
* **Link / Reference:** [https://doi.org/10.1016/j.jmp.2020.102447](https://doi.org/10.1016/j.jmp.2020.102447)
* **Mathematical & Conceptual Core:**
  Step-by-step tutorial on constructing $A, B, C, D$ matrices for POMDPs under active inference.
* **⚠️ Documented Limitations:**
  Manual specification of transition tensors $B$ is tedious for non-technical users.
* **🎯 Impact on Untangled:**
  Untangled translates POMDP matrices into human-readable textboxes and range sliders.

---
### Paper 48: Whence the Expected Free Energy?
* **Authors:** Beren Millidge, Alexander Tschantz, Christopher L. Buckley
* **Venue / Publication:** Neural Computation, 33(2), 447–482 (2021)
* **Link / Reference:** [https://doi.org/10.1162/neco_a_01354](https://doi.org/10.1162/neco_a_01354)
* **Mathematical & Conceptual Core:**
  Deconstructs why EFE is not an exact bound on marginal surprise, but a heuristic bound combining utility and information gain.
* **⚠️ Documented Limitations:**
  Reveals edge cases where epistemic drive can lead to reckless risk-seeking behavior.
* **🎯 Impact on Untangled:**
  Shows why hard boundaries are required to cap unconstrained exploration.

---
### Paper 49: Reinforcement Learning through Active Inference
* **Authors:** Alexander Tschantz et al.
* **Venue / Publication:** arXiv:2002.12636 / ICLR (2020)
* **Link / Reference:** [https://arxiv.org/abs/2002.12636](https://arxiv.org/abs/2002.12636)
* **Mathematical & Conceptual Core:**
  Shows that active inference agents discover sparse rewards up to 10x faster than traditional curiosity algorithms.
* **⚠️ Documented Limitations:**
  High compute cost when evaluating deep rollout horizons.
* **🎯 Impact on Untangled:**
  Demonstrates why Untangled focuses on finding the immediate 'smallest reversible test' rather than planning 50 steps ahead.

---
### Paper 50: Planning and Navigation as Active Inference in the Brain
* **Authors:** Raphael Kaplan, Karl J. Friston
* **Venue / Publication:** Journal of Neuroscience, 38(4), 819–825 (2018)
* **Link / Reference:** [https://doi.org/10.1523/JNEUROSCI.2764-17.2017](https://doi.org/10.1523/JNEUROSCI.2764-17.2017)
* **Mathematical & Conceptual Core:**
  Hippocampal replay and prefrontal cortex exploration mapped as epistemic trajectory searches.
* **⚠️ Documented Limitations:**
  Biological focus; does not directly provide software UI design guidelines.
* **🎯 Impact on Untangled:**
  Inspires Untangled's core tagline: 'Let’s find the thread. It starts tangled, but doesn't have to stay that way.'

---
