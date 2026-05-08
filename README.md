# @jameszambon/ui

Private design system for jameszambon Next.js apps. Ships React components and a Tailwind v4 CSS theme.

## Install

Distributed via git (no registry yet). From a consuming Next.js app:

```bash
pnpm add git+ssh://git@github.com:jameszambon/ui.git
```

## Usage

Add the following to the consuming app's global stylesheet:

```css
@import "tailwindcss";
@import "@jameszambon/ui/theme.css";
```

Components and design tokens are populated in subsequent iterations.
