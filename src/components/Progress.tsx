/**
 * Progress — accessible progress bar.
 *
 * `value` omitted or null → indeterminate (animated stripe). Otherwise
 * clamped to [0, max] and rendered as a filled bar. Variants follow the
 * Bootstrap status palette (primary/secondary/success/danger/warning/info).
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const trackVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-surface-muted",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const barVariants = cva("h-full rounded-full transition-[width] duration-300", {
  variants: {
    variant: {
      primary: "bg-brand-700 dark:bg-brand-500",
      secondary: "bg-neutral-600",
      accent: "bg-accent-500",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof trackVariants>,
    VariantProps<typeof barVariants> {
  /** 0..max. `undefined` or `null` renders an indeterminate bar. */
  value?: number | null;
  max?: number;
  /** Accessible label describing what's being measured. */
  label?: string;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    { className, value, max = 100, size, variant, label, ...props },
    ref,
  ) => {
    const isIndeterminate = value == null;
    const clamped = isIndeterminate
      ? 0
      : Math.min(Math.max(value, 0), max);
    const pct = isIndeterminate ? 0 : (clamped / max) * 100;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : clamped}
        aria-label={label}
        className={cn(trackVariants({ size }), className)}
        {...props}
      >
        {isIndeterminate ? (
          <div
            className={cn(
              barVariants({ variant }),
              "absolute inset-y-0 w-2/5 animate-[jz-progress-indeterminate_1.2s_ease-in-out_infinite]",
            )}
          />
        ) : (
          <div
            className={barVariants({ variant })}
            style={{ width: `${pct}%` }}
          />
        )}
      </div>
    );
  },
);
Progress.displayName = "Progress";
