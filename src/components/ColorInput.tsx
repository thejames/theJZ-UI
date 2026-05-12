"use client";

/**
 * ColorInput — themed wrapper around `<input type="color">`.
 *
 * Browser native color picker stays the source of truth (operating-system
 * dialog), but we hide the default ugly inner chrome and present a clean
 * rounded swatch + optional hex display. Returns standard hex values via
 * `onChange`/`value` so it composes with React Hook Form etc.
 */
import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";
import { cn } from "../lib/cn";

export interface ColorInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  /** Show the current hex value next to the swatch. Default true. */
  showHex?: boolean;
}

const sizeClasses: Record<NonNullable<ColorInputProps["size"]>, string> = {
  sm: "h-8 w-8 rounded-sm",
  md: "h-10 w-10 rounded-md",
  lg: "h-12 w-12 rounded-lg",
};

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
      className,
      size = "md",
      invalid,
      showHex = true,
      value,
      defaultValue = "#014c6c",
      onChange,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internal, setInternal] = useState<string>(
      isControlled ? "" : String(defaultValue),
    );
    const current = isControlled ? String(value ?? "") : internal;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternal(e.target.value);
      onChange?.(e);
    };

    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        <span
          className={cn(
            "relative inline-flex shrink-0 overflow-hidden border border-border transition-colors",
            "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
            invalid && "border-danger focus-within:border-danger focus-within:ring-danger/30",
            sizeClasses[size],
          )}
        >
          <input
            ref={ref}
            type="color"
            value={current}
            onChange={handleChange}
            aria-invalid={invalid || undefined}
            className="absolute inset-0 h-full w-full cursor-pointer appearance-none border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0"
            {...props}
          />
        </span>
        {showHex && (
          <code className="font-mono text-sm uppercase text-foreground-muted">
            {current}
          </code>
        )}
      </span>
    );
  },
);
ColorInput.displayName = "ColorInput";
