import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  "aria-label": string;
}

const groupClasses = {
  horizontal:
    "inline-flex [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0",
  vertical:
    "inline-flex flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:last-child)]:border-b-0",
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={cn(groupClasses[orientation], className)}
      {...props}
    >
      {children}
    </div>
  ),
);
ButtonGroup.displayName = "ButtonGroup";
