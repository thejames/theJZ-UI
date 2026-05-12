/**
 * RadioGroup + Radio — Radix-backed single-choice radio set.
 *
 * Compose: one `<RadioGroup>` per logical question; one `<Radio value="…">`
 * per option. `orientation="horizontal"` lays out inline; default is stacked.
 *
 *   <RadioGroup value={plan} onValueChange={setPlan}>
 *     <label className="flex items-center gap-2">
 *       <Radio value="free" /> Free
 *     </label>
 *     <label className="flex items-center gap-2">
 *       <Radio value="pro" /> Pro
 *     </label>
 *   </RadioGroup>
 *
 * Pass `invalid` to either component for danger styling + `aria-invalid`.
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

export type RadioGroupProps = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
>;

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    orientation={orientation}
    className={cn(
      orientation === "horizontal"
        ? "flex flex-row gap-4"
        : "flex flex-col gap-2",
      className,
    )}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

const radioVariants = cva(
  "inline-flex items-center justify-center shrink-0 rounded-full border-2 border-border bg-input data-[state=checked]:border-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
      invalid: {
        true: "border-danger data-[state=checked]:border-danger focus-visible:ring-danger/40",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

export interface RadioProps
  extends Omit<
    ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    "children"
  > {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

export const Radio = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ className, size, invalid, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    aria-invalid={invalid || undefined}
    className={cn(radioVariants({ size, invalid }), className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span
        className={cn(
          "block size-1/2 rounded-full",
          invalid ? "bg-danger" : "bg-brand-700",
        )}
      />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
Radio.displayName = "Radio";
