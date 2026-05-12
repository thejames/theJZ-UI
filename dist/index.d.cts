import * as react from 'react';
import react__default, { ButtonHTMLAttributes, HTMLAttributes, LabelHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ComponentPropsWithoutRef, ReactNode, SVGAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, LiHTMLAttributes, DataHTMLAttributes, OptionHTMLAttributes, BlockquoteHTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ToastPrimitive from '@radix-ui/react-toast';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { DayPickerProps } from 'react-day-picker';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "outline-primary" | "outline-secondary" | "outline-accent" | "outline-success" | "outline-danger" | "outline-warning" | "outline-info" | "ghost" | "link" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    /**
     * Shows an inline spinner, sets aria-busy, and suppresses clicks while truthy.
     * Ignored when `asChild` is true — Radix Slot's single-child contract is
     * incompatible with injecting an extra spinner element.
     */
    loading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    "aria-label": string;
}
declare const ButtonGroup: react.ForwardRefExoticComponent<ButtonGroupProps & react.RefAttributes<HTMLDivElement>>;

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
declare const Label: react.ForwardRefExoticComponent<LabelProps & react.RefAttributes<HTMLLabelElement>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

type FormFieldProps = HTMLAttributes<HTMLDivElement>;
declare const FormField: react.ForwardRefExoticComponent<FormFieldProps & react.RefAttributes<HTMLDivElement>>;

type FormHelperTextProps = HTMLAttributes<HTMLParagraphElement>;
declare const FormHelperText: react.ForwardRefExoticComponent<FormHelperTextProps & react.RefAttributes<HTMLParagraphElement>>;

type FormErrorMessageProps = HTMLAttributes<HTMLParagraphElement>;
declare const FormErrorMessage: react.ForwardRefExoticComponent<FormErrorMessageProps & react.RefAttributes<HTMLParagraphElement>>;

type FormErrorProps = HTMLAttributes<HTMLDivElement>;
/**
 * Form-level error display. Lives outside any FormField — used for
 * submission failures, network errors, or cross-field validation results.
 * Carries role="alert" so assistive tech announces the message; pair with
 * FormErrorMessage (no role) for field-scoped errors associated via
 * aria-describedby.
 */
declare const FormError: react.ForwardRefExoticComponent<FormErrorProps & react.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "children"> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLButtonElement>>;

type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
declare const RadioGroup: react.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
interface RadioProps extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, "children"> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLButtonElement>>;

interface SwitchProps extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, "children"> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLButtonElement>>;

type AlertVariant = "info" | "success" | "warning" | "danger";
interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    title?: string;
    /**
     * `undefined` → auto-icon for the variant. `false` → no icon. A ReactNode
     * → custom override. The default span auto-sizes any descendant svg to size-5.
     */
    icon?: ReactNode | false;
    onClose?: () => void;
}
declare const Alert: react.ForwardRefExoticComponent<AlertProps & react.RefAttributes<HTMLDivElement>>;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "primary" | "secondary" | "accent" | "success" | "danger" | "warning" | "info";
    soft?: boolean;
    size?: "sm" | "md";
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const cardVariants: (props?: ({
    elevation?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
type CardHeaderProps = HTMLAttributes<HTMLDivElement>;
declare const CardHeader: react.ForwardRefExoticComponent<CardHeaderProps & react.RefAttributes<HTMLDivElement>>;
type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;
declare const CardTitle: react.ForwardRefExoticComponent<CardTitleProps & react.RefAttributes<HTMLHeadingElement>>;
type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
declare const CardDescription: react.ForwardRefExoticComponent<CardDescriptionProps & react.RefAttributes<HTMLParagraphElement>>;
type CardBodyProps = HTMLAttributes<HTMLDivElement>;
declare const CardBody: react.ForwardRefExoticComponent<CardBodyProps & react.RefAttributes<HTMLDivElement>>;
type CardFooterProps = HTMLAttributes<HTMLDivElement>;
/**
 * Bottom section of a Card, typically containing action buttons.
 * Renders with a top border for visual separation from CardBody. Note: a Card
 * with only a CardFooter (no Header or Body above) will show a top border
 * with nothing above it — not a recommended layout.
 */
declare const CardFooter: react.ForwardRefExoticComponent<CardFooterProps & react.RefAttributes<HTMLDivElement>>;

declare const headingVariants: (props?: ({
    size?: "lg" | "base" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type HeadingSize = NonNullable<VariantProps<typeof headingVariants>["size"]>;
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: HeadingSize;
}
declare const Heading: react__default.ForwardRefExoticComponent<HeadingProps & react__default.RefAttributes<HTMLHeadingElement>>;

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
}
declare const Separator: react.ForwardRefExoticComponent<SeparatorProps & react.RefAttributes<HTMLDivElement>>;

type CodeProps = HTMLAttributes<HTMLElement>;
declare const Code: react.ForwardRefExoticComponent<CodeProps & react.RefAttributes<HTMLElement>>;

interface KbdProps extends HTMLAttributes<HTMLElement> {
    size?: "sm" | "md";
}
declare const Kbd: react.ForwardRefExoticComponent<KbdProps & react.RefAttributes<HTMLElement>>;

interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
    size?: "sm" | "md" | "lg";
    label?: string;
}
declare const Spinner: react.ForwardRefExoticComponent<SpinnerProps & react.RefAttributes<SVGSVGElement>>;

declare const textVariants: (props?: ({
    variant?: "small" | "body" | "caption" | "muted" | "lead" | "subtle" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
}
declare const Text: react.ForwardRefExoticComponent<TextProps & react.RefAttributes<HTMLParagraphElement>>;

interface DateInputProps {
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
declare function DateInput(props: DateInputProps): react_jsx_runtime.JSX.Element;

interface TimeInputProps {
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
declare function TimeInput(props: TimeInputProps): react_jsx_runtime.JSX.Element;

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    /** Alternates row background on `<tbody>` rows. */
    striped?: boolean;
    /** Highlights `<tbody>` rows on hover. */
    hover?: boolean;
    /** Adds borders around every cell. */
    bordered?: boolean;
    /** Density preset for cell padding. Default "md". */
    density?: "sm" | "md" | "lg";
    /** Outer wrapper className (the scrolling container). */
    wrapperClassName?: string;
}
declare const Table: react.ForwardRefExoticComponent<TableProps & react.RefAttributes<HTMLTableElement>>;
type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;
declare const TableHeader: react.ForwardRefExoticComponent<TableSectionProps & react.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: react.ForwardRefExoticComponent<TableSectionProps & react.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: react.ForwardRefExoticComponent<TableSectionProps & react.RefAttributes<HTMLTableSectionElement>>;
type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
declare const TableRow: react.ForwardRefExoticComponent<TableRowProps & react.RefAttributes<HTMLTableRowElement>>;
type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
declare const TableHead: react.ForwardRefExoticComponent<TableHeadProps & react.RefAttributes<HTMLTableCellElement>>;
type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
declare const TableCell: react.ForwardRefExoticComponent<TableCellProps & react.RefAttributes<HTMLTableCellElement>>;
type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;
declare const TableCaption: react.ForwardRefExoticComponent<TableCaptionProps & react.RefAttributes<HTMLTableCaptionElement>>;

type PaginationProps = HTMLAttributes<HTMLElement>;
declare const Pagination: react.ForwardRefExoticComponent<PaginationProps & react.RefAttributes<HTMLElement>>;
type PaginationListProps = HTMLAttributes<HTMLUListElement>;
declare const PaginationList: react.ForwardRefExoticComponent<PaginationListProps & react.RefAttributes<HTMLUListElement>>;
type PaginationItemProps = HTMLAttributes<HTMLLIElement>;
declare const PaginationItem: react.ForwardRefExoticComponent<PaginationItemProps & react.RefAttributes<HTMLLIElement>>;
interface PaginationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
    size?: "sm" | "md";
}
declare const PaginationLink: react.ForwardRefExoticComponent<PaginationLinkProps & react.RefAttributes<HTMLAnchorElement>>;
interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    size?: "sm" | "md";
}
/**
 * Button-rendered alternative to PaginationLink for cases where you handle
 * navigation in JS (no anchor URL). Same visuals.
 */
declare const PaginationButton: react.ForwardRefExoticComponent<PaginationButtonProps & react.RefAttributes<HTMLButtonElement>>;
declare const PaginationPrev: react.ForwardRefExoticComponent<PaginationButtonProps & react.RefAttributes<HTMLButtonElement>>;
declare const PaginationNext: react.ForwardRefExoticComponent<PaginationButtonProps & react.RefAttributes<HTMLButtonElement>>;
declare const PaginationEllipsis: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & react.RefAttributes<HTMLSpanElement>>;
/**
 * Compute a list of page tokens for a pager UI.
 *
 *   buildPageList(7, 20)   →  [1, "...", 5, 6, 7, 8, 9, "...", 20]
 *   buildPageList(2, 20)   →  [1, 2, 3, 4, 5, "...", 20]
 *   buildPageList(1, 3)    →  [1, 2, 3]
 *
 * `siblings` controls how many neighbors flank the current page (default 1).
 * `boundaries` controls how many pages stay anchored at the start/end (default 1).
 */
declare function buildPageList(page: number, pageCount: number, options?: {
    siblings?: number;
    boundaries?: number;
}): Array<number | "...">;
interface SimplePaginationProps extends Omit<PaginationProps, "onChange"> {
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    siblings?: number;
    boundaries?: number;
    size?: "sm" | "md";
    /** Hide the Previous/Next chevrons. Default false. */
    hidePrevNext?: boolean;
}
/**
 * Drop-in pager with built-in page-list logic. For full control over each
 * link's rendering (e.g., Next.js `<Link>`, custom URLs), compose the
 * primitives directly instead.
 */
declare const SimplePagination: react.ForwardRefExoticComponent<SimplePaginationProps & react.RefAttributes<HTMLElement>>;

declare const trackVariants$1: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const barVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "success" | "danger" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "color">, VariantProps<typeof trackVariants$1>, VariantProps<typeof barVariants> {
    /** 0..max. `undefined` or `null` renders an indeterminate bar. */
    value?: number | null;
    max?: number;
    /** Accessible label describing what's being measured. */
    label?: string;
}
declare const Progress: react.ForwardRefExoticComponent<ProgressProps & react.RefAttributes<HTMLDivElement>>;

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /** Render as a circle (use with explicit size classes). */
    circle?: boolean;
    /** Animation style. "pulse" is calmer; "shimmer" sweeps a gradient. */
    animation?: "pulse" | "shimmer" | "none";
}
declare const Skeleton: react.ForwardRefExoticComponent<SkeletonProps & react.RefAttributes<HTMLDivElement>>;

declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof avatarVariants> {
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLSpanElement>>;
interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Override the default error/loaded behavior. */
    onLoadingStatusChange?: (status: "idle" | "loading" | "loaded" | "error") => void;
}
declare const AvatarImage: react.ForwardRefExoticComponent<AvatarImageProps & react.RefAttributes<HTMLImageElement>>;
type AvatarFallbackProps = HTMLAttributes<HTMLSpanElement>;
declare const AvatarFallback: react.ForwardRefExoticComponent<AvatarFallbackProps & react.RefAttributes<HTMLSpanElement>>;
interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
    /** Negative-margin overlap between avatars. Default "md". */
    spacing?: "tight" | "md" | "loose";
}
declare const AvatarGroup: react.ForwardRefExoticComponent<AvatarGroupProps & react.RefAttributes<HTMLDivElement>>;

type BreadcrumbProps = HTMLAttributes<HTMLElement> & {
    /** Override the visual separator between items. Default is a chevron. */
    separator?: ReactNode;
};
declare const Breadcrumb: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & {
    /** Override the visual separator between items. Default is a chevron. */
    separator?: ReactNode;
} & react.RefAttributes<HTMLElement>>;
type BreadcrumbListProps = HTMLAttributes<HTMLOListElement>;
declare const BreadcrumbList: react.ForwardRefExoticComponent<BreadcrumbListProps & react.RefAttributes<HTMLOListElement>>;
type BreadcrumbItemProps = HTMLAttributes<HTMLLIElement>;
declare const BreadcrumbItem: react.ForwardRefExoticComponent<BreadcrumbItemProps & react.RefAttributes<HTMLLIElement>>;
interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    asChild?: boolean;
}
declare const BreadcrumbLink: react.ForwardRefExoticComponent<BreadcrumbLinkProps & react.RefAttributes<HTMLAnchorElement>>;
type BreadcrumbPageProps = ComponentPropsWithoutRef<"span">;
declare const BreadcrumbPage: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
type BreadcrumbSeparatorProps = HTMLAttributes<HTMLLIElement>;
declare const BreadcrumbSeparator: react.ForwardRefExoticComponent<BreadcrumbSeparatorProps & react.RefAttributes<HTMLLIElement>>;
type BreadcrumbEllipsisProps = HTMLAttributes<HTMLSpanElement>;
declare const BreadcrumbEllipsis: react.ForwardRefExoticComponent<BreadcrumbEllipsisProps & react.RefAttributes<HTMLSpanElement>>;

declare const Dialog: react.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: react.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    /** Hide the built-in × close button in the top-right. */
    hideClose?: boolean;
}
declare const DialogContent: react.ForwardRefExoticComponent<DialogContentProps & react.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

declare const TooltipProvider: react.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: react.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: react.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: react.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Popover: react.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: react.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: react.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & react.RefAttributes<HTMLDivElement>>;
declare const PopoverClose: react.ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: react.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Tabs: react.ForwardRefExoticComponent<TabsPrimitive.TabsProps & react.RefAttributes<HTMLDivElement>>;
declare const TabsList: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Accordion: react.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & react.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const DropdownMenu: react.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: react.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: react.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: react.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const toastVariants: (props?: ({
    variant?: "success" | "danger" | "warning" | "info" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ToastVariant = NonNullable<VariantProps<typeof toastVariants>["variant"]>;
declare const ToastViewport: react.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastViewportProps & react.RefAttributes<HTMLOListElement>, "ref"> & react.RefAttributes<HTMLOListElement>>;
interface ToastProps extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root>, VariantProps<typeof toastVariants> {
}
declare const Toast: react.ForwardRefExoticComponent<ToastProps & react.RefAttributes<HTMLLIElement>>;
declare const ToastTitle: react.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastTitleProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: react.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastDescriptionProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ToastAction: react.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastActionProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: react.ForwardRefExoticComponent<Omit<ToastPrimitive.ToastCloseProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
interface ToastInput {
    title?: ReactNode;
    description?: ReactNode;
    variant?: ToastVariant;
    /** Auto-dismiss after this many ms. Defaults to provider's `duration`. */
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
interface ToastContextValue {
    toast: (input: ToastInput) => number;
    dismiss: (id: number) => void;
}
declare function useToast(): ToastContextValue;
interface ToastProviderProps {
    children: ReactNode;
    /** Default auto-dismiss in ms. Default 5000. */
    duration?: number;
    /** Maximum simultaneous toasts. Older ones dismiss. Default 5. */
    limit?: number;
    swipeDirection?: "right" | "left" | "up" | "down";
}
declare function ToastProvider({ children, duration, limit, swipeDirection, }: ToastProviderProps): react_jsx_runtime.JSX.Element;

interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
    flush?: boolean;
    horizontal?: boolean;
}
declare const ListGroup: react.ForwardRefExoticComponent<ListGroupProps & react.RefAttributes<HTMLUListElement>>;
interface ListGroupItemProps extends LiHTMLAttributes<HTMLLIElement> {
    /** Apply hover/focus styling for items that wrap a link or have an onClick. */
    interactive?: boolean;
    /** Highlight this item as the current selection. */
    active?: boolean;
    /** Dim and disable interaction. */
    disabled?: boolean;
    /** Contextual status color (Bootstrap's `list-group-item-*` variants). */
    variant?: "success" | "danger" | "warning" | "info";
}
declare const ListGroupItem: react.ForwardRefExoticComponent<ListGroupItemProps & react.RefAttributes<HTMLLIElement>>;

declare const groupVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputGroupProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof groupVariants> {
}
declare const InputGroup: react.ForwardRefExoticComponent<InputGroupProps & react.RefAttributes<HTMLDivElement>>;
type InputGroupAddonProps = HTMLAttributes<HTMLSpanElement>;
declare const InputGroupAddon: react.ForwardRefExoticComponent<InputGroupAddonProps & react.RefAttributes<HTMLSpanElement>>;
interface InputGroupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const InputGroupButton: react.ForwardRefExoticComponent<InputGroupButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const trackVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const rangeVariants: (props?: ({
    variant?: "primary" | "accent" | "success" | "danger" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SliderProps extends ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, VariantProps<typeof trackVariants>, VariantProps<typeof rangeVariants> {
}
declare const Slider: react.ForwardRefExoticComponent<SliderProps & react.RefAttributes<HTMLSpanElement>>;

declare const Sheet: react.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: react.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
    hideClose?: boolean;
}
declare const SheetContent: react.ForwardRefExoticComponent<SheetContentProps & react.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

type NavVariant = "default" | "underline" | "pills";
interface NavProps extends HTMLAttributes<HTMLElement> {
    variant?: NavVariant;
    vertical?: boolean;
}
declare const Nav: react.ForwardRefExoticComponent<NavProps & react.RefAttributes<HTMLElement>>;
type NavItemProps = HTMLAttributes<HTMLDivElement>;
declare const NavItem: react.ForwardRefExoticComponent<NavItemProps & react.RefAttributes<HTMLDivElement>>;
interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    disabled?: boolean;
    /** Render children as the root (e.g., a Next.js `<Link>`). */
    asChild?: boolean;
}
declare const NavLink: react.ForwardRefExoticComponent<NavLinkProps & react.RefAttributes<HTMLAnchorElement>>;

interface NavbarProps extends HTMLAttributes<HTMLElement> {
    /** Pin to the top of the viewport with a subtle blur. */
    sticky?: boolean;
    /** Remove the bottom border. */
    borderless?: boolean;
}
declare const Navbar: react.ForwardRefExoticComponent<NavbarProps & react.RefAttributes<HTMLElement>>;
interface NavbarBrandProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    asChild?: boolean;
}
declare const NavbarBrand: react.ForwardRefExoticComponent<NavbarBrandProps & react.RefAttributes<HTMLAnchorElement>>;
declare const NavbarContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const NavbarActions: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

declare const HoverCard: react.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: react.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & react.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: react.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const ContextMenu: react.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: react.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & react.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: react.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: react.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: react.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: react.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubTrigger: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: react.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ToggleVariantProps = VariantProps<typeof toggleVariants>;
interface ToggleProps extends ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, ToggleVariantProps {
}
declare const Toggle: react.ForwardRefExoticComponent<ToggleProps & react.RefAttributes<HTMLButtonElement>>;
type ToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & ToggleVariantProps;
declare const ToggleGroup: react.ForwardRefExoticComponent<ToggleGroupProps & react.RefAttributes<HTMLDivElement>>;
interface ToggleGroupItemProps extends ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>, ToggleVariantProps {
}
declare const ToggleGroupItem: react.ForwardRefExoticComponent<ToggleGroupItemProps & react.RefAttributes<HTMLButtonElement>>;

type CarouselApi = UseEmblaCarouselType[1];
type EmblaOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>;
interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    opts?: EmblaOptions;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
}
declare const Carousel: react.ForwardRefExoticComponent<CarouselProps & react.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
interface CarouselNavButtonProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}
declare const CarouselPrevious: react.ForwardRefExoticComponent<CarouselNavButtonProps & react.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: react.ForwardRefExoticComponent<CarouselNavButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const surfaceVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">, VariantProps<typeof surfaceVariants> {
    /** Label shown on the trigger button. Default "Choose file". */
    buttonText?: string;
    /** Text shown when no file is selected. Default "No file chosen". */
    placeholder?: string;
}
declare const FileInput: react.ForwardRefExoticComponent<FileInputProps & react.RefAttributes<HTMLInputElement>>;

interface ColorInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    size?: "sm" | "md" | "lg";
    invalid?: boolean;
    /** Show the current hex value next to the swatch. Default true. */
    showHex?: boolean;
}
declare const ColorInput: react.ForwardRefExoticComponent<ColorInputProps & react.RefAttributes<HTMLInputElement>>;

type DatalistProps = DataHTMLAttributes<HTMLDataListElement>;
declare const Datalist: react.ForwardRefExoticComponent<DatalistProps & react.RefAttributes<HTMLDataListElement>>;
type DatalistOptionProps = OptionHTMLAttributes<HTMLOptionElement>;
declare const DatalistOption: react.ForwardRefExoticComponent<DatalistOptionProps & react.RefAttributes<HTMLOptionElement>>;

interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
    align?: "start" | "center" | "end";
}
declare const Blockquote: react.ForwardRefExoticComponent<BlockquoteProps & react.RefAttributes<HTMLQuoteElement>>;
type CiteProps = HTMLAttributes<HTMLElement>;
declare const Cite: react.ForwardRefExoticComponent<CiteProps & react.RefAttributes<HTMLElement>>;

type FigureProps = HTMLAttributes<HTMLElement>;
declare const Figure: react.ForwardRefExoticComponent<FigureProps & react.RefAttributes<HTMLElement>>;
type FigureCaptionProps = HTMLAttributes<HTMLElement>;
declare const FigureCaption: react.ForwardRefExoticComponent<FigureCaptionProps & react.RefAttributes<HTMLElement>>;

declare const Command: react.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CommandInput: react.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof react.InputHTMLAttributes<HTMLInputElement> | "key"> & {
    ref?: React.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "asChild" | keyof react.InputHTMLAttributes<HTMLInputElement> | "key">, "type" | "value" | "onChange"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & react.RefAttributes<HTMLInputElement>, "ref"> & react.RefAttributes<HTMLInputElement>>;
declare const CommandList: react.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: react.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Pick<Pick<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof HTMLAttributes<HTMLDivElement>> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: react.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<Pick<Pick<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: React.ReactNode;
    value?: string;
    forceMount?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: react.ForwardRefExoticComponent<Omit<Pick<Pick<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CommandItem: react.ForwardRefExoticComponent<Omit<{
    children?: React.ReactNode;
} & Omit<Pick<Pick<react.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & {
    ref?: React.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "asChild" | "key" | keyof HTMLAttributes<HTMLDivElement>>, "disabled" | "value" | "onSelect"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ComboboxOption {
    value: string;
    label: string;
    /** Optional secondary text shown muted next to the label. */
    hint?: ReactNode;
    /** Optional leading icon. */
    icon?: ReactNode;
    disabled?: boolean;
}
interface ComboboxProps {
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
declare const Combobox: react.ForwardRefExoticComponent<ComboboxProps & react.RefAttributes<HTMLButtonElement>>;

type CalendarProps = DayPickerProps & {
    className?: string;
};
declare function Calendar({ className, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

declare const AspectRatio: react.ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & react.RefAttributes<HTMLDivElement>>;

declare const ScrollArea: react.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: react.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Collapsible: react.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & react.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: react.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: react.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & react.RefAttributes<HTMLDivElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, type AlertProps, AspectRatio, Avatar, AvatarFallback, type AvatarFallbackProps, AvatarGroup, type AvatarGroupProps, AvatarImage, type AvatarImageProps, type AvatarProps, Badge, type BadgeProps, Blockquote, type BlockquoteProps, Breadcrumb, BreadcrumbEllipsis, type BreadcrumbEllipsisProps, BreadcrumbItem, type BreadcrumbItemProps, BreadcrumbLink, type BreadcrumbLinkProps, BreadcrumbList, type BreadcrumbListProps, BreadcrumbPage, type BreadcrumbPageProps, type BreadcrumbProps, BreadcrumbSeparator, type BreadcrumbSeparatorProps, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Calendar, type CalendarProps, Card, CardBody, type CardBodyProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselProps, Checkbox, type CheckboxProps, Cite, type CiteProps, Code, type CodeProps, Collapsible, CollapsibleContent, CollapsibleTrigger, ColorInput, type ColorInputProps, Combobox, type ComboboxOption, type ComboboxProps, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Datalist, DatalistOption, type DatalistOptionProps, type DatalistProps, DateInput, type DateInputProps, Dialog, DialogClose, DialogContent, type DialogContentProps, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Figure, FigureCaption, type FigureCaptionProps, type FigureProps, FileInput, type FileInputProps, FormError, FormErrorMessage, type FormErrorMessageProps, type FormErrorProps, FormField, type FormFieldProps, FormHelperText, type FormHelperTextProps, Heading, type HeadingProps, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputGroup, InputGroupAddon, type InputGroupAddonProps, InputGroupButton, type InputGroupButtonProps, type InputGroupProps, type InputProps, Kbd, type KbdProps, Label, type LabelProps, ListGroup, ListGroupItem, type ListGroupItemProps, type ListGroupProps, Nav, NavItem, type NavItemProps, NavLink, type NavLinkProps, type NavProps, Navbar, NavbarActions, NavbarBrand, type NavbarBrandProps, NavbarContent, type NavbarProps, Pagination, PaginationButton, type PaginationButtonProps, PaginationEllipsis, PaginationItem, type PaginationItemProps, PaginationLink, type PaginationLinkProps, PaginationList, type PaginationListProps, PaginationNext, PaginationPrev, type PaginationProps, Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger, Progress, type ProgressProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, ScrollArea, ScrollBar, Select, type SelectProps, Separator, type SeparatorProps, Sheet, SheetClose, SheetContent, type SheetContentProps, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, SimplePagination, type SimplePaginationProps, Skeleton, type SkeletonProps, Slider, type SliderProps, Spinner, type SpinnerProps, Switch, type SwitchProps, Table, TableBody, TableCaption, type TableCaptionProps, TableCell, type TableCellProps, TableFooter, TableHead, type TableHeadProps, TableHeader, type TableProps, TableRow, type TableRowProps, type TableSectionProps, Tabs, TabsContent, TabsList, TabsTrigger, Text, type TextProps, Textarea, type TextareaProps, TimeInput, type TimeInputProps, Toast, ToastAction, ToastClose, ToastDescription, type ToastInput, type ToastProps, ToastProvider, type ToastProviderProps, ToastTitle, type ToastVariant, ToastViewport, Toggle, ToggleGroup, ToggleGroupItem, type ToggleGroupItemProps, type ToggleGroupProps, type ToggleProps, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, buildPageList, useToast };
