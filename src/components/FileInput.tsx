"use client";

/**
 * FileInput — themed file picker that hides the native control behind a
 * styled trigger and shows the selected filename(s).
 *
 * Renders a visually-hidden `<input type="file">` so the browser still owns
 * the file-picker dialog (mandatory for security), while the surface matches
 * the rest of the design system. Supports single + multiple selection, accept
 * filter, and form submission via the native `name` prop.
 *
 * For uncontrolled use, just listen to `onChange`. For more advanced cases
 * (drag-and-drop, upload progress), keep using a native input and style your
 * own surface — this component is intentionally simple.
 */
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const surfaceVariants = cva(
  "flex w-full items-stretch overflow-hidden rounded-md border border-border bg-input text-foreground transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "h-8 rounded-sm text-sm",
        md: "h-10 rounded-md text-base",
        lg: "h-12 rounded-lg text-lg",
      },
      invalid: {
        true: "border-danger focus-within:border-danger focus-within:ring-danger/30",
        false: "",
      },
    },
    defaultVariants: { size: "md", invalid: false },
  },
);

export interface FileInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof surfaceVariants> {
  /** Label shown on the trigger button. Default "Choose file". */
  buttonText?: string;
  /** Text shown when no file is selected. Default "No file chosen". */
  placeholder?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      size,
      invalid,
      buttonText = "Choose file",
      placeholder = "No file chosen",
      multiple,
      disabled,
      onChange,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [label, setLabel] = useState<string>(placeholder);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
          setLabel(placeholder);
        } else if (files.length === 1) {
          setLabel(files[0].name);
        } else {
          setLabel(`${files.length} files selected`);
        }
        onChange?.(e);
      },
      [onChange, placeholder],
    );

    return (
      <div className={cn(surfaceVariants({ size, invalid }), className)}>
        <button
          type="button"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "inline-flex shrink-0 items-center gap-1 border-r border-border bg-surface-muted px-3 font-medium text-foreground-muted transition-colors",
            "hover:bg-surface-muted-stronger hover:text-foreground",
            "focus-visible:outline-none focus-visible:bg-surface-muted-stronger",
            "disabled:opacity-50 disabled:pointer-events-none",
          )}
        >
          {buttonText}
        </button>
        <span
          className={cn(
            "flex flex-1 items-center truncate px-3 text-foreground-muted",
            label === placeholder && "text-foreground-subtle",
          )}
          aria-hidden="true"
        >
          {label}
        </span>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />
      </div>
    );
  },
);
FileInput.displayName = "FileInput";
