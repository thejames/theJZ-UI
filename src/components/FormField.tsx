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
