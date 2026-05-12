/**
 * Heading — semantic heading with visual size decoupled from level.
 *
 * `level` picks the HTML tag (`h1`..`h6`) — drive this from document outline,
 * not appearance. `size` overrides the visual size if you want, e.g., a
 * page-section `h2` rendered at `xl` instead of the default `4xl`. When `size`
 * is omitted, each level maps to a sensible default (h1 → 5xl, h6 → base).
 *
 *   <Heading level={1}>Settings</Heading>
 *   <Heading level={3} size="lg">Profile</Heading>
 */
import React, { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const headingVariants = cva(
  "font-semibold leading-tight tracking-tight text-foreground transition-colors",
  {
    variants: {
      size: {
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
      },
    },
    defaultVariants: {
      size: "4xl",
    },
  },
);

type HeadingSize = NonNullable<VariantProps<typeof headingVariants>["size"]>;

const DEFAULT_SIZE_BY_LEVEL: Record<1 | 2 | 3 | 4 | 5 | 6, HeadingSize> = {
  1: "5xl",
  2: "4xl",
  3: "3xl",
  4: "2xl",
  5: "xl",
  6: "base",
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: HeadingSize;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, size, className, children, ...props }, ref) => {
    const resolvedSize = size ?? DEFAULT_SIZE_BY_LEVEL[level];
    return React.createElement(
      `h${level}`,
      {
        ref,
        className: cn(headingVariants({ size: resolvedSize }), className),
        ...props,
      },
      children,
    );
  },
);
Heading.displayName = "Heading";
