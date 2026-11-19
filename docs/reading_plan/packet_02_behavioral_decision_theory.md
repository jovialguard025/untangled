# 📦 Reading Packet 2: Behavioral Decision Theory, Prospect Theory & Heuristics (Papers 11–20)
> **Domain:** Cognitive Psychology & Behavioral Economics  
> **Key Objective:** Master how real human beings make decisions under uncertainty, emotional framing, and asymmetric loss aversion.

---

### Paper 11: Judgment under Uncertainty: Heuristics and Biases
* **Authors:** Amos Tversky, Daniel Kahneman
* **Venue / Publication:** Science, 185(4157), 1124–1131 (1974)
* **Link / Reference:** [https://doi.org/10.1126/science.185.4157.1124](https://doi.org/10.1126/science.185.4157.1124)
* **Mathematical & Conceptual Core:**
  Cognitive shortcuts: Representativeness, Availability ($P(A) \approx f(\text{retrievability})$), and Anchoring & Adjustment.
* **⚠️ Documented Limitations:**
  Documented biases in stylized vignettes without offering actionable software interfaces to de-bias users in real time.
* **🎯 Impact on Untangled:**
  Directly inspired Untangled's Stage 3 ('Question it'): forces the user to state hard verifiable facts before making predictions.

---
### Paper 12: Prospect Theory: An Analysis of Decision under Risk
* **Authors:** Daniel Kahneman, Amos Tversky
* **Venue / Publication:** Econometrica, 47(2), 263–291 (1979)
* **Link / Reference:** [https://doi.org/10.2307/1914185](https://doi.org/10.2307/1914185)
* **Mathematical & Conceptual Core:**
  Value function $v(x)$ evaluated on deviations from reference point $r_0$. Concave for gains (risk aversion), convex for losses (risk seeking).
* **⚠️ Documented Limitations:**
  Original formulation lacked cumulative rank weighting, leading to theoretical violations of first-order stochastic dominance.
* **🎯 Impact on Untangled:**
  Untangled forces users to define their baseline reality (reference point) before evaluating new career or money moves.

---
### Paper 13: Advances in Prospect Theory: Cumulative Representation of Uncertainty
* **Authors:** Amos Tversky, Daniel Kahneman
* **Venue / Publication:** Journal of Risk and Uncertainty, 5(4), 297–323 (1992)
* **Link / Reference:** [https://doi.org/10.1007/BF00122574](https://doi.org/10.1007/BF00122574)
* **Mathematical & Conceptual Core:**
  Cumulative Prospect Theory (CPT): Asymmetric value function $v(\Delta x)$ with loss aversion coefficient $\lambda \approx 2.25$. Losses hurt $2.25\times$ more than gains.
* **⚠️ Documented Limitations:**
  Eliciting personalized $\lambda$ and $\alpha$ parameters requires exhaustive lottery questionnaires that overwhelm users.
* **🎯 Impact on Untangled:**
  Untangled operationalizes $\lambda = 2.25$ in the trade-off block: sacrifices must be explicitly written out so the user does not underestimate them.

---
### Paper 14: A Behavioral Model of Rational Choice (Bounded Rationality)
* **Authors:** Herbert A. Simon
* **Venue / Publication:** The Quarterly Journal of Economics, 69(1), 99–118 (1955)
* **Link / Reference:** [https://doi.org/10.2307/1884852](https://doi.org/10.2307/1884852)
* **Mathematical & Conceptual Core:**
  Satisficing principle: Stop searching when an option meets aspiration threshold $V(a) \ge V_{\text{aspiration}}$, replacing impossible global maximization.
* **⚠️ Documented Limitations:**
  Dynamic aspiration levels can collapse when a user is exhausted, causing them to settle for harmful compromises.
* **🎯 Impact on Untangled:**
  Untangled is a satisficing engine: its goal is not to find a mathematically perfect fantasy, but a workable, reversible next step.

---
### Paper 15: Heuristic Decision Making
* **Authors:** Gerd Gigerenzer, Wolfgang Gaissmaier
* **Venue / Publication:** Annual Review of Psychology, 62, 451–482 (2011)
* **Link / Reference:** [https://doi.org/10.1146/annurev-psych-120709-145346](https://doi.org/10.1146/annurev-psych-120709-145346)
* **Mathematical & Conceptual Core:**
  Fast-and-frugal decision trees (FFTs): Lexicographic one-reason decision making with non-compensatory stopping rules.
* **⚠️ Documented Limitations:**
  Can prematurely discard viable alternatives if a single secondary indicator is misjudged as a fatal flaw.
* **🎯 Impact on Untangled:**
  Untangled uses Fast-and-Frugal tree logic for Hard Limits: if an option breaches a non-negotiable, it stops evaluation instantly.

---
### Paper 16: Regret Theory: An Alternative Theory of Rational Choice under Uncertainty
* **Authors:** Graham Loomes, Robert Sugden
* **Venue / Publication:** The Economic Journal, 92(368), 805–824 (1982)
* **Link / Reference:** [https://doi.org/10.2307/2232669](https://doi.org/10.2307/2232669)
* **Mathematical & Conceptual Core:**
  Modified utility incorporating anticipated regret: $M(x_i, x_j) = C(x_i) + R(C(x_i) - C(x_j))$.
* **⚠️ Documented Limitations:**
  Pairwise regret calculations explode combinatorially ($O(n!)$) in multi-attribute scenarios.
* **🎯 Impact on Untangled:**
  Untangled's Stage 5 forces the user to write 'What could change your mind?' to immunize them against buyer's remorse.

---
### Paper 17: Mental Accounting and Consumer Choice
* **Authors:** Richard H. Thaler
* **Venue / Publication:** Marketing Science, 4(3), 199–214 (1985)
* **Link / Reference:** [https://doi.org/10.1287/mksc.4.3.199](https://doi.org/10.1287/mksc.4.3.199)
* **Mathematical & Conceptual Core:**
  Fungibility violations: money and time are segregated into rigid mental compartments with differing marginal utilities.
* **⚠️ Documented Limitations:**
  Can lead to irrational overspending in one domain while depriving basic needs in another.
* **🎯 Impact on Untangled:**
  Untangled's category chips (Time, Money, Energy, Relationships) make mental accounts explicit and visible.

---
### Paper 18: The Affect Heuristic in Decision Making
* **Authors:** Paul Slovic, Melissa L. Finucane, et al.
* **Venue / Publication:** European Journal of Operational Research, 177(3), 1333–1352 (2007)
* **Link / Reference:** [https://doi.org/10.1016/j.ejor.2005.04.006](https://doi.org/10.1016/j.ejor.2005.04.006)
* **Mathematical & Conceptual Core:**
  Affective tag $A(x)$ overrides cognitive calculation: high emotional excitement suppresses perceived risks and inflates perceived rewards.
* **⚠️ Documented Limitations:**
  In moments of high stress or excitement, cognitive thinking is almost completely bypassed.
* **🎯 Impact on Untangled:**
  The Stage 0 insight reframe ('My life is stressful is a feeling; which commitment can I reduce is a decision') decouples affect from logic.

---
### Paper 19: Predictably Irrational: The Hidden Forces That Shape Our Decisions
* **Authors:** Dan Ariely
* **Venue / Publication:** HarperCollins (2008)
* **Link / Reference:** [https://doi.org/10.1111/j.1745-6606.2008.00120.x](https://doi.org/10.1111/j.1745-6606.2008.00120.x)
* **Mathematical & Conceptual Core:**
  The Decoy Effect (Asymmetric Dominance): Introducing an inferior third option changes the relative preference between the original two.
* **⚠️ Documented Limitations:**
  Pop-economics focus on marketing traps rather than personal reflective decision engineering.
* **🎯 Impact on Untangled:**
  Untangled requires Option C to be a genuine alternative (a compromise or delay) rather than an unconscious decoy.

---
### Paper 20: Heuristics and Biases: The Psychology of Intuitive Judgment
* **Authors:** Thomas Gilovich, Dale Griffin, Daniel Kahneman
* **Venue / Publication:** Cambridge University Press (2002)
* **Link / Reference:** [https://doi.org/10.1017/CBO9780511808097](https://doi.org/10.1017/CBO9780511808097)
* **Mathematical & Conceptual Core:**
  Dual-Process Theory: System 1 (fast, associative, effortless) vs System 2 (slow, deliberative, rule-governed).
* **⚠️ Documented Limitations:**
  System 2 is inherently lazy and will endorse flawed System 1 intuitions unless forced into structured action.
* **🎯 Impact on Untangled:**
  Untangled is a deliberate System 2 cognitive forcing environment that prevents superficial click-throughs.

---
