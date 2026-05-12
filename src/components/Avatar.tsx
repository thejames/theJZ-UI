/**
 * Avatar family — image with text fallback, plus AvatarGroup for stacked rows.
 *
 * Use `<Avatar><AvatarImage src=.../><AvatarFallback>JZ</AvatarFallback></Avatar>`.
 * Image loading errors automatically fall through to the fallback. The
 * fallback shows immediately while the image loads, then fades out on
 * successful load to avoid a flash of empty avatar.
 */
import {
  forwardRef,
  useEffect,
  useState,
  type HTMLAttributes,
  type ImgHTMLAttributes,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden bg-surface-muted text-foreground-muted select-none",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  },
);

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, shape, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(avatarVariants({ size, shape }), className)}
      {...props}
    />
  ),
);
Avatar.displayName = "Avatar";

export interface AvatarImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  /** Override the default error/loaded behavior. */
  onLoadingStatusChange?: (status: "idle" | "loading" | "loaded" | "error") => void;
}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, onLoadingStatusChange, alt = "", ...props }, ref) => {
    const [status, setStatus] = useState<
      "idle" | "loading" | "loaded" | "error"
    >(src ? "loading" : "idle");

    useEffect(() => {
      onLoadingStatusChange?.(status);
    }, [status, onLoadingStatusChange]);

    if (!src || status === "error") return null;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity",
          status === "loaded" ? "opacity-100" : "opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
AvatarImage.displayName = "AvatarImage";

export type AvatarFallbackProps = HTMLAttributes<HTMLSpanElement>;

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center font-medium uppercase",
        className,
      )}
      {...props}
    />
  ),
);
AvatarFallback.displayName = "AvatarFallback";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Negative-margin overlap between avatars. Default "md". */
  spacing?: "tight" | "md" | "loose";
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, spacing = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center",
        spacing === "tight" && "[&>*]:-ml-3 [&>*:first-child]:ml-0",
        spacing === "md" && "[&>*]:-ml-2 [&>*:first-child]:ml-0",
        spacing === "loose" && "[&>*]:-ml-1 [&>*:first-child]:ml-0",
        "[&>*]:ring-2 [&>*]:ring-background",
        className,
      )}
      {...props}
    />
  ),
);
AvatarGroup.displayName = "AvatarGroup";
