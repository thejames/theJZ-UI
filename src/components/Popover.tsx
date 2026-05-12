"use client";

/**
 * Popover — generic anchored surface backed by Radix Popover.
 *
 * Use for non-tooltip overlays: inline editors, command menus, color pickers,
 * etc. For modal full-screen dialogs use Dialog; for purely descriptive
 * hovers, use Tooltip.
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/cn";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

export const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 6, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "jz-popover-content z-50 w-72 rounded-md border border-border bg-surface dark:bg-surface-elevated p-4 text-sm text-foreground shadow-md outline-none",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
