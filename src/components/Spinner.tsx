import { forwardRef, type SVGAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

const spinnerVariants = cva("animate-spin text-current", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, label = "Loading", ...props }, ref) => (
    <svg
      ref={ref}
      role="status"
      aria-label={label}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="4"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
);
Spinner.displayName = "Spinner";
