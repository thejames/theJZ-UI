/**
 * Figure + FigureCaption — `<figure>`/`<figcaption>` wrappers.
 *
 * Use for an image, code block, or quote that needs an attached caption. The
 * default caption is right-aligned in muted footnote style, matching
 * Bootstrap's figure-caption treatment.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type FigureProps = HTMLAttributes<HTMLElement>;

export const Figure = forwardRef<HTMLElement, FigureProps>(
  ({ className, ...props }, ref) => (
    <figure
      ref={ref}
      className={cn("inline-block", className)}
      {...props}
    />
  ),
);
Figure.displayName = "Figure";

export type FigureCaptionProps = HTMLAttributes<HTMLElement>;

export const FigureCaption = forwardRef<HTMLElement, FigureCaptionProps>(
  ({ className, ...props }, ref) => (
    <figcaption
      ref={ref}
      className={cn("mt-2 text-sm text-foreground-subtle", className)}
      {...props}
    />
  ),
);
FigureCaption.displayName = "FigureCaption";
