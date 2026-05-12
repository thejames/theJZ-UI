"use client";

/**
 * Calendar — standalone month grid backed by react-day-picker.
 *
 * Same instance and styling used internally by DateInput, exposed directly
 * for cases where you need an embedded calendar (range pickers, custom
 * date-selection UIs, scheduling panels) without the popover trigger.
 *
 * Theme overrides live in src/theme.css under `.jz-datepicker-popover` —
 * the wrapper applies that class so visuals match DateInput's popover.
 * Consumers must also `@import "react-day-picker/style.css"` once in their
 * global stylesheet (this is documented in src/theme.css comments).
 *
 * Pass-through for all DayPicker props — mode, selected, onSelect, etc.
 * See https://react-day-picker.js.org for the full API.
 */
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "../lib/cn";

export type CalendarProps = DayPickerProps & {
  className?: string;
};

export function Calendar({ className, ...props }: CalendarProps) {
  return (
    <div className={cn("jz-datepicker-popover", className)}>
      <DayPicker {...props} />
    </div>
  );
}
Calendar.displayName = "Calendar";
