/**
 * InputGroup — Input with leading/trailing addons.
 *
 * Use InputGroupAddon for static prefixes/suffixes (icons, currency,
 * unit labels). Use InputGroupButton for actionable trailing items. The
 * group inherits the size of the embedded Input, and the inner Input
 * automatically drops its border + radius so the group reads as a single
 * control.
 *
 * Example:
 *   <InputGroup>
 *     <InputGroupAddon>$</InputGroupAddon>
 *     <Input placeholder="0.00" />
 *     <InputGroupAddon>USD</InputGroupAddon>
 *   </InputGroup>
 */
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const groupVariants = cva(
  "flex w-full items-stretch overflow-hidden rounded-md border border-border bg-input transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
  {
    variants: {
      size: {
        sm: "h-8 rounded-sm text-sm",
        md: "h-10 rounded-md text-base",
        lg: "h-12 rounded-lg text-lg",
      },
      invalid: {
        true: "border-danger focus-within:border-danger focus-within:ring-danger/30",
        false: "",
      },
    },
    defaultVariants: { size: "md", invalid: false },
  },
);

export interface InputGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupVariants> {}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, size, invalid, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        groupVariants({ size, invalid }),
        // Strip borders, radii, and focus ring from any descendant Input/select/textarea
        // so the group reads as a single control.
        "[&>input]:border-0 [&>input]:rounded-none [&>input]:bg-transparent [&>input]:focus:ring-0 [&>input]:focus:border-0 [&>input]:h-full [&>input]:flex-1 [&>input]:min-w-0",
        "[&>select]:border-0 [&>select]:rounded-none [&>select]:bg-transparent [&>select]:focus:ring-0 [&>select]:focus:border-0 [&>select]:h-full",
        className,
      )}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

export type InputGroupAddonProps = HTMLAttributes<HTMLSpanElement>;

export const InputGroupAddon = forwardRef<HTMLSpanElement, InputGroupAddonProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 bg-surface-muted px-3 text-foreground-muted",
        "first:border-r last:border-l border-border [&:only-child]:border-x-0",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  ),
);
InputGroupAddon.displayName = "InputGroupAddon";

export interface InputGroupButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const InputGroupButton = forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(({ className, type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn(
      "inline-flex shrink-0 items-center gap-1 bg-surface-muted px-3 text-foreground-muted",
      "first:border-r last:border-l border-border",
      "transition-colors hover:bg-surface-muted-stronger hover:text-foreground",
      "focus-visible:outline-none focus-visible:bg-surface-muted-stronger",
      "disabled:opacity-50 disabled:pointer-events-none",
      "[&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));
InputGroupButton.displayName = "InputGroupButton";
