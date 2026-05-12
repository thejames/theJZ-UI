/**
 * FormErrorMessage — danger-tinted message shown below an input for
 * validation errors. Render conditionally (`{errors.email && <…>}`).
 *
 * For screen-reader association, give it an `id` and reference it from the
 * input's `aria-describedby`; also set `aria-invalid` on the input itself
 * (or pass `invalid` to `Input`/`Textarea`/`Select`).
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FormErrorMessageProps = HTMLAttributes<HTMLParagraphElement>;

export const FormErrorMessage = forwardRef<HTMLParagraphElement, FormErrorMessageProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-danger-foreground transition-colors", className)}
      {...props}
    />
  ),
);
FormErrorMessage.displayName = "FormErrorMessage";
