# Untangled — Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] — 2026-11-20

### 🎉 Initial Release

The original, complete implementation of Untangled (formerly "Clearing") — a structured decision reflection tool.

#### Features
- Six-stage guided reflection: Name → Boundaries → Options → Questions → Scoring → Action
- Three starter decision prompts (Work, Time, Money) for quick entry
- Category-aware contextual questions (Life, Work, Time, Money, Relationships, Learning)
- Constraint chip system with dynamic insight prompts
- Three-dimensional option scoring (goal fit, practicality, priority fit) with 1–5 range sliders
- Hard-limit flagging that disables options in the final selection
- Summary view with scored option comparison bars
- localStorage persistence with save, resume, and delete
- Print / PDF export via native browser print
- Modal dialogs for "The Approach" methodology and saved reflections
- Inline SVG thread illustration
- Responsive design with mobile breakpoint at 760px
- Reduced-motion media query support
- Print stylesheet
- Keyboard focus-visible outlines
- XSS-safe HTML escaping for all user input

#### Technical
- Zero external dependencies
- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Google Fonts: DM Sans, Manrope; Georgia for accents
- SHA256 checksums for source file integrity verification

---

*By [Mathew Albin](https://github.com/jovialguard025)*
