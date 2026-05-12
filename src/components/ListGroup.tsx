/**
 * ListGroup — bordered vertical list of items.
 *
 * Compose: <ListGroup><ListGroupItem>...</ListGroupItem></ListGroup>.
 * Pass `interactive` to enable hover/focus styling (for items wrapping a
 * link or with an onClick), `active` to highlight the current selection,
 * `disabled` to dim, and `variant` for status-tinted rows.
 *
 * `flush` removes the outer border so the group can sit cleanly inside a
 * Card. `horizontal` lays items in a row instead of a column.
 */
import {
  forwardRef,
  type HTMLAttributes,
  type LiHTMLAttributes,
} from "react";
import { cn } from "../lib/cn";

export interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
  flush?: boolean;
  horizontal?: boolean;
}

export const ListGroup = forwardRef<HTMLUListElement, ListGroupProps>(
  ({ className, flush, horizontal, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "flex bg-surface text-foreground",
        horizontal ? "flex-row" : "flex-col",
        !flush && "rounded-md border border-border overflow-hidden",
        className,
      )}
      {...props}
    />
  ),
);
ListGroup.displayName = "ListGroup";

export interface ListGroupItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Apply hover/focus styling for items that wrap a link or have an onClick. */
  interactive?: boolean;
  /** Highlight this item as the current selection. */
  active?: boolean;
  /** Dim and disable interaction. */
  disabled?: boolean;
  /** Contextual status color (Bootstrap's `list-group-item-*` variants). */
  variant?: "success" | "danger" | "warning" | "info";
}

const variantClasses: Record<
  NonNullable<ListGroupItemProps["variant"]>,
  string
> = {
  success:
    "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200",
  danger:
    "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200",
  warning:
    "bg-yellow-50 text-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-200",
  info: "bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200",
};

export const ListGroupItem = forwardRef<HTMLLIElement, ListGroupItemProps>(
  (
    { className, interactive, active, disabled, variant, ...props },
    ref,
  ) => (
    <li
      ref={ref}
      aria-current={active ? "true" : undefined}
      aria-disabled={disabled || undefined}
      className={cn(
        "block w-full px-4 py-3 text-sm transition-colors",
        "[&:not(:first-child)]:border-t [&:not(:first-child)]:border-border-subtle",
        interactive &&
          !disabled &&
          "cursor-pointer hover:bg-surface-muted focus-within:bg-surface-muted",
        active &&
          "bg-brand-700 text-neutral-50 hover:bg-brand-700 dark:bg-brand-500 dark:text-neutral-950 dark:hover:bg-brand-500",
        disabled && "opacity-50 pointer-events-none",
        variant && variantClasses[variant],
        className,
      )}
      {...props}
    />
  ),
);
ListGroupItem.displayName = "ListGroupItem";
