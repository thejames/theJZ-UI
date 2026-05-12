/**
 * FormField — vertical stack wrapper for a label + input + helper/error.
 *
 * Renders a `flex flex-col gap-1.5` div — that's it. The convention is:
 *
 *   <FormField>
 *     <Label htmlFor="email">Email</Label>
 *     <Input id="email" />
 *     <FormHelperText>We never share it.</FormHelperText>
 *     <FormErrorMessage>{errors.email}</FormErrorMessage>
 *   </FormField>
 *
 * Wiring `id` ↔ `htmlFor` and conditional error rendering are the caller's
 * responsibility — this primitive intentionally stays unopinionated.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FormFieldProps = HTMLAttributes<HTMLDivElement>;

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  ),
);
FormField.displayName = "FormField";
