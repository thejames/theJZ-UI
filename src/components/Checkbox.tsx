import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const checkboxVariants = cva(
  "inline-flex items-center justify-center shrink-0 rounded-sm border-2 border-neutral-300 bg-neutral-50 data-[state=checked]:bg-brand-700 data-[state=checked]:border-brand-700 data-[state=indeterminate]:bg-brand-700 data-[state=indeterminate]:border-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
      invalid: {
        true: "border-danger data-[state=checked]:bg-danger data-[state=checked]:border-danger data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger focus-visible:ring-danger/40",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

export interface CheckboxProps
  extends Omit<
    ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "children"
  > {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-3/4"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
    className="size-3/4"
  >
    <path d="M6 12h12" />
  </svg>
);

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, invalid, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(checkboxVariants({ size, invalid }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="text-neutral-50 flex items-center justify-center">
      {props.checked === "indeterminate" ? <IndeterminateIcon /> : <CheckIcon />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";
