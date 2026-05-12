/**
 * Skeleton — animated placeholder for loading content.
 *
 * Use to reserve space matching the eventual content's shape. Default is a
 * full-width pulse rectangle; pass `circle` for avatar placeholders or
 * override sizing via `className`.
 */
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Render as a circle (use with explicit size classes). */
  circle?: boolean;
  /** Animation style. "pulse" is calmer; "shimmer" sweeps a gradient. */
  animation?: "pulse" | "shimmer" | "none";
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, circle, animation = "pulse", ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "bg-surface-muted-stronger",
        circle ? "rounded-full" : "rounded-md",
        animation === "pulse" && "animate-pulse",
        animation === "shimmer" &&
          "bg-[linear-gradient(90deg,var(--color-surface-muted)_0%,var(--color-surface-muted-stronger)_50%,var(--color-surface-muted)_100%)] bg-[length:200%_100%] animate-[jz-skeleton-shimmer_1.6s_linear_infinite]",
        !circle && "h-4 w-full",
        className,
      )}
      {...props}
    />
  ),
);
Skeleton.displayName = "Skeleton";
