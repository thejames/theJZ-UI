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
