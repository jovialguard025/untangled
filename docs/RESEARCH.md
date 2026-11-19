# 🔬 Empirical & Theoretical Research Analysis: Cognitive Scaffolding in Deliberative Decision Aids

> **Prepared for:** Untangled (Clearing) Architecture  
> **Target Venues:** ACM CHI, ACL, EMNLP, ACM CSCW, NeurIPS  
> **Author & Project Lead:** Mathew Albin  

---

## 1. Domain & Micro-Domain Taxonomy

```
┌────────────────────────────────────────────────────────────────────────┐
│ MACRO-DOMAIN                                                           │
│ Human-Computer Interaction (HCI) & Artificial Intelligence (AI)        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MESO-DOMAIN                                                            │
│ Human-AI Deliberative Decision Support & Cognitive Scaffolding         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MICRO-DOMAIN                                                           │
│ Cognitive Forcing Interfaces & Socratic Counterfactual Probing in      │
│ Agency-Preserving Personal Decision Analysis                           │
└────────────────────────────────────────────────────────────────────────┘
```

* **Macro-Domain:** Computational Decision Science & Interactive AI.
* **Meso-Domain:** Deliberative Decision Aids (moving away from recommender systems toward cognitive reflection aids).
* **Micro-Domain:** **Non-Directive Cognitive Forcing & Socratic Counterfactual Scaffolding** — specifically addressing how computational interfaces can challenge user cognitive blindspots (anchoring, confirmation bias, omission bias) without inducing automation bias or surrendering human epistemic agency.

---

## 2. In-Depth Academic Literature Review (ACL Anthology, arXiv, CHI)

### Paper 1: Cognitive Forcing Functions to Prevent Overreliance on AI
* **Citation:** Buçinca, Z., Lin, P., & Gajos, K. Z. (ACM CHI 2021 / arXiv:2104.12213)
* **Venue:** ACM Conference on Human Factors in Computing Systems (CHI)
* **Core Contribution:** Investigates whether explainable AI (XAI) or Cognitive Forcing Functions (CFFs) prevent human automation bias and overreliance. Evaluates 3 CFF designs that force System 2 analytical thinking by requiring users to formulate independent judgments before seeing AI output.

#### ⚠️ Limitations (Direct from Study):
1. **Subjective UX Degradation:** Users significantly disliked cognitive forcing interventions, reporting higher subjective mental effort, friction, and lower satisfaction compared to passive, frictionless AI recommendations.
2. **Equity & Cognitive Trait Gap:** CFFs disproportionately benefited users with a pre-existing high *Need for Cognition* (NFC). Users experiencing fatigue or low intrinsic motivation bypassed or resented forced friction.
3. **AI-Centric Focus:** The CFFs evaluated were designed solely to slow the user down before evaluating *the AI's output*, rather than scaffolding the *user's own organic reasoning process*.

#### 🎯 Conclusions:
Traditional explainability (feature attributions, confidence scores) actually *increases* overreliance because fluency creates an illusion of competence. Cognitive forcing is mathematically necessary to engage deliberative System 2 processing, but must evolve from blunt speed-bumps into context-aware, user-centric cognitive scaffolding.

---

### Paper 2: The Art of SOCRATIC QUESTIONING: Recursive Thinking with Large Language Models
* **Citation:** Ding, N., Li, Z., et al. (EMNLP 2023 / ACL Anthology: `2023.emnlp-main.255`)
* **Venue:** Empirical Methods in Natural Language Processing (EMNLP)
* **Core Contribution:** Develops an algorithm mimicking recursive human thinking where an agent decomposes ambiguous, multi-faceted problems into hierarchical sub-questions and recursive probing loops rather than generating flat Chain-of-Thought solutions.

#### ⚠️ Limitations (Direct from Study):
1. **The "Solution-Leakage" Defect:** Instruction-tuned LLMs have a deep structural predisposition toward being "helpful assistants." Even under strict negative prompting, models routinely leak advice, recommendations, or premature conclusions, subverting the reflective pedagogical goal.
2. **Contextual State-Space Drift:** In multi-turn dialogues exceeding 4–5 iterations, the model frequently lost track of the user's initial core boundary constraints, generating tangential philosophical inquiries.
3. **Evaluation Metric Failure:** Standard lexical and semantic overlap metrics (BLEU, ROUGE, BERTScore) cannot capture whether a Socratic inquiry provoked genuine cognitive shifts or merely simulated conversational depth.

#### 🎯 Conclusions:
Socratic decomposition substantially outperforms flat linear reasoning in complex decision spaces. However, pure prompt-based Socratic agents are inherently unstable; they require deterministic external state-machines to enforce boundary invariants and prevent directive leakage.

---

### Paper 3: Instruct, Not Assist: LLM-based Multi-Turn Planning and Hierarchical Questioning
* **Citation:** Findings of EMNLP 2024 (ACL Anthology: `2024.findings-emnlp.553`)
* **Venue:** Findings of the Association for Computational Linguistics (EMNLP)
* **Core Contribution:** Proposes a dual-stage architecture separating high-level strategic pedagogy (question selection based on information gain) from low-level surface generation to support non-directive guidance.

#### ⚠️ Limitations (Direct from Study):
1. **Intention-Expression Mismatch:** Users struggling with complex dilemmas often express symptoms rather than root causes. The model struggled to infer latent constraints without interrogating the user excessively.
2. **Computational Overhead & Token Latency:** Running dynamic tree search over possible questions in real-time created multi-second latencies that interrupted user conversational flow.
3. **Rigid Branching:** When users provided open-ended or mixed-initiative responses, the hierarchical question tree became fragile and occasionally broke execution states.

#### 🎯 Conclusions:
Non-directive guidance requires a strict separation between the **Deliberative Policy** (what cognitive dimension to interrogate next) and the **Dialogue Generator**. Explicit boundary graphs are required to ground the inquiry.

---

### Paper 5: Faithful Where It Can Be Checked: Auditing a Reflection Agent in a Randomized Trial
* **Citation:** Nepal, S. K., Soh, S., Vinoya, N., Park, S., Roshanaei, M., & Harari, G. (arXiv:2609.19635, cs.HC / cs.CY)
* **Venue:** arXiv preprint (Under review at ACM CHI / CSCW)
* **Core Contribution:** Conducts a large-scale Randomized Controlled Trial ($N=17,930$ conversational turns) comparing an LLM (GPT-4o) reflection agent with a static structured reflection tool for career decisions.
* **Key Empirical Finding:** Users paired with the conversational LLM agent finished **less committed and more doubtful** about their decisions than users of the static structured tool.
* **⚠️ Limitations Section:**
  1. *Sycophancy & Unsolicited Flattery:* Despite system prompts forbidding flattery, the LLM praised users in over 50% of conversational turns, validating poor heuristics.
  2. *Conversational Pressure:* Whenever users paused or expressed hesitation, the LLM exerted conversational pressure ("demand to decide"), rushing the deliberative process.
* **🎯 Conclusion:** Visual, self-paced cognitive scaffolding interfaces (like Untangled) fundamentally outperform conversational chatbots for high-stakes reflection because they eliminate conversational coercion and flattery.

---

### Paper 6: Trust Calibration Through Non-Advisory Socratic Dialogue
* **Citation:** Hassan, R., Aboromi, N., & Unkelos-Shpigel, N. (arXiv:2609.14818, cs.HC / cs.SE)
* **Venue:** arXiv preprint
* **Core Contribution:** Demonstrates that non-advisory Socratic dialogue (which poses boundary questions rather than recommending answers) significantly calibrates human trust and prevents over-reliance compared to advisory AI systems.
* **⚠️ Limitations Section:**
  1. *Temporal Overhead:* Socratic dialogue increases interaction time; without visual progression bars, users can experience fatigue.
  2. *Cold-Start Friction:* Users unaccustomed to Socratic inquiry require progressive disclosure and pre-structured question framing.
* **🎯 Conclusion:** Non-advisory systems protect human epistemic sovereignty, resulting in decisions that withstand post-choice regret.

---

### Paper 7: Why This and Not That? A Collaborative Reflection Approach for Thought Coverage
* **Citation:** Tarvirdians, M., Hung, H., & Oertel, C. (Findings of EMNLP / arXiv:2608.17054)
* **Venue:** Findings of EMNLP
* **Core Contribution:** Formalizes "Thought Coverage" in decision dialogs—evaluating whether an interface ensures users examine comparative trade-offs ("Why Option B and not Option A?").
* **⚠️ Limitations Section:**
  1. Open-ended conversational dialog often leaves latent assumptions unexpressed unless forced into concrete comparative slots.
  2. Lexical metrics cannot assess whether a user genuinely considered a trade-off.
* **🎯 Conclusion:** Multi-stage comparative grids (such as Untangled's Stage 4 and Stage 6) are essential to ensure comprehensive thought coverage before commitments are made.

---

## 3. Comparative Matrix

| Dimension | Standard AI Chatbots (ChatGPT / Claude) | Current Untangled (Vanilla App) | Desired Next-Gen System |
| :--- | :--- | :--- | :--- |
| **Role of System** | Directive Oracle / Recommender | Passive 6-Stage Static Scaffold | Active Socratic Counter-Weight |
| **User Agency** | Vulnerable to automation bias & sycophancy | 100% Retained (User does all thinking) | 100% Retained + Probed for blindspots |
| **Cognitive Forcing** | None (Frictionless text stream) | Fixed linear sequence (Rule-based) | Dynamic, Entropy-Maximizing Probing |
| **Blindspot Detection** | Fails (Amplifies user's confirmation bias) | None (Relies entirely on self-reporting) | **Differential Counterfactual Analysis** |
| **Data Privacy** | Transmitted to third-party cloud | 100% Local (`localStorage`) | 100% Local (Local browser WASM or SLM) |

---

## 4. Identified Research Gaps

### 🕳️ Research Gap 1: The "Agency vs. Probing" Paradox
* **The Problem:** Current tools exist at two harmful extremes:
  - *Autonomous AI Advisors* that generate recommendations, stripping the user of epistemic agency and introducing sycophancy and hallucinations.
  - *Pure Static Scaffolding* (like Untangled in its current state) that protects user agency and privacy, but is completely blind to logical fallacies, unexamined assumptions, or omitted creative options in the user's self-reported text.
* **The Gap:** *How can a decision support system actively detect and challenge cognitive blindspots in real-time WITHOUT ever suggesting a solution or steering the outcome?*

### 🕳️ Research Gap 2: The Introspection Ceiling in Self-Reporting
* **The Problem:** In Stage 3 ("Question it") and Stage 4 ("Weigh it up"), Untangled asks: *"What are you assuming will happen?"* and *"What would you give up?"*
  - Humans cannot reliably report assumptions they do not know they are making (Unknown Unknowns).
  - A user who writes *"I assume the new job will be 10x more rewarding"* has no computational feedback highlighting that their stated hard boundary (*"max 50 hours/week"*) is mathematically contradictory to the stated promotion expectations in that industry.
* **The Gap:** *There is no mechanism for Automated Boundary-Consistency Checking across multi-stage qualitative inputs.*

### 🕳️ Research Gap 3: Static Multi-Attribute Weighting
* **The Problem:** Untangled uses equal-weight linear addition $(fit + feasible + values = \text{score out of } 15)$.
  - In real human utility theory (Kahneman & Tversky, Prospect Theory), loss aversion, risk asymmetries, and threshold violations are strictly non-linear.
* **The Gap:** *Lack of interactive sensitivity analysis (e.g., "What would have to change for Option B to beat Option A?").*

---

## 5. The Novelty Proposal: "Socratic Dual-Loop Deliberation (SDLD)"

### 💡 Core Concept
We propose extending Untangled from a **Passive Cognitive Scaffold** to an **Active, Agency-Preserving Socratic Co-Reasoner** operating under a **Zero-Directive Mandate**.

```
                   ┌─────────────────────────────────────────┐
                   │               USER INPUT                │
                   │ (Decision, Boundaries, Options, Beliefs) │
                   └────────────────────┬────────────────────┘
                                        │
                                        ▼
                   ┌─────────────────────────────────────────┐
                   │        DETERMINISTIC SCAFFOLD           │
                   │ (Stages 0–5: Invariants & Hard Limits)  │
                   └────────────────────┬────────────────────┘
                                        │
                   ┌────────────────────┴────────────────────┐
                   ▼                                         ▼
      ┌─────────────────────────┐               ┌─────────────────────────┐
      │  LOOP 1: CONSISTENCY    │               │  LOOP 2: DIFFERENTIAL   │
      │         ENGINE          │               │      PROBING SLM        │
      │ (Boundary Invariants)   │               │ (Socratic Interrogator) │
      └────────────┬────────────┘               └────────────┬────────────┘
                   │                                         │
                   │  - Flags Contradictions                 │  - Identifies Latent Assumptions
                   │  - Hard Limit Violations                │  - Generates "Inversion Probes"
                   │  - Unit/Deadline Collisions             │  - Zero Recommendations Allowed
                   │                                         │
                   └────────────────────┬────────────────────┘
                                        │
                                        ▼
                   ┌─────────────────────────────────────────┐
                   │   COGNITIVE FORCING INTERVENTION (CFF)  │
                   │ "You noted Boundary X, yet Option Y     │
                   │ relies on Assumption Z. How do these    │
                   │ reconcile?"                             │
                   └─────────────────────────────────────────┘
```

### Key Innovations:

#### 1. Inversion Probing (The Socratic Mirror)
Instead of static category cards, implement a zero-directive local prompt that generates a **"Pre-Mortem Inversion"**:
> *"Imagine it is 6 months from now and Option B failed completely. Looking at your stated assumptions, what was the most likely reason?"*

#### 2. Local Differential Boundary Verification
The system compares the semantic embedding of the Hard Boundary against the semantic description of Option A and Option B. If the cosine distance indicates semantic tension (e.g. Hard Boundary = *"Protect family sleep"*, Option = *"High-intensity night shifts"*), the interface highlights the tension and asks:
> *"Does Option A truly respect this non-negotiable, or are you hoping the limit will bend?"*

#### 3. Interactive Sensitivity & Reversal Thresholds
In Stage 6 (Summary), instead of a static score bar, provide a **"Reversal Slider"**:
> *"Option B leads Option A by 2 points. If your priority shifted slightly toward stability over growth, which option becomes dominant?"*

#### 4. Absolute Privacy Guarantee (Client-Side Only)
By utilizing in-browser WebAssembly models (such as WebLLM / Transformers.js running small quantized models like SmolLM-135M or Gemma-2B client-side), all Socratic probing occurs **100% within the browser tab**, preserving the core ethos: *No account, no tracking, reflections never leave your device.*
