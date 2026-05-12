"use client";

/**
 * Combobox — searchable single-select dropdown.
 *
 * A packaged composition of Popover + Command for the most common "pick one
 * value from a long list" pattern. For a fully custom layout (multi-select,
 * grouped items, custom rendering), drop down to the underlying primitives
 * directly: <Popover> + <Command> + <CommandInput> + <CommandList>.
 *
 * Example:
 *   <Combobox
 *     options={[{ value: "ts", label: "TypeScript" }, ...]}
 *     value={value}
 *     onValueChange={setValue}
 *     placeholder="Pick a language..."
 *   />
 */
import {
  forwardRef,
  useState,
  type ReactNode,
} from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./Command";
import { cn } from "../lib/cn";

export interface ComboboxOption {
  value: string;
  label: string;
  /** Optional secondary text shown muted next to the label. */
  hint?: ReactNode;
  /** Optional leading icon. */
  icon?: ReactNode;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Placeholder for the trigger button when no value is selected. */
  placeholder?: string;
  /** Placeholder for the search input inside the popover. */
  searchPlaceholder?: string;
  /** Message when no option matches the current query. Default "No results." */
  emptyMessage?: ReactNode;
  /** Trigger button width. Set to "trigger" to match Popover content to trigger. */
  width?: string | number;
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
  size?: "sm" | "md" | "lg";
  name?: string;
  id?: string;
}

const triggerSize = {
  sm: "h-8 px-3 text-sm rounded-sm",
  md: "h-10 px-3 text-base rounded-md",
  lg: "h-12 px-4 text-lg rounded-lg",
};

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="ml-2 shrink-0 opacity-60"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Combobox = forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      defaultValue,
      onValueChange,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      emptyMessage = "No results.",
      width,
      className,
      disabled,
      invalid,
      size = "md",
      name,
      id,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internal, setInternal] = useState<string>(defaultValue ?? "");
    const current = isControlled ? (value ?? "") : internal;
    const [open, setOpen] = useState(false);

    const selected = options.find((o) => o.value === current);

    const commit = (next: string) => {
      if (!isControlled) setInternal(next);
      onValueChange?.(next);
      setOpen(false);
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            id={id}
            type="button"
            role="combobox"
            aria-expanded={open}
            aria-invalid={invalid || undefined}
            disabled={disabled}
            className={cn(
              "inline-flex w-full items-center justify-between bg-input text-foreground border border-border transition-colors",
              "focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30",
              "disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed",
              invalid && "border-danger focus:border-danger focus:ring-danger/30",
              triggerSize[size],
              !selected && "text-foreground-subtle",
              className,
            )}
            style={typeof width === "number" ? { width } : width ? { width } : undefined}
          >
            <span className="truncate">
              {selected ? selected.label : placeholder}
            </span>
            <ChevronDown />
          </button>
        </PopoverTrigger>
        {name && <input type="hidden" name={name} value={current} />}
        <PopoverContent
          className="w-[--radix-popover-trigger-width] min-w-[12rem] p-0"
          align="start"
          sideOffset={4}
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.label}
                    disabled={opt.disabled}
                    onSelect={() => commit(opt.value)}
                  >
                    {opt.icon}
                    <span className="flex-1 truncate">{opt.label}</span>
                    {opt.hint && (
                      <span className="text-xs text-foreground-subtle">{opt.hint}</span>
                    )}
                    {opt.value === current && (
                      <span className="text-brand-700 dark:text-brand-300">
                        <CheckIcon />
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
Combobox.displayName = "Combobox";
