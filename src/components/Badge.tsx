import { forwardRef, type HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-medium whitespace-nowrap rounded-md",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        accent: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
      size: {
        sm: "text-xs px-2 py-0.5 rounded-sm",
        md: "text-sm px-2.5 py-0.5 rounded-md",
      },
      soft: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { variant: "primary",   soft: false, class: "bg-brand-700 text-neutral-50" },
      { variant: "secondary", soft: false, class: "bg-neutral-600 text-neutral-50" },
      { variant: "accent",    soft: false, class: "bg-accent-500 text-neutral-950" },
      { variant: "success",   soft: false, class: "bg-success text-neutral-50" },
      { variant: "danger",    soft: false, class: "bg-danger text-neutral-50" },
      { variant: "warning",   soft: false, class: "bg-warning text-neutral-950" },
      { variant: "info",      soft: false, class: "bg-info text-neutral-950" },

      { variant: "primary",   soft: true, class: "bg-brand-100 text-brand-800" },
      { variant: "secondary", soft: true, class: "bg-neutral-100 text-neutral-800" },
      { variant: "accent",    soft: true, class: "bg-accent-100 text-accent-800" },
      { variant: "success",   soft: true, class: "bg-emerald-100 text-emerald-800" },
      { variant: "danger",    soft: true, class: "bg-red-100 text-red-800" },
      { variant: "warning",   soft: true, class: "bg-yellow-100 text-yellow-800" },
      { variant: "info",      soft: true, class: "bg-cyan-100 text-cyan-800" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      soft: false,
    },
  },
);

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info";
  soft?: boolean;
  size?: "sm" | "md";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, soft, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size, soft }), className)}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
