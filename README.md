# @jameszambon/ui

Private design system for jameszambon Next.js apps. Ships React components and a Tailwind v4 CSS theme.

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
| `v2026.0510` | `0.0.2` |

## Setup

Add the following to the consuming app's global stylesheet:

```css
@import "tailwindcss";
@import "@jameszambon/ui/theme.css";
```

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

## Showcase

See [`showcase/page.tsx`](showcase/page.tsx) for a single-page reference of every component in this package, rendered with the full design system applied.

To use it locally, drop the file into any Next.js 14+ App Router app at `app/design-system/page.tsx` and visit `/design-system`. Requires Tailwind CSS v4 set up in the consuming app and Inter loaded via `next/font` (per the Setup section above).
