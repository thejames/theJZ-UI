"use client";

/**
 * Slider — range input backed by Radix Slider.
 *
 * Supports single-thumb (one value) and range (two values) via the array
 * `value`/`defaultValue` prop. Renders one Thumb per value automatically.
 * Use `step`, `min`, `max` as you would on a native `<input type="range">`.
 *
 * Variants: `size` controls track/thumb scale; `variant` recolors the filled
 * range to match the button/badge palette.
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const trackVariants = cva(
  "relative grow overflow-hidden rounded-full bg-surface-muted",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-1.5",
        lg: "h-2",
      },
    },
    defaultVariants: { size: "md" },
  },
);

const rangeVariants = cva("absolute h-full", {
  variants: {
    variant: {
      primary: "bg-brand-700 dark:bg-brand-500",
      accent: "bg-accent-500",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
    },
  },
  defaultVariants: { variant: "primary" },
});

const thumbVariants = cva(
  "block rounded-full border-2 bg-surface shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
      variant: {
        primary: "border-brand-700 dark:border-brand-500",
        accent: "border-accent-500",
        success: "border-success",
        danger: "border-danger",
        warning: "border-warning",
        info: "border-info",
      },
    },
    defaultVariants: { size: "md", variant: "primary" },
  },
);

export interface SliderProps
  extends ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof trackVariants>,
    VariantProps<typeof rangeVariants> {}

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size, variant, value, defaultValue, ...props }, ref) => {
  const thumbCount =
    (Array.isArray(value) ? value.length : undefined) ??
    (Array.isArray(defaultValue) ? defaultValue.length : 1);

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className={trackVariants({ size })}>
        <SliderPrimitive.Range className={rangeVariants({ variant })} />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }).map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className={thumbVariants({ size, variant })}
          aria-label={`Value ${i + 1}`}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;
