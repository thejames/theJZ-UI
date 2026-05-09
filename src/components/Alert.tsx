import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";

type AlertVariant = "info" | "success" | "warning" | "danger";

const alertVariants = cva(
  "relative flex items-start gap-3 rounded-md border p-4 text-sm transition-colors",
  {
    variants: {
      variant: {
        info: "bg-cyan-50 border-cyan-200 text-cyan-900 dark:bg-cyan-950/40 dark:border-cyan-800 dark:text-cyan-200",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950/40 dark:border-yellow-800 dark:text-yellow-200",
        danger: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  /**
   * `undefined` → auto-icon for the variant. `false` → no icon. A ReactNode
   * → custom override. The default span auto-sizes any descendant svg to size-5.
   */
  icon?: ReactNode | false;
  onClose?: () => void;
}

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const SuccessIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const WarningIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const DangerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const defaultIconForVariant = (variant: AlertVariant = "info") => {
  switch (variant) {
    case "success":
      return <SuccessIcon />;
    case "warning":
      return <WarningIcon />;
    case "danger":
      return <DangerIcon />;
    case "info":
    default:
      return <InfoIcon />;
  }
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant, title, icon, onClose, children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon !== false && (
        <span
          className="shrink-0 mt-0.5 [&_svg]:size-5"
          aria-hidden="true"
        >
          {icon ?? defaultIconForVariant(variant)}
        </span>
      )}
      <div className="flex-1 min-w-0">
        {title && <div className="font-semibold mb-1">{title}</div>}
        {children}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          className="shrink-0 -mt-1 -mr-1 p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-current/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 transition-opacity [&_svg]:size-4"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  ),
);
Alert.displayName = "Alert";
