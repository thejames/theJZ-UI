"use client";

/**
 * AspectRatio — locks a child box to a fixed width:height ratio.
 *
 * Backed by Radix AspectRatio. Common ratios: 16/9 (video), 4/3 (photo),
 * 1/1 (square thumbnail), 21/9 (cinema), 3/2 (DSLR).
 *
 * Example:
 *   <AspectRatio ratio={16 / 9}>
 *     <img src="..." className="h-full w-full object-cover" />
 *   </AspectRatio>
 */
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

export const AspectRatio = AspectRatioPrimitive.Root;
