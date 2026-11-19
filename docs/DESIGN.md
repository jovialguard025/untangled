# Design Philosophy — Untangled

## Core Principle

**Untangled helps you think. It doesn't think for you.**

Every design decision serves one goal: *reduce the noise between you and a clearer understanding of your own situation.*

---

## Why These Six Stages?

The stages follow a natural progression from confusion to action:

### 1. Name It — From Feeling to Decision
Most people arrive with a feeling ("I'm stuck", "I'm overwhelmed") rather than a decision. The first stage forces specificity. You can't work with "my life is stressful" — but you can work with "which commitment should I reduce this week?"

### 2. Set Boundaries — From Infinite to Bounded
Decision paralysis often comes from treating every option as equally possible. By naming hard limits early, you shrink the possibility space to what's actually real. The constraint chips (Time, Money, Energy, Responsibilities, Other people) make this tangible.

### 3. Find Options — From Binary to Multiple
"Should I take the job or stay?" is a false binary. There's almost always a third path: negotiate, try a smaller version, delay, gather information. Requiring at least two options and inviting a third breaks the either/or trap.

### 4. Question It — From Assumption to Awareness
This stage doesn't require certainty — it requires *noticing*. What do you actually know? What are you predicting? What evidence would change your mind? The category-specific prompts (Money, Work, Time, etc.) provide tailored lenses.

### 5. Weigh It Up — From Invisible to Visible
Trade-offs exist whether you acknowledge them or not. The 1–5 scoring system is deliberately simple — three dimensions, equal weight, scores that prompt rather than prescribe. The hard-limit flag ensures practicality overrides arithmetic.

### 6. Move Forward — From Analysis to Action
The final stage is not "make the perfect choice." It's "choose a direction and take one small step." The review date bakes in revisability — this is a decision you can learn from, not a contract you're locked into.

---

## Visual Design Decisions

### The Tangled Thread
The inline SVG illustration is the visual metaphor: a tangled line that leads to a clear endpoint. It's decorative but meaningful — the journey from confusion to clarity.

### Lavender/Ink Palette
- **Lavender (`#7161aa`)** — calm, contemplative, non-aggressive
- **Near-black ink (`#242428`)** — grounded, readable, serious without being heavy
- **Warm gray (`#f6f5f9`)** — paper-like background, restful on eyes
- No bright colors competing for attention. This is a quiet space.

### Typography
- **Manrope** — geometric, modern headings with tight letter-spacing
- **DM Sans** — warm, readable body text
- **Georgia** — italic accents for the "clearer" in the tagline and summary titles, adding warmth

### Whitespace
Generous spacing throughout. This is a reflective tool — visual breathing room matters as much as the words.

---

## Technical Design Decisions

### Why No Framework?
Vanilla HTML/CSS/JS is a deliberate choice:
- **Zero build friction** — open the file and it works
- **No dependency risk** — it will work in 10 years the same way it works today
- **Transparency** — the entire application is three readable files
- **Performance** — instant load, no JavaScript framework overhead

### Why localStorage?
- **Privacy by default** — data never leaves the browser
- **No account creation** — reduces friction to nearly zero
- **Trade-off accepted** — data can be lost if browser storage is cleared. This is acceptable for a reflection tool, not a medical record.

### Why Minified JS?
The original `app.js` is minified as a single continuous build. This is the authentic published source. For reading comprehension, see `ALL_CODE.md` which presents the same code in formatted blocks.

### Why Inline SVG?
No external image dependencies. The illustration loads instantly, scales to any size, and can be styled with CSS. Zero additional HTTP requests.

---

## What Untangled Is Not

- **Not an AI advisor** — it asks questions, it doesn't generate answers
- **Not a pros/cons list** — it structures thinking across six dimensions, not two columns
- **Not a decision algorithm** — scores are prompts for reflection, not verdicts
- **Not a productivity tool** — it's for the moments when you need to slow down, not speed up

---

*"Made for the beautifully complicated business of being human."*
