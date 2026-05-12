"use client";

/**
 * Collapsible — single-section disclosure (accordion-lite).
 *
 * Use when you have exactly one toggleable region — a "show more" panel, an
 * expandable detail row, a settings card with hidden advanced options. For
 * multiple coordinated sections use Accordion instead.
 *
 * Compose:
 *   <Collapsible>
 *     <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *     <CollapsibleContent>...</CollapsibleContent>
 *   </Collapsible>
 */
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = CollapsiblePrimitive.Content;
