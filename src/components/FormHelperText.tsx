/**
 * FormHelperText — muted descriptive text shown below an input. Use for
 * neutral guidance ("Use a strong password"); for validation errors use
 * `FormErrorMessage` instead.
 *
 * For screen-reader association, give it an `id` and reference it from the
 * input's `aria-describedby`.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FormHelperTextProps = HTMLAttributes<HTMLParagraphElement>;

export const FormHelperText = forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-foreground-muted transition-colors", className)}
      {...props}
    />
  ),
);
FormHelperText.displayName = "FormHelperText";
