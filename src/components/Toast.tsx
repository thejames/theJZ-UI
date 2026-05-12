"use client";

/**
 * Toast — ephemeral notifications backed by Radix Toast.
 *
 * Usage:
 *   1. Wrap your app root in `<ToastProvider>` (renders the viewport).
 *   2. Call `useToast()` anywhere inside; invoke `toast({ title, description, variant })`.
 *
 * The provider is a thin wrapper over Radix's Toast.Provider that also holds
 * an internal queue. Each enqueued toast renders a `Toast` element scoped to
 * the viewport. For very advanced needs (custom layouts, persistent toasts),
 * the lower-level Radix exports (Toast, ToastTitle, etc.) are also available.
 */
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border-border bg-surface dark:bg-surface-elevated text-foreground",
        success: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200",
        danger:  "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200",
        info:    "border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-200",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export type ToastVariant = NonNullable<VariantProps<typeof toastVariants>["variant"]>;

export const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export interface ToastProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

export const Toast = forwardRef<
  ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitive.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitive.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

export const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitive.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-current bg-transparent px-3 text-xs font-medium transition-colors hover:bg-current/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
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

export const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitive.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    toast-close=""
    aria-label="Close"
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30",
      className,
    )}
    {...props}
  >
    <CloseIcon />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

// ───────────────────────── imperative API ─────────────────────────

export interface ToastInput {
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  /** Auto-dismiss after this many ms. Defaults to provider's `duration`. */
  duration?: number;
  action?: { label: string; onClick: () => void };
}

interface QueuedToast extends ToastInput {
  id: number;
  open: boolean;
}

interface ToastContextValue {
  toast: (input: ToastInput) => number;
  dismiss: (id: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return ctx;
}

export interface ToastProviderProps {
  children: ReactNode;
  /** Default auto-dismiss in ms. Default 5000. */
  duration?: number;
  /** Maximum simultaneous toasts. Older ones dismiss. Default 5. */
  limit?: number;
  swipeDirection?: "right" | "left" | "up" | "down";
}

export function ToastProvider({
  children,
  duration = 5000,
  limit = 5,
  swipeDirection = "right",
}: ToastProviderProps) {
  const [items, setItems] = useState<QueuedToast[]>([]);

  const dismiss = useCallback((id: number) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, open: false } : t)),
    );
  }, []);

  const toast = useCallback(
    (input: ToastInput): number => {
      const id = nextId();
      setItems((prev) => {
        const next = [...prev, { ...input, id, open: true }];
        if (next.length > limit) {
          const overflow = next.length - limit;
          for (let i = 0; i < overflow; i++) next[i].open = false;
        }
        return next;
      });
      return id;
    },
    [limit],
  );

  const ctx = useMemo<ToastContextValue>(
    () => ({ toast, dismiss }),
    [toast, dismiss],
  );

  // Reap closed toasts after their exit animation completes.
  useEffect(() => {
    const closed = items.filter((t) => !t.open);
    if (closed.length === 0) return;
    const timer = setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.open));
    }, 400);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <ToastContext.Provider value={ctx}>
      <ToastPrimitive.Provider duration={duration} swipeDirection={swipeDirection}>
        {children}
        {items.map((t) => (
          <Toast
            key={t.id}
            variant={t.variant}
            duration={t.duration}
            open={t.open}
            onOpenChange={(open) => {
              if (!open) dismiss(t.id);
            }}
          >
            <div className="flex-1 min-w-0">
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              {t.description && <ToastDescription>{t.description}</ToastDescription>}
            </div>
            {t.action && (
              <ToastAction altText={t.action.label} onClick={t.action.onClick}>
                {t.action.label}
              </ToastAction>
            )}
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

let _id = 0;
function nextId() {
  return ++_id;
}
