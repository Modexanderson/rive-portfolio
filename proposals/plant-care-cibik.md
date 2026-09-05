# Proposal: Çıbık Plant Care Simulation — Rive Animation

**Subject:** RIVE-CIBIK — Modular Plant Rig & State Machine

Hi there,

I'm Mordecai, a Rive animator specializing in state-machine-driven interactive animations for mobile apps. Your Çıbık project is exactly the kind of work I love — modular character systems with runtime-controlled state machines.

## Why I'm the right fit

- **State machine architecture** is my core strength — I build clean, well-documented state machines with named boolean/number/trigger inputs designed for developer handoff
- **Modular rig experience** — I've built character systems with swappable parts using boolean inputs to show/hide components, exactly what your master rig needs
- **Integration-aware** — I deliver .riv files tested against your target runtime, so your devs get a file that just works with their code

## My approach for Çıbık

**Master Rig:**
- Single skeleton with boolean inputs for each plant part (flower, branches, leaves, roots)
- `show_flower`, `show_branches`, `has_fruit` etc. toggled from RN
- Designed so future plant types reuse the same rig with different part visibility

**State Machine:**
- Inputs: `growthLevel` (number 0–5), `isThirsty` (bool), `isHungry` (bool), `hasPests` (bool)
- Triggers: `waterPlant`, `fertilize`, `applyPesticide`
- Smooth transitions between growth stages with interpolated blend states
- Idle animations per growth level (swaying, breathing)

**Art Direction:**
- 100% flat vector, soft pastels, no gradients or drop shadows — exactly as specified

## Deliverables
- Editable .riv source file
- State machine input documentation (names, types, expected values)
- Test preview showing all states working

## Timeline & Budget
I'm comfortable with the $210 fixed budget and 7–10 day timeline, split into your two milestones (Draft & Final).

**Portfolio:** [link to your rive-portfolio site]

Looking forward to hearing from you.

Best,
Mordecai
mordecai.a.d@gmail.com | t.me/modex_anderson
