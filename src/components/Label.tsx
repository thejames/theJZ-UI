/**
 * Label — form field label with optional required-asterisk indicator.
 *
 * Use `htmlFor` to associate with an input by id. Pass `required` to append a
 * red asterisk (marked `aria-hidden`; required semantics belong on the input
 * itself via the `required` attribute). For composed fields prefer
 * `<FormField label="…">` which renders this for you.
 */
import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("block text-sm font-medium text-foreground mb-1.5 transition-colors", className)}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-danger">
          *
        </span>
      )}
    </label>
  ),
);
Label.displayName = "Label";
