/**
 * Navbar — top-of-app navigation surface.
 *
 * Opinionated layout: a horizontal bar with three optional slots — Brand
 * (left), Content (center, grows), and Actions (right). Use the slot
 * components to organize children, or just drop arbitrary content into the
 * `Navbar` root for a one-off layout.
 *
 * Example:
 *   <Navbar sticky>
 *     <NavbarBrand href="/">JZ Productions</NavbarBrand>
 *     <NavbarContent>
 *       <Nav variant="underline">
 *         <NavItem><NavLink href="/" active>Home</NavLink></NavItem>
 *         <NavItem><NavLink href="/work">Work</NavLink></NavItem>
 *       </Nav>
 *     </NavbarContent>
 *     <NavbarActions>
 *       <Button variant="ghost">Sign in</Button>
 *     </NavbarActions>
 *   </Navbar>
 */
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Pin to the top of the viewport with a subtle blur. */
  sticky?: boolean;
  /** Remove the bottom border. */
  borderless?: boolean;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, sticky, borderless, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "flex w-full items-center gap-4 bg-background px-6 py-3",
        sticky && "sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        !borderless && "border-b border-border",
        className,
      )}
      {...props}
    />
  ),
);
Navbar.displayName = "Navbar";

export interface NavbarBrandProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

export const NavbarBrand = forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-foreground transition-colors hover:text-brand-700 dark:hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-sm",
          className,
        )}
        {...props}
      />
    );
  },
);
NavbarBrand.displayName = "NavbarBrand";

export const NavbarContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex min-w-0 flex-1 items-center gap-1", className)}
      {...props}
    />
  ),
);
NavbarContent.displayName = "NavbarContent";

export const NavbarActions = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  ),
);
NavbarActions.displayName = "NavbarActions";
