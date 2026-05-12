/**
 * Blockquote — quoted passage with optional Cite footer.
 *
 * Default style is a left brand-rule with subdued text — matches Bootstrap's
 * blockquote treatment. `Cite` (rendered inside) shows attribution in muted
 * footnote style. Use `align="end"` to flip the bar to the right edge.
 */
import { forwardRef, type HTMLAttributes, type BlockquoteHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface BlockquoteProps
  extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  align?: "start" | "center" | "end";
}

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, align = "start", ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        "text-lg text-foreground-muted italic leading-relaxed",
        align === "start" && "border-l-4 border-brand-700 dark:border-brand-500 pl-4",
        align === "end" && "border-r-4 border-brand-700 dark:border-brand-500 pr-4 text-right",
        align === "center" && "text-center",
        className,
      )}
      {...props}
    />
  ),
);
Blockquote.displayName = "Blockquote";

export type CiteProps = HTMLAttributes<HTMLElement>;

export const Cite = forwardRef<HTMLElement, CiteProps>(
  ({ className, children, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn("mt-2 text-sm not-italic text-foreground-subtle", className)}
      {...props}
    >
      <span className="mr-1">—</span>
      <cite>{children}</cite>
    </footer>
  ),
);
Cite.displayName = "Cite";
