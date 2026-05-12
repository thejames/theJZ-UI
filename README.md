# @jameszambon/ui

Design system for jameszambon Next.js apps. Ships React components and a Tailwind v4 CSS theme.

## Install

Published on npm. From a consuming Next.js app:

```bash
pnpm add @jameszambon/ui
```

To pin to a specific version, use the npm version (see the [Version map](#version-map) for the calver tag → npm version correspondence):

```bash
pnpm add @jameszambon/ui@0.0.2
```

## Versioning

Two tracks in lockstep:

- **Git tag (human identity):** `vYYYY.MMDD[letter]`. First release of the day has no letter (`v2026.0510`); subsequent same-day releases append `a`, `b`, … (`v2026.0510a`).
- **npm version (registry id):** `0.0.N`, patch-bumped each release.

Why two tracks: npm's registry enforces semver server-side — leading zeros (`0510`) and alphanumeric mid-components (`0510a`) are rejected at publish time. The calver tag is what humans read; the npm version is what `pnpm add` resolves. The [Version map](#version-map) below records the correspondence.

```bash
pnpm release                              # bumps npm version, tags calver, updates this README
git push --follow-tags && npm publish     # push the tag, then publish to npm
```

`prepublishOnly` runs `pnpm build` before any npm publish, so `dist/` is always fresh on the registry.

## Version map

| Git tag | npm |
|---|---|
<!-- version-map-rows -->
| `v2026.0511` | `0.0.6` |
| `v2026.0510c` | `0.0.5` |
| `v2026.0510b` | `0.0.4` |
| `v2026.0510a` | `0.0.3` |
| `v2026.0510` | `0.0.2` |

## Setup

Add the following to the consuming app's global stylesheet, in this order:

```css
@import "tailwindcss";
@import "@jameszambon/ui/styles.css";   /* utility classes used by package components */
@custom-variant dark (.dark &);          /* see "Dark mode" below — required for class-toggled dark: utilities in your own code */
/* your @theme overrides here */
@import "@jameszambon/ui/theme.css";    /* package design tokens — last so they win on collision */
```

Why the order matters:

- `styles.css` is a pre-compiled bundle of every utility class the package's components reference (`bg-surface`, `dark:bg-surface-elevated`, etc.). It ships pre-compiled because Tailwind v4 in your project scans your `src/` for utilities but does NOT scan `node_modules` reliably — without this file, the package's component utilities never make it into your build.
- The utility classes reference design tokens (`var(--color-surface)`, etc.).
- `theme.css` defines those tokens. Imported AFTER your `@theme` block, the package's tokens override yours on collision — so the package looks like itself rather than picking up your app's overrides for tokens it depends on.
- `@custom-variant dark (.dark &)` makes Tailwind's `dark:` variant fire when an ancestor has the `.dark` class. Without it, Tailwind v4 falls back to `prefers-color-scheme: dark` and the toggle in your app won't drive any `dark:` utility classes you write. The package's own bundled utilities have this baked in at compile time, but your code needs the declaration too.

### DateInput stylesheet

If you use `DateInput`, also import react-day-picker's base stylesheet once globally:

```css
@import "react-day-picker/style.css";
```

The package's `theme.css` re-themes rdp under the `.jz-datepicker-popover` scope using the design system's semantic tokens (so dark mode flips automatically), but does **not** bundle rdp's base sheet — that's the consumer's responsibility, so apps that don't use DateInput don't pay the bundle cost. `react-day-picker` is a regular dependency of `@jameszambon/ui`, so no separate install needed.

### Inter font

This package declares Inter in `--font-sans` but does **not** bundle font files. Consuming apps load Inter themselves. Recommended pattern using `next/font/google` in `app/layout.tsx`:

```tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

The `--font-sans` token lists `"Inter"` first with system-ui fallbacks, so anywhere Tailwind utilities resolve to `var(--font-sans)`, Inter is preferred when loaded.

## Dark mode

This package supports dark mode via semantic tokens. To enable dark mode in your app, add the `dark` class to your `<html>` element (or any ancestor of the components you want themed):

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

Components automatically respect the dark mode without any additional configuration. To enable it conditionally based on user/system preference, manage the class with your preferred approach (state hook, cookie, prefers-color-scheme media query, etc.).

Note: all components reference semantic tokens for surfaces, text, and borders. Status colors in Alerts and Badges (success/danger/warning/info) handle dark mode via `dark:` variants in component code rather than at the token level — this is intentional, since the soft-tinted backgrounds need different colors in each mode rather than just a foreground swap.

## Token reference

**Color scales** (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950):

- `brand` — deep teal (anchor: brand-700)
- `accent` — warm amber (anchor: accent-500)
- `neutral` — cool gray (anchors: neutral-50, neutral-950)

Generates utilities like `bg-brand-700`, `text-accent-500`, `border-neutral-200`.

**Semantic colors** (Bootstrap 5.3 mapping):

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

Generates utilities like `bg-primary`, `text-danger`, `border-success`.

The rest (typography, radii, shadows, breakpoints) follows Tailwind v4 conventions; see `src/theme.css` for exact values.

## Notes

### Bundle size

The package's `styles.css` includes Tailwind's standard `@layer properties` and `@layer theme` chrome (CSS custom property registrations and default token definitions). This means a few KB of overlap with the consumer's own `@import "tailwindcss"` output, since both emit similar registrations and default tokens. The overlap is benign (CSS rules are idempotent) but represents a small bundle-size optimization opportunity. If this becomes a measurable concern, the build pipeline can be extended with a post-processing step to strip duplicated chrome.

## Showcase

See [`showcase/page.tsx`](showcase/page.tsx) for a single-page reference of every component in this package, rendered with the full design system applied.

To use it locally, drop the file into any Next.js 14+ App Router app at `app/design-system/page.tsx` and visit `/design-system`. Requires Tailwind CSS v4 set up in the consuming app and Inter loaded via `next/font` (per the Setup section above).
