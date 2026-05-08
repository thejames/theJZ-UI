import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FormErrorMessageProps = HTMLAttributes<HTMLParagraphElement>;

export const FormErrorMessage = forwardRef<HTMLParagraphElement, FormErrorMessageProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-danger", className)}
      {...props}
    />
  ),
);
FormErrorMessage.displayName = "FormErrorMessage";
