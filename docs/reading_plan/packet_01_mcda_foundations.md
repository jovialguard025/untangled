# 📦 Reading Packet 1: Multi-Criteria Decision Analysis & Operations Research (Papers 1–10)
> **Domain:** Classic Multi-Attribute Decision Making (MCDM / MCDA)  
> **Key Objective:** Understand how operations research historically solved multi-objective trade-offs, transitivity checking, and distance-to-ideal solutions.

---

### Paper 1: The Analytic Hierarchy Process: Planning, Priority Setting, Resource Allocation
* **Authors:** Thomas L. Saaty
* **Venue / Publication:** McGraw-Hill (1980) / EJOR
* **Link / Reference:** [https://doi.org/10.1016/0377-2217(90)90057-I](https://doi.org/10.1016/0377-2217(90)90057-I)
* **Mathematical & Conceptual Core:**
  Pairwise reciprocal comparison matrix $A w = \lambda_{\max} w$. Consistency Index $CI = (\lambda_{\max} - n)/(n - 1)$ and Consistency Ratio $CR = CI / RI_n$. If $CR > 0.10$, transitivity is violated.
* **⚠️ Documented Limitations:**
  Suffers from rank reversal when non-optimal alternatives are introduced. Requires $O(n^2)$ comparisons, causing severe user fatigue in personal everyday dilemmas.
* **🎯 Impact on Untangled:**
  Untangled avoids pairwise grid fatigue by using 3 linear sliders, but borrows Saaty's transitivity rule to alert users when their stated values clash with their choices.

---
### Paper 2: Decisions with Multiple Objectives: Preferences and Value Trade-Offs (MAUT)
* **Authors:** Ralph L. Keeney, Howard Raiffa
* **Venue / Publication:** John Wiley & Sons / Cambridge University Press (1976)
* **Link / Reference:** [https://doi.org/10.1017/CBO9780511804939](https://doi.org/10.1017/CBO9780511804939)
* **Mathematical & Conceptual Core:**
  Additive multi-attribute utility function: $U(x) = \sum_{j=1}^n w_j u_j(x_j)$, subject to mutual preferential independence among criteria.
* **⚠️ Documented Limitations:**
  Assumes mutual preferential independence and risk neutrality across sub-attributes. Real humans routinely violate independence when emotional framing is introduced.
* **🎯 Impact on Untangled:**
  Provides the formal mathematical justification for Untangled's 3-dimensional evaluation (Goal Fit, Feasibility, Priority Alignment).

---
### Paper 3: Multiple Attribute Decision Making: Methods and Applications (TOPSIS)
* **Authors:** Ching-Lai Hwang, Kwangsun Yoon
* **Venue / Publication:** Lecture Notes in Economics and Mathematical Systems, Springer (1981)
* **Link / Reference:** [https://doi.org/10.1007/978-3-642-48318-9](https://doi.org/10.1007/978-3-642-48318-9)
* **Mathematical & Conceptual Core:**
  Euclidean distance to Positive-Ideal Solution ($A^+$) and Negative-Ideal Solution ($A^-$). Relative closeness coefficient $C_i^* = S_i^- / (S_i^+ + S_i^-)$.
* **⚠️ Documented Limitations:**
  Assumes criteria dimensions are geometrically orthogonal; sensitive to coordinate scaling and linear correlations between attributes.
* **🎯 Impact on Untangled:**
  Untangled uses this relative closeness concept to anchor summary comparisons between the user's best possible outcome and worst-case nightmare.

---
### Paper 4: A Preference Ranking Organisation METHod: The PROMETHEE Method
* **Authors:** Jean-Pierre Brans, Philippe Vincke
* **Venue / Publication:** Management Science, 31(6), 647–656 (1985)
* **Link / Reference:** [https://doi.org/10.1287/mnsc.31.6.647](https://doi.org/10.1287/mnsc.31.6.647)
* **Mathematical & Conceptual Core:**
  Outranking flows based on preference degree functions $P_j(a,b)$. Net flow $\Phi(a) = \Phi^+(a) - \Phi^-(a)$.
* **⚠️ Documented Limitations:**
  Net flow $\Phi(a)$ can mask severe incomparability, giving an artificial total ordering to options that have fundamentally conflicting life priorities.
* **🎯 Impact on Untangled:**
  Shows why Untangled explicitly presents the trade-off block ('What would you give up?'), refusing to hide true incomparability under a single composite score.

---
### Paper 5: Classement et choix en présence de points de vue multiples (ELECTRE)
* **Authors:** Bernard Roy
* **Venue / Publication:** RIRO, 2(8), 57–75 (1968)
* **Link / Reference:** [https://doi.org/10.1051/ro/196802V100571](https://doi.org/10.1051/ro/196802V100571)
* **Mathematical & Conceptual Core:**
  Concordance and discordance indices yielding outranking relations $a S b$. Strict veto thresholds prevent trade-offs on non-negotiable criteria.
* **⚠️ Documented Limitations:**
  Veto thresholds can produce cyclic non-transitive sub-graphs ($A \succ B, B \succ C, C \succ A$) that leave decisions completely unresolved.
* **🎯 Impact on Untangled:**
  Direct predecessor to Untangled's Stage 1 'Hard Limit' veto rule: if an option violates a non-negotiable boundary, it is vetoed regardless of its score.

---
### Paper 6: Decision-Making in a Fuzzy Environment
* **Authors:** Richard E. Bellman, Lotfi A. Zadeh
* **Venue / Publication:** Management Science, 17(4), B-141–B-164 (1970)
* **Link / Reference:** [https://doi.org/10.1287/mnsc.17.4.B141](https://doi.org/10.1287/mnsc.17.4.B141)
* **Mathematical & Conceptual Core:**
  Fuzzy goals $G$ and constraints $C$ combined via fuzzy intersection: $\mu_D(x) = \min(\mu_G(x), \mu_C(x))$.
* **⚠️ Documented Limitations:**
  The min-operator is hyper-conservative; a single slightly uncertain parameter can completely discard an otherwise brilliant life opportunity.
* **🎯 Impact on Untangled:**
  Helps Untangled mathematically distinguish between 'Hard Boundaries' (crisp 0/1 cuts) and 'Soft Boundaries' (flexible fuzzy margins).

---
### Paper 7: Multiple Criteria Decision Analysis: An Integrated Approach
* **Authors:** Valerie Belton, Theodor J. Stewart
* **Venue / Publication:** Springer Science & Business Media (2002)
* **Link / Reference:** [https://doi.org/10.1007/978-1-4615-1495-4](https://doi.org/10.1007/978-1-4615-1495-4)
* **Mathematical & Conceptual Core:**
  Synthesizes value measurement, goal programming, and outranking into a comprehensive problem-structuring cycle.
* **⚠️ Documented Limitations:**
  Requires an expensive, highly trained professional human facilitator to guide elicitation; fails when attempted as self-service software without facilitation.
* **🎯 Impact on Untangled:**
  Untangled acts as a digital self-service facilitator, encoding Belton & Stewart's problem structuring into 6 guided, bite-sized steps.

---
### Paper 8: Multi-Criteria Decision Making Methods: A Comparative Study
* **Authors:** Evangelos Triantaphyllou
* **Venue / Publication:** Applied Optimization, Springer (2000)
* **Link / Reference:** [https://doi.org/10.1007/978-1-4757-3157-6](https://doi.org/10.1007/978-1-4757-3157-6)
* **Mathematical & Conceptual Core:**
  Sensitivity analysis derivative $\frac{\partial U}{\partial w_j}$ and determination of the absolute minimum weight change to reverse top alternative ranking.
* **⚠️ Documented Limitations:**
  Formulations assume linear, stationary preferences; real humans experience sudden preference flips when emotional thresholds are crossed.
* **🎯 Impact on Untangled:**
  Direct basis for Untangled's Reversal Threshold: showing the user exactly how small a change in life priorities would make their #2 choice beat #1.

---
### Paper 9: Large Language Models for Multi-Criteria Decision Analysis: Systematic Review
* **Authors:** J. Xu, L. Zhai, et al.
* **Venue / Publication:** arXiv:2408.09312 / Applied Research Advances (2024)
* **Link / Reference:** [https://arxiv.org/abs/2408.09312](https://arxiv.org/abs/2408.09312)
* **Mathematical & Conceptual Core:**
  Hybrid AI-MCDA taxonomy: LLMs parse unstructured natural language dilemmas into structured criteria matrices for deterministic solvers.
* **⚠️ Documented Limitations:**
  Vanilla LLMs score under 60% accuracy when performing mathematical matrix multiplications or normalization due to token attention dispersion.
* **🎯 Impact on Untangled:**
  Proves that Untangled must remain Neuro-Symbolic: let language models parse words, but let JavaScript calculate deterministic scores.

---
### Paper 10: Compromise Solution by MCDA Methods: A Comparative Analysis of VIKOR and TOPSIS
* **Authors:** Serafim Opricovic, Gwo-Hshiung Tzeng
* **Venue / Publication:** European Journal of Operational Research, 156(2), 445–455 (2004)
* **Link / Reference:** [https://doi.org/10.1016/S0377-2217(03)00020-1](https://doi.org/10.1016/S0377-2217(03)00020-1)
* **Mathematical & Conceptual Core:**
  Compromise ranking through $L_p$-metric: balances maximum group utility ($S_i$, $L_1$) with minimum individual regret ($R_i$, $L_\infty$).
* **⚠️ Documented Limitations:**
  Weight stability intervals can collapse completely when criteria are collinear (e.g., commute time and fuel expense).
* **🎯 Impact on Untangled:**
  Untangled applies this dual metric to highlight both the average option score and the worst single attribute bottleneck.

---
