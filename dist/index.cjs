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
  Alert: () => Alert,
  Badge: () => Badge,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Card: () => Card,
  CardBody: () => CardBody,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Code: () => Code,
  FormError: () => FormError,
  FormErrorMessage: () => FormErrorMessage,
  FormField: () => FormField,
  FormHelperText: () => FormHelperText,
  Heading: () => Heading,
  Input: () => Input,
  Kbd: () => Kbd,
  Label: () => Label,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  Select: () => Select,
  Separator: () => Separator,
  Spinner: () => Spinner2,
  Switch: () => Switch,
  Text: () => Text,
  Textarea: () => Textarea
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Code,
  FormError,
  FormErrorMessage,
  FormField,
  FormHelperText,
  Heading,
  Input,
  Kbd,
  Label,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Spinner,
  Switch,
  Text,
  Textarea
});
//# sourceMappingURL=index.cjs.map