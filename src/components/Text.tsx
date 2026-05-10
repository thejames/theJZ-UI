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
