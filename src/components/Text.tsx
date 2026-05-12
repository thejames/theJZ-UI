/**
 * Text — paragraph typography with semantic variants.
 *
 * Variants: `body` (default), `lead` (larger intro paragraph), `muted`
 * (de-emphasized body text), `subtle` (lower-contrast small text), `small`
 * (normal-contrast smaller text), `caption` (xs metadata).
 *
 * Renders a `<p>`. For inline copy or different elements wrap content in your
 * own tag and reuse the size/color utilities directly.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base text-foreground leading-relaxed",
      lead: "text-lg text-foreground-muted leading-relaxed",
      muted: "text-base text-foreground-muted leading-relaxed",
      subtle: "text-sm text-foreground-subtle leading-relaxed",
      small: "text-sm text-foreground",
      caption: "text-xs text-foreground-subtle",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(textVariants({ variant }), className)}
      {...props}
    />
  ),
);
Text.displayName = "Text";
