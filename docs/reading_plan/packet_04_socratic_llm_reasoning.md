# 📦 Reading Packet 4: Socratic Reasoning & Recursive Thinking with LLMs (Papers 31–40)
> **Domain:** Natural Language Processing (ACL / EMNLP) & Computational Pedagogy  
> **Key Objective:** Explore how recursive question decomposition and non-directive inquiry replace flat chain-of-thought generation.

---

### Paper 31: The Art of SOCRATIC QUESTIONING: Recursive Thinking with Large Language Models
* **Authors:** Ning Ding, Zixuan Li, et al.
* **Venue / Publication:** EMNLP (2023) / ACL Anthology: 2023.emnlp-main.255
* **Link / Reference:** [https://aclanthology.org/2023.emnlp-main.255/](https://aclanthology.org/2023.emnlp-main.255/)
* **Mathematical & Conceptual Core:**
  Recursive sub-questioning decomposition: decomposes complex problems into question-answer trees to navigate reasoning spaces.
* **⚠️ Documented Limitations:**
  Suffers from 'solution leakage' (LLM reveals answers prematurely) and contextual state drift over multiple turns.
* **🎯 Impact on Untangled:**
  Untangled solves state drift by pinning the user's hard limits and goal at the top of the workspace across all stages.

---
### Paper 32: Instruct, Not Assist: LLM-based Multi-Turn Planning and Hierarchical Questioning
* **Authors:** Findings of EMNLP (2024)
* **Venue / Publication:** ACL Anthology: 2024.findings-emnlp.553
* **Link / Reference:** [https://aclanthology.org/2024.findings-emnlp.553/](https://aclanthology.org/2024.findings-emnlp.553/)
* **Mathematical & Conceptual Core:**
  Separates high-level pedagogical planning (question selection) from low-level surface text generation.
* **⚠️ Documented Limitations:**
  Models struggle when user inputs are emotionally ambiguous; high token latency in multi-turn tree search.
* **🎯 Impact on Untangled:**
  Untangled applies this dual separation: fixed deterministic stage planning + open-ended qualitative prompts.

---
### Paper 33: Socratic Style Chain-of-Thoughts Help LLMs to be a Better Reasoner
* **Authors:** Findings of ACL (2025)
* **Venue / Publication:** ACL Anthology: 2025.findings-acl.640
* **Link / Reference:** [https://aclanthology.org/2025.findings-acl.640/](https://aclanthology.org/2025.findings-acl.640/)
* **Mathematical & Conceptual Core:**
  Multi-agent Socratic debate (`SoDa`) prompts self-reflection and exploration on complex reasoning tasks.
* **⚠️ Documented Limitations:**
  Tested primarily on mathematical proofs and code debugging; unexplored in high-stakes human life decisions.
* **🎯 Impact on Untangled:**
  Untangled adapts Socratic debate for human personal decisions: you debate with your own future self.

---
### Paper 34: Socratic Reasoning Improves Positive Text Rewriting (SOCRATICREFRAME)
* **Authors:** CLPsych / ACL (2025)
* **Venue / Publication:** ACL Anthology: 2025.clpsych-1.12
* **Link / Reference:** [https://aclanthology.org/2025.clpsych-1.12/](https://aclanthology.org/2025.clpsych-1.12/)
* **Mathematical & Conceptual Core:**
  Multi-step Socratic rationales for cognitive reframing of negative thought distortions.
* **⚠️ Documented Limitations:**
  Relies on cloud API inference, creating privacy risks for sensitive psychological entries.
* **🎯 Impact on Untangled:**
  Untangled incorporates cognitive reframing ('My life is stressful is a feeling; which commitment can I reduce is a decision') 100% locally.

---
### Paper 35: Socratic-MCTS: Test-Time Visual Reasoning by Asking the Right Questions
* **Authors:** EMNLP (2025)
* **Venue / Publication:** ACL Anthology: 2025.emnlp-main.1230
* **Link / Reference:** [https://aclanthology.org/2025.emnlp-main.1230/](https://aclanthology.org/2025.emnlp-main.1230/)
* **Mathematical & Conceptual Core:**
  Monte Carlo Tree Search where latent action steps are formulated as subquestion-subanswer pairs.
* **⚠️ Documented Limitations:**
  Computationally heavy; impossible to run on consumer mobile browsers without server backends.
* **🎯 Impact on Untangled:**
  Untangled achieves similar structured tree navigation through deterministic 6-stage UI progression.

---
### Paper 36: Why This and Not That? A Collaborative Reflection Approach for Thought Coverage
* **Authors:** Morita Tarvirdians, Hayley Hung, Catharine Oertel
* **Venue / Publication:** Findings of EMNLP (2026) / arXiv:2608.17054
* **Link / Reference:** [https://arxiv.org/abs/2608.17054](https://arxiv.org/abs/2608.17054)
* **Mathematical & Conceptual Core:**
  Formalizes 'Thought Coverage' in decision dialogues: measuring whether alternative trade-offs are rigorously explored.
* **⚠️ Documented Limitations:**
  Open conversational dialogue leads to user fatigue; users benefit from structured visual scaffolding.
* **🎯 Impact on Untangled:**
  Direct empirical justification for Untangled's comparative matrix and thought coverage checks.

---
### Paper 37: Trust by Design: Trust Calibration Through Non-Advisory Socratic Dialogue
* **Authors:** Roba Hassan, Nahla Aboromi, Naomi Unkelos-Shpigel
* **Venue / Publication:** arXiv:2609.14818 (2026)
* **Link / Reference:** [https://arxiv.org/abs/2609.14818](https://arxiv.org/abs/2609.14818)
* **Mathematical & Conceptual Core:**
  Contrasts advisory AI (prescribing choices) with non-advisory Socratic dialogue (posing boundary questions).
* **⚠️ Documented Limitations:**
  Increased interaction time; requires visual progression bars to prevent user abandonment.
* **🎯 Impact on Untangled:**
  Untangled provides the visual progression bar and non-advisory questions demonstrated in this paper.

---
### Paper 38: Measuring and Narrowing the Compositionality Gap in Language Models via Self-Ask
* **Authors:** Ofir Press et al.
* **Venue / Publication:** EMNLP (2023)
* **Link / Reference:** [https://doi.org/10.18653/v1/2023.findings-emnlp.378](https://doi.org/10.18653/v1/2023.findings-emnlp.378)
* **Mathematical & Conceptual Core:**
  Self-Ask prompting: the model explicitly writes 'Follow up: Do I know X?' before attempting complex answers.
* **⚠️ Documented Limitations:**
  Self-Ask loops can recurse infinitely or hallucinate fake intermediate facts.
* **🎯 Impact on Untangled:**
  Untangled delegates the intermediate questioning to the user, grounding facts in verified human reality.

---
### Paper 39: Tree of Thoughts: Deliberate Problem Solving with Large Language Models
* **Authors:** Shunyu Yao et al.
* **Venue / Publication:** NeurIPS (2023)
* **Link / Reference:** [https://doi.org/10.48550/arXiv.2305.10601](https://doi.org/10.48550/arXiv.2305.10601)
* **Mathematical & Conceptual Core:**
  Tree of Thoughts (ToT): Search algorithms (BFS/DFS) over linguistic reasoning paths with lookahead evaluation.
* **⚠️ Documented Limitations:**
  Requires hundreds of LLM calls per query, making it costly and slow for everyday personal reflection.
* **🎯 Impact on Untangled:**
  Untangled uses the human mind as the search evaluator, pruning bad branches with zero compute cost.

---
### Paper 40: Reflexion: Language Agents with Verbal Reinforcement Learning
* **Authors:** Noah Shinn et al.
* **Venue / Publication:** NeurIPS (2023)
* **Link / Reference:** [https://doi.org/10.48550/arXiv.2303.11366](https://doi.org/10.48550/arXiv.2303.11366)
* **Mathematical & Conceptual Core:**
  Verbal self-reflection: agents evaluate past trajectory errors and write textual memory buffers for next attempts.
* **⚠️ Documented Limitations:**
  Self-reflections can become sycophantic self-reinforcing echo chambers without external reality checks.
* **🎯 Impact on Untangled:**
  Untangled's 'Review Date' and 'What could change your mind?' provide external reality checks.

---
