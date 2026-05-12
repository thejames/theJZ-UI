/**
 * Pagination — composable navigation primitives.
 *
 * The library ships unstyled-by-default page logic helpers (`buildPageList`)
 * plus the visual building blocks (`Pagination`, `PaginationList`,
 * `PaginationItem`, `PaginationLink`, `PaginationPrev`, `PaginationNext`,
 * `PaginationEllipsis`). Consumers wire `onClick` themselves so this component
 * stays agnostic to routing (Next.js Link, plain anchor, button-only state).
 *
 * For the simple "I just want a working pager" case, use the higher-level
 * `SimplePagination` which takes `page`, `pageCount`, and `onPageChange`.
 */
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cn } from "../lib/cn";

export type PaginationProps = HTMLAttributes<HTMLElement>;

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label={props["aria-label"] ?? "Pagination"}
      className={cn("flex w-full justify-center", className)}
      {...props}
    />
  ),
);
Pagination.displayName = "Pagination";

export type PaginationListProps = HTMLAttributes<HTMLUListElement>;

export const PaginationList = forwardRef<HTMLUListElement, PaginationListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  ),
);
PaginationList.displayName = "PaginationList";

export type PaginationItemProps = HTMLAttributes<HTMLLIElement>;

export const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
  ),
);
PaginationItem.displayName = "PaginationItem";

const linkBase =
  "inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
const linkInactive =
  "text-foreground-muted hover:bg-surface-muted hover:text-foreground";
const linkActive =
  "bg-brand-700 text-neutral-50 hover:bg-brand-800 dark:bg-brand-500 dark:text-neutral-950 dark:hover:bg-brand-400";

export interface PaginationLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  size?: "sm" | "md";
}

export const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = "md", ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        linkBase,
        size === "sm" && "h-8 min-w-8 px-2 text-xs",
        isActive ? linkActive : linkInactive,
        className,
      )}
      {...props}
    />
  ),
);
PaginationLink.displayName = "PaginationLink";

export interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  size?: "sm" | "md";
}

/**
 * Button-rendered alternative to PaginationLink for cases where you handle
 * navigation in JS (no anchor URL). Same visuals.
 */
export const PaginationButton = forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ className, isActive, size = "md", type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      linkBase,
      size === "sm" && "h-8 min-w-8 px-2 text-xs",
      isActive ? linkActive : linkInactive,
      className,
    )}
    {...props}
  />
));
PaginationButton.displayName = "PaginationButton";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const PaginationPrev = forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ className, children, ...props }, ref) => (
  <PaginationButton
    ref={ref}
    aria-label="Go to previous page"
    className={cn("gap-1 pl-2", className)}
    {...props}
  >
    <ChevronLeft />
    <span>{children ?? "Previous"}</span>
  </PaginationButton>
));
PaginationPrev.displayName = "PaginationPrev";

export const PaginationNext = forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ className, children, ...props }, ref) => (
  <PaginationButton
    ref={ref}
    aria-label="Go to next page"
    className={cn("gap-1 pr-2", className)}
    {...props}
  >
    <span>{children ?? "Next"}</span>
    <ChevronRight />
  </PaginationButton>
));
PaginationNext.displayName = "PaginationNext";

export const PaginationEllipsis = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden="true"
    className={cn(
      "inline-flex h-9 min-w-9 items-center justify-center text-foreground-subtle",
      className,
    )}
    {...props}
  >
    …
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";

/**
 * Compute a list of page tokens for a pager UI.
 *
 *   buildPageList(7, 20)   →  [1, "...", 5, 6, 7, 8, 9, "...", 20]
 *   buildPageList(2, 20)   →  [1, 2, 3, 4, 5, "...", 20]
 *   buildPageList(1, 3)    →  [1, 2, 3]
 *
 * `siblings` controls how many neighbors flank the current page (default 1).
 * `boundaries` controls how many pages stay anchored at the start/end (default 1).
 */
export function buildPageList(
  page: number,
  pageCount: number,
  options: { siblings?: number; boundaries?: number } = {},
): Array<number | "..."> {
  const siblings = options.siblings ?? 1;
  const boundaries = options.boundaries ?? 1;

  const totalNumbers = boundaries * 2 + siblings * 2 + 3;
  if (pageCount <= totalNumbers) {
    return range(1, pageCount);
  }

  const leftSibling = Math.max(page - siblings, boundaries + 2);
  const rightSibling = Math.min(page + siblings, pageCount - boundaries - 1);

  const showLeftDots = leftSibling > boundaries + 2;
  const showRightDots = rightSibling < pageCount - boundaries - 1;

  const head = range(1, boundaries);
  const tail = range(pageCount - boundaries + 1, pageCount);

  const middle: Array<number | "..."> = [];
  if (!showLeftDots && showRightDots) {
    const leftCount = boundaries + siblings * 2 + 2;
    middle.push(...range(boundaries + 1, leftCount), "...");
  } else if (showLeftDots && !showRightDots) {
    const rightCount = boundaries + siblings * 2 + 2;
    middle.push("...", ...range(pageCount - rightCount + 1, pageCount - boundaries));
  } else {
    middle.push("...", ...range(leftSibling, rightSibling), "...");
  }

  return [...head, ...middle, ...tail];
}

function range(start: number, end: number): number[] {
  const out: number[] = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}

export interface SimplePaginationProps extends Omit<PaginationProps, "onChange"> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  siblings?: number;
  boundaries?: number;
  size?: "sm" | "md";
  /** Hide the Previous/Next chevrons. Default false. */
  hidePrevNext?: boolean;
}

/**
 * Drop-in pager with built-in page-list logic. For full control over each
 * link's rendering (e.g., Next.js `<Link>`, custom URLs), compose the
 * primitives directly instead.
 */
export const SimplePagination = forwardRef<HTMLElement, SimplePaginationProps>(
  (
    {
      page,
      pageCount,
      onPageChange,
      siblings,
      boundaries,
      size = "md",
      hidePrevNext = false,
      className,
      ...props
    },
    ref,
  ) => {
    const pages = buildPageList(page, pageCount, { siblings, boundaries });
    const atStart = page <= 1;
    const atEnd = page >= pageCount;

    return (
      <Pagination ref={ref} className={className} {...props}>
        <PaginationList>
          {!hidePrevNext && (
            <PaginationItem>
              <PaginationPrev
                size={size}
                disabled={atStart}
                onClick={() => !atStart && onPageChange(page - 1)}
              />
            </PaginationItem>
          )}
          {pages.map((p, idx) =>
            p === "..." ? (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationButton
                  size={size}
                  isActive={p === page}
                  onClick={() => onPageChange(p)}
                >
                  {p}
                </PaginationButton>
              </PaginationItem>
            ),
          )}
          {!hidePrevNext && (
            <PaginationItem>
              <PaginationNext
                size={size}
                disabled={atEnd}
                onClick={() => !atEnd && onPageChange(page + 1)}
              />
            </PaginationItem>
          )}
        </PaginationList>
      </Pagination>
    );
  },
);
SimplePagination.displayName = "SimplePagination";
