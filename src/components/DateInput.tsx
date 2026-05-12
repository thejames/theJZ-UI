"use client";

/**
 * DateInput — calendar input with a native picker on touch devices and a
 * themed react-day-picker popover on desktop.
 *
 * Wire format is always YYYY-MM-DD; no Date objects cross the prop boundary,
 * so values are safe for UTC-midnight calendar-date storage and server actions.
 *
 * Styling note: consumers must also `import "react-day-picker/style.css"` once
 * in their global stylesheet — this package only ships the theme overrides
 * (scoped under `.jz-datepicker-popover`), not rdp's base sheet.
 */

import { useEffect, useRef, useState } from "react";
import { DayPicker, type Matcher } from "react-day-picker";
import { Input } from "./Input";
import { Button } from "./Button";
import { cn } from "../lib/cn";

export interface DateInputProps {
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (next: string) => void;
  id?: string;
  required?: boolean;
  min?: string;
  max?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

const isControlled = (p: DateInputProps) => p.value !== undefined;

export function DateInput(props: DateInputProps) {
  const {
    name,
    defaultValue = "",
    value,
    onChange,
    id,
    required,
    min,
    max,
    className,
    placeholder,
    disabled,
    size = "md",
    invalid,
  } = props;

  const controlled = isControlled(props);
  const [internal, setInternal] = useState<string>(
    controlled ? "" : defaultValue,
  );
  const current = controlled ? (value ?? "") : internal;

  const [useCustom, setUseCustom] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: fine)").matches) setUseCustom(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const commit = (next: string) => {
    if (!controlled) setInternal(next);
    onChange?.(next);
  };

  if (!useCustom) {
    return (
      <Input
        type="date"
        id={id}
        name={name}
        required={required}
        min={min}
        max={max}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        size={size}
        invalid={invalid}
        value={controlled ? (value ?? "") : undefined}
        defaultValue={controlled ? undefined : defaultValue}
        onChange={(e) => commit(e.target.value)}
      />
    );
  }

  const selectedDate = parseYmd(current);
  const minDate = parseYmd(min);
  const maxDate = parseYmd(max);

  const disabledMatchers: Matcher[] = [];
  if (minDate) disabledMatchers.push({ before: minDate });
  if (maxDate) disabledMatchers.push({ after: maxDate });

  const triggerPadding = { sm: "pr-8", md: "pr-9", lg: "pr-10" }[size];
  const iconRight = { sm: "right-2", md: "right-3", lg: "right-3" }[size];

  return (
    <span ref={wrapRef} className="relative inline-block w-full">
      <Input
        type="text"
        id={id}
        required={required}
        disabled={disabled}
        placeholder={placeholder ?? "yyyy-mm-dd"}
        readOnly
        autoComplete="off"
        size={size}
        invalid={invalid}
        className={cn(triggerPadding, "cursor-pointer", className)}
        value={current}
        onClick={() => !disabled && setOpen((o) => !o)}
      />
      {name && <input type="hidden" name={name} value={current} />}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 inline-flex text-foreground-subtle",
          iconRight,
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
      </span>
      {open && (
        <div className="jz-datepicker-popover absolute left-0 top-full z-50 mt-1 rounded-md border border-border bg-surface dark:bg-surface-elevated p-2 shadow-md">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(d) => {
              commit(formatYmd(d));
              setOpen(false);
            }}
            disabled={
              disabledMatchers.length > 0 ? disabledMatchers : undefined
            }
            defaultMonth={selectedDate ?? minDate ?? new Date()}
            showOutsideDays
          />
          {current && (
            <div className="flex justify-end pt-1">
              <Button
                type="button"
                variant="link"
                size="sm"
                className="text-foreground-muted hover:text-foreground"
                onClick={() => {
                  commit("");
                  setOpen(false);
                }}
              >
                Clear
              </Button>
            </div>
          )}
        </div>
      )}
    </span>
  );
}

function parseYmd(s: string | undefined): Date | undefined {
  if (!s) return undefined;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return undefined;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

function formatYmd(d: Date | undefined): string {
  if (!d) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
