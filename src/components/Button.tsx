"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-700 text-neutral-50 hover:bg-brand-800 active:bg-brand-900 focus-visible:ring-ring/40",
        secondary:
          "bg-neutral-600 text-neutral-50 hover:bg-neutral-700 active:bg-neutral-800 focus-visible:ring-neutral-500/40",
        accent:
          "bg-accent-500 text-neutral-950 hover:bg-accent-600 active:bg-accent-700 focus-visible:ring-accent-500/40",
        success:
          "bg-success text-neutral-50 hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500/40",
        danger:
          "bg-danger text-neutral-50 hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500/40",
        warning:
          "bg-warning text-neutral-950 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring-yellow-400/40",
        info:
          "bg-info text-neutral-950 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring-cyan-400/40",
        light:
          "bg-surface text-foreground border border-border hover:bg-surface-muted active:bg-surface-muted-stronger focus-visible:ring-foreground-muted/40",
        dark:
          "bg-neutral-950 text-neutral-50 hover:bg-neutral-900 active:bg-neutral-800 focus-visible:ring-neutral-700/40",
        "outline-primary":
          "border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-neutral-50 active:bg-brand-800 focus-visible:ring-ring/40",
        "outline-secondary":
          "border border-neutral-600 text-foreground-muted hover:bg-neutral-600 hover:text-neutral-50 active:bg-neutral-700 focus-visible:ring-neutral-500/40",
        "outline-accent":
          "border border-accent-500 text-accent-700 hover:bg-accent-500 hover:text-neutral-950 active:bg-accent-600 focus-visible:ring-accent-500/40",
        "outline-success":
          "border border-success text-success-foreground hover:bg-success hover:text-neutral-50 active:bg-emerald-700 focus-visible:ring-emerald-500/40",
        "outline-danger":
          "border border-danger text-danger-foreground hover:bg-danger hover:text-neutral-50 active:bg-red-700 focus-visible:ring-red-500/40",
        "outline-warning":
          "border border-warning text-warning-foreground hover:bg-warning hover:text-neutral-950 active:bg-yellow-600 focus-visible:ring-yellow-400/40",
        "outline-info":
          "border border-info text-info-foreground hover:bg-info hover:text-neutral-950 active:bg-cyan-600 focus-visible:ring-cyan-400/40",
        ghost:
          "text-foreground-muted hover:bg-surface-muted active:bg-surface-muted-stronger focus-visible:ring-foreground-muted/40",
        link:
          "text-brand-700 dark:text-brand-300 underline-offset-4 hover:underline hover:text-brand-800 dark:hover:text-brand-200 focus-visible:ring-ring/40 px-0 py-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-sm",
        md: "h-10 px-4 py-2 text-base rounded-md",
        lg: "h-12 px-6 py-3 text-xl rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /**
   * Shows an inline spinner, sets aria-busy, and suppresses clicks while truthy.
   * Ignored when `asChild` is true — Radix Slot's single-child contract is
   * incompatible with injecting an extra spinner element.
   */
  loading?: boolean;
}

const Spinner = () => (
  <svg
    className="animate-spin size-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeOpacity="0.25"
      strokeWidth="4"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <Spinner /> : null}
        {loading ? <span className="opacity-70">{children}</span> : children}
      </button>
    );
  },
);
Button.displayName = "Button";
