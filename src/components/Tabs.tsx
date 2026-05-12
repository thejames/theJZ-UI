"use client";

/**
 * Tabs — disclosure backed by Radix Tabs.
 *
 * Compose: `<Tabs defaultValue="a"><TabsList><TabsTrigger value="a">A</TabsTrigger>...
 * </TabsList><TabsContent value="a">...</TabsContent></Tabs>`. Supports
 * controlled `value`/`onValueChange` and horizontal/vertical orientations
 * inherited from the Radix root.
 */
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../lib/cn";

export const Tabs = TabsPrimitive.Root;

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center gap-1 rounded-md bg-surface-muted p-1 text-foreground-muted",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-surface data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "dark:data-[state=active]:bg-surface-elevated",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-md",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
