"use client";

/**
 * TimeInput — clock input with a native picker on touch devices and a
 * themed column popover on desktop.
 *
 * Wire format is always 24-hour `HH:MM`; the `display` prop controls only the
 * visible UI (12h adds an AM/PM column). Values cross the prop boundary as
 * strings, so they're safe for server actions and DB columns.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { cn } from "../lib/cn";

export interface TimeInputProps {
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (next: string) => void;
  id?: string;
  required?: boolean;
  min?: string;
  max?: string;
  /** Minute step for the popover columns. Default 5. Native input honors this too. */
  step?: number;
  /** Visible format. Wire value is always 24h "HH:MM". Default "24h". */
  display?: "12h" | "24h";
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
}

const isControlled = (p: TimeInputProps) => p.value !== undefined;

export function TimeInput(props: TimeInputProps) {
  const {
    name,
    defaultValue = "",
    value,
    onChange,
    id,
    required,
    min,
    max,
    step = 5,
    display = "24h",
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
        type="time"
        id={id}
        name={name}
        required={required}
        min={min}
        max={max}
        step={step * 60}
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

  const parsed = parseHm(current);
  const minMins = parseHm(min);
  const maxMins = parseHm(max);

  const triggerPadding = { sm: "pr-8", md: "pr-9", lg: "pr-10" }[size];
  const iconRight = { sm: "right-2", md: "right-3", lg: "right-3" }[size];

  const triggerText = useMemo(
    () => (current ? formatDisplay(current, display) : ""),
    [current, display],
  );

  return (
    <span ref={wrapRef} className="relative inline-block w-full">
      <Input
        type="text"
        id={id}
        required={required}
        disabled={disabled}
        placeholder={placeholder ?? (display === "12h" ? "h:mm am" : "hh:mm")}
        readOnly
        autoComplete="off"
        size={size}
        invalid={invalid}
        className={cn(triggerPadding, "cursor-pointer", className)}
        value={triggerText}
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
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>
      </span>
      {open && (
        <div className="jz-timepicker-popover absolute left-0 top-full z-50 mt-1 rounded-md border border-border bg-surface dark:bg-surface-elevated p-2 shadow-md">
          <TimeColumns
            hour={parsed?.h ?? null}
            minute={parsed?.m ?? null}
            display={display}
            step={step}
            minMins={minMins ? minMins.h * 60 + minMins.m : null}
            maxMins={maxMins ? maxMins.h * 60 + maxMins.m : null}
            onPick={(h, m) => {
              commit(formatHm(h, m));
            }}
          />
          {current && (
            <div className="flex justify-end pt-1 border-t border-border-subtle mt-1">
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

interface TimeColumnsProps {
  hour: number | null;
  minute: number | null;
  display: "12h" | "24h";
  step: number;
  minMins: number | null;
  maxMins: number | null;
  onPick: (h: number, m: number) => void;
}

function TimeColumns({
  hour,
  minute,
  display,
  step,
  minMins,
  maxMins,
  onPick,
}: TimeColumnsProps) {
  const minutes = useMemo(() => {
    const out: number[] = [];
    for (let m = 0; m < 60; m += step) out.push(m);
    return out;
  }, [step]);

  const is12 = display === "12h";
  const hours = useMemo(
    () => (is12 ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : range(0, 24)),
    [is12],
  );

  const currentPeriod: "am" | "pm" =
    hour == null ? "am" : hour < 12 ? "am" : "pm";

  const displayedHour = hour == null ? null : is12 ? to12(hour) : hour;

  const pickHour = (h12or24: number) => {
    const h = is12 ? from12(h12or24, currentPeriod) : h12or24;
    const m = minute ?? 0;
    if (isDisabled(h, m, minMins, maxMins)) return;
    onPick(h, m);
  };

  const pickMinute = (m: number) => {
    const h = hour ?? (is12 ? from12(12, "am") : 0);
    if (isDisabled(h, m, minMins, maxMins)) return;
    onPick(h, m);
  };

  const pickPeriod = (p: "am" | "pm") => {
    const h12 = displayedHour ?? 12;
    const h = from12(h12, p);
    const m = minute ?? 0;
    if (isDisabled(h, m, minMins, maxMins)) return;
    onPick(h, m);
  };

  return (
    <div className="flex gap-1">
      <Column label="Hr">
        {hours.map((h) => {
          const wireH = is12 ? from12(h, currentPeriod) : h;
          const disabled = isDisabled(
            wireH,
            minute ?? 0,
            minMins,
            maxMins,
          );
          return (
            <TimeCell
              key={`h-${h}`}
              selected={displayedHour === h}
              disabled={disabled}
              onClick={() => pickHour(h)}
            >
              {is12 ? String(h) : pad(h)}
            </TimeCell>
          );
        })}
      </Column>
      <Column label="Min">
        {minutes.map((m) => {
          const h = hour ?? (is12 ? from12(12, "am") : 0);
          const disabled = isDisabled(h, m, minMins, maxMins);
          return (
            <TimeCell
              key={`m-${m}`}
              selected={minute === m}
              disabled={disabled}
              onClick={() => pickMinute(m)}
            >
              {pad(m)}
            </TimeCell>
          );
        })}
      </Column>
      {is12 && (
        <Column label="">
          {(["am", "pm"] as const).map((p) => {
            const h = from12(displayedHour ?? 12, p);
            const disabled = isDisabled(h, minute ?? 0, minMins, maxMins);
            return (
              <TimeCell
                key={p}
                selected={currentPeriod === p && hour != null}
                disabled={disabled}
                onClick={() => pickPeriod(p)}
              >
                {p.toUpperCase()}
              </TimeCell>
            );
          })}
        </Column>
      )}
    </div>
  );
}

function Column({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-[0.65rem] uppercase tracking-wide text-foreground-subtle text-center pb-1 min-h-[1rem]">
        {label}
      </div>
      <div className="flex flex-col gap-0.5 max-h-56 overflow-y-auto pr-1">
        {children}
      </div>
    </div>
  );
}

function TimeCell({
  selected,
  disabled,
  onClick,
  children,
}: {
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "w-10 px-2 py-1 rounded-md text-sm tabular-nums text-center transition-colors",
        "hover:bg-surface-muted",
        selected &&
          "bg-brand-700 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-500",
        disabled && "opacity-40 cursor-not-allowed hover:bg-transparent",
      )}
    >
      {children}
    </button>
  );
}

function parseHm(s: string | undefined): { h: number; m: number } | undefined {
  if (!s) return undefined;
  const match = /^(\d{2}):(\d{2})$/.exec(s);
  if (!match) return undefined;
  const h = Number(match[1]);
  const m = Number(match[2]);
  if (h > 23 || m > 59) return undefined;
  return { h, m };
}

function formatHm(h: number, m: number): string {
  return `${pad(h)}:${pad(m)}`;
}

function formatDisplay(hm: string, display: "12h" | "24h"): string {
  const p = parseHm(hm);
  if (!p) return "";
  if (display === "24h") return formatHm(p.h, p.m);
  const period = p.h < 12 ? "AM" : "PM";
  const h12 = to12(p.h);
  return `${h12}:${pad(p.m)} ${period}`;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function to12(h24: number): number {
  const h = h24 % 12;
  return h === 0 ? 12 : h;
}

function from12(h12: number, period: "am" | "pm"): number {
  const base = h12 % 12;
  return period === "pm" ? base + 12 : base;
}

function range(start: number, end: number): number[] {
  const out: number[] = [];
  for (let i = start; i < end; i++) out.push(i);
  return out;
}

function isDisabled(
  h: number,
  m: number,
  minMins: number | null,
  maxMins: number | null,
): boolean {
  const total = h * 60 + m;
  if (minMins != null && total < minMins) return true;
  if (maxMins != null && total > maxMins) return true;
  return false;
}
