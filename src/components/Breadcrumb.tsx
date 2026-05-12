/**
 * Breadcrumb — composable trail nav.
 *
 * Use the primitives (`Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`,
 * `BreadcrumbLink`, `BreadcrumbSeparator`, `BreadcrumbPage`) so consumers
 * can render their own router links (`<BreadcrumbLink asChild><Link href=...>`).
 *
 * The current page should use `<BreadcrumbPage>` (rendered as a `<span>` with
 * `aria-current="page"`) — not a link — so screen readers identify the leaf.
 */
import { forwardRef, type AnchorHTMLAttributes, type ComponentPropsWithoutRef, type HTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

export type BreadcrumbProps = HTMLAttributes<HTMLElement> & {
  /** Override the visual separator between items. Default is a chevron. */
  separator?: ReactNode;
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label={props["aria-label"] ?? "Breadcrumb"}
      className={cn("", className)}
      {...props}
    />
  ),
);
Breadcrumb.displayName = "Breadcrumb";

export type BreadcrumbListProps = HTMLAttributes<HTMLOListElement>;

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-foreground-muted sm:gap-2",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

export type BreadcrumbItemProps = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        className={cn(
          "transition-colors hover:text-foreground focus-visible:outline-none focus-visible:underline underline-offset-4",
          className,
        )}
        {...props}
      />
    );
  },
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export type BreadcrumbPageProps = ComponentPropsWithoutRef<"span">;

export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

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

export type BreadcrumbSeparatorProps = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbSeparator = forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("text-foreground-subtle [&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export type BreadcrumbEllipsisProps = HTMLAttributes<HTMLSpanElement>;

export const BreadcrumbEllipsis = forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn(
      "flex h-9 w-9 items-center justify-center text-foreground-subtle",
      className,
    )}
    {...props}
  >
    …
    <span className="sr-only">More</span>
  </span>
));
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
