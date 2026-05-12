/**
 * Kbd — renders a single keyboard key, e.g., `<Kbd>⌘</Kbd> + <Kbd>K</Kbd>`.
 *
 * Renders a `<kbd>` element styled to look like a physical key. For
 * multi-key chords, render multiple `<Kbd>`s with separator text rather than
 * a single one containing "Cmd+K" — keeps each key visually discrete and
 * stays semantically correct.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono text-foreground-muted bg-surface-elevated border border-border rounded-sm shadow-sm transition-colors",
  {
    variants: {
      size: {
        sm: "text-xs px-1 py-0.5 min-w-[1.25rem]",
        md: "text-sm px-1.5 py-0.5 min-w-[1.5rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md";
}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(kbdVariants({ size }), className)}
      {...props}
    />
  ),
);
Kbd.displayName = "Kbd";
