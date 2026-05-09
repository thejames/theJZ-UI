import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "font-mono text-sm bg-border-subtle text-foreground px-1.5 py-0.5 rounded-sm transition-colors",
        className,
      )}
      {...props}
    />
  ),
);
Code.displayName = "Code";
