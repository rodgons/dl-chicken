---
name: DownLow Chicken Shack
colors:
  surface: "#131313"
  surface-dim: "#131313"
  surface-bright: "#393939"
  surface-container-lowest: "#0e0e0e"
  surface-container-low: "#1c1b1b"
  surface-container: "#201f1f"
  surface-container-high: "#2a2a2a"
  surface-container-highest: "#353534"
  on-surface: "#e5e2e1"
  on-surface-variant: "#d4c5ab"
  inverse-surface: "#e5e2e1"
  inverse-on-surface: "#313030"
  outline: "#9c8f78"
  outline-variant: "#4f4632"
  surface-tint: "#fabd00"
  primary: "#ffe4af"
  on-primary: "#3f2e00"
  primary-container: "#ffc107"
  on-primary-container: "#6d5100"
  inverse-primary: "#785900"
  secondary: "#ffb4a9"
  on-secondary: "#690002"
  secondary-container: "#a90107"
  on-secondary-container: "#ffb3a9"
  tertiary: "#e7e7e7"
  on-tertiary: "#2f3131"
  tertiary-container: "#cacbcb"
  on-tertiary-container: "#545656"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#ffdf9e"
  primary-fixed-dim: "#fabd00"
  on-primary-fixed: "#261a00"
  on-primary-fixed-variant: "#5b4300"
  secondary-fixed: "#ffdad5"
  secondary-fixed-dim: "#ffb4a9"
  on-secondary-fixed: "#410001"
  on-secondary-fixed-variant: "#930005"
  tertiary-fixed: "#e2e2e2"
  tertiary-fixed-dim: "#c6c6c7"
  on-tertiary-fixed: "#1a1c1c"
  on-tertiary-fixed-variant: "#454747"
  background: "#131313"
  on-background: "#e5e2e1"
  surface-variant: "#353534"
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: "900"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: "800"
    lineHeight: "1.2"
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: "800"
    lineHeight: "1.2"
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: "700"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "700"
    lineHeight: "1"
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  card-padding: 20px
  section-gap: 48px
---

## Brand & Style

This design system embodies the high-energy, "late-night" atmosphere of a modern urban chicken shack. It targets a student-centric demographic that values speed, intensity of flavor, and a visual style that feels authentic to street culture.

The aesthetic is **High-Contrast / Bold**, utilizing a dark mode foundation to allow vibrant food photography and accent colors to "pop" with neon-like intensity. The personality is confident and unapologetic, blending a professional digital experience with the raw, energetic grit of an urban eatery. The UI should feel fast, responsive, and substantial.

## Colors

The palette is optimized for a dark environment to minimize eye strain during late-night ordering while maximizing brand impact.

- **Primary (Warm Yellow):** Used for primary calls to action, price points, and highlights. It represents the "golden" crunch of the product.
- **Secondary (Vibrant Red):** Used for "Hot" indicators, spicy menu tiers, and urgent alerts.
- **Background:** A deep charcoal (#121212) provides more depth than pure black, reducing harsh flickering on OLED screens.
- **Surface:** A slightly lighter charcoal (#1e1e1e) is used for cards and containers to create a sense of layering.
- **Accent Pink:** Reserved for special "loyalty" or "exclusive" student offers to add a modern, trendy flair.

## Typography

The typography strategy relies on the tension between a heavy, geometric sans-serif for impact and a modern, friendly sans-serif for utility.

- **Headlines:** Montserrat is set in extra-bold weights and frequently uppercase to mimic street-side signage and bold posters.
- **Body:** Be Vietnam Pro provides a contemporary, high-readability experience for menu descriptions and fine print.
- **Labels:** JetBrains Mono is used sparingly for technical data (e.g., calorie counts, timestamps, order IDs) to add a "system-generated" urban aesthetic.

## Layout & Spacing

This design system uses a **Fluid Grid** model based on an 8px rhythm.

- **Mobile:** A single-column stack with 24px side margins. Elements like menu categories use a horizontal "peek" scroll to maximize vertical space.
- **Desktop:** A 12-column grid with 16px gutters. Large hero imagery should span at least 8 columns to maintain the "bold" brand feel.
- **Spacing Philosophy:** Use generous whitespace between sections to prevent the dark theme from feeling cluttered, but maintain tight spacing within component groups (like a card title and its price) to ensure a high-energy, information-dense feel.

## Elevation & Depth

To maintain a modern, flat-yet-layered look, depth is achieved through **Tonal Layers** rather than heavy shadows.

- **Level 0 (Background):** Deep Charcoal (#121212) for the canvas.
- **Level 1 (Cards/Surfaces):** Lighter Charcoal (#1E1E1E) with no shadow, but a subtle 1px border (#2E2E2E) to define edges.
- **Level 2 (Popovers/Modals):** Lighter surface (#2A2A2A) with a soft, ambient glow in the Primary color (Yellow) at very low opacity (10%) to suggest light emission from the UI.
- **Interactive Elements:** Buttons do not use shadows; instead, they use high-contrast color shifts (e.g., Yellow to White) on hover to indicate state.

## Shapes

The shape language is consistently **Rounded**, softening the "aggressive" nature of the bold typography and dark colors.

- **Standard Elements:** Buttons and input fields use a 0.5rem radius (8px).
- **Cards:** Large menu cards and feature blocks use a 1rem radius (16px) to feel substantial and "friendly."
- **Imagery:** Product photography should always feature rounded corners to match the UI container, avoiding sharp 90-degree angles which feel too corporate for this brand.

## Components

- **Buttons:** Primary buttons are Solid Yellow (#FFC107) with Black text. Secondary buttons are outlined in White. Buttons should have a height of 56px for "thumb-friendly" mobile interaction.
- **Chips:** Used for "Spicy Levels" or "Dietary Prefs." Use the Red (#F44336) for heat levels and White for neutral filters.
- **Cards:** Product cards feature a full-bleed top image, followed by a padded section for the title and price. Prices should be displayed in Montserrat Bold.
- **Input Fields:** Darker than the surface background with a 2px Yellow bottom border when focused, creating a high-energy "active" state.
- **Progress Bars:** For order tracking, use a thick 8px bar with a Yellow fill and a Red "pulsing" dot for the current status.
- **Cart Summary:** A persistent, floating pill-shaped button at the bottom of the mobile screen in Yellow, ensuring the "Add to Cart" action is always within reach.
