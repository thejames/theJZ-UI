/**
 * Card family.
 *
 * Padding strategy:
 *   Header has top + horizontal padding but no bottom; Body has full padding;
 *   Footer has its own padding plus a top border. The combinations:
 *     - Header + Body          → 24px gap between header and body content
 *     - Body alone             → balanced p-6
 *     - Body + Footer          → body's pb-6 + border + footer py-4
 *     - Header + Body + Footer → all transitions handled
 *   Footer alone is not a recommended layout: the top border hangs without
 *   anything above it.
 *
 * Elevation:
 *   Card lift comes from shadows in light mode and a tone shift to
 *   bg-surface-elevated in dark mode (shadows render but read weakly on
 *   dark backgrounds; the bg shift is the primary signal). Default "sm".
 *   Use elevation="none" for a flat container.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const cardVariants = cva(
  "rounded-lg border border-border transition-colors",
  {
    variants: {
      elevation: {
        none: "bg-surface",
        sm: "bg-surface dark:bg-surface-elevated shadow-sm",
        md: "bg-surface dark:bg-surface-elevated shadow-md",
        lg: "bg-surface dark:bg-surface-elevated shadow-lg",
        xl: "bg-surface dark:bg-surface-elevated shadow-xl",
      },
    },
    defaultVariants: {
      elevation: "sm",
    },
  },
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevation, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ elevation }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5 px-6 pt-6 pb-0", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors",
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-foreground-muted transition-colors", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  ),
);
CardBody.displayName = "CardBody";

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

/**
 * Bottom section of a Card, typically containing action buttons.
 * Renders with a top border for visual separation from CardBody. Note: a Card
 * with only a CardFooter (no Header or Body above) will show a top border
 * with nothing above it — not a recommended layout.
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-2 px-6 py-4 border-t border-border",
        className,
      )}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";
