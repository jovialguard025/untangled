# 📐 Mathematical Foundations & Model Architecture Plan for Deliberative Decision Engines

> **Prepared for:** Advanced Decision Support Architecture  
> **Target Framework:** Neuro-Symbolic Deliberative Agent (NSDA)  
> **Author & Lead:** Mathew Albin  

---

## Part 1: Mathematical Formulations & Landmark Research Papers

Deliberative personal decision-making is not a text generation problem; it is an **uncertainty-reduction, multi-attribute optimization problem constrained by non-linear human utility and cognitive biases**. 

Below are the foundational mathematical frameworks and landmark papers that formalize this process.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MATHEMATICAL TAXONOMY                           │
├────────────────────────────────┬───────────────────────────────────────┤
│ Optimization & Multi-Criteria  │ Multi-Attribute Utility Theory (MAUT) │
│                                │ Analytic Hierarchy Process (AHP)      │
│                                │ TOPSIS & Vector Normalization         │
├────────────────────────────────┼───────────────────────────────────────┤
│ Behavioral Economics           │ Cumulative Prospect Theory (CPT)      │
│                                │ Regret Theory & Loss Aversion         │
├────────────────────────────────┼───────────────────────────────────────┤
│ Cognitive Probing              │ Active Inference & Expected Free      │
│                                │ Energy (EFE)                          │
│                                │ Bayesian Optimal Experimental Design  │
├────────────────────────────────┼───────────────────────────────────────┤
│ Feasibility Invariants         │ Karush-Kuhn-Tucker (KKT) Hard Bounds  │
│                                │ Convex Optimization & Pareto Frontiers│
└────────────────────────────────┴───────────────────────────────────────┘
```

---

### 1. Multi-Attribute Utility Theory (MAUT) & The Analytic Hierarchy Process (AHP)

* **Key Papers:**
  - Keeney, R. L., & Raiffa, H. (1976). *Decisions with Multiple Objectives: Preferences and Value Trade-Offs*. John Wiley & Sons.
  - Saaty, T. L. (1980). *The Analytic Hierarchy Process: Planning, Priority Setting, Resource Allocation*. McGraw-Hill.

#### Mathematical Formulation:
Let a decision problem comprise alternatives $\mathcal{A} = \{a_1, a_2, \dots, a_m\}$ evaluated across criteria $\mathcal{C} = \{c_1, c_2, \dots, c_n\}$.

#### A. Pairwise Comparison Matrix & Eigenvalue Decomposition
To derive subjective criterion weights $w = [w_1, w_2, \dots, w_n]^T$ with $\sum_{j=1}^n w_j = 1$, human judgments are expressed as a positive reciprocal matrix $A \in \mathbb{R}^{n \times n}$:

$$A = \begin{bmatrix} 1 & a_{12} & \cdots & a_{1n} \\ a_{21} & 1 & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & 1 \end{bmatrix}, \quad \text{where } a_{ji} = \frac{1}{a_{ij}} \text{ and } a_{ij} \approx \frac{w_i}{w_j}$$

The exact priority vector $w$ corresponds to the **principal eigenvector** associated with the maximum eigenvalue $\lambda_{\max}$:

$$A w = \lambda_{\max} w$$

#### B. Mathematical Detection of Cognitive Inconsistency
Humans exhibit transitivity violations (e.g., $c_1 \succ c_2$ and $c_2 \succ c_3$, but $c_3 \succ c_1$). The **Consistency Index ($CI$)** and **Consistency Ratio ($CR$)** quantify this cognitive incoherence:

$$CI = \frac{\lambda_{\max} - n}{n - 1}$$

$$CR = \frac{CI}{RI_n}$$

*(where $RI_n$ is the Random Consistency Index for a matrix of size $n$).*
* **The Invariant:** If $CR > 0.10$, the user's stated priorities are mathematically inconsistent. The system must trigger an intervention to recalibrate their criteria rather than proceeding with flawed arithmetic.

---

### 2. Cumulative Prospect Theory (CPT): Modeling Loss Aversion & Risk

* **Key Paper:**
  - Tversky, A., & Kahneman, D. (1992). *Advances in Prospect Theory: Cumulative Representation of Uncertainty*. Journal of Risk and Uncertainty, 5(4), 297–323.

Human decision-makers do not optimize linear expected utility; they evaluate outcomes as **gains and losses relative to a psychological reference point ($r_0$)**, with severe loss aversion.

#### Mathematical Formulation:
Let an option outcome be $x \in \mathbb{R}$ relative to status quo $r_0$, yielding net deviation $\Delta x = x - r_0$.

#### A. The Asymmetric S-Shaped Value Function $v(\Delta x)$

$$v(\Delta x) = \begin{cases} (\Delta x)^\alpha & \text{if } \Delta x \ge 0 \quad (\text{Gains: Concave / Risk-Averse}) \\ -\lambda (-\Delta x)^\beta & \text{if } \Delta x < 0 \quad (\text{Losses: Convex / Risk-Seeking}) \end{cases}$$

Empirical parameter estimates:
* $\alpha \approx \beta \approx 0.88$ (diminishing marginal sensitivity)
* $\lambda \approx 2.25$ (**Loss Aversion Coefficient**: losses hurt $\sim 2.25\times$ more than equivalent gains delight).

#### B. Non-Linear Probability Weighting Function $w(p)$
Humans systematically overweight small probabilities (tail risks) and underweight moderate-to-high probabilities:

$$w^+(p) = \frac{p^\gamma}{(p^\gamma + (1-p)^\gamma)^{1/\gamma}}, \quad w^-(p) = \frac{p^\delta}{(p^\delta + (1-p)^\delta)^{1/\delta}}$$

*(typically $\gamma \approx 0.61, \delta \approx 0.69$).*

**Relevance to Untangled:**
When Untangled asks *"What would you give up, even with your best option?"*, CPT dictates that perceived sacrifice ($-\lambda (-\Delta x)^\beta$) dwarfs the projected benefits unless explicitly decomposed.

---

### 3. Active Inference & Expected Free Energy (EFE): Optimal Questioning

* **Key Papers:**
  - Friston, K., et al. (2015). *Active Inference and Epistemic Value*. Cognitive Neuroscience, 6(4), 187–214.
  - Friston, K., et al. (2017). *Active Inference, Curiosity and Insight*. Neural Computation, 29(10), 2633–2683.

In Active Inference, an agent's objective is to minimize **Expected Free Energy ($G$)** over future policies $\pi$ (sequences of actions or questions $q$).

#### Mathematical Formulation:
Let hidden state parameters be $s$ (user's true underlying preferences, unexamined assumptions, risk tolerances) and observations be $o$ (user's answers).

$$G(\pi) = \mathbb{E}_{q(o, s | \pi)} \left[ \ln q(s | \pi) - \ln p(o, s) \right]$$

This deconstructs into two fundamental components:

$$G(\pi) = \underbrace{D_{\mathrm{KL}} \left( q(o|\pi) \,||\, p(o) \right)}_{\text{Pragmatic Value (Goal Realization)}} - \underbrace{\mathbb{E}_{q(s|\pi)} \left[ D_{\mathrm{KL}} \left( q(o|s) \,||\, q(o|\pi) \right) \right]}_{\text{Epistemic Value (Information Gain / Curiosity)}}$$

$$\text{Epistemic Value} = \mathcal{I}[o; s | \pi] = \mathcal{H}[q(o|\pi)] - \mathbb{E}_{q(s|\pi)}\left[ \mathcal{H}[q(o|s)] \right]$$

* **Pragmatic Value:** Minimizes the divergence between predicted future observations $q(o|\pi)$ and preferred goals $p(o)$ (e.g., career stability, family time).
* **Epistemic Value (Expected Information Gain):** Measures how much an inquiry will collapse entropy $\mathcal{H}$ over the user's latent cognitive state $s$.

**Relevance to Untangled:**
The AI should **never give advice**. Instead, it computes the question $q^*$ that **maximizes Epistemic Value** (maximum uncertainty reduction about latent assumptions):

$$q^* = \arg\max_{q \in \mathcal{Q}} \mathcal{I}[o; s | q]$$

---

### 4. TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)

* **Key Paper:**
  - Hwang, C. L., & Yoon, K. (1981). *Multiple Attribute Decision Making: Methods and Applications*. Springer-Verlag.

#### Mathematical Formulation:
1. **Normalized Decision Matrix ($R$):**
   $$r_{ij} = \frac{x_{ij}}{\sqrt{\sum_{k=1}^m x_{kj}^2}}, \quad \forall i=1,\dots,m; \; j=1,\dots,n$$
2. **Weighted Normalized Matrix ($V$):**
   $$v_{ij} = w_j \cdot r_{ij}$$
3. **Ideal ($A^+$) and Negative-Ideal ($A^-$) Solutions:**
   $$A^+ = \{ v_1^+, v_2^+, \dots, v_n^+ \} = \left\{ \left(\max_i v_{ij} \mid j \in J_{\text{benefit}}\right), \left(\min_i v_{ij} \mid j \in J_{\text{cost}}\right) \right\}$$
   $$A^- = \{ v_1^-, v_2^-, \dots, v_n^- \} = \left\{ \left(\min_i v_{ij} \mid j \in J_{\text{benefit}}\right), \left(\max_i v_{ij} \mid j \in J_{\text{cost}}\right) \right\}$$
4. **Euclidean Distances:**
   $$S_i^+ = \sqrt{\sum_{j=1}^n (v_{ij} - v_j^+)^2}, \quad S_i^- = \sqrt{\sum_{j=1}^n (v_{ij} - v_j^-)^2}$$
5. **Relative Closeness Coefficient ($C_i^*$):**
   $$C_i^* = \frac{S_i^-}{S_i^+ + S_i^-}, \quad 0 \le C_i^* \le 1$$
   *(Alternative $a_i$ is strictly preferred as $C_i^* \to 1$).*

---

### 5. Karush-Kuhn-Tucker (KKT) Hard Constraint Manifolds

* **Key Principle:** Non-compensatory constraints (hard limits) cannot be offset by high scores on other criteria.

$$\max_{a \in \mathcal{A}} \; U(a) \quad \text{subject to} \quad g_k(a) \le 0, \quad \forall k \in \mathcal{K}_{\text{hard}}$$

Lagrangian formulation:
$$\mathcal{L}(a, \mu) = U(a) - \sum_{k=1}^K \mu_k g_k(a)$$

KKT Complementary Slackness:
$$\mu_k \ge 0, \quad g_k(a) \le 0, \quad \mu_k g_k(a) = 0$$

If an option breaches a non-negotiable threshold ($\exists k: g_k(a) > 0$), the penalty multiplier $\mu_k \to \infty$. The option is strictly infeasible and projected outside the allowable decision simplex.

---

## Part 2: Engineering Blueprint for the Deliberative Model (NSDA)

To build a machine learning model capable of executing this multi-stage cognitive process without hallucination or sycophancy, we formulate the **Neuro-Symbolic Deliberative Agent (NSDA)**.

```
                                    USER INPUT
                  (Free-form text, voice, or structured tokens)
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MODULE 1: NEURAL PARSING & ONTOLOGY EXTRACTION                                  │
│ - Base Model: Mistral-7B / LLaMA-3-8B / SmolLM-1.7B fine-tuned with LoRA         │
│ - Task: Extract Decision Tuples into Typed JSON Schema                          │
│   D = { Goal, HardLimits[], SoftLimits[], Options[], Facts[], Assumptions[] }   │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MODULE 2: SYMBOLIC CONSTRAINT & CONSISTENCY CHECKER (Deterministic)            │
│ - Executes KKT Boundary Filtration (Pruning infeasible options)                 │
│ - Computes AHP Comparison Matrix: A w = λ_max w                                 │
│ - Verifies Consistency Ratio: CR = (λ_max - n) / ((n - 1) * RI)                 │
│   └─ If CR > 0.10: Flag Transitivity Violation to User                          │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
                     ┌───────────────────┴───────────────────┐
                     ▼                                       ▼
┌────────────────────────────────────────┐ ┌──────────────────────────────────────┐
│ MODULE 3: ACTIVE INFERENCE PROBER      │ │ MODULE 4: NON-LINEAR UTILITY ENGINE  │
│ - Computes Expected Information Gain:  │ │ - Evaluates TOPSIS Relative Closeness│
│   EIG(q) = H(S) - E[H(S|O, q)]         │ │   C_i* = S_i^- / (S_i^+ + S_i^-)     │
│ - Identifies high-tension assumptions  │ │ - Applies CPT Loss Aversion:         │
│ - Synthesizes Zero-Directive Socratic  │ │   v(Δx) with λ = 2.25                │
│   Mirror Questions (Pre-Mortem Probes) │ │ - Generates Sensitivity Reversal Bar │
└────────────────────┬───────────────────┘ └──────────────────┬───────────────────┘
                     │                                        │
                     └───────────────────┬────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MODULE 5: INVERSION REFLECTION GENERATOR & REASONING RECORD                     │
│ - Compiles Pareto Frontier & Decision Ledger                                    │
│ - Renders zero-advice summary with interactive sensitivity toggles              │
│ - Emits client-side state into localStorage / encrypted local file              │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

### Step-by-Step Implementation Roadmap

#### Phase 1: Formal Schema & Symbolic Engine Development (Weeks 1–3)
1. **Mathematical Solver in TypeScript/Python:**
   - Implement matrix eigenvalue solver for AHP consistency checking ($CR$).
   - Implement TOPSIS vector normalization and relative closeness distance calculations ($C_i^*$).
   - Implement KKT filter: hard boundaries treated as boolean masks rejecting options prior to utility weighting.
2. **Schema Definition:**
   - Define strict Pydantic / TypeScript types for the Decision Tuple:
     ```typescript
     interface DecisionContext {
       id: string;
       question: string;
       desiredOutcome: { goal: string; targetVector: number[] };
       hardConstraints: Array<{ metric: string; limit: number; direction: 'lte' | 'gte' }>;
       options: Array<{ id: string; title: string; ratings: Record<string, number> }>;
       assumptions: Array<{ text: string; confidence: number; falsifier: string }>;
     }
     ```

#### Phase 2: Neural Semantic Extraction & LoRA Fine-Tuning (Weeks 4–6)
1. **Synthetic Dataset Construction ($N = 65,000$ Decision Instances):**
   - Synthesize decision dilemmas across 6 domains (Career, Finance, Health, Relationships, Relocation, Venture).
   - Inject deliberate cognitive biases:
     - Framing bias (presenting identical salary as gross gain vs net tax loss).
     - Sunk cost fallacy ("I already spent 3 years here").
     - Transitivity contradiction ($A \succ B, B \succ C, C \succ A$).
     - Boundary breaches (option requires 60 hrs, hard limit is 45 hrs).
2. **Model Training:**
   - Fine-tune a compact foundational model (e.g., LLaMA-3-8B-Instruct or Gemma-2-9B) using QLoRA.
   - **Loss Function:**
     $$\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{schema\_CE}} + \alpha \mathcal{L}_{\text{boundary\_contrastive}} + \beta \mathcal{L}_{\text{anti\_sycophancy}}$$
   - **Anti-Sycophancy Penalty:** Strongly penalize model output whenever it uses advisory tokens (*"You should"*, *"My recommendation is"*, *"The best choice is"*). Enforce strict Socratic interrogatives (*"How does Option A reconcile with Boundary B?"*).

#### Phase 3: Active Inference & Socratic Entropy Minimization (Weeks 7–9)
1. **Expected Information Gain (EIG) Module:**
   - Formulate candidate questions $\mathcal{Q} = \{q_1, q_2, \dots, q_k\}$ targeting unstated assumptions.
   - Compute Shannon Entropy:
     $$\mathcal{H}(\mathcal{S}) = -\sum_{s \in \mathcal{S}} P(s) \log_2 P(s)$$
   - Rank questions by expected entropy reduction $\Delta \mathcal{H}(q)$ and select the top question without leaking solutions.
2. **Pre-Mortem Inversion Formulation:**
   - Transform optimistic assumptions into failure mode probes:
     - Input: *"I assume the overseas team will be collaborative."*
     - Inversion Prompt: *"If Option A fails at month 6 due to team friction, what early indicator did you overlook?"*

#### Phase 4: Integration, Client-Side WASM Compilation & Benchmarking (Weeks 10–12)
1. **Client-Side WASM Deployment (Zero-Server Architecture):**
   - Quantize the semantic parser into INT4/GGUF format.
   - Run the model client-side in the browser using **WebLLM / ONNX Runtime Web** (WebGPU acceleration).
   - Ensure the user's dilemmas never touch a cloud backend, preserving total privacy.
2. **Benchmarking & Validation Protocols:**
   - Test against the **BiasBuster Benchmark** and **MCDM Consistency Metrics**.
   - Measure:
     - **Constraint Adherence Rate:** $\ge 99.8\%$ (Hard limits never bypassed).
     - **Zero-Directive Fidelity:** $100\%$ (No recommendation phrases generated).
     - **Cognitive Transitivity Calibration:** $CR \le 0.08$ on user criteria matrices.

---

### Comparison: Why Current LLMs Fail vs. Why This Model Succeeds

| Capability | Standard LLM (GPT-4 / Claude) | The Proposed Neuro-Symbolic Model |
| :--- | :--- | :--- |
| **Mathematical Accuracy** | Stochastically hallucinates scores | Exact deterministic eigenvalue & TOPSIS algebra |
| **Consistency Enforcement** | Oblivious to transitivity loops | Flags $CR > 0.10$ and halts with a Socratic prompt |
| **Hard Constraints** | Soft suggestions easily bypassed | Strictly enforced KKT feasibility boundaries |
| **User Agency** | Usurps agency with directive advice | Zero-directive Socratic Mirror (100% agency retained) |
| **Loss Aversion Modeling** | Treats gains and losses identically | Applies CPT value function ($v(\Delta x)$ with $\lambda = 2.25$) |
| **Privacy & Sovereignty** | Uploads intimate life data to corporate servers | Runs 100% client-side via in-browser WebGPU / WASM |
