/**
 * Switch — Radix-backed toggle. Use for binary settings that take effect
 * immediately ("Dark mode", "Notifications"). For "save → submit" semantics
 * prefer `Checkbox`.
 *
 * Sizes: sm, md, lg. Pass `invalid` for the danger styling + `aria-invalid`.
 * Controlled: `checked` + `onCheckedChange`. Uncontrolled: `defaultChecked`.
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const switchRootVariants = cva(
  "inline-flex shrink-0 items-center rounded-full border-2 border-transparent bg-neutral-300 dark:bg-neutral-700 data-[state=checked]:bg-brand-700 dark:data-[state=checked]:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      invalid: {
        true: "bg-danger/20 data-[state=checked]:bg-danger focus-visible:ring-danger/40",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-surface-elevated shadow ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "size-4 data-[state=checked]:translate-x-4",
        md: "size-5 data-[state=checked]:translate-x-5",
        lg: "size-6 data-[state=checked]:translate-x-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface SwitchProps
  extends Omit<
    ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    "children"
  > {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, invalid, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(switchRootVariants({ size, invalid }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb className={switchThumbVariants({ size })} />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
