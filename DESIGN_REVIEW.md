# Visual Design Audit

This document captures visual issues spotted in the current theme implementation and suggestions for improving aesthetics and consistency.

## 1. Navigation & Theme Toggle
- The switch labels are rendered at `0.6rem` uppercase text, which reads cramped and harms legibility compared to the rest of the masthead typography. Consider increasing the font size and letting the casing match the rest of the UI copy to keep the control readable. [`assets/css/custom.scss`](assets/css/custom.scss)
- In light mode the toggle track inherits a translucent royal blue (`rgba(37, 99, 235, 0.45)`), while the dark mode track switches to a cyan tint (`rgba(56, 189, 248, 0.5)`). The two colors feel unrelated; aligning them to a single accent would give a calmer, more unified look. [`assets/css/custom.scss`](assets/css/custom.scss)

## 2. Page Hero
- The hero overlay uses a white color (`#fff`) with only `0.25` opacity, so any busy photography behind it will bleed through and reduce headline contrast, especially when the browser switches to dark mode and the overlay color flips to a near-black tone. Raising the opacity or simplifying to a flat color would keep the text legible. [`index.md`](index.md), [`assets/css/custom.scss`](assets/css/custom.scss)

## 3. Card Grid (Feature Row)
- Cards rely on a high blur shadow (`0 18px 36px -24px`) on a white background. On smaller screens that shadow feels hazy because there is no surrounding gutter color change. Switching to a subtler elevation (e.g., smaller blur and offset) will make the cards feel sharper. [`assets/css/custom.scss`](assets/css/custom.scss)
- The call-to-action buttons inside the cards repeat the same saturated blue as the toggle, so when three cards sit side-by-side the UI feels monochromatic. Introducing a secondary accent or using outlined buttons for secondary cards would break up the repetition. [`assets/css/custom.scss`](assets/css/custom.scss)

## 4. Typography & Copy
- The site title remains the stock “Hi, I'm Your Name,” which looks unfinished and undermines the professional tone of the landing page. Updating the title and hero copy with the author’s actual name instantly makes the page feel more polished. [`index.md`](index.md)
- Body text uses the theme default but the excerpts mix Chinese and English separated by `<br>` tags, creating uneven line heights. Using block-level elements for bilingual content (e.g., `<p>` wrappers) keeps spacing consistent. [`index.md`](index.md)

## 5. Color System
- The dark theme background is set to `#05070e`, close to pure black, while cards shift to `#161a24`. Because the foreground text is a light slate (`#e2e8f0`), the high contrast can feel stark. Lightening the background a touch (e.g., to `#0b1220`) creates a softer dark mode. [`assets/css/custom.scss`](assets/css/custom.scss)
- Muted text in dark mode is defined as `#cbd5f5`, which is nearly as bright as the primary body text; lowering the luminance would better differentiate secondary information. [`assets/css/custom.scss`](assets/css/custom.scss)

Addressing the above should bring the visual presentation closer to the clean, minimalist tone requested while keeping the light/dark experience cohesive.
