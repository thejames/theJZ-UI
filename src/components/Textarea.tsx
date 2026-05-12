/**
 * Textarea — multi-line text input. Sizes: sm, md, lg control min-height and
 * padding; users can resize vertically (`resize-y`). Pass `invalid` for the
 * danger border + `aria-invalid`.
 *
 * If you need character counts or auto-grow, wrap this in your own composed
 * component — those are app-level concerns kept out of the primitive.
 */
import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const textareaVariants = cva(
  "block w-full bg-input text-foreground placeholder:text-foreground-subtle border border-border focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
  {
    variants: {
      size: {
        sm: "min-h-20 px-3 py-1.5 text-sm rounded-sm resize-y",
        md: "min-h-24 px-3 py-2 text-base rounded-md resize-y",
        lg: "min-h-32 px-4 py-2.5 text-lg rounded-lg resize-y",
      },
      invalid: {
        true: "border-danger focus:border-danger focus:ring-danger/30",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(textareaVariants({ size, invalid }), className)}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
