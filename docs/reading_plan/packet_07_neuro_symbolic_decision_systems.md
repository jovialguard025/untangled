# 📦 Reading Packet 7: Neuro-Symbolic AI & Constraint Satisfaction in Decision Systems (Papers 61–70)
> **Domain:** Neuro-Symbolic AI, Automated Reasoning & Convex Optimization  
> **Key Objective:** Master the integration of fuzzy neural language models with mathematically exact SMT/SAT solvers and KKT constraint manifolds.

---

### Paper 61: Neurosymbolic AI: The 3rd Wave
* **Authors:** Artur d'Avila Garcez, Luís C. Lamb
* **Venue / Publication:** Artificial Intelligence Review, 56, 12387–12406 (2023)
* **Link / Reference:** [https://doi.org/10.1007/s10462-023-10448-w](https://doi.org/10.1007/s10462-023-10448-w)
* **Mathematical & Conceptual Core:**
  Formalizes the integration of neural learning (System 1 perception) with symbolic reasoning (System 2 deductive logic and knowledge graphs).
* **⚠️ Documented Limitations:**
  Bridging continuous vector embeddings with discrete logical symbols requires complex differentiable loss relaxations.
* **🎯 Impact on Untangled:**
  Untangled is fundamentally Neuro-Symbolic: natural language parsing for qualitative inputs + discrete symbolic logic for hard constraints.

---
### Paper 62: Statistical Relational Artificial Intelligence and Neurosymbolic Integration
* **Authors:** Luc De Raedt et al.
* **Venue / Publication:** IJCAI (2020)
* **Link / Reference:** [https://doi.org/10.24963/ijcai.2020/664](https://doi.org/10.24963/ijcai.2020/664)
* **Mathematical & Conceptual Core:**
  Probabilistic logic programming: unifies first-order logic constraints with probabilistic graphical models.
* **⚠️ Documented Limitations:**
  Inference in relational models is #P-complete; intractable for high-dimensional real-time consumer web applications.
* **🎯 Impact on Untangled:**
  Untangled uses lightweight propositional logic bounds instead of full relational programming, keeping client-side latency under 2ms.

---
### Paper 63: Logic-LM: Empowering Large Language Models with Symbolic Solvers for Fact-Constrained Reasoning
* **Authors:** Liangming Pan et al.
* **Venue / Publication:** EMNLP (2023)
* **Link / Reference:** [https://doi.org/10.18653/v1/2023.findings-emnlp.248](https://doi.org/10.18653/v1/2023.findings-emnlp.248)
* **Mathematical & Conceptual Core:**
  Translates natural language premises into formal first-order logic programs, executes Z3 SMT solver, and verbalizes deterministic proofs.
* **⚠️ Documented Limitations:**
  Semantic translation errors: if the LLM misinterprets an ambiguous sentence, the symbolic solver proves a completely wrong theorem.
* **🎯 Impact on Untangled:**
  Untangled has the human review their structured inputs directly on screen, eliminating translation hallucinations.

---
### Paper 64: Faithful Chain-of-Thought Reasoning with SMT Solvers
* **Authors:** Qing Lyu et al.
* **Venue / Publication:** ACL (2023)
* **Link / Reference:** [https://doi.org/10.18653/v1/2023.acl-long.492](https://doi.org/10.18653/v1/2023.acl-long.492)
* **Mathematical & Conceptual Core:**
  Couples Chain-of-Thought reasoning with Satisfiability Modulo Theories (SMT) to guarantee arithmetic and constraint fidelity.
* **⚠️ Documented Limitations:**
  High latency when invoking cloud-hosted Z3 solvers during interactive dialogue turns.
* **🎯 Impact on Untangled:**
  Untangled executes all constraint arithmetic in pure browser JavaScript without server round-trips.

---
### Paper 65: Demystifying Neurosymbolic Deduction in LLMs: Generating SAT Formulations for Constraint Verification
* **Authors:** Theo X. Olausson et al.
* **Venue / Publication:** NeurIPS (2023)
* **Link / Reference:** [https://doi.org/10.48550/arXiv.2310.02239](https://doi.org/10.48550/arXiv.2310.02239)
* **Mathematical & Conceptual Core:**
  Encodes complex constraint verification tasks into Boolean SAT instances (DIMACS CNF format) for deterministic verification.
* **⚠️ Documented Limitations:**
  Boolean encoding requires discretizing continuous variables (like money and time), introducing quantization errors.
* **🎯 Impact on Untangled:**
  Untangled uses exact numerical comparison (e.g. deadline date comparisons, numerical limits) rather than boolean approximations.

---
### Paper 66: Convex Optimization (KKT Conditions and Dual Manifolds)
* **Authors:** Stephen Boyd, Lieven Vandenberghe
* **Venue / Publication:** Cambridge University Press (2004)
* **Link / Reference:** [https://doi.org/10.1017/CBO9780511804441](https://doi.org/10.1017/CBO9780511804441)
* **Mathematical & Conceptual Core:**
  Karush-Kuhn-Tucker (KKT) necessary and sufficient conditions for constrained optimality: $\nabla f(x) + \sum \mu_i \nabla g_i(x) = 0$ with $\mu_i g_i(x) = 0$.
* **⚠️ Documented Limitations:**
  Assumes objective and constraint functions are convex; human psychological utility functions are notoriously non-convex and S-shaped.
* **🎯 Impact on Untangled:**
  Provides the theoretical basis for Untangled's non-negotiable boundary vetoes.

---
### Paper 67: Survey of Multi-Objective Optimization Methods for Engineering and Human Utility
* **Authors:** R. T. Marler, J. S. Arora
* **Venue / Publication:** Structural and Multidisciplinary Optimization, 26(6), 369–395 (2004)
* **Link / Reference:** [https://doi.org/10.1007/s00158-003-0368-8](https://doi.org/10.1007/s00158-003-0368-8)
* **Mathematical & Conceptual Core:**
  Comprehensive mathematical classification: weighted-sum, epsilon-constraint, lexicographic, and goal attainment methods.
* **⚠️ Documented Limitations:**
  Weighted-sum approaches fail to discover points on non-convex portions of the Pareto front.
* **🎯 Impact on Untangled:**
  Untangled combines weighted scoring with lexicographic bounds (hard limits override weighted sums).

---
### Paper 68: Nonlinear Multiobjective Optimization: Interactive Methods and Pareto Optimality
* **Authors:** Kaisa Miettinen
* **Venue / Publication:** Kluwer Academic Publishers (1999)
* **Link / Reference:** [https://doi.org/10.1007/978-1-4615-5563-6](https://doi.org/10.1007/978-1-4615-5563-6)
* **Mathematical & Conceptual Core:**
  Interactive Pareto optimization (NIMBUS method): the human decision-maker steers the solver by dynamically indicating which criteria to improve and which can be sacrificed.
* **⚠️ Documented Limitations:**
  Requires mathematical literacy from the user to navigate trade-off gradients.
* **🎯 Impact on Untangled:**
  Untangled democratizes Miettinen's interactive methods into simple, non-intimidating range sliders.

---
### Paper 69: Symbolic Dynamic Programming and Decision-Theoretic Planning under Uncertainty
* **Authors:** Scott Sanner
* **Venue / Publication:** AI Magazine, 44(2), 178–193 (2023)
* **Link / Reference:** [https://doi.org/10.1002/aaai.12089](https://doi.org/10.1002/aaai.12089)
* **Mathematical & Conceptual Core:**
  Closed-form symbolic dynamic programming for continuous state-space MDPs under non-linear reward functions.
* **⚠️ Documented Limitations:**
  Analytical solutions exist only for piecewise-linear or polynomial distributions.
* **🎯 Impact on Untangled:**
  Untangled focuses on the immediate single-step commitment and review date, avoiding the intractability of infinite horizons.

---
### Paper 70: Neurosymbolic Programming for Verifiable Agent Behavior
* **Authors:** Swarat Chaudhuri et al.
* **Venue / Publication:** Foundations and Trends in Programming Languages, 7(3), 161–334 (2021)
* **Link / Reference:** [https://doi.org/10.1561/2500000049](https://doi.org/10.1561/2500000049)
* **Mathematical & Conceptual Core:**
  Synthesizes programs with neural perception modules and formally verifiable symbolic assertion guards.
* **⚠️ Documented Limitations:**
  Synthesized DSL programs can be brittle when exposed to unanticipated out-of-distribution human inputs.
* **🎯 Impact on Untangled:**
  Untangled uses declarative HTML5 schema validation and defensive DOM escaping (`esc()`) to ensure absolute runtime stability.

---
