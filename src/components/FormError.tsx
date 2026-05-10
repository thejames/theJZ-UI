import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FormErrorProps = HTMLAttributes<HTMLDivElement>;

/**
 * Form-level error display. Lives outside any FormField — used for
 * submission failures, network errors, or cross-field validation results.
 * Carries role="alert" so assistive tech announces the message; pair with
 * FormErrorMessage (no role) for field-scoped errors associated via
 * aria-describedby.
 */
export const FormError = forwardRef<HTMLDivElement, FormErrorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn("text-sm text-danger-foreground", className)}
      {...props}
    />
  ),
);
FormError.displayName = "FormError";
