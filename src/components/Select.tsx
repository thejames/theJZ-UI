import { forwardRef, type SelectHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const selectVariants = cva(
  "block w-full bg-neutral-50 text-neutral-950 placeholder:text-neutral-400 border border-neutral-300 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 disabled:bg-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed transition-colors appearance-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-sm",
        md: "h-10 px-3 py-2 text-base rounded-md",
        lg: "h-12 px-4 py-3 text-lg rounded-lg",
      },
      invalid: {
        true: "border-danger focus:border-danger focus:ring-danger/30",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      invalid: false,
    },
  },
);

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, size, invalid, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(selectVariants({ size, invalid }), "pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown />
    </div>
  ),
);
Select.displayName = "Select";
