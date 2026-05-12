"use client";

/**
 * HoverCard — rich popover triggered by hover/focus (Radix HoverCard).
 *
 * Use when you want to preview content on hover — user profile cards, link
 * previews, tag details. Heavier than Tooltip (can hold any markup, including
 * images and buttons) and not a substitute for it on accessibility-critical
 * labels (HoverCard does not work on touch devices).
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../lib/cn";

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export const HoverCardContent = forwardRef<
  ElementRef<typeof HoverCardPrimitive.Content>,
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 6, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "jz-popover-content z-50 w-64 rounded-md border border-border bg-surface dark:bg-surface-elevated p-4 text-sm text-foreground shadow-md outline-none",
        className,
      )}
      {...props}
    />
  </HoverCardPrimitive.Portal>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
