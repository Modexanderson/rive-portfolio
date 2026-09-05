# Proposal: Glow — Axolotl Mascot Character System

**Subject:** Rive character designer + rigger — Glow mascot

Hi,

I'm Mordecai, a Rive animator focused on modular character rigs and state machine architectures. Your Glow mascot project is a perfect match for my skillset — I specialize in building component-separated rigs with reusable animation libraries.

## Why me

- **Modular rig architecture** — I build rigs where body, head, eyes, mouth, and accessory slots are separate components with shared animation libraries. This is exactly your spec.
- **State machine expertise** — Clean named inputs (`state`, `level`, `form`) that your React app sets directly. No hack workarounds.
- **Swappable expression systems** — Eye + mouth state combinations driven by inputs, not baked per-expression animations
- **Integration-tested** — I deliver .riv files validated against your target runtime, so they work with your codebase on the first try

## Phase 1 Plan (paid test)

**One form — idle + celebrate:**

1. **Character design** — Cozy chibi axolotl-ember with ~2:1 proportions, big expressive eyes, soft warm palette. Duolingo-level presence, not corporate.

2. **Component-separated rig:**
   - Head (with gill-fronds)
   - Body
   - Eyes (separate L/R for independent movement)
   - Mouth
   - Limbs (arms, legs)
   - Accessory slot (empty, ready for hats etc.)

3. **Animation library:**
   - `idle` — gentle breathing, subtle gill movement, blinking cycle
   - `celebrate` — bounce, sparkle/flame flare, happy expression

4. **State machine:**
   - Inputs: `expression` (number), `isIdle` (bool), `celebrate` (trigger)
   - Expression states combined at runtime via eye + mouth inputs
   - Clean transitions between all states

## Deliverables
- Source .riv file (editable)
- Editable vector art (within Rive)
- Full IP transfer (happy to sign your contract)
- State machine documentation

## Full project vision
For the 5-form evolution, I'd extend the Phase 1 rig — same skeleton, same animation library, with form-specific visual overrides. The `form` input (0–4) swaps visual layers while keeping all animations functional. Accessories follow the rig's slot system.

## Budget
Phase 1: $250 (within your $200–300 range)
Full project: Happy to discuss once Phase 1 validates the approach. I'd estimate $1,800–2,200 for 5 forms with the shared rig architecture.

## Availability
I can start immediately and work async. English, fast communicator, daily updates.

**Portfolio:** [link to your rive-portfolio site]
**Attached:** [link to .riv demo files showing character rig work with state machines]

Best,
Mordecai
mordecai.a.d@gmail.com | t.me/modex_anderson
