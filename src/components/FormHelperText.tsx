import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FormHelperTextProps = HTMLAttributes<HTMLParagraphElement>;

export const FormHelperText = forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-neutral-600", className)}
      {...props}
    />
  ),
);
FormHelperText.displayName = "FormHelperText";
