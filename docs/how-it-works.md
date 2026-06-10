# How it works

The full lifecycle of an FDE for Good engagement, from first contact to handover.

## 1. Intake

An organization reaches out with a problem — a mission-driven organization (charity, community group, social enterprise) or a small local business with no website and no engineer. We don't ask them to spec out a solution; most won't know how. We ask what's slow, painful, manual, or impossible today.

First we check it's a fit — see [who we help](who-we-help.md). The short version: we help people locked out of software because they can't afford it.

Good fits:

- A first website or online presence
- A booking, ordering, or enquiry system
- Manual work that could be automated (spreadsheets copied by hand, reports compiled monthly)
- Data that's trapped or messy and needs to be usable
- A small internal tool or dashboard
- Integrating systems that don't talk to each other

Out of scope (for now):

- Organizations that can comfortably afford to pay for this
- Anything requiring ongoing paid infrastructure the org can't sustain
- Work that needs a long-term on-call commitment we can't guarantee
- Anything that primarily enriches owners/investors rather than serving people or community

## 2. Scoping

A volunteer (or two) does a short discovery: a call or two, watching how the work actually happens. We write the problem and a rough plan into a **project README** under `clients/<client>/projects/<project>/`.

The goal of scoping is a project small enough to *finish*. Better to ship one useful thing than to start five.

## 3. Embed & build

FDEs build in the open, in the project folder. Commit early, commit often. Keep the project README's status current so anyone can see where things stand.

The "forward-deployed" part matters: stay in contact with the org, demo often, and adjust. The point is a tool they'll actually use, not the tool we imagined at the start.

## 4. Handover

An engagement isn't done when the code works — it's done when the org can use and maintain it. That means:

- A clear README on how to run / use it
- Any accounts, deploys, or credentials transferred to the org
- A short walkthrough with the people who'll use it
- Honest notes on what's fragile or unfinished

## 5. Keep it open

The code stays here, open source, so the next organization with the same problem starts at 50% instead of 0%. If you build something reusable, say so loudly in the README.

## Statuses

Projects move through: `proposed` → `scoping` → `in-progress` → `handover` → `done` (or `paused` / `archived`). Keep the status in the project README's frontmatter-style header.
