"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AspectRatio: () => AspectRatio,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarGroup: () => AvatarGroup,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  Blockquote: () => Blockquote,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Calendar: () => Calendar,
  Card: () => Card,
  CardBody: () => CardBody,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Carousel: () => Carousel,
  CarouselContent: () => CarouselContent,
  CarouselItem: () => CarouselItem,
  CarouselNext: () => CarouselNext,
  CarouselPrevious: () => CarouselPrevious,
  Checkbox: () => Checkbox,
  Cite: () => Cite,
  Code: () => Code,
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleTrigger: () => CollapsibleTrigger,
  ColorInput: () => ColorInput,
  Combobox: () => Combobox,
  Command: () => Command,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  ContextMenu: () => ContextMenu,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuShortcut: () => ContextMenuShortcut,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger,
  Datalist: () => Datalist,
  DatalistOption: () => DatalistOption,
  DateInput: () => DateInput,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Figure: () => Figure,
  FigureCaption: () => FigureCaption,
  FileInput: () => FileInput,
  FormError: () => FormError,
  FormErrorMessage: () => FormErrorMessage,
  FormField: () => FormField,
  FormHelperText: () => FormHelperText,
  Heading: () => Heading,
  HoverCard: () => HoverCard,
  HoverCardContent: () => HoverCardContent,
  HoverCardTrigger: () => HoverCardTrigger,
  Input: () => Input,
  InputGroup: () => InputGroup,
  InputGroupAddon: () => InputGroupAddon,
  InputGroupButton: () => InputGroupButton,
  Kbd: () => Kbd,
  Label: () => Label,
  ListGroup: () => ListGroup,
  ListGroupItem: () => ListGroupItem,
  Nav: () => Nav,
  NavItem: () => NavItem,
  NavLink: () => NavLink,
  Navbar: () => Navbar,
  NavbarActions: () => NavbarActions,
  NavbarBrand: () => NavbarBrand,
  NavbarContent: () => NavbarContent,
  Pagination: () => Pagination,
  PaginationButton: () => PaginationButton,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationList: () => PaginationList,
  PaginationNext: () => PaginationNext,
  PaginationPrev: () => PaginationPrev,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Select: () => Select,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetOverlay: () => SheetOverlay,
  SheetPortal: () => SheetPortal,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  SimplePagination: () => SimplePagination,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Spinner: () => Spinner2,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Text: () => Text,
  Textarea: () => Textarea,
  TimeInput: () => TimeInput,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastClose: () => ToastClose,
  ToastDescription: () => ToastDescription,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  buildPageList: () => buildPageList,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = require("react");
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-brand-700 text-neutral-50 hover:bg-brand-800 active:bg-brand-900 focus-visible:ring-ring/40",
        secondary: "bg-neutral-600 text-neutral-50 hover:bg-neutral-700 active:bg-neutral-800 focus-visible:ring-neutral-500/40",
        accent: "bg-accent-500 text-neutral-950 hover:bg-accent-600 active:bg-accent-700 focus-visible:ring-accent-500/40",
        success: "bg-success text-neutral-50 hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500/40",
        danger: "bg-danger text-neutral-50 hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500/40",
        warning: "bg-warning text-neutral-950 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring-yellow-400/40",
        info: "bg-info text-neutral-950 hover:bg-cyan-600 active:bg-cyan-700 focus-visible:ring-cyan-400/40",
        light: "bg-surface text-foreground border border-border hover:bg-surface-muted active:bg-surface-muted-stronger focus-visible:ring-foreground-muted/40",
        dark: "bg-neutral-950 text-neutral-50 hover:bg-neutral-900 active:bg-neutral-800 focus-visible:ring-neutral-700/40",
        "outline-primary": "border border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-neutral-50 active:bg-brand-800 focus-visible:ring-ring/40",
        "outline-secondary": "border border-neutral-600 text-foreground-muted hover:bg-neutral-600 hover:text-neutral-50 active:bg-neutral-700 focus-visible:ring-neutral-500/40",
        "outline-accent": "border border-accent-500 text-accent-700 hover:bg-accent-500 hover:text-neutral-950 active:bg-accent-600 focus-visible:ring-accent-500/40",
        "outline-success": "border border-success text-success-foreground hover:bg-success hover:text-neutral-50 active:bg-emerald-700 focus-visible:ring-emerald-500/40",
        "outline-danger": "border border-danger text-danger-foreground hover:bg-danger hover:text-neutral-50 active:bg-red-700 focus-visible:ring-red-500/40",
        "outline-warning": "border border-warning text-warning-foreground hover:bg-warning hover:text-neutral-950 active:bg-yellow-600 focus-visible:ring-yellow-400/40",
        "outline-info": "border border-info text-info-foreground hover:bg-info hover:text-neutral-950 active:bg-cyan-600 focus-visible:ring-cyan-400/40",
        ghost: "text-foreground-muted hover:bg-surface-muted active:bg-surface-muted-stronger focus-visible:ring-foreground-muted/40",
        link: "text-brand-700 dark:text-brand-300 underline-offset-4 hover:underline hover:text-brand-800 dark:hover:text-brand-200 focus-visible:ring-ring/40 px-0 py-0 h-auto"
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-sm",
        md: "h-10 px-4 py-2 text-base rounded-md",
        lg: "h-12 px-6 py-3 text-xl rounded-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Spinner = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    className: "animate-spin size-4",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeOpacity: "0.25",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M12 2a10 10 0 0 1 10 10",
          stroke: "currentColor",
          strokeWidth: "4",
          strokeLinecap: "round",
          fill: "none"
        }
      )
    ]
  }
);
var Button = (0, import_react.forwardRef)(
  ({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_slot.Slot, { ref, className: classes, ...props, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        ref,
        className: classes,
        disabled: disabled || loading,
        "aria-busy": loading || void 0,
        ...props,
        children: [
          loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {}) : null,
          loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-70", children }) : children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ButtonGroup.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var groupClasses = {
  horizontal: "inline-flex [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0",
  vertical: "inline-flex flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:last-child)]:border-b-0"
};
var ButtonGroup = (0, import_react2.forwardRef)(
  ({ className, orientation = "horizontal", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      ref,
      role: "group",
      className: cn(groupClasses[orientation], className),
      ...props,
      children
    }
  )
);
ButtonGroup.displayName = "ButtonGroup";

// src/components/Label.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Label = (0, import_react3.forwardRef)(
  ({ className, required, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "label",
    {
      ref,
      className: cn("block text-sm font-medium text-foreground mb-1.5 transition-colors", className),
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", className: "ml-0.5 text-danger", children: "*" })
      ]
    }
  )
);
Label.displayName = "Label";

// src/components/Input.tsx
var import_react4 = require("react");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority2.cva)(
  "block w-full bg-input text-foreground placeholder:text-foreground-subtle border border-border focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
  {
    variants: {
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-sm",
        md: "h-10 px-3 py-2 text-base rounded-md",
        lg: "h-12 px-4 py-3 text-lg rounded-lg"
      },
      invalid: {
        true: "border-danger focus:border-danger focus:ring-danger/30",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      invalid: false
    }
  }
);
var Input = (0, import_react4.forwardRef)(
  ({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "input",
    {
      ref,
      "aria-invalid": invalid || void 0,
      className: cn(inputVariants({ size, invalid }), className),
      ...props
    }
  )
);
Input.displayName = "Input";

// src/components/Textarea.tsx
var import_react5 = require("react");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var textareaVariants = (0, import_class_variance_authority3.cva)(
  "block w-full bg-input text-foreground placeholder:text-foreground-subtle border border-border focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
  {
    variants: {
      size: {
        sm: "min-h-20 px-3 py-1.5 text-sm rounded-sm resize-y",
        md: "min-h-24 px-3 py-2 text-base rounded-md resize-y",
        lg: "min-h-32 px-4 py-2.5 text-lg rounded-lg resize-y"
      },
      invalid: {
        true: "border-danger focus:border-danger focus:ring-danger/30",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      invalid: false
    }
  }
);
var Textarea = (0, import_react5.forwardRef)(
  ({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "textarea",
    {
      ref,
      "aria-invalid": invalid || void 0,
      className: cn(textareaVariants({ size, invalid }), className),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";

// src/components/Select.tsx
var import_react6 = require("react");
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var selectVariants = (0, import_class_variance_authority4.cva)(
  "block w-full bg-input text-foreground placeholder:text-foreground-subtle border border-border focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed transition-colors appearance-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-sm",
        md: "h-10 px-3 py-2 text-base rounded-md",
        lg: "h-12 px-4 py-3 text-lg rounded-lg"
      },
      invalid: {
        true: "border-danger focus:border-danger focus:ring-danger/30",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      invalid: false
    }
  }
);
var ChevronDown = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-foreground-subtle",
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "m6 9 6 6 6-6" })
  }
);
var Select = (0, import_react6.forwardRef)(
  ({ className, size, invalid, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "select",
      {
        ref,
        "aria-invalid": invalid || void 0,
        className: cn(selectVariants({ size, invalid }), "pr-10", className),
        ...props,
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChevronDown, {})
  ] })
);
Select.displayName = "Select";

// src/components/FormField.tsx
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var FormField = (0, import_react7.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      ref,
      className: cn("flex flex-col gap-1.5", className),
      ...props
    }
  )
);
FormField.displayName = "FormField";

// src/components/FormHelperText.tsx
var import_react8 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var FormHelperText = (0, import_react8.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "p",
    {
      ref,
      className: cn("text-sm text-foreground-muted transition-colors", className),
      ...props
    }
  )
);
FormHelperText.displayName = "FormHelperText";

// src/components/FormErrorMessage.tsx
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var FormErrorMessage = (0, import_react9.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "p",
    {
      ref,
      className: cn("text-sm text-danger-foreground transition-colors", className),
      ...props
    }
  )
);
FormErrorMessage.displayName = "FormErrorMessage";

// src/components/FormError.tsx
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var FormError = (0, import_react10.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      ref,
      role: "alert",
      className: cn("text-sm text-danger-foreground", className),
      ...props
    }
  )
);
FormError.displayName = "FormError";

// src/components/Checkbox.tsx
var import_react11 = require("react");
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime11 = require("react/jsx-runtime");
var checkboxVariants = (0, import_class_variance_authority5.cva)(
  "inline-flex items-center justify-center shrink-0 rounded-sm border-2 border-border bg-input data-[state=checked]:bg-brand-700 data-[state=checked]:border-brand-700 data-[state=indeterminate]:bg-brand-700 data-[state=indeterminate]:border-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6"
      },
      invalid: {
        true: "border-danger data-[state=checked]:bg-danger data-[state=checked]:border-danger data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger focus-visible:ring-danger/40",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      invalid: false
    }
  }
);
var CheckIcon = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "size-3/4",
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M5 12l5 5L20 7" })
  }
);
var IndeterminateIcon = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    "aria-hidden": "true",
    className: "size-3/4",
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 12h12" })
  }
);
var Checkbox = (0, import_react11.forwardRef)(({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    "aria-invalid": invalid || void 0,
    className: cn(checkboxVariants({ size, invalid }), className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CheckboxPrimitive.Indicator, { className: "text-neutral-50 flex items-center justify-center", children: props.checked === "indeterminate" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IndeterminateIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CheckIcon, {}) })
  }
));
Checkbox.displayName = "Checkbox";

// src/components/RadioGroup.tsx
var import_react12 = require("react");
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime12 = require("react/jsx-runtime");
var RadioGroup = (0, import_react12.forwardRef)(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  RadioGroupPrimitive.Root,
  {
    ref,
    orientation,
    className: cn(
      orientation === "horizontal" ? "flex flex-row gap-4" : "flex flex-col gap-2",
      className
    ),
    ...props
  }
));
RadioGroup.displayName = "RadioGroup";
var radioVariants = (0, import_class_variance_authority6.cva)(
  "inline-flex items-center justify-center shrink-0 rounded-full border-2 border-border bg-input data-[state=checked]:border-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6"
      },
      invalid: {
        true: "border-danger data-[state=checked]:border-danger focus-visible:ring-danger/40",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      invalid: false
    }
  }
);
var Radio = (0, import_react12.forwardRef)(({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  RadioGroupPrimitive.Item,
  {
    ref,
    "aria-invalid": invalid || void 0,
    className: cn(radioVariants({ size, invalid }), className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "span",
      {
        className: cn(
          "block size-1/2 rounded-full",
          invalid ? "bg-danger" : "bg-brand-700"
        )
      }
    ) })
  }
));
Radio.displayName = "Radio";

// src/components/Switch.tsx
var import_react13 = require("react");
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"), 1);
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime13 = require("react/jsx-runtime");
var switchRootVariants = (0, import_class_variance_authority7.cva)(
  "inline-flex shrink-0 items-center rounded-full border-2 border-transparent bg-neutral-300 dark:bg-neutral-700 data-[state=checked]:bg-brand-700 dark:data-[state=checked]:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14"
      },
      invalid: {
        true: "bg-danger/20 data-[state=checked]:bg-danger focus-visible:ring-danger/40",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      invalid: false
    }
  }
);
var switchThumbVariants = (0, import_class_variance_authority7.cva)(
  "pointer-events-none block rounded-full bg-surface-elevated shadow ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "size-4 data-[state=checked]:translate-x-4",
        md: "size-5 data-[state=checked]:translate-x-5",
        lg: "size-6 data-[state=checked]:translate-x-7"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Switch = (0, import_react13.forwardRef)(({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  SwitchPrimitive.Root,
  {
    ref,
    "aria-invalid": invalid || void 0,
    className: cn(switchRootVariants({ size, invalid }), className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SwitchPrimitive.Thumb, { className: switchThumbVariants({ size }) })
  }
));
Switch.displayName = "Switch";

// src/components/Alert.tsx
var import_react14 = require("react");
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority8.cva)(
  "relative flex items-start gap-3 rounded-md border p-4 text-sm transition-colors",
  {
    variants: {
      variant: {
        info: "bg-cyan-50 border-cyan-200 text-cyan-900 dark:bg-cyan-950/40 dark:border-cyan-800 dark:text-cyan-200",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950/40 dark:border-yellow-800 dark:text-yellow-200",
        danger: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
var InfoIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 16v-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 8h.01" })
    ]
  }
);
var SuccessIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "m9 11 3 3L22 4" })
    ]
  }
);
var WarningIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 9v4" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M12 17h.01" })
    ]
  }
);
var DangerIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "m15 9-6 6" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "m9 9 6 6" })
    ]
  }
);
var CloseIcon = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "m6 6 12 12" })
    ]
  }
);
var defaultIconForVariant = (variant = "info") => {
  switch (variant) {
    case "success":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SuccessIcon, {});
    case "warning":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(WarningIcon, {});
    case "danger":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DangerIcon, {});
    case "info":
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(InfoIcon, {});
  }
};
var Alert = (0, import_react14.forwardRef)(
  ({ className, variant, title, icon, onClose, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props,
      children: [
        icon !== false && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "span",
          {
            className: "shrink-0 mt-0.5 [&_svg]:size-5",
            "aria-hidden": "true",
            children: icon ?? defaultIconForVariant(variant)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex-1 min-w-0", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "font-semibold mb-1", children: title }),
          children
        ] }),
        onClose && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Dismiss",
            className: "shrink-0 -mt-1 -mr-1 p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-current/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 transition-opacity [&_svg]:size-4",
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CloseIcon, {})
          }
        )
      ]
    }
  )
);
Alert.displayName = "Alert";

// src/components/Badge.tsx
var import_react15 = require("react");
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime15 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority9.cva)(
  "inline-flex items-center justify-center font-medium whitespace-nowrap rounded-md",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        accent: "",
        success: "",
        danger: "",
        warning: "",
        info: ""
      },
      size: {
        sm: "text-xs px-2 py-0.5 rounded-sm",
        md: "text-sm px-2.5 py-0.5 rounded-md"
      },
      soft: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      { variant: "primary", soft: false, class: "bg-brand-700 text-neutral-50" },
      { variant: "secondary", soft: false, class: "bg-neutral-600 text-neutral-50" },
      { variant: "accent", soft: false, class: "bg-accent-500 text-neutral-950" },
      { variant: "success", soft: false, class: "bg-success text-neutral-50" },
      { variant: "danger", soft: false, class: "bg-danger text-neutral-50" },
      { variant: "warning", soft: false, class: "bg-warning text-neutral-950" },
      { variant: "info", soft: false, class: "bg-info text-neutral-950" },
      { variant: "primary", soft: true, class: "bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200" },
      { variant: "secondary", soft: true, class: "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200" },
      { variant: "accent", soft: true, class: "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200" },
      { variant: "success", soft: true, class: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
      { variant: "danger", soft: true, class: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
      { variant: "warning", soft: true, class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
      { variant: "info", soft: true, class: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      soft: false
    }
  }
);
var Badge = (0, import_react15.forwardRef)(
  ({ className, variant, size, soft, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "span",
    {
      ref,
      className: cn(badgeVariants({ variant, size, soft }), className),
      ...props
    }
  )
);
Badge.displayName = "Badge";

// src/components/Card.tsx
var import_react16 = require("react");
var import_class_variance_authority10 = require("class-variance-authority");
var import_jsx_runtime16 = require("react/jsx-runtime");
var cardVariants = (0, import_class_variance_authority10.cva)(
  "rounded-lg border border-border transition-colors",
  {
    variants: {
      elevation: {
        none: "bg-surface",
        sm: "bg-surface dark:bg-surface-elevated shadow-sm",
        md: "bg-surface dark:bg-surface-elevated shadow-md",
        lg: "bg-surface dark:bg-surface-elevated shadow-lg",
        xl: "bg-surface dark:bg-surface-elevated shadow-xl"
      }
    },
    defaultVariants: {
      elevation: "sm"
    }
  }
);
var Card = (0, import_react16.forwardRef)(
  ({ className, elevation, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      ref,
      className: cn(cardVariants({ elevation }), className),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = (0, import_react16.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      ref,
      className: cn("flex flex-col gap-1.5 px-6 pt-6 pb-0", className),
      ...props
    }
  )
);
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react16.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "h3",
    {
      ref,
      className: cn(
        "text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors",
        className
      ),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = (0, import_react16.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-foreground-muted transition-colors", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardBody = (0, import_react16.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { ref, className: cn("p-6", className), ...props })
);
CardBody.displayName = "CardBody";
var CardFooter = (0, import_react16.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      ref,
      className: cn(
        "flex items-center gap-2 px-6 py-4 border-t border-border",
        className
      ),
      ...props
    }
  )
);
CardFooter.displayName = "CardFooter";

// src/components/Heading.tsx
var import_react17 = __toESM(require("react"), 1);
var import_class_variance_authority11 = require("class-variance-authority");
var headingVariants = (0, import_class_variance_authority11.cva)(
  "font-semibold leading-tight tracking-tight text-foreground transition-colors",
  {
    variants: {
      size: {
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl"
      }
    },
    defaultVariants: {
      size: "4xl"
    }
  }
);
var DEFAULT_SIZE_BY_LEVEL = {
  1: "5xl",
  2: "4xl",
  3: "3xl",
  4: "2xl",
  5: "xl",
  6: "base"
};
var Heading = (0, import_react17.forwardRef)(
  ({ level = 2, size, className, children, ...props }, ref) => {
    const resolvedSize = size ?? DEFAULT_SIZE_BY_LEVEL[level];
    return import_react17.default.createElement(
      `h${level}`,
      {
        ref,
        className: cn(headingVariants({ size: resolvedSize }), className),
        ...props
      },
      children
    );
  }
);
Heading.displayName = "Heading";

// src/components/Separator.tsx
var import_react18 = require("react");
var import_class_variance_authority12 = require("class-variance-authority");
var import_jsx_runtime17 = require("react/jsx-runtime");
var separatorVariants = (0, import_class_variance_authority12.cva)("bg-border shrink-0 transition-colors", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Separator = (0, import_react18.forwardRef)(
  ({ orientation = "horizontal", decorative = true, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      ref,
      role: decorative ? "none" : "separator",
      "aria-orientation": decorative ? void 0 : orientation,
      className: cn(separatorVariants({ orientation }), className),
      ...props
    }
  )
);
Separator.displayName = "Separator";

// src/components/Code.tsx
var import_react19 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Code = (0, import_react19.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "code",
    {
      ref,
      className: cn(
        "font-mono text-sm bg-border-subtle text-foreground px-1.5 py-0.5 rounded-sm transition-colors",
        className
      ),
      ...props
    }
  )
);
Code.displayName = "Code";

// src/components/Kbd.tsx
var import_react20 = require("react");
var import_class_variance_authority13 = require("class-variance-authority");
var import_jsx_runtime19 = require("react/jsx-runtime");
var kbdVariants = (0, import_class_variance_authority13.cva)(
  "inline-flex items-center justify-center font-mono text-foreground-muted bg-surface-elevated border border-border rounded-sm shadow-sm transition-colors",
  {
    variants: {
      size: {
        sm: "text-xs px-1 py-0.5 min-w-[1.25rem]",
        md: "text-sm px-1.5 py-0.5 min-w-[1.5rem]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Kbd = (0, import_react20.forwardRef)(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "kbd",
    {
      ref,
      className: cn(kbdVariants({ size }), className),
      ...props
    }
  )
);
Kbd.displayName = "Kbd";

// src/components/Spinner.tsx
var import_react21 = require("react");
var import_class_variance_authority14 = require("class-variance-authority");
var import_jsx_runtime20 = require("react/jsx-runtime");
var spinnerVariants = (0, import_class_variance_authority14.cva)("animate-spin text-current", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var Spinner2 = (0, import_react21.forwardRef)(
  ({ className, size, label = "Loading", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "svg",
    {
      ref,
      role: "status",
      "aria-label": label,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(spinnerVariants({ size }), className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "circle",
          {
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeOpacity: "0.25",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "path",
          {
            d: "M12 2a10 10 0 0 1 10 10",
            stroke: "currentColor",
            strokeWidth: "4",
            strokeLinecap: "round",
            fill: "none"
          }
        )
      ]
    }
  )
);
Spinner2.displayName = "Spinner";

// src/components/Text.tsx
var import_react22 = require("react");
var import_class_variance_authority15 = require("class-variance-authority");
var import_jsx_runtime21 = require("react/jsx-runtime");
var textVariants = (0, import_class_variance_authority15.cva)("", {
  variants: {
    variant: {
      body: "text-base text-foreground leading-relaxed",
      lead: "text-lg text-foreground-muted leading-relaxed",
      muted: "text-base text-foreground-muted leading-relaxed",
      subtle: "text-sm text-foreground-subtle leading-relaxed",
      small: "text-sm text-foreground",
      caption: "text-xs text-foreground-subtle"
    }
  },
  defaultVariants: {
    variant: "body"
  }
});
var Text = (0, import_react22.forwardRef)(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "p",
    {
      ref,
      className: cn(textVariants({ variant }), className),
      ...props
    }
  )
);
Text.displayName = "Text";

// src/components/DateInput.tsx
var import_react23 = require("react");
var import_react_day_picker = require("react-day-picker");
var import_jsx_runtime22 = require("react/jsx-runtime");
var isControlled = (p) => p.value !== void 0;
function DateInput(props) {
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
    invalid
  } = props;
  const controlled = isControlled(props);
  const [internal, setInternal] = (0, import_react23.useState)(
    controlled ? "" : defaultValue
  );
  const current = controlled ? value ?? "" : internal;
  const [useCustom, setUseCustom] = (0, import_react23.useState)(false);
  const [open, setOpen] = (0, import_react23.useState)(false);
  const wrapRef = (0, import_react23.useRef)(null);
  (0, import_react23.useEffect)(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: fine)").matches) setUseCustom(true);
  }, []);
  (0, import_react23.useEffect)(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);
  const commit = (next) => {
    if (!controlled) setInternal(next);
    onChange?.(next);
  };
  if (!useCustom) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Input,
      {
        type: "date",
        id,
        name,
        required,
        min,
        max,
        disabled,
        placeholder,
        className,
        size,
        invalid,
        value: controlled ? value ?? "" : void 0,
        defaultValue: controlled ? void 0 : defaultValue,
        onChange: (e) => commit(e.target.value)
      }
    );
  }
  const selectedDate = parseYmd(current);
  const minDate = parseYmd(min);
  const maxDate = parseYmd(max);
  const disabledMatchers = [];
  if (minDate) disabledMatchers.push({ before: minDate });
  if (maxDate) disabledMatchers.push({ after: maxDate });
  const triggerPadding = { sm: "pr-8", md: "pr-9", lg: "pr-10" }[size];
  const iconRight = { sm: "right-2", md: "right-3", lg: "right-3" }[size];
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { ref: wrapRef, className: "relative inline-block w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Input,
      {
        type: "text",
        id,
        required,
        disabled,
        placeholder: placeholder ?? "yyyy-mm-dd",
        readOnly: true,
        autoComplete: "off",
        size,
        invalid,
        className: cn(triggerPadding, "cursor-pointer", className),
        value: current,
        onClick: () => !disabled && setOpen((o) => !o)
      }
    ),
    name && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "hidden", name, value: current }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 inline-flex text-foreground-subtle",
          iconRight
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" })
          }
        )
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "jz-datepicker-popover absolute left-0 top-full z-50 mt-1 rounded-md border border-border bg-surface dark:bg-surface-elevated p-2 shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_react_day_picker.DayPicker,
        {
          mode: "single",
          selected: selectedDate,
          onSelect: (d) => {
            commit(formatYmd(d));
            setOpen(false);
          },
          disabled: disabledMatchers.length > 0 ? disabledMatchers : void 0,
          defaultMonth: selectedDate ?? minDate ?? /* @__PURE__ */ new Date(),
          showOutsideDays: true
        }
      ),
      current && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        Button,
        {
          type: "button",
          variant: "link",
          size: "sm",
          className: "text-foreground-muted hover:text-foreground",
          onClick: () => {
            commit("");
            setOpen(false);
          },
          children: "Clear"
        }
      ) })
    ] })
  ] });
}
function parseYmd(s) {
  if (!s) return void 0;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return void 0;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}
function formatYmd(d) {
  if (!d) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// src/components/TimeInput.tsx
var import_react24 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var isControlled2 = (p) => p.value !== void 0;
function TimeInput(props) {
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
    invalid
  } = props;
  const controlled = isControlled2(props);
  const [internal, setInternal] = (0, import_react24.useState)(
    controlled ? "" : defaultValue
  );
  const current = controlled ? value ?? "" : internal;
  const [useCustom, setUseCustom] = (0, import_react24.useState)(false);
  const [open, setOpen] = (0, import_react24.useState)(false);
  const wrapRef = (0, import_react24.useRef)(null);
  (0, import_react24.useEffect)(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: fine)").matches) setUseCustom(true);
  }, []);
  (0, import_react24.useEffect)(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);
  const triggerText = (0, import_react24.useMemo)(
    () => current ? formatDisplay(current, display) : "",
    [current, display]
  );
  const commit = (next) => {
    if (!controlled) setInternal(next);
    onChange?.(next);
  };
  if (!useCustom) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Input,
      {
        type: "time",
        id,
        name,
        required,
        min,
        max,
        step: step * 60,
        disabled,
        placeholder,
        className,
        size,
        invalid,
        value: controlled ? value ?? "" : void 0,
        defaultValue: controlled ? void 0 : defaultValue,
        onChange: (e) => commit(e.target.value)
      }
    );
  }
  const parsed = parseHm(current);
  const minMins = parseHm(min);
  const maxMins = parseHm(max);
  const triggerPadding = { sm: "pr-8", md: "pr-9", lg: "pr-10" }[size];
  const iconRight = { sm: "right-2", md: "right-3", lg: "right-3" }[size];
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { ref: wrapRef, className: "relative inline-block w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Input,
      {
        type: "text",
        id,
        required,
        disabled,
        placeholder: placeholder ?? (display === "12h" ? "h:mm am" : "hh:mm"),
        readOnly: true,
        autoComplete: "off",
        size,
        invalid,
        className: cn(triggerPadding, "cursor-pointer", className),
        value: triggerText,
        onClick: () => !disabled && setOpen((o) => !o)
      }
    ),
    name && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("input", { type: "hidden", name, value: current }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 inline-flex text-foreground-subtle",
          iconRight
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("path", { d: "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" }),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("path", { d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" })
            ]
          }
        )
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "jz-timepicker-popover absolute left-0 top-full z-50 mt-1 rounded-md border border-border bg-surface dark:bg-surface-elevated p-3 shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        TimeColumns,
        {
          hour: parsed?.h ?? null,
          minute: parsed?.m ?? null,
          display,
          step,
          minMins: minMins ? minMins.h * 60 + minMins.m : null,
          maxMins: maxMins ? maxMins.h * 60 + maxMins.m : null,
          onPick: (h, m) => {
            commit(formatHm(h, m));
          }
        }
      ),
      current && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex justify-end pt-1 border-t border-border-subtle mt-1", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Button,
        {
          type: "button",
          variant: "link",
          size: "sm",
          className: "text-foreground-muted hover:text-foreground",
          onClick: () => {
            commit("");
            setOpen(false);
          },
          children: "Clear"
        }
      ) })
    ] })
  ] });
}
function TimeColumns({
  hour,
  minute,
  display,
  step,
  minMins,
  maxMins,
  onPick
}) {
  const minutes = (0, import_react24.useMemo)(() => {
    const out = [];
    for (let m = 0; m < 60; m += step) out.push(m);
    return out;
  }, [step]);
  const is12 = display === "12h";
  const hours = (0, import_react24.useMemo)(
    () => is12 ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : range(0, 24),
    [is12]
  );
  const currentPeriod = hour == null ? "am" : hour < 12 ? "am" : "pm";
  const displayedHour = hour == null ? null : is12 ? to12(hour) : hour;
  const pickHour = (h12or24) => {
    const h = is12 ? from12(h12or24, currentPeriod) : h12or24;
    const m = minute ?? 0;
    if (isDisabled(h, m, minMins, maxMins)) return;
    onPick(h, m);
  };
  const pickMinute = (m) => {
    const h = hour ?? (is12 ? from12(12, "am") : 0);
    if (isDisabled(h, m, minMins, maxMins)) return;
    onPick(h, m);
  };
  const pickPeriod = (p) => {
    const h12 = displayedHour ?? 12;
    const h = from12(h12, p);
    const m = minute ?? 0;
    if (isDisabled(h, m, minMins, maxMins)) return;
    onPick(h, m);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Column, { label: "Hr", children: hours.map((h) => {
      const wireH = is12 ? from12(h, currentPeriod) : h;
      const disabled = isDisabled(
        wireH,
        minute ?? 0,
        minMins,
        maxMins
      );
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        TimeCell,
        {
          selected: displayedHour === h,
          disabled,
          onClick: () => pickHour(h),
          children: is12 ? String(h) : pad(h)
        },
        `h-${h}`
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Column, { label: "Min", children: minutes.map((m) => {
      const h = hour ?? (is12 ? from12(12, "am") : 0);
      const disabled = isDisabled(h, m, minMins, maxMins);
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        TimeCell,
        {
          selected: minute === m,
          disabled,
          onClick: () => pickMinute(m),
          children: pad(m)
        },
        `m-${m}`
      );
    }) }),
    is12 && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Column, { label: "", children: ["am", "pm"].map((p) => {
      const h = from12(displayedHour ?? 12, p);
      const disabled = isDisabled(h, minute ?? 0, minMins, maxMins);
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        TimeCell,
        {
          selected: currentPeriod === p && hour != null,
          disabled,
          onClick: () => pickPeriod(p),
          children: p.toUpperCase()
        },
        p
      );
    }) })
  ] });
}
function Column({
  label,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "text-[0.65rem] uppercase tracking-wide text-foreground-subtle text-center pb-1.5 min-h-[1rem]", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex flex-col gap-1 max-h-56 overflow-y-auto pr-1.5", children })
  ] });
}
function TimeCell({
  selected,
  disabled,
  onClick,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "button",
    {
      type: "button",
      disabled,
      onClick,
      className: cn(
        "w-12 px-3 py-1.5 rounded-md text-sm tabular-nums text-center transition-colors",
        "hover:bg-surface-muted",
        selected && "bg-brand-700 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-500",
        disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"
      ),
      children
    }
  );
}
function parseHm(s) {
  if (!s) return void 0;
  const match = /^(\d{2}):(\d{2})$/.exec(s);
  if (!match) return void 0;
  const h = Number(match[1]);
  const m = Number(match[2]);
  if (h > 23 || m > 59) return void 0;
  return { h, m };
}
function formatHm(h, m) {
  return `${pad(h)}:${pad(m)}`;
}
function formatDisplay(hm, display) {
  const p = parseHm(hm);
  if (!p) return "";
  if (display === "24h") return formatHm(p.h, p.m);
  const period = p.h < 12 ? "AM" : "PM";
  const h12 = to12(p.h);
  return `${h12}:${pad(p.m)} ${period}`;
}
function pad(n) {
  return String(n).padStart(2, "0");
}
function to12(h24) {
  const h = h24 % 12;
  return h === 0 ? 12 : h;
}
function from12(h12, period) {
  const base = h12 % 12;
  return period === "pm" ? base + 12 : base;
}
function range(start, end) {
  const out = [];
  for (let i = start; i < end; i++) out.push(i);
  return out;
}
function isDisabled(h, m, minMins, maxMins) {
  const total = h * 60 + m;
  if (minMins != null && total < minMins) return true;
  if (maxMins != null && total > maxMins) return true;
  return false;
}

// src/components/Table.tsx
var import_react25 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Table = (0, import_react25.forwardRef)(
  ({
    className,
    wrapperClassName,
    striped,
    hover,
    bordered,
    density = "md",
    ...props
  }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      className: cn(
        "relative w-full overflow-x-auto rounded-md border border-border",
        wrapperClassName
      ),
      "data-density": density,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "table",
        {
          ref,
          className: cn(
            "w-full caption-bottom text-sm text-foreground",
            striped && "[&_tbody_tr:nth-child(odd)]:bg-surface-muted/40",
            hover && "[&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-surface-muted",
            bordered && "[&_th]:border [&_td]:border [&_th]:border-border [&_td]:border-border",
            className
          ),
          ...props
        }
      )
    }
  )
);
Table.displayName = "Table";
var TableHeader = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "thead",
    {
      ref,
      className: cn("bg-surface-muted/60 [&_tr]:border-b [&_tr]:border-border", className),
      ...props
    }
  )
);
TableHeader.displayName = "TableHeader";
var TableBody = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "tbody",
    {
      ref,
      className: cn("[&_tr:not(:last-child)]:border-b [&_tr]:border-border-subtle", className),
      ...props
    }
  )
);
TableBody.displayName = "TableBody";
var TableFooter = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "tfoot",
    {
      ref,
      className: cn(
        "border-t border-border bg-surface-muted/60 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  )
);
TableFooter.displayName = "TableFooter";
var TableRow = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { ref, className: cn("", className), ...props })
);
TableRow.displayName = "TableRow";
var TableHead = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "th",
    {
      ref,
      scope: props.scope ?? "col",
      className: cn(
        "text-left align-middle text-xs font-semibold uppercase tracking-wide text-foreground-muted",
        "[[data-density='sm']_&]:px-2 [[data-density='sm']_&]:py-1.5",
        "[[data-density='md']_&]:px-3 [[data-density='md']_&]:py-2.5",
        "[[data-density='lg']_&]:px-4 [[data-density='lg']_&]:py-3.5",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
var TableCell = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "td",
    {
      ref,
      className: cn(
        "align-middle",
        "[[data-density='sm']_&]:px-2 [[data-density='sm']_&]:py-1.5",
        "[[data-density='md']_&]:px-3 [[data-density='md']_&]:py-2.5",
        "[[data-density='lg']_&]:px-4 [[data-density='lg']_&]:py-3.5",
        className
      ),
      ...props
    }
  )
);
TableCell.displayName = "TableCell";
var TableCaption = (0, import_react25.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "caption",
    {
      ref,
      className: cn("mt-3 text-sm text-foreground-muted", className),
      ...props
    }
  )
);
TableCaption.displayName = "TableCaption";

// src/components/Pagination.tsx
var import_react26 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Pagination = (0, import_react26.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "nav",
    {
      ref,
      role: "navigation",
      "aria-label": props["aria-label"] ?? "Pagination",
      className: cn("flex w-full justify-center", className),
      ...props
    }
  )
);
Pagination.displayName = "Pagination";
var PaginationList = (0, import_react26.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "ul",
    {
      ref,
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  )
);
PaginationList.displayName = "PaginationList";
var PaginationItem = (0, import_react26.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { ref, className: cn("", className), ...props })
);
PaginationItem.displayName = "PaginationItem";
var linkBase = "inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
var linkInactive = "text-foreground-muted hover:bg-surface-muted hover:text-foreground";
var linkActive = "bg-brand-700 text-neutral-50 hover:bg-brand-800 dark:bg-brand-500 dark:text-neutral-950 dark:hover:bg-brand-400";
var PaginationLink = (0, import_react26.forwardRef)(
  ({ className, isActive, size = "md", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "a",
    {
      ref,
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        linkBase,
        size === "sm" && "h-8 min-w-8 px-2 text-xs",
        isActive ? linkActive : linkInactive,
        className
      ),
      ...props
    }
  )
);
PaginationLink.displayName = "PaginationLink";
var PaginationButton = (0, import_react26.forwardRef)(({ className, isActive, size = "md", type = "button", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  "button",
  {
    ref,
    type,
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      linkBase,
      size === "sm" && "h-8 min-w-8 px-2 text-xs",
      isActive ? linkActive : linkInactive,
      className
    ),
    ...props
  }
));
PaginationButton.displayName = "PaginationButton";
var ChevronLeft = () => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "m15 18-6-6 6-6" })
  }
);
var ChevronRight = () => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "m9 18 6-6-6-6" })
  }
);
var PaginationPrev = (0, import_react26.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
  PaginationButton,
  {
    ref,
    "aria-label": "Go to previous page",
    className: cn("gap-1 pl-2", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronLeft, {}),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: children ?? "Previous" })
    ]
  }
));
PaginationPrev.displayName = "PaginationPrev";
var PaginationNext = (0, import_react26.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
  PaginationButton,
  {
    ref,
    "aria-label": "Go to next page",
    className: cn("gap-1 pr-2", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: children ?? "Next" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronRight, {})
    ]
  }
));
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (0, import_react26.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  "span",
  {
    ref,
    "aria-hidden": "true",
    className: cn(
      "inline-flex h-9 min-w-9 items-center justify-center text-foreground-subtle",
      className
    ),
    ...props,
    children: "\u2026"
  }
));
PaginationEllipsis.displayName = "PaginationEllipsis";
function buildPageList(page, pageCount, options = {}) {
  const siblings = options.siblings ?? 1;
  const boundaries = options.boundaries ?? 1;
  const totalNumbers = boundaries * 2 + siblings * 2 + 3;
  if (pageCount <= totalNumbers) {
    return range2(1, pageCount);
  }
  const leftSibling = Math.max(page - siblings, boundaries + 2);
  const rightSibling = Math.min(page + siblings, pageCount - boundaries - 1);
  const showLeftDots = leftSibling > boundaries + 2;
  const showRightDots = rightSibling < pageCount - boundaries - 1;
  const head = range2(1, boundaries);
  const tail = range2(pageCount - boundaries + 1, pageCount);
  const middle = [];
  if (!showLeftDots && showRightDots) {
    const leftCount = boundaries + siblings * 2 + 2;
    middle.push(...range2(boundaries + 1, leftCount), "...");
  } else if (showLeftDots && !showRightDots) {
    const rightCount = boundaries + siblings * 2 + 2;
    middle.push("...", ...range2(pageCount - rightCount + 1, pageCount - boundaries));
  } else {
    middle.push("...", ...range2(leftSibling, rightSibling), "...");
  }
  return [...head, ...middle, ...tail];
}
function range2(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}
var SimplePagination = (0, import_react26.forwardRef)(
  ({
    page,
    pageCount,
    onPageChange,
    siblings,
    boundaries,
    size = "md",
    hidePrevNext = false,
    className,
    ...props
  }, ref) => {
    const pages = buildPageList(page, pageCount, { siblings, boundaries });
    const atStart = page <= 1;
    const atEnd = page >= pageCount;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Pagination, { ref, className, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(PaginationList, { children: [
      !hidePrevNext && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        PaginationPrev,
        {
          size,
          disabled: atStart,
          onClick: () => !atStart && onPageChange(page - 1)
        }
      ) }),
      pages.map(
        (p, idx) => p === "..." ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationEllipsis, {}) }, `ellipsis-${idx}`) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          PaginationButton,
          {
            size,
            isActive: p === page,
            onClick: () => onPageChange(p),
            children: p
          }
        ) }, p)
      ),
      !hidePrevNext && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        PaginationNext,
        {
          size,
          disabled: atEnd,
          onClick: () => !atEnd && onPageChange(page + 1)
        }
      ) })
    ] }) });
  }
);
SimplePagination.displayName = "SimplePagination";

// src/components/Progress.tsx
var import_react27 = require("react");
var import_class_variance_authority16 = require("class-variance-authority");
var import_jsx_runtime26 = require("react/jsx-runtime");
var trackVariants = (0, import_class_variance_authority16.cva)(
  "relative w-full overflow-hidden rounded-full bg-surface-muted",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var barVariants = (0, import_class_variance_authority16.cva)("h-full rounded-full transition-[width] duration-300", {
  variants: {
    variant: {
      primary: "bg-brand-700 dark:bg-brand-500",
      secondary: "bg-neutral-600",
      accent: "bg-accent-500",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
var Progress = (0, import_react27.forwardRef)(
  ({ className, value, max = 100, size, variant, label, ...props }, ref) => {
    const isIndeterminate = value == null;
    const clamped = isIndeterminate ? 0 : Math.min(Math.max(value, 0), max);
    const pct = isIndeterminate ? 0 : clamped / max * 100;
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        ref,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-valuenow": isIndeterminate ? void 0 : clamped,
        "aria-label": label,
        className: cn(trackVariants({ size }), className),
        ...props,
        children: isIndeterminate ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "div",
          {
            className: cn(
              barVariants({ variant }),
              "absolute inset-y-0 w-2/5 animate-[jz-progress-indeterminate_1.2s_ease-in-out_infinite]"
            )
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "div",
          {
            className: barVariants({ variant }),
            style: { width: `${pct}%` }
          }
        )
      }
    );
  }
);
Progress.displayName = "Progress";

// src/components/Skeleton.tsx
var import_react28 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Skeleton = (0, import_react28.forwardRef)(
  ({ className, circle, animation = "pulse", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "div",
    {
      ref,
      "aria-hidden": "true",
      className: cn(
        "bg-surface-muted-stronger",
        circle ? "rounded-full" : "rounded-md",
        animation === "pulse" && "animate-pulse",
        animation === "shimmer" && "bg-[linear-gradient(90deg,var(--color-surface-muted)_0%,var(--color-surface-muted-stronger)_50%,var(--color-surface-muted)_100%)] bg-[length:200%_100%] animate-[jz-skeleton-shimmer_1.6s_linear_infinite]",
        !circle && "h-4 w-full",
        className
      ),
      ...props
    }
  )
);
Skeleton.displayName = "Skeleton";

// src/components/Avatar.tsx
var import_react29 = require("react");
var import_class_variance_authority17 = require("class-variance-authority");
var import_jsx_runtime28 = require("react/jsx-runtime");
var avatarVariants = (0, import_class_variance_authority17.cva)(
  "relative inline-flex shrink-0 overflow-hidden bg-surface-muted text-foreground-muted select-none",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md"
      }
    },
    defaultVariants: {
      size: "md",
      shape: "circle"
    }
  }
);
var Avatar = (0, import_react29.forwardRef)(
  ({ className, size, shape, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "span",
    {
      ref,
      className: cn(avatarVariants({ size, shape }), className),
      ...props
    }
  )
);
Avatar.displayName = "Avatar";
var AvatarImage = (0, import_react29.forwardRef)(
  ({ className, src, onLoadingStatusChange, alt = "", ...props }, ref) => {
    const [status, setStatus] = (0, import_react29.useState)(src ? "loading" : "idle");
    (0, import_react29.useEffect)(() => {
      onLoadingStatusChange?.(status);
    }, [status, onLoadingStatusChange]);
    if (!src || status === "error") return null;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "img",
      {
        ref,
        src,
        alt,
        onLoad: () => setStatus("loaded"),
        onError: () => setStatus("error"),
        className: cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity",
          status === "loaded" ? "opacity-100" : "opacity-0",
          className
        ),
        ...props
      }
    );
  }
);
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = (0, import_react29.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "span",
    {
      ref,
      className: cn(
        "flex h-full w-full items-center justify-center font-medium uppercase",
        className
      ),
      ...props
    }
  )
);
AvatarFallback.displayName = "AvatarFallback";
var AvatarGroup = (0, import_react29.forwardRef)(
  ({ className, spacing = "md", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "div",
    {
      ref,
      className: cn(
        "flex items-center",
        spacing === "tight" && "[&>*]:-ml-3 [&>*:first-child]:ml-0",
        spacing === "md" && "[&>*]:-ml-2 [&>*:first-child]:ml-0",
        spacing === "loose" && "[&>*]:-ml-1 [&>*:first-child]:ml-0",
        "[&>*]:ring-2 [&>*]:ring-background",
        className
      ),
      ...props
    }
  )
);
AvatarGroup.displayName = "AvatarGroup";

// src/components/Breadcrumb.tsx
var import_react30 = require("react");
var import_react_slot2 = require("@radix-ui/react-slot");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Breadcrumb = (0, import_react30.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "nav",
    {
      ref,
      "aria-label": props["aria-label"] ?? "Breadcrumb",
      className: cn("", className),
      ...props
    }
  )
);
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = (0, import_react30.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "ol",
    {
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-foreground-muted sm:gap-2",
        className
      ),
      ...props
    }
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = (0, import_react30.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "li",
    {
      ref,
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = (0, import_react30.forwardRef)(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot2.Slot : "a";
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      Comp,
      {
        ref,
        className: cn(
          "transition-colors hover:text-foreground focus-visible:outline-none focus-visible:underline underline-offset-4",
          className
        ),
        ...props
      }
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = (0, import_react30.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-medium text-foreground", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var ChevronRight2 = () => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("path", { d: "m9 18 6-6-6-6" })
  }
);
var BreadcrumbSeparator = (0, import_react30.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
  "li",
  {
    ref,
    role: "presentation",
    "aria-hidden": "true",
    className: cn("text-foreground-subtle [&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ChevronRight2, {})
  }
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (0, import_react30.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
  "span",
  {
    ref,
    role: "presentation",
    "aria-hidden": "true",
    className: cn(
      "flex h-9 w-9 items-center justify-center text-foreground-subtle",
      className
    ),
    ...props,
    children: [
      "\u2026",
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "sr-only", children: "More" })
    ]
  }
));
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// src/components/Dialog.tsx
var import_react31 = require("react");
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_jsx_runtime30 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = (0, import_react31.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("jz-dialog-overlay fixed inset-0 z-50 bg-overlay backdrop-blur-sm", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var CloseIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "m6 6 12 12" })
    ]
  }
);
var DialogContent = (0, import_react31.forwardRef)(({ className, children, hideClose, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(DialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "jz-dialog-content fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-border bg-surface dark:bg-surface-elevated p-6 shadow-lg sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        !hideClose && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          DialogPrimitive.Close,
          {
            "aria-label": "Close",
            className: "absolute right-4 top-4 rounded-md p-1 text-foreground-muted opacity-70 transition-opacity hover:bg-surface-muted hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CloseIcon2, {})
          }
        )
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  "div",
  {
    className: cn("flex flex-col gap-1.5 text-left", className),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = (0, import_react31.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-tight tracking-tight text-foreground",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = (0, import_react31.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-foreground-muted", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/Tooltip.tsx
var import_react32 = require("react");
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime31 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = (0, import_react32.forwardRef)(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "jz-tooltip-content z-50 overflow-hidden rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-neutral-50 shadow-md dark:bg-neutral-100 dark:text-neutral-950",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/Popover.tsx
var import_react33 = require("react");
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
var import_jsx_runtime32 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverClose = PopoverPrimitive.Close;
var PopoverContent = (0, import_react33.forwardRef)(({ className, align = "center", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "jz-popover-content z-50 w-72 rounded-md border border-border bg-surface dark:bg-surface-elevated p-4 text-sm text-foreground shadow-md outline-none",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/Tabs.tsx
var import_react34 = require("react");
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var import_jsx_runtime33 = require("react/jsx-runtime");
var Tabs = TabsPrimitive.Root;
var TabsList = (0, import_react34.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center gap-1 rounded-md bg-surface-muted p-1 text-foreground-muted",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = (0, import_react34.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-surface data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "dark:data-[state=active]:bg-surface-elevated",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = (0, import_react34.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-md",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/Accordion.tsx
var import_react35 = require("react");
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_jsx_runtime34 = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = (0, import_react35.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-border", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var ChevronDown2 = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "shrink-0 transition-transform duration-200",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "m6 9 6 6 6-6" })
  }
);
var AccordionTrigger = (0, import_react35.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between gap-4 py-4 text-left font-medium text-foreground",
      "transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-sm",
      "[&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(ChevronDown2, {})
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = (0, import_react35.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: cn(
      "jz-accordion-content overflow-hidden text-sm text-foreground-muted",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "pb-4 pt-0", children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/DropdownMenu.tsx
var import_react36 = require("react");
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_jsx_runtime35 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var itemBase = "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors";
var itemInteractive = "focus:bg-surface-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
var ChevronRight3 = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "ml-auto",
    children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "m9 18 6-6-6-6" })
  }
);
var CheckIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("path", { d: "M20 6 9 17l-5-5" })
  }
);
var DotIcon = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", width: "6", height: "6", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("circle", { cx: "12", cy: "12", r: "6" }) });
var DropdownMenuSubTrigger = (0, import_react36.forwardRef)(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      itemBase,
      itemInteractive,
      "data-[state=open]:bg-surface-muted",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ChevronRight3, {})
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = (0, import_react36.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "jz-popover-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-surface dark:bg-surface-elevated p-1 text-foreground shadow-lg",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = (0, import_react36.forwardRef)(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "jz-popover-content z-50 min-w-[10rem] overflow-hidden rounded-md border border-border bg-surface dark:bg-surface-elevated p-1 text-foreground shadow-md",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = (0, import_react36.forwardRef)(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(itemBase, itemInteractive, inset && "pl-8", className),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = (0, import_react36.forwardRef)(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    checked,
    className: cn(itemBase, itemInteractive, "pl-8", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CheckIcon2, {}) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = (0, import_react36.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(itemBase, itemInteractive, "pl-8", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(DotIcon, {}) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = (0, import_react36.forwardRef)(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground-subtle",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = (0, import_react36.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-foreground-subtle",
      className
    ),
    ...props
  }
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Toast.tsx
var import_react37 = require("react");
var ToastPrimitive = __toESM(require("@radix-ui/react-toast"), 1);
var import_class_variance_authority18 = require("class-variance-authority");
var import_jsx_runtime36 = require("react/jsx-runtime");
var toastVariants = (0, import_class_variance_authority18.cva)(
  "group pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border-border bg-surface dark:bg-surface-elevated text-foreground",
        success: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200",
        danger: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200",
        info: "border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-200"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var ToastViewport = (0, import_react37.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  ToastPrimitive.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;
var Toast = (0, import_react37.forwardRef)(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  ToastPrimitive.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  }
));
Toast.displayName = ToastPrimitive.Root.displayName;
var ToastTitle = (0, import_react37.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  ToastPrimitive.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;
var ToastDescription = (0, import_react37.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  ToastPrimitive.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;
var ToastAction = (0, import_react37.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  ToastPrimitive.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-current bg-transparent px-3 text-xs font-medium transition-colors hover:bg-current/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitive.Action.displayName;
var CloseIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "m6 6 12 12" })
    ]
  }
);
var ToastClose = (0, import_react37.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  ToastPrimitive.Close,
  {
    ref,
    "toast-close": "",
    "aria-label": "Close",
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CloseIcon3, {})
  }
));
ToastClose.displayName = ToastPrimitive.Close.displayName;
var ToastContext = (0, import_react37.createContext)(null);
function useToast() {
  const ctx = (0, import_react37.useContext)(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return ctx;
}
function ToastProvider({
  children,
  duration = 5e3,
  limit = 5,
  swipeDirection = "right"
}) {
  const [items, setItems] = (0, import_react37.useState)([]);
  const dismiss = (0, import_react37.useCallback)((id) => {
    setItems(
      (prev) => prev.map((t) => t.id === id ? { ...t, open: false } : t)
    );
  }, []);
  const toast = (0, import_react37.useCallback)(
    (input) => {
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
    [limit]
  );
  const ctx = (0, import_react37.useMemo)(
    () => ({ toast, dismiss }),
    [toast, dismiss]
  );
  (0, import_react37.useEffect)(() => {
    const closed = items.filter((t) => !t.open);
    if (closed.length === 0) return;
    const timer = setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.open));
    }, 400);
    return () => clearTimeout(timer);
  }, [items]);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ToastContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(ToastPrimitive.Provider, { duration, swipeDirection, children: [
    children,
    items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
      Toast,
      {
        variant: t.variant,
        duration: t.duration,
        open: t.open,
        onOpenChange: (open) => {
          if (!open) dismiss(t.id);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex-1 min-w-0", children: [
            t.title && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ToastTitle, { children: t.title }),
            t.description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ToastDescription, { children: t.description })
          ] }),
          t.action && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ToastAction, { altText: t.action.label, onClick: t.action.onClick, children: t.action.label }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ToastClose, {})
        ]
      },
      t.id
    )),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ToastViewport, {})
  ] }) });
}
var _id = 0;
function nextId() {
  return ++_id;
}

// src/components/ListGroup.tsx
var import_react38 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var ListGroup = (0, import_react38.forwardRef)(
  ({ className, flush, horizontal, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "ul",
    {
      ref,
      className: cn(
        "flex bg-surface text-foreground",
        horizontal ? "flex-row" : "flex-col",
        !flush && "rounded-md border border-border overflow-hidden",
        className
      ),
      ...props
    }
  )
);
ListGroup.displayName = "ListGroup";
var variantClasses = {
  success: "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200",
  danger: "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200",
  warning: "bg-yellow-50 text-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-200",
  info: "bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200"
};
var ListGroupItem = (0, import_react38.forwardRef)(
  ({ className, interactive, active, disabled, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "li",
    {
      ref,
      "aria-current": active ? "true" : void 0,
      "aria-disabled": disabled || void 0,
      className: cn(
        "block w-full px-4 py-3 text-sm transition-colors",
        "[&:not(:first-child)]:border-t [&:not(:first-child)]:border-border-subtle",
        interactive && !disabled && "cursor-pointer hover:bg-surface-muted focus-within:bg-surface-muted",
        active && "bg-brand-700 text-neutral-50 hover:bg-brand-700 dark:bg-brand-500 dark:text-neutral-950 dark:hover:bg-brand-500",
        disabled && "opacity-50 pointer-events-none",
        variant && variantClasses[variant],
        className
      ),
      ...props
    }
  )
);
ListGroupItem.displayName = "ListGroupItem";

// src/components/InputGroup.tsx
var import_react39 = require("react");
var import_class_variance_authority19 = require("class-variance-authority");
var import_jsx_runtime38 = require("react/jsx-runtime");
var groupVariants = (0, import_class_variance_authority19.cva)(
  "flex w-full items-stretch overflow-hidden rounded-md border border-border bg-input transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
  {
    variants: {
      size: {
        sm: "h-8 rounded-sm text-sm",
        md: "h-10 rounded-md text-base",
        lg: "h-12 rounded-lg text-lg"
      },
      invalid: {
        true: "border-danger focus-within:border-danger focus-within:ring-danger/30",
        false: ""
      }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);
var InputGroup = (0, import_react39.forwardRef)(
  ({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      ref,
      className: cn(
        groupVariants({ size, invalid }),
        // Strip borders, radii, and focus ring from any descendant Input/select/textarea
        // so the group reads as a single control.
        "[&>input]:border-0 [&>input]:rounded-none [&>input]:bg-transparent [&>input]:focus:ring-0 [&>input]:focus:border-0 [&>input]:h-full [&>input]:flex-1 [&>input]:min-w-0",
        "[&>select]:border-0 [&>select]:rounded-none [&>select]:bg-transparent [&>select]:focus:ring-0 [&>select]:focus:border-0 [&>select]:h-full",
        className
      ),
      ...props
    }
  )
);
InputGroup.displayName = "InputGroup";
var InputGroupAddon = (0, import_react39.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "span",
    {
      ref,
      className: cn(
        "inline-flex shrink-0 items-center gap-1 bg-surface-muted px-3 text-foreground-muted",
        "first:border-r last:border-l border-border [&:only-child]:border-x-0",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  )
);
InputGroupAddon.displayName = "InputGroupAddon";
var InputGroupButton = (0, import_react39.forwardRef)(({ className, type = "button", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
  "button",
  {
    ref,
    type,
    className: cn(
      "inline-flex shrink-0 items-center gap-1 bg-surface-muted px-3 text-foreground-muted",
      "first:border-r last:border-l border-border",
      "transition-colors hover:bg-surface-muted-stronger hover:text-foreground",
      "focus-visible:outline-none focus-visible:bg-surface-muted-stronger",
      "disabled:opacity-50 disabled:pointer-events-none",
      "[&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
InputGroupButton.displayName = "InputGroupButton";

// src/components/Slider.tsx
var import_react40 = require("react");
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"), 1);
var import_class_variance_authority20 = require("class-variance-authority");
var import_jsx_runtime39 = require("react/jsx-runtime");
var trackVariants2 = (0, import_class_variance_authority20.cva)(
  "relative grow overflow-hidden rounded-full bg-surface-muted",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-1.5",
        lg: "h-2"
      }
    },
    defaultVariants: { size: "md" }
  }
);
var rangeVariants = (0, import_class_variance_authority20.cva)("absolute h-full", {
  variants: {
    variant: {
      primary: "bg-brand-700 dark:bg-brand-500",
      accent: "bg-accent-500",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info"
    }
  },
  defaultVariants: { variant: "primary" }
});
var thumbVariants = (0, import_class_variance_authority20.cva)(
  "block rounded-full border-2 bg-surface shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      },
      variant: {
        primary: "border-brand-700 dark:border-brand-500",
        accent: "border-accent-500",
        success: "border-success",
        danger: "border-danger",
        warning: "border-warning",
        info: "border-info"
      }
    },
    defaultVariants: { size: "md", variant: "primary" }
  }
);
var Slider = (0, import_react40.forwardRef)(({ className, size, variant, value, defaultValue, ...props }, ref) => {
  const thumbCount = (Array.isArray(value) ? value.length : void 0) ?? (Array.isArray(defaultValue) ? defaultValue.length : 1);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    SliderPrimitive.Root,
    {
      ref,
      value,
      defaultValue,
      className: cn(
        "relative flex w-full touch-none select-none items-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SliderPrimitive.Track, { className: trackVariants2({ size }), children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SliderPrimitive.Range, { className: rangeVariants({ variant }) }) }),
        Array.from({ length: thumbCount }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          SliderPrimitive.Thumb,
          {
            className: thumbVariants({ size, variant }),
            "aria-label": `Value ${i + 1}`
          },
          i
        ))
      ]
    }
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/Sheet.tsx
var import_react41 = require("react");
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"), 1);
var import_class_variance_authority21 = require("class-variance-authority");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Sheet = DialogPrimitive2.Root;
var SheetTrigger = DialogPrimitive2.Trigger;
var SheetClose = DialogPrimitive2.Close;
var SheetPortal = DialogPrimitive2.Portal;
var SheetOverlay = (0, import_react41.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  DialogPrimitive2.Overlay,
  {
    ref,
    className: cn("jz-dialog-overlay fixed inset-0 z-50 bg-overlay backdrop-blur-sm", className),
    ...props
  }
));
SheetOverlay.displayName = DialogPrimitive2.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority21.cva)(
  "jz-sheet-content fixed z-50 flex flex-col gap-4 border bg-surface dark:bg-surface-elevated p-6 shadow-lg",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-80 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-80 border-l sm:max-w-sm"
      }
    },
    defaultVariants: { side: "right" }
  }
);
var CloseIcon4 = () => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("path", { d: "m6 6 12 12" })
    ]
  }
);
var SheetContent = (0, import_react41.forwardRef)(({ className, side = "right", hideClose, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(SheetPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(SheetOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    DialogPrimitive2.Content,
    {
      ref,
      "data-side": side,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        !hideClose && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          DialogPrimitive2.Close,
          {
            "aria-label": "Close",
            className: "absolute right-4 top-4 rounded-md p-1 text-foreground-muted opacity-70 transition-opacity hover:bg-surface-muted hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CloseIcon4, {})
          }
        )
      ]
    }
  )
] }));
SheetContent.displayName = DialogPrimitive2.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  "div",
  {
    className: cn("flex flex-col gap-1.5 text-left", className),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  "div",
  {
    className: cn(
      "mt-auto flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = (0, import_react41.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  DialogPrimitive2.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-tight tracking-tight text-foreground",
      className
    ),
    ...props
  }
));
SheetTitle.displayName = DialogPrimitive2.Title.displayName;
var SheetDescription = (0, import_react41.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  DialogPrimitive2.Description,
  {
    ref,
    className: cn("text-sm text-foreground-muted", className),
    ...props
  }
));
SheetDescription.displayName = DialogPrimitive2.Description.displayName;

// src/components/Nav.tsx
var import_react42 = require("react");
var import_react_slot3 = require("@radix-ui/react-slot");
var import_jsx_runtime41 = require("react/jsx-runtime");
var NavContext = (0, import_react42.createContext)({
  variant: "default",
  vertical: false
});
var Nav = (0, import_react42.forwardRef)(
  ({ className, variant = "default", vertical = false, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(NavContext.Provider, { value: { variant, vertical }, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "nav",
    {
      ref,
      "data-variant": variant,
      "data-orientation": vertical ? "vertical" : "horizontal",
      className: cn(
        "flex",
        vertical ? "flex-col gap-0.5" : "flex-row flex-wrap items-center",
        variant === "underline" && !vertical ? "border-b border-border gap-0" : "gap-1",
        className
      ),
      ...props,
      children
    }
  ) })
);
Nav.displayName = "Nav";
var NavItem = (0, import_react42.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { ref, className: cn("inline-flex", className), ...props })
);
NavItem.displayName = "NavItem";
var baseLink = "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";
var variantStyles = {
  default: "rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-muted data-[active=true]:bg-surface-muted data-[active=true]:text-foreground",
  underline: "rounded-none border-b-2 border-transparent -mb-px text-foreground-muted hover:text-foreground hover:border-border data-[active=true]:text-foreground data-[active=true]:border-brand-700 dark:data-[active=true]:border-brand-500",
  pills: "rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-muted data-[active=true]:bg-brand-700 data-[active=true]:text-neutral-50 dark:data-[active=true]:bg-brand-500 dark:data-[active=true]:text-neutral-950"
};
var NavLink = (0, import_react42.forwardRef)(
  ({ className, active, disabled, asChild, ...props }, ref) => {
    const { variant } = (0, import_react42.useContext)(NavContext);
    const Comp = asChild ? import_react_slot3.Slot : "a";
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      Comp,
      {
        ref,
        "data-active": active || void 0,
        "aria-current": active ? "page" : void 0,
        "aria-disabled": disabled || void 0,
        className: cn(
          baseLink,
          variantStyles[variant],
          disabled && "pointer-events-none opacity-50",
          className
        ),
        ...props
      }
    );
  }
);
NavLink.displayName = "NavLink";

// src/components/Navbar.tsx
var import_react43 = require("react");
var import_react_slot4 = require("@radix-ui/react-slot");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Navbar = (0, import_react43.forwardRef)(
  ({ className, sticky, borderless, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "header",
    {
      ref,
      className: cn(
        "flex w-full items-center gap-4 bg-background px-6 py-3",
        sticky && "sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        !borderless && "border-b border-border",
        className
      ),
      ...props
    }
  )
);
Navbar.displayName = "Navbar";
var NavbarBrand = (0, import_react43.forwardRef)(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? import_react_slot4.Slot : "a";
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      Comp,
      {
        ref,
        className: cn(
          "inline-flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-foreground transition-colors hover:text-brand-700 dark:hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-sm",
          className
        ),
        ...props
      }
    );
  }
);
NavbarBrand.displayName = "NavbarBrand";
var NavbarContent = (0, import_react43.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "div",
    {
      ref,
      className: cn("flex min-w-0 flex-1 items-center gap-1", className),
      ...props
    }
  )
);
NavbarContent.displayName = "NavbarContent";
var NavbarActions = (0, import_react43.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "div",
    {
      ref,
      className: cn("flex shrink-0 items-center gap-2", className),
      ...props
    }
  )
);
NavbarActions.displayName = "NavbarActions";

// src/components/HoverCard.tsx
var import_react44 = require("react");
var HoverCardPrimitive = __toESM(require("@radix-ui/react-hover-card"), 1);
var import_jsx_runtime43 = require("react/jsx-runtime");
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = (0, import_react44.forwardRef)(({ className, align = "center", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(HoverCardPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
  HoverCardPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "jz-popover-content z-50 w-64 rounded-md border border-border bg-surface dark:bg-surface-elevated p-4 text-sm text-foreground shadow-md outline-none",
      className
    ),
    ...props
  }
) }));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// src/components/ContextMenu.tsx
var import_react45 = require("react");
var ContextMenuPrimitive = __toESM(require("@radix-ui/react-context-menu"), 1);
var import_jsx_runtime44 = require("react/jsx-runtime");
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var itemBase2 = "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors";
var itemInteractive2 = "focus:bg-surface-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
var ChevronRight4 = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "ml-auto",
    children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { d: "m9 18 6-6-6-6" })
  }
);
var CheckIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { d: "M20 6 9 17l-5-5" })
  }
);
var DotIcon2 = () => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", width: "6", height: "6", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("circle", { cx: "12", cy: "12", r: "6" }) });
var ContextMenuSubTrigger = (0, import_react45.forwardRef)(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
  ContextMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      itemBase2,
      itemInteractive2,
      "data-[state=open]:bg-surface-muted",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ChevronRight4, {})
    ]
  }
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = (0, import_react45.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  ContextMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "jz-popover-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-surface dark:bg-surface-elevated p-1 text-foreground shadow-lg",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = (0, import_react45.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  ContextMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "jz-popover-content z-50 min-w-[10rem] overflow-hidden rounded-md border border-border bg-surface dark:bg-surface-elevated p-1 text-foreground shadow-md",
      className
    ),
    ...props
  }
) }));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = (0, import_react45.forwardRef)(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  ContextMenuPrimitive.Item,
  {
    ref,
    className: cn(itemBase2, itemInteractive2, inset && "pl-8", className),
    ...props
  }
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = (0, import_react45.forwardRef)(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
  ContextMenuPrimitive.CheckboxItem,
  {
    ref,
    checked,
    className: cn(itemBase2, itemInteractive2, "pl-8", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CheckIcon3, {}) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = (0, import_react45.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
  ContextMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(itemBase2, itemInteractive2, "pl-8", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(DotIcon2, {}) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = (0, import_react45.forwardRef)(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  ContextMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground-subtle",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = (0, import_react45.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  ContextMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-foreground-subtle",
      className
    ),
    ...props
  }
);
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// src/components/ToggleGroup.tsx
var import_react46 = require("react");
var TogglePrimitive = __toESM(require("@radix-ui/react-toggle"), 1);
var ToggleGroupPrimitive = __toESM(require("@radix-ui/react-toggle-group"), 1);
var import_class_variance_authority22 = require("class-variance-authority");
var import_jsx_runtime45 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority22.cva)(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent text-foreground-muted hover:bg-surface-muted hover:text-foreground data-[state=on]:bg-surface-muted-stronger data-[state=on]:text-foreground",
        outline: "border border-border bg-transparent text-foreground-muted hover:bg-surface-muted hover:text-foreground data-[state=on]:bg-brand-700 data-[state=on]:text-neutral-50 data-[state=on]:border-brand-700 dark:data-[state=on]:bg-brand-500 dark:data-[state=on]:text-neutral-950 dark:data-[state=on]:border-brand-500"
      },
      size: {
        sm: "h-8 px-2 text-sm rounded-sm",
        md: "h-9 px-3 text-sm rounded-md",
        lg: "h-10 px-4 text-base rounded-md"
      }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
);
var ToggleGroupContext = (0, import_react46.createContext)({});
var Toggle = (0, import_react46.forwardRef)(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size }), className),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;
var ToggleGroup = (0, import_react46.forwardRef)(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn(
      "inline-flex items-center",
      variant === "outline" ? "[&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0" : "gap-0.5 rounded-md bg-surface-muted p-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = (0, import_react46.forwardRef)(({ className, children, variant, size, ...props }, ref) => {
  const ctx = (0, import_react46.useContext)(ToggleGroupContext);
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    ToggleGroupPrimitive.Item,
    {
      ref,
      className: cn(
        toggleVariants({
          variant: variant ?? ctx.variant ?? "default",
          size: size ?? ctx.size ?? "md"
        }),
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// src/components/Carousel.tsx
var import_react47 = require("react");
var import_embla_carousel_react = __toESM(require("embla-carousel-react"), 1);
var import_jsx_runtime46 = require("react/jsx-runtime");
var CarouselContext = (0, import_react47.createContext)(null);
function useCarousel() {
  const ctx = (0, import_react47.useContext)(CarouselContext);
  if (!ctx) {
    throw new Error("Carousel components must be used inside <Carousel>");
  }
  return ctx;
}
var Carousel = (0, import_react47.forwardRef)(
  ({
    className,
    opts,
    orientation = "horizontal",
    setApi,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = (0, import_embla_carousel_react.default)({
      ...opts,
      axis: orientation === "vertical" ? "y" : "x"
    });
    const [canScrollPrev, setCanScrollPrev] = (0, import_react47.useState)(false);
    const [canScrollNext, setCanScrollNext] = (0, import_react47.useState)(false);
    const onSelect = (0, import_react47.useCallback)((a) => {
      if (!a) return;
      setCanScrollPrev(a.canScrollPrev());
      setCanScrollNext(a.canScrollNext());
    }, []);
    const scrollPrev = (0, import_react47.useCallback)(() => api?.scrollPrev(), [api]);
    const scrollNext = (0, import_react47.useCallback)(() => api?.scrollNext(), [api]);
    const handleKeyDown = (0, import_react47.useCallback)(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    (0, import_react47.useEffect)(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);
    (0, import_react47.useEffect)(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = (0, import_react47.forwardRef)(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = (0, import_react47.forwardRef)(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
var ChevronLeft2 = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { d: "m15 18-6-6 6-6" })
  }
);
var ChevronRight5 = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("path", { d: "m9 18 6-6-6-6" })
  }
);
var navButtonBase = "absolute z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40 disabled:pointer-events-none";
var CarouselPrevious = (0, import_react47.forwardRef)(({ className, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "button",
    {
      ref,
      type: "button",
      "aria-label": "Previous slide",
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      className: cn(
        navButtonBase,
        orientation === "horizontal" ? "left-3 top-1/2 -translate-y-1/2" : "left-1/2 top-3 -translate-x-1/2 rotate-90",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ChevronLeft2, {})
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = (0, import_react47.forwardRef)(({ className, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "button",
    {
      ref,
      type: "button",
      "aria-label": "Next slide",
      disabled: !canScrollNext,
      onClick: scrollNext,
      className: cn(
        navButtonBase,
        orientation === "horizontal" ? "right-3 top-1/2 -translate-y-1/2" : "left-1/2 bottom-3 -translate-x-1/2 rotate-90",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ChevronRight5, {})
    }
  );
});
CarouselNext.displayName = "CarouselNext";

// src/components/FileInput.tsx
var import_react48 = require("react");
var import_class_variance_authority23 = require("class-variance-authority");
var import_jsx_runtime47 = require("react/jsx-runtime");
var surfaceVariants = (0, import_class_variance_authority23.cva)(
  "flex w-full items-stretch overflow-hidden rounded-md border border-border bg-input text-foreground transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "h-8 rounded-sm text-sm",
        md: "h-10 rounded-md text-base",
        lg: "h-12 rounded-lg text-lg"
      },
      invalid: {
        true: "border-danger focus-within:border-danger focus-within:ring-danger/30",
        false: ""
      }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);
var FileInput = (0, import_react48.forwardRef)(
  ({
    className,
    size,
    invalid,
    buttonText = "Choose file",
    placeholder = "No file chosen",
    multiple,
    disabled,
    onChange,
    ...props
  }, ref) => {
    const inputRef = (0, import_react48.useRef)(null);
    (0, import_react48.useImperativeHandle)(ref, () => inputRef.current);
    const [label, setLabel] = (0, import_react48.useState)(placeholder);
    const handleChange = (0, import_react48.useCallback)(
      (e) => {
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
      [onChange, placeholder]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: cn(surfaceVariants({ size, invalid }), className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "button",
        {
          type: "button",
          disabled,
          onClick: () => inputRef.current?.click(),
          className: cn(
            "inline-flex shrink-0 items-center gap-1 border-r border-border bg-surface-muted px-3 font-medium text-foreground-muted transition-colors",
            "hover:bg-surface-muted-stronger hover:text-foreground",
            "focus-visible:outline-none focus-visible:bg-surface-muted-stronger",
            "disabled:opacity-50 disabled:pointer-events-none"
          ),
          children: buttonText
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "span",
        {
          className: cn(
            "flex flex-1 items-center truncate px-3 text-foreground-muted",
            label === placeholder && "text-foreground-subtle"
          ),
          "aria-hidden": "true",
          children: label
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "input",
        {
          ref: inputRef,
          type: "file",
          multiple,
          disabled,
          "aria-invalid": invalid || void 0,
          onChange: handleChange,
          className: "sr-only",
          ...props
        }
      )
    ] });
  }
);
FileInput.displayName = "FileInput";

// src/components/ColorInput.tsx
var import_react49 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var sizeClasses = {
  sm: "h-8 w-8 rounded-sm",
  md: "h-10 w-10 rounded-md",
  lg: "h-12 w-12 rounded-lg"
};
var ColorInput = (0, import_react49.forwardRef)(
  ({
    className,
    size = "md",
    invalid,
    showHex = true,
    value,
    defaultValue = "#014c6c",
    onChange,
    ...props
  }, ref) => {
    const isControlled3 = value !== void 0;
    const [internal, setInternal] = (0, import_react49.useState)(
      isControlled3 ? "" : String(defaultValue)
    );
    const current = isControlled3 ? String(value ?? "") : internal;
    const handleChange = (e) => {
      if (!isControlled3) setInternal(e.target.value);
      onChange?.(e);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("span", { className: cn("inline-flex items-center gap-2", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        "span",
        {
          className: cn(
            "relative inline-flex shrink-0 overflow-hidden border border-border transition-colors",
            "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
            invalid && "border-danger focus-within:border-danger focus-within:ring-danger/30",
            sizeClasses[size]
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
            "input",
            {
              ref,
              type: "color",
              value: current,
              onChange: handleChange,
              "aria-invalid": invalid || void 0,
              className: "absolute inset-0 h-full w-full cursor-pointer appearance-none border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0",
              ...props
            }
          )
        }
      ),
      showHex && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("code", { className: "font-mono text-sm uppercase text-foreground-muted", children: current })
    ] });
  }
);
ColorInput.displayName = "ColorInput";

// src/components/Datalist.tsx
var import_react50 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
var Datalist = (0, import_react50.forwardRef)(
  (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("datalist", { ref, ...props })
);
Datalist.displayName = "Datalist";
var DatalistOption = (0, import_react50.forwardRef)(
  (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("option", { ref, ...props })
);
DatalistOption.displayName = "DatalistOption";

// src/components/Blockquote.tsx
var import_react51 = require("react");
var import_jsx_runtime50 = require("react/jsx-runtime");
var Blockquote = (0, import_react51.forwardRef)(
  ({ className, align = "start", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "blockquote",
    {
      ref,
      className: cn(
        "text-lg text-foreground-muted italic leading-relaxed",
        align === "start" && "border-l-4 border-brand-700 dark:border-brand-500 pl-4",
        align === "end" && "border-r-4 border-brand-700 dark:border-brand-500 pr-4 text-right",
        align === "center" && "text-center",
        className
      ),
      ...props
    }
  )
);
Blockquote.displayName = "Blockquote";
var Cite = (0, import_react51.forwardRef)(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "footer",
    {
      ref,
      className: cn("mt-2 text-sm not-italic text-foreground-subtle", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "mr-1", children: "\u2014" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("cite", { children })
      ]
    }
  )
);
Cite.displayName = "Cite";

// src/components/Figure.tsx
var import_react52 = require("react");
var import_jsx_runtime51 = require("react/jsx-runtime");
var Figure = (0, import_react52.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "figure",
    {
      ref,
      className: cn("inline-block", className),
      ...props
    }
  )
);
Figure.displayName = "Figure";
var FigureCaption = (0, import_react52.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "figcaption",
    {
      ref,
      className: cn("mt-2 text-sm text-foreground-subtle", className),
      ...props
    }
  )
);
FigureCaption.displayName = "FigureCaption";

// src/components/Command.tsx
var import_react53 = require("react");
var import_cmdk = require("cmdk");
var import_jsx_runtime52 = require("react/jsx-runtime");
var Command = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  import_cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-surface dark:bg-surface-elevated text-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = import_cmdk.Command.displayName;
var SearchIcon = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "shrink-0 opacity-50",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("path", { d: "m21 21-4.3-4.3" })
    ]
  }
);
var CommandInput = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex items-center gap-2 border-b border-border px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SearchIcon, {}),
  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    import_cmdk.Command.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-foreground-subtle disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  import_cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  import_cmdk.Command.Empty,
  {
    ref,
    className: cn("py-6 text-center text-sm text-foreground-muted", className),
    ...props
  }
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  import_cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground",
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-foreground-subtle",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  import_cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = (0, import_react53.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  import_cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
      "data-[selected=true]:bg-surface-muted data-[selected=true]:text-foreground",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      "[&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  "span",
  {
    className: cn(
      "ml-auto text-xs tracking-widest text-foreground-subtle",
      className
    ),
    ...props
  }
);
CommandShortcut.displayName = "CommandShortcut";

// src/components/Combobox.tsx
var import_react54 = require("react");
var import_jsx_runtime53 = require("react/jsx-runtime");
var triggerSize = {
  sm: "h-8 px-3 text-sm rounded-sm",
  md: "h-10 px-3 text-base rounded-md",
  lg: "h-12 px-4 text-lg rounded-lg"
};
var ChevronDown3 = () => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "ml-2 shrink-0 opacity-60",
    children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("path", { d: "m6 9 6 6 6-6" })
  }
);
var CheckIcon4 = () => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("path", { d: "M20 6 9 17l-5-5" })
  }
);
var Combobox = (0, import_react54.forwardRef)(
  ({
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
    id
  }, ref) => {
    const isControlled3 = value !== void 0;
    const [internal, setInternal] = (0, import_react54.useState)(defaultValue ?? "");
    const current = isControlled3 ? value ?? "" : internal;
    const [open, setOpen] = (0, import_react54.useState)(false);
    const selected = options.find((o) => o.value === current);
    const commit = (next) => {
      if (!isControlled3) setInternal(next);
      onValueChange?.(next);
      setOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
        "button",
        {
          ref,
          id,
          type: "button",
          role: "combobox",
          "aria-expanded": open,
          "aria-invalid": invalid || void 0,
          disabled,
          className: cn(
            "inline-flex w-full items-center justify-between bg-input text-foreground border border-border transition-colors",
            "focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/30",
            "disabled:bg-border-subtle disabled:opacity-60 disabled:cursor-not-allowed",
            invalid && "border-danger focus:border-danger focus:ring-danger/30",
            triggerSize[size],
            !selected && "text-foreground-subtle",
            className
          ),
          style: typeof width === "number" ? { width } : width ? { width } : void 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "truncate", children: selected ? selected.label : placeholder }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ChevronDown3, {})
          ]
        }
      ) }),
      name && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("input", { type: "hidden", name, value: current }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
        PopoverContent,
        {
          className: "w-[--radix-popover-trigger-width] min-w-[12rem] p-0",
          align: "start",
          sideOffset: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(Command, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CommandInput, { placeholder: searchPlaceholder }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(CommandList, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CommandEmpty, { children: emptyMessage }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CommandGroup, { children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
                CommandItem,
                {
                  value: opt.label,
                  disabled: opt.disabled,
                  onSelect: () => commit(opt.value),
                  children: [
                    opt.icon,
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "flex-1 truncate", children: opt.label }),
                    opt.hint && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "text-xs text-foreground-subtle", children: opt.hint }),
                    opt.value === current && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "text-brand-700 dark:text-brand-300", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CheckIcon4, {}) })
                  ]
                },
                opt.value
              )) })
            ] })
          ] })
        }
      )
    ] });
  }
);
Combobox.displayName = "Combobox";

// src/components/Calendar.tsx
var import_react_day_picker2 = require("react-day-picker");
var import_jsx_runtime54 = require("react/jsx-runtime");
function Calendar({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: cn("jz-datepicker-popover", className), children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_day_picker2.DayPicker, { ...props }) });
}
Calendar.displayName = "Calendar";

// src/components/AspectRatio.tsx
var AspectRatioPrimitive = __toESM(require("@radix-ui/react-aspect-ratio"), 1);
var AspectRatio = AspectRatioPrimitive.Root;

// src/components/ScrollArea.tsx
var import_react55 = require("react");
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"), 1);
var import_jsx_runtime55 = require("react/jsx-runtime");
var ScrollArea = (0, import_react55.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ScrollBar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = (0, import_react55.forwardRef)(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-surface-muted-stronger" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/Collapsible.tsx
var CollapsiblePrimitive = __toESM(require("@radix-ui/react-collapsible"), 1);
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger = CollapsiblePrimitive.Trigger;
var CollapsibleContent = CollapsiblePrimitive.Content;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Blockquote,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Cite,
  Code,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ColorInput,
  Combobox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Datalist,
  DatalistOption,
  DateInput,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Figure,
  FigureCaption,
  FileInput,
  FormError,
  FormErrorMessage,
  FormField,
  FormHelperText,
  Heading,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Kbd,
  Label,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  Pagination,
  PaginationButton,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrev,
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Radio,
  RadioGroup,
  ScrollArea,
  ScrollBar,
  Select,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  SimplePagination,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  TimeInput,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  buildPageList,
  useToast
});
//# sourceMappingURL=index.cjs.map