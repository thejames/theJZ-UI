"use client";

/**
 * Nav — composable navigation primitives.
 *
 * Designed for "a row of links" — sub-nav inside a settings page, tab-like
 * link rows, vertical sidebars. For full-page top nav use `Navbar`. For
 * panel-switching that doesn't change the URL, use `Tabs`.
 *
 * Compose:
 *   <Nav>
 *     <NavItem><NavLink href="..." active>Overview</NavLink></NavItem>
 *     <NavItem><NavLink href="...">Members</NavLink></NavItem>
 *   </Nav>
 *
 * Variants: `default` (subtle highlight), `underline` (Bootstrap nav-underline),
 * `pills` (Bootstrap nav-pills). `vertical` flips to a sidebar layout.
 *
 * Variants are propagated via React context so NavLink children pick up the
 * right styling automatically.
 */
import {
  createContext,
  forwardRef,
  useContext,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

type NavVariant = "default" | "underline" | "pills";

const NavContext = createContext<{ variant: NavVariant; vertical: boolean }>({
  variant: "default",
  vertical: false,
});

export interface NavProps extends HTMLAttributes<HTMLElement> {
  variant?: NavVariant;
  vertical?: boolean;
}

export const Nav = forwardRef<HTMLElement, NavProps>(
  ({ className, variant = "default", vertical = false, children, ...props }, ref) => (
    <NavContext.Provider value={{ variant, vertical }}>
      <nav
        ref={ref}
        data-variant={variant}
        data-orientation={vertical ? "vertical" : "horizontal"}
        className={cn(
          "flex",
          vertical ? "flex-col gap-0.5" : "flex-row flex-wrap items-center",
          variant === "underline" && !vertical
            ? "border-b border-border gap-0"
            : "gap-1",
          className,
        )}
        {...props}
      >
        {children}
      </nav>
    </NavContext.Provider>
  ),
);
Nav.displayName = "Nav";

export type NavItemProps = HTMLAttributes<HTMLDivElement>;

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("inline-flex", className)} {...props} />
  ),
);
NavItem.displayName = "NavItem";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  /** Render children as the root (e.g., a Next.js `<Link>`). */
  asChild?: boolean;
}

const baseLink =
  "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const variantStyles: Record<NavVariant, string> = {
  default:
    "rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-muted data-[active=true]:bg-surface-muted data-[active=true]:text-foreground",
  underline:
    "rounded-none border-b-2 border-transparent -mb-px text-foreground-muted hover:text-foreground hover:border-border data-[active=true]:text-foreground data-[active=true]:border-brand-700 dark:data-[active=true]:border-brand-500",
  pills:
    "rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-muted data-[active=true]:bg-brand-700 data-[active=true]:text-neutral-50 dark:data-[active=true]:bg-brand-500 dark:data-[active=true]:text-neutral-950",
};

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active, disabled, asChild, ...props }, ref) => {
    const { variant } = useContext(NavContext);
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        data-active={active || undefined}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          baseLink,
          variantStyles[variant],
          disabled && "pointer-events-none opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
NavLink.displayName = "NavLink";
