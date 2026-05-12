"use client";

/**
 * Toggle + ToggleGroup — pressable buttons backed by Radix Toggle.
 *
 * Use a standalone `Toggle` for a single on/off pressable button (e.g., a
 * bold/italic button in a text toolbar). Use `ToggleGroup` to bind multiple
 * toggles to a single selection (`type="single"`) or to a multi-select
 * (`type="multiple"`). Each `ToggleGroupItem` represents one value.
 *
 * `variant`/`size` set on `ToggleGroup` cascade down to every
 * `ToggleGroupItem` via internal context — pass them on the group, not on
 * each item.
 */
import {
  createContext,
  forwardRef,
  useContext,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-foreground-muted hover:bg-surface-muted hover:text-foreground data-[state=on]:bg-surface-muted-stronger data-[state=on]:text-foreground",
        outline:
          "border border-border bg-transparent text-foreground-muted hover:bg-surface-muted hover:text-foreground data-[state=on]:bg-brand-700 data-[state=on]:text-neutral-50 data-[state=on]:border-brand-700 dark:data-[state=on]:bg-brand-500 dark:data-[state=on]:text-neutral-950 dark:data-[state=on]:border-brand-500",
      },
      size: {
        sm: "h-8 px-2 text-sm rounded-sm",
        md: "h-9 px-3 text-sm rounded-md",
        lg: "h-10 px-4 text-base rounded-md",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

type ToggleVariantProps = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = createContext<ToggleVariantProps>({});

export interface ToggleProps
  extends ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    ToggleVariantProps {}

export const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export type ToggleGroupProps =
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    ToggleVariantProps;

export const ToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center",
      variant === "outline"
        ? "[&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0"
        : "gap-0.5 rounded-md bg-surface-muted p-1",
      className,
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export interface ToggleGroupItemProps
  extends ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    ToggleVariantProps {}

export const ToggleGroupItem = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const ctx = useContext(ToggleGroupContext);
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: variant ?? ctx.variant ?? "default",
          size: size ?? ctx.size ?? "md",
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
