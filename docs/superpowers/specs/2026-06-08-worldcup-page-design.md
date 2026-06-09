# World Cup Page Design

## Goal

Create a static `/worldcup` page for DownLow Chicken Shack that uses the supplied weekly-special layout as the structural reference, but adapts the content into a World Cup match-day promotion. Add a `/worldcup` navigation button to the header on both the existing home page and the new World Cup page.

## Context

The project is a static Next.js app using `src/app`, Tailwind CSS v4 tokens in `src/app/globals.css`, and local brand fonts through `next/font/google`. The visual source of truth is `context/DESING.md` and `context/ui-context.md`: dark charcoal surfaces, warm yellow primary actions, red urgency accents, heavy Montserrat headlines, Be Vietnam Pro body copy, and sparse JetBrains Mono labels.

## Approach

Use a shared header component rather than duplicating header markup across pages. The header will preserve the current DownLow brand treatment, desktop nav, and `Order Now` CTA while adding a visible `World Cup` link to `/worldcup`. The home page will import this shared header. The World Cup page will use the same component with the World Cup nav item highlighted.

## Page Structure

The new `/worldcup` page will include:

- Fixed top header with DownLow brand, primary navigation, World Cup link, and Order Now CTA.
- Hero section with local food photography, a dark gradient overlay, an urgent match-week label, headline, body copy, and chips for watch-party, kickoff, and limited quantity messaging.
- Bento feature section with a main match-day combo card, price badge, CTA, and two supporting urgency/info cards.
- Social promo section with a vertical story-style mockup and short community buzz posts.
- Footer matching the DownLow static demo tone.
- Floating mobile action pill for the match-day combo/cart CTA.

## Content Direction

The page copy will be World Cup-themed instead of student-finals-themed. Example language: `World Cup Watch Party`, `Match-Day Chicken Combo`, `Kickoff Crunch Combo`, `available this match week`, and `limited trays before kickoff`. The page remains fictional and demo-only.

## Assets

Use existing local images in `public/images` through `next/image` instead of remote image URLs. This keeps the static demo self-contained and avoids adding external runtime image dependencies.

## Behavior

The page is static. Buttons and links are presentational anchors only. Countdown-style labels will be fixed text for the demo; no backend, cart state, or live timer will be added.

## Testing

Verify with the project’s existing lint/build commands if available. Also check that `/` and `/worldcup` render, the shared header appears on both pages, and the World Cup link points to `/worldcup`.
