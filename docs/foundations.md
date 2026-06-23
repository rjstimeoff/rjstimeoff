# Timeoff — Foundations

> Living design spec for the Timeoff redesign. Nothing gets built on a page until it's
> decided here. Order: **References → Typography → Palette / Spacing / Motion**.
>
> Brand recap: studio-of-one, RJ honestly behind it. Casual → studio-grade. Dark & moody,
> ambient-drift hero, StudioSmall-quiet chrome. Offer = web + product design now,
> creative direction later.

---

## ★ Core principle — *Still, then alive*

**The site is restrained at rest and comes to life on interaction.** Composed, quiet,
almost austere when untouched; it rewards engagement rather than performing unprompted.

This is the identity — the thing StudioSmall et al. structurally can't have, because their
craft is physical (interiors, product, film) and ours is **screens**, which can be *alive*.
Constant motion would be the gimmick; **stillness that wakes** is the flex. Restraint makes
the aliveness feel earned.

Every page obeys this law:
- **At rest:** minimal, dark, near-monochrome, almost nothing moving.
- **On interaction** (cursor, hover, scroll, click): the ambient field stirs, type/interface
  responds, the work reveals itself. Motion is *the medium*, never decoration.
- Inherit StudioSmall's **bones** (quiet corner chrome, full-bleed, art-direction, color-from-work);
  **reject** the clichés (Didone/Garamond serif, centered manifesto, by-numbers scroll).

---

## 1. References

How we're working it: **RJ drops screenshots in chat → Claude dissects each (what's the
one move worth stealing) and files it below → we pull the throughline at the end.**

Anchors already on the table:
- **StudioSmall** — the soul. Homepage communicates taste *before* showing any work.
  Tiny centered wordmark, corner micro-labels, dark atmospheric full-bleed.
- **Studio Ashby** — warm luxury interiors, serif wordmark, dark-green chrome.
- **India Mahdavi** — crisp, color pulled from the work tiles, not the chrome.

### Board

#### StudioSmall — Home (studiosmall.com)
- **The move to steal:** The homepage shows **no work and no wordmark** — just one
  art-directed full-bleed B&W photograph (Queen Anne's lace, grainy film) with a tiny
  photo *credit* bottom-left. That's it. The entire first impression is "we have an eye,
  and we're confident enough to make you wait for the work." Restraint *is* the pitch.
- **Mechanics:** `Projects` top-left / `Information` top-right micro-labels; credit
  bottom-left; dark, atmospheric, grainy. Hero rotates → it's a living gallery.
- **Caution:** Works because the photo is genuinely beautiful. A weak hero here = empty.

#### StudioSmall — Projects (/projects/selected)
- **The move to steal:** Tiles are **art-directed images**, each carrying its own color;
  the chrome stays neutral cream/mono so **color comes entirely from the work.** A quiet
  filter taxonomy (Selected / Art Direction / Website / Identity / Packaging…) signals range.
- **Mechanics:** `StudioSmall` wordmark TL appears here (not on home); small label under each tile.

#### StudioSmall — Project view (Studio Ashby)
- **The move to steal:** Full-bleed editorial photography, split/paired layouts, considered
  page-to-page transitions. The case study is a *photo essay*, not a spec sheet.

#### DIA (dia.studio)
- **The move to steal:** **Density as a flex.** Work page is a contact-sheet wall of dozens
  of tiny kinetic thumbnails — overwhelming, but in a "we make this much, this good" way.
  The About uses a classic literary serif (italic names, `[ bracketed ]` nav) over kinetic/
  generative work — the **tension between old-world type and new-world work is the personality.**
- **Caution:** Density only reads as confidence when every thumbnail is strong. It's the
  opposite of restraint — a different bet entirely.

#### Stockholm Design Lab (stockholmdesignlab.se)
- **The move to steal:** **Type as a window.** Giant letterforms are masks filled with
  video/gradient (the blue tunnel inside the "H"); on scroll, shapes fill with running text.
  Type isn't set *on* the page, it's the *frame* for motion and media.

#### A Friend of Mine (afom.com.au) — RJ's friend's studio
- **The move to steal:** Escapes the monochrome cliché with **warmth + a clean humanist
  grotesque** (no serif at all) and lets full-bleed, playful, *colorful* art-directed work
  (HOMMEY, the Great Wrap characters) carry the energy. "We don't have a house style" stated
  plainly, then proven by range. `Work` / `Studio` TL, `A Friend of Mine` TR.
- **Mechanics:** Caption + `View case study` bottom-left on full-bleed project imagery.

### Throughline — the bones worth inheriting
1. **Quiet chrome, corner micro-labels.** (StudioSmall + AFOM both: nav TL, identity TR.)
2. **A full-bleed hero that signals taste before showing any work.**
3. **Color comes from the work; the chrome stays neutral.**
4. **Imagery is art-directed — never raw screenshots.**
5. **One confident opening gesture.** Each great site makes a *single* bold bet (one photo /
   a dense wall / giant masked type). Pick one and commit; don't hedge with three.

### The genre problem & Timeoff's vector
RJ's diagnosis: B&W + tired serif + centered statement + predictable scroll = interchangeable.
"Good" but not *identity*. StudioSmall escapes it on the strength of **photography + restraint**.

**The trap:** those studios are rooted in *physical* craft — interiors, products, film. Their
hero photographs are genuinely theirs. RJ's work is **screens**, so borrowing their playbook
literally = "screenshot in a fancy font," the exact generic outcome he wants to avoid.

**The escape — turn the constraint into the weapon:** screens can do the one thing a printed
photograph can't — **be alive.** Timeoff's distinctive bet isn't a beautiful static image, it's
that **the site itself is the portfolio piece**: ambient motion as the "hero photograph," type
and interface that *behave*, craft *demonstrated* live rather than depicted. DIA and SDL gesture
at this (kinetic type, type-as-window); RJ already owns a generative motif (the sand sim → the
ambient drift). No luxury interiors studio can copy that — it's native to a web/product designer
who codes. That's the identity StudioSmall can't have.

→ **Inherit:** quiet chrome, restraint, full-bleed, art-direction, color-from-work.
→ **Reject:** Didone/Garamond serif clichés, the centered manifesto statement, the by-the-numbers scroll.
→ **Own:** the site is a living thing. Motion/interaction is the medium, not decoration.

---

## 2. Typography

How we're working it: **RJ leads the research; Claude pressure-tests pairings, sets
live specimens in "timeoff" + real labels when it's time to judge in context.**

Open questions:
- Wordmark: **editorial serif** vs **neutral grotesque**? (StudioSmall is grotesque; Ashby is serif)
- Display face personality: characterful (Editorial New, Fraunces, Canela) vs quiet?
- Body/UI face: Geist is already installed; Söhne / Suisse / General Sans as alternates.

### Candidates (specimen at /type — warm humanist grotesques)
- Hanken Grotesk — warmest/roundest, closest to StudioSmall's face (Google Fonts, free)
- General Sans — clean geometric-humanist (Fontshare, free)
- Switzer — humanist workhorse (Fontshare, free)
- **Satoshi — geometric-humanist, slightly more character (Fontshare, free) ✅ CHOSEN**

### Type system — THREE ROLES (ref: the MART site RJ liked — whimsical lead + editorial serif backup)
RJ's model: a **whimsical/fun lead face** carries the personality, **editorial serifs** back it
up with craft, neutral sans does the reading. This *resolves* his earlier "stupid serifs" gripe —
serif-as-whole-identity = tired; serif as a **supporting layer under a playful lead** = not the
cliché, because the distinctiveness comes from the whimsical face.

1. **Hero / whimsical** — signature voice (`timeoff` wordmark, big statements). Personality lives here.
   **Currently a PLACEHOLDER on /timeoff: thin italic Fraunces (wght 300, opsz 144). RJ "doesn't
   love it" — works for now, revisit.** Open thread: thin formal-script faces (Pinyon Script,
   Tangerine, Monsieur La Doulaise…) and/or the DIY dotted treatment.
2. **Editorial serif** — titles, case-study headlines; adds craft/gravity. **TBD (choose after hero).**
3. **Body / UI: Satoshi** ✅ (Fontshare, free, web-fast — warm-humanist, holds the quiet at rest).

Whimsical-lead candidates being specimen'd at /type (free): Gambetta, Fraunces, Bricolage
Grotesque, Pally, Stardom. Guardrail: whimsical ≠ cheesy/Comic-Sans; must still read studio-grade.

**Live candidate — DIY "dotted" treatment** (inspired by Tanja, Commercial Type, which is paid):
SVG text, no fill + round dotted stroke on the glyph outlines → the perforated Tanja look on
free faces. Shown on /type over Fraunces italic / Gambetta / Pally; one demo solidifies on hover
(dots → solid word = a literal "still, then alive" moment). **Parked — RJ undecided which he likes.**

---

## 3. Palette / Spacing / Motion

### Palette
- Base: **dark & moody.** Working default = warm charcoal near-black (`#131210`),
  cool ink-blue (`#0e1013`) as the trivially-swappable alt.
- Off-white type (never pure white). Near-monochrome chrome; **color comes from the work.**
- _(exact ramp TBD once references settle)_

### Spacing
- _(TBD — grid, margins, the "quiet" whitespace ratio)_

### Motion — governed by *Still, then alive*
- **At rest the hero is nearly still** — not the constant drift of the first-shot version.
  A near-static, composed field (dark grain barely breathing) that **wakes on interaction**:
  cursor stirs/parts it, scroll shifts it, the work surfaces as you engage.
- Reframes the first-shot `timeoff.astro`: that drifts unprompted (too busy at rest). Next
  iteration should sit quiet and respond to the pointer instead.
- Hover/scroll/click are *reveals*, not ambient decoration. Generative motif = the sand sim
  reborn (RJ's own signature — not copyable by the reference studios).
- `prefers-reduced-motion`: degrade gracefully to the composed still state (already a strength
  here — the resting state IS the reduced-motion state).
- _(exact easing, page transitions TBD)_

---

## /timeoff homepage — build progress (CURRENT DIRECTION — locked feel)
The "welcomed into a world" homepage. Full-bleed painterly hero + quiet corner chrome, no manifesto.
- **Hero = full-bleed oil-painting world.** Curated set, high-contrast B&W, single subject, lots
  of negative space, calm (not busy/aggressive). Current set = **ballerina + dog** (chef/warrior
  tried + cut — broke the visual grammar). Curation rule: single subject · high B&W contrast ·
  generous negative space (ideally lower-left for the text) · calm.
- **Type:** Inter (chosen — Suisse Int'l stand-in; Switzer was the runner-up). HUGE bold statement
  bottom-left, business-card scale: "Timeoff / a design & product / studio by RJ Rivera / born in NYC".
  Uses **`mix-blend-mode: difference`** so it inverts against the painting — always legible AND it
  shimmers as the image moves. Same blend on corner labels + toggle. No drop shadow, no dash.
- **Chrome:** Work TL · Information TR · Est. 2026 BR (RJ Rivera dropped — the big text carries the name).
  - **Nav labels grow on hover (a system, not a one-off).** `Work` and `Information` each
    unfurl from a tiny tracked micro-label up to near-statement scale — long `0.62s` expo-out
    (`cubic-bezier(0.16,1,0.3,1)`), weight tweens 400→800 (variable Inter `wght@400..800`),
    tracking tightens to the statement's `-0.02em`. Each pinned to its corner: Work grows
    down-right (loudest, `clamp(2.4rem,6vw,5.6rem)`), Information down-left (a notch smaller,
    `3.9rem` cap, so the longer word doesn't crowd the toggle). `Est. 2026` stays inert — a stamp.
  - **Reactive squish.** Hovering `Work` gently compresses the bottom-left statement
    (`scaleY(0.93)`, anchored bottom-left, same easing) — as if the expansion pressed on it.
    Wired with `body:has(.work:hover) .statement` (no JS). Work-only for now.
  - **Why it works (RJ's read):** the motion is "a lot," but because it's *interaction-gated*
    it reads as intentional/operated, not over-the-top. Confirms the law below: dramatic moves
    are earned by hover/click; nothing performs unprompted.
- **★ "Still, then alive" — DELIVERED via cursor-scrubbed video.** Hero painting is an animated
  loop (choppy 12fps, stop-motion feel) that is **frozen until the cursor moves** — cursor movement
  *scrubs playback* (you operate it; stop = it freezes). Weighted **momentum** model so fast flicks
  sweep smoothly instead of whipping (EASE 0.3, capped per-move + per-frame). This is the
  uncopyable "the site itself is the portfolio piece" gesture. Stills (e.g. dog) just don't scrub.
- **Toggle:** small top-center counter `01 / 02` — tactile (hover expands tracking, springy press,
  counter flashes on tick). Hard cut between media (no crossfade — RJ chose instant). Scales to N media.
- Assets: `public/ballerina.mp4` (re-encoded all-intra `-g 1` + `fps=12` for smooth scrub), `public/dog.png`.
  Source mp4s come from image→video tool; re-encode for scrub-smoothness on ingest.

## /work page — build progress (FIRST PASS BUILT)
The project index, reached from the homepage `Work` label. Reference: StudioSmall's Projects page
(RJ's pick) — but adapted, not copied.
- **Light page (inverts from the dark home).** Full-bleed painterly backdrop `public/work-bg.png`
  (soft blue-white oil texture) on a light base `#eef0ec`. This answers the long-open light-vs-dark
  call: the Work page goes LIGHT while home stays dark — the StudioSmall inversion, but with RJ's
  own painting instead of flat cream. Color from the work pops against it.
- **Chrome:** `Home` TL (→ `/timeoff`) · `Information` TR (parked at `#`). Same grow-on-hover system
  as the homepage, but **red** ink (`--fg: #d6352a`), weight 600 at rest. No `Est. 2026` here. Filter
  taxonomy deliberately CUT (only ~4 projects, all web/product — a taxonomy would fake breadth).
- **Grid:** four square tiles, 2×2, centered with air, floating on the painting via a soft shadow.
  Tiles = `clamp(200px,23vw,320px)`, `aspect-ratio:1/1`, `object-fit:cover` (square crop of landscape
  demos — RJ chose "keep them square for now"). Projects: Bird Dog · Stripe Redesign · UI Playground
  · JPL Redesign (About dropped from Work). Red uppercase Inter labels beneath.
- **Still, then alive** = reused from the current homepage: each tile is a frozen first frame; hover
  plays its `<video muted loop>`, mouseleave pauses + resets to 0. Touch: autoplay all.
- ★ **Seamless cross-page label handoff (the signature move — RJ "woahhhhh, impressive").** Home⇄Work
  is a plain navigation, but the enlarged TL nav label appears to PERSIST across the swap while only
  its text+color change (Work↔Home, white↔red), instantly. Mechanism: click sets a `sessionStorage`
  flag → destination's `is:inline` head script adds `html.pre-tl` before paint → CSS forces that label
  to its `:hover` size untweened (already-big, no grow-in) → one-shot `pointermove` hands back to native
  `:hover`. Each page renders its own correct label for free; only the *enlarged state* is persisted.
- **Page transitions stay plain.** Tried an animated dissolve AND a slight fade-in/crossfade — both
  rejected ("too much" / "feels broken"). The continuity above is the ONLY cross-page motion. Matching
  per-page `html` bg colors prevent white flash.
- **Next on /work:** art-direct the resting tile frames (raw screenshots = the screens-vs-interiors
  trap); decide square-vs-landscape long-term; build the `Information` destination.

## Open decisions log
- [x] Warm charcoal vs cool ink-blue base → **home = warm charcoal `#131210`; work page = light painterly**
- [ ] Wordmark: serif vs grotesque (homepage statement is Inter 800; no separate wordmark yet)
- [ ] Exact motion flavor beyond "drift" (home = cursor-scrub; work = hover-to-play tiles)
- [ ] Project imagery treatment (art-directed crops — the screens-vs-interiors problem) — STILL THE BIG ONE
- [ ] `Information` page (parked at `#` on both home + work)
