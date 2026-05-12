/**
 * Table family.
 *
 * Composable table primitives wrapping native semantic elements. The root
 * `Table` provides horizontal scroll on overflow via a wrapping div and
 * exposes `striped`, `hover`, and `bordered` flags that target descendant
 * rows via Tailwind arbitrary-variant selectors. Subcomponents (`TableHeader`,
 * `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`,
 * `TableCaption`) are thin themed wrappers around the corresponding HTML tags.
 */
import {
  forwardRef,
  type HTMLAttributes,
  type TableHTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";
import { cn } from "../lib/cn";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Alternates row background on `<tbody>` rows. */
  striped?: boolean;
  /** Highlights `<tbody>` rows on hover. */
  hover?: boolean;
  /** Adds borders around every cell. */
  bordered?: boolean;
  /** Density preset for cell padding. Default "md". */
  density?: "sm" | "md" | "lg";
  /** Outer wrapper className (the scrolling container). */
  wrapperClassName?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      wrapperClassName,
      striped,
      hover,
      bordered,
      density = "md",
      ...props
    },
    ref,
  ) => (
    <div
      className={cn(
        "relative w-full overflow-x-auto rounded-md border border-border",
        wrapperClassName,
      )}
      data-density={density}
    >
      <table
        ref={ref}
        className={cn(
          "w-full caption-bottom text-sm text-foreground",
          striped &&
            "[&_tbody_tr:nth-child(odd)]:bg-surface-muted/40",
          hover &&
            "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-surface-muted",
          bordered && "[&_th]:border [&_td]:border [&_th]:border-border [&_td]:border-border",
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

export type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader = forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn("bg-surface-muted/60 [&_tr]:border-b [&_tr]:border-border", className)}
      {...props}
    />
  ),
);
TableHeader.displayName = "TableHeader";

export const TableBody = forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:not(:last-child)]:border-b [&_tr]:border-border-subtle", className)}
      {...props}
    />
  ),
);
TableBody.displayName = "TableBody";

export const TableFooter = forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn(
        "border-t border-border bg-surface-muted/60 font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  ),
);
TableFooter.displayName = "TableFooter";

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn("", className)} {...props} />
  ),
);
TableRow.displayName = "TableRow";

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      scope={props.scope ?? "col"}
      className={cn(
        "text-left align-middle text-xs font-semibold uppercase tracking-wide text-foreground-muted",
        "[[data-density='sm']_&]:px-2 [[data-density='sm']_&]:py-1.5",
        "[[data-density='md']_&]:px-3 [[data-density='md']_&]:py-2.5",
        "[[data-density='lg']_&]:px-4 [[data-density='lg']_&]:py-3.5",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "align-middle",
        "[[data-density='sm']_&]:px-2 [[data-density='sm']_&]:py-1.5",
        "[[data-density='md']_&]:px-3 [[data-density='md']_&]:py-2.5",
        "[[data-density='lg']_&]:px-4 [[data-density='lg']_&]:py-3.5",
        className,
      )}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn("mt-3 text-sm text-foreground-muted", className)}
      {...props}
    />
  ),
);
TableCaption.displayName = "TableCaption";
