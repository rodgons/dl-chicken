# DownLow Chicken Shack UI Context

## Current Scope

The website is a static demonstration project. Do not add routes, pages, or page-level content until the layout requirements are provided during development.

Use `context/DESING.md` as the source of truth for the visual system, with these implementation notes:

- The site should feel like a high-energy, late-night urban chicken shack.
- The base experience is dark mode only: charcoal canvas, tonal surfaces, pale warm text, yellow primary actions, and red heat/urgency accents.
- Food photography is expected later and should be treated as a first-class visual signal in layouts.
- The tone should follow the reference during development instead of inventing a new style direction.

## Theme Tokens

Global CSS variables live in `src/app/globals.css` and are exposed to Tailwind through `@theme inline`.

Primary token groups:

- Color: `background`, `foreground`, `surface-*`, `on-surface-*`, `outline-*`, `primary-*`, `secondary-*`, `tertiary-*`, `error-*`, `accent-pink`.
- Fonts: `font-sans` maps to Be Vietnam Pro, `font-display` maps to Montserrat, and `font-mono` maps to JetBrains Mono.
- Radius: `sm`, `default`, `md`, `lg`, `xl`, `full`.

## Typography

- Display and headline text should use Montserrat in heavy weights.
- Body and utility copy should use Be Vietnam Pro.
- JetBrains Mono should be used sparingly for labels, timestamps, order IDs, calorie counts, and other system-like details.
- Keep letter spacing at `0` in implementation, even where the source brief suggests tighter tracking.

## Layout Rules

- Mobile uses a single-column stack with 24px side margins.
- Desktop should use a 12-column mental model with 16px gutters.
- Page sections should be full-width bands or unframed layouts with constrained inner content.
- Avoid marketing-only landing pages when implementation begins; the first screen should feel like the actual demo experience.
- Do not nest cards inside cards.

## Component Direction

- Primary buttons: solid yellow, dark text, 56px target height.
- Secondary buttons: restrained outline treatment.
- Cards: tonal dark surface, subtle border, food image area, padded text area, price in Montserrat bold.
- Chips: red for heat levels, neutral light treatment for filters.
- Inputs: dark surface with yellow active/focus cue.
- Mobile cart/order action: persistent yellow pill when cart behavior is introduced.
