# DownLow Homepage Design

## Goal

Replace the starter Next.js homepage with a static DownLow Chicken Shack homepage based on the supplied reference markup. The page should demonstrate the brand for academic/demo purposes without backend behavior, extra routes, or real ordering flows.

## Visual Direction

Use `context/DESING.md` and `context/ui-context.md` as the source of truth. The page stays dark-only with charcoal backgrounds, tonal dark surfaces, pale warm body text, yellow primary calls to action, and red urgency accents. Headlines use Montserrat in heavy weights, body copy uses Be Vietnam Pro, and small labels use JetBrains Mono.

## Page Structure

The homepage will include these sections in order:

1. Fixed top app bar with brand, desktop navigation, and order CTA.
2. Hero section with food photography, gradient overlay, headline, supporting copy, and two CTAs.
3. Red scrolling ticker with short urgency and brand phrases.
4. Student promotion section with evergreen student-focused copy and a weekly-style campus deal card.
5. Bento image gallery using local food/student images from `public/images`.
6. Three value cards covering flavour, convenience, and value.
7. Mobile-only persistent order pill.
8. Footer with brand lockup, links, and academic/demo-style fine print.

## Implementation Notes

Implement the page in `src/app/page.tsx` as static React markup. Use `next/image` for local images already present in `public/images` instead of external remote URLs. Keep styling in Tailwind utility classes where practical and add only small global utilities in `src/app/globals.css` for the grain overlay, text glow, and marquee animation.

The CTAs and links will be presentational anchors or buttons with no backend integration. The page must remain responsive with a single-column mobile stack and a wider desktop layout that follows the existing 12-column mental model.

## Testing

Run the existing checks after implementation:

1. `pnpm lint`
2. `pnpm build`

Manual verification should confirm the page renders on mobile and desktop widths, image crops look intentional, the ticker animates, and the fixed header/FAB do not obscure key content.
