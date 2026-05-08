import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const textareaVariants = cva(
  "block w-full bg-neutral-50 text-neutral-950 placeholder:text-neutral-400 border border-neutral-300 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 disabled:bg-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
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
