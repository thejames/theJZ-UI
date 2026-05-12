/**
 * Input — themed text input. Sizes: sm, md, lg. Pass `invalid` to apply the
 * danger border + ring and set `aria-invalid`.
 *
 * The native HTML `size` attribute is shadowed by the variant `size`; if you
 * need the HTML width attribute, set it via `style` or wrap in a width util.
 * For specialized types prefer the dedicated components: `DateInput`,
 * `TimeInput`, `FileInput`, `ColorInput`.
 */
import { forwardRef, type InputHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const inputVariants = cva(
  "block w-full bg-input text-foreground placeholder:text-foreground-subtle border border-border focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
  {
    variants: {
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-sm",
        md: "h-10 px-3 py-2 text-base rounded-md",
        lg: "h-12 px-4 py-3 text-lg rounded-lg",
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

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, invalid, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(inputVariants({ size, invalid }), className)}
      {...props}
    />
  ),
);
Input.displayName = "Input";
