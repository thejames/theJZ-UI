/**
 * Separator — 1px divider line. Defaults to horizontal full-width.
 *
 * `decorative={true}` (default) emits `role="none"` so screen readers skip it
 * — use this for purely visual dividers. Pass `decorative={false}` when the
 * divider conveys structure (e.g., separating two unrelated lists of links).
 *
 * For vertical separators, the parent must have a height (`flex` row + `h-…`
 * on a wrapper, or `self-stretch`).
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const separatorVariants = cva("bg-border shrink-0 transition-colors", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { orientation = "horizontal", decorative = true, className, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  ),
);
Separator.displayName = "Separator";
