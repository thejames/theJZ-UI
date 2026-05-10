"use client";

// src/components/Button.tsx
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
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
        link: "text-brand-700 underline-offset-4 hover:underline hover:text-brand-800 focus-visible:ring-ring/40 px-0 py-0 h-auto"
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
var Spinner = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: "animate-spin size-4",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var Button = forwardRef(
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
      return /* @__PURE__ */ jsx(Slot, { ref, className: classes, ...props, children });
    }
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: classes,
        disabled: disabled || loading,
        "aria-busy": loading || void 0,
        ...props,
        children: [
          loading ? /* @__PURE__ */ jsx(Spinner, {}) : null,
          loading ? /* @__PURE__ */ jsx("span", { className: "opacity-70", children }) : children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ButtonGroup.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var groupClasses = {
  horizontal: "inline-flex [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:border-r-0",
  vertical: "inline-flex flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:last-child)]:border-b-0"
};
var ButtonGroup = forwardRef2(
  ({ className, orientation = "horizontal", children, ...props }, ref) => /* @__PURE__ */ jsx2(
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
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Label = forwardRef3(
  ({ className, required, children, ...props }, ref) => /* @__PURE__ */ jsxs2(
    "label",
    {
      ref,
      className: cn("block text-sm font-medium text-foreground mb-1.5 transition-colors", className),
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ jsx3("span", { "aria-hidden": "true", className: "ml-0.5 text-danger", children: "*" })
      ]
    }
  )
);
Label.displayName = "Label";

// src/components/Input.tsx
import { forwardRef as forwardRef4 } from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var inputVariants = cva2(
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
var Input = forwardRef4(
  ({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ jsx4(
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
import { forwardRef as forwardRef5 } from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var textareaVariants = cva3(
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
var Textarea = forwardRef5(
  ({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ jsx5(
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
import { forwardRef as forwardRef6 } from "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var selectVariants = cva4(
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
var ChevronDown = () => /* @__PURE__ */ jsx6(
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
    children: /* @__PURE__ */ jsx6("path", { d: "m6 9 6 6 6-6" })
  }
);
var Select = forwardRef6(
  ({ className, size, invalid, children, ...props }, ref) => /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
    /* @__PURE__ */ jsx6(
      "select",
      {
        ref,
        "aria-invalid": invalid || void 0,
        className: cn(selectVariants({ size, invalid }), "pr-10", className),
        ...props,
        children
      }
    ),
    /* @__PURE__ */ jsx6(ChevronDown, {})
  ] })
);
Select.displayName = "Select";

// src/components/FormField.tsx
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var FormField = forwardRef7(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
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
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var FormHelperText = forwardRef8(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
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
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var FormErrorMessage = forwardRef9(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
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
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var FormError = forwardRef10(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
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
import {
  forwardRef as forwardRef11
} from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx11 } from "react/jsx-runtime";
var checkboxVariants = cva5(
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
var CheckIcon = () => /* @__PURE__ */ jsx11(
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
    children: /* @__PURE__ */ jsx11("path", { d: "M5 12l5 5L20 7" })
  }
);
var IndeterminateIcon = () => /* @__PURE__ */ jsx11(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    "aria-hidden": "true",
    className: "size-3/4",
    children: /* @__PURE__ */ jsx11("path", { d: "M6 12h12" })
  }
);
var Checkbox = forwardRef11(({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ jsx11(
  CheckboxPrimitive.Root,
  {
    ref,
    "aria-invalid": invalid || void 0,
    className: cn(checkboxVariants({ size, invalid }), className),
    ...props,
    children: /* @__PURE__ */ jsx11(CheckboxPrimitive.Indicator, { className: "text-neutral-50 flex items-center justify-center", children: props.checked === "indeterminate" ? /* @__PURE__ */ jsx11(IndeterminateIcon, {}) : /* @__PURE__ */ jsx11(CheckIcon, {}) })
  }
));
Checkbox.displayName = "Checkbox";

// src/components/RadioGroup.tsx
import {
  forwardRef as forwardRef12
} from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx12 } from "react/jsx-runtime";
var RadioGroup = forwardRef12(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx12(
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
var radioVariants = cva6(
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
var Radio = forwardRef12(({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ jsx12(
  RadioGroupPrimitive.Item,
  {
    ref,
    "aria-invalid": invalid || void 0,
    className: cn(radioVariants({ size, invalid }), className),
    ...props,
    children: /* @__PURE__ */ jsx12(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx12(
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
import {
  forwardRef as forwardRef13
} from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx13 } from "react/jsx-runtime";
var switchRootVariants = cva7(
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
var switchThumbVariants = cva7(
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
var Switch = forwardRef13(({ className, size, invalid, ...props }, ref) => /* @__PURE__ */ jsx13(
  SwitchPrimitive.Root,
  {
    ref,
    "aria-invalid": invalid || void 0,
    className: cn(switchRootVariants({ size, invalid }), className),
    ...props,
    children: /* @__PURE__ */ jsx13(SwitchPrimitive.Thumb, { className: switchThumbVariants({ size }) })
  }
));
Switch.displayName = "Switch";

// src/components/Alert.tsx
import {
  forwardRef as forwardRef14
} from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx14, jsxs as jsxs4 } from "react/jsx-runtime";
var alertVariants = cva8(
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
var InfoIcon = () => /* @__PURE__ */ jsxs4(
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
      /* @__PURE__ */ jsx14("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx14("path", { d: "M12 16v-4" }),
      /* @__PURE__ */ jsx14("path", { d: "M12 8h.01" })
    ]
  }
);
var SuccessIcon = () => /* @__PURE__ */ jsxs4(
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
      /* @__PURE__ */ jsx14("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      /* @__PURE__ */ jsx14("path", { d: "m9 11 3 3L22 4" })
    ]
  }
);
var WarningIcon = () => /* @__PURE__ */ jsxs4(
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
      /* @__PURE__ */ jsx14("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
      /* @__PURE__ */ jsx14("path", { d: "M12 9v4" }),
      /* @__PURE__ */ jsx14("path", { d: "M12 17h.01" })
    ]
  }
);
var DangerIcon = () => /* @__PURE__ */ jsxs4(
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
      /* @__PURE__ */ jsx14("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx14("path", { d: "m15 9-6 6" }),
      /* @__PURE__ */ jsx14("path", { d: "m9 9 6 6" })
    ]
  }
);
var CloseIcon = () => /* @__PURE__ */ jsxs4(
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
      /* @__PURE__ */ jsx14("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ jsx14("path", { d: "m6 6 12 12" })
    ]
  }
);
var defaultIconForVariant = (variant = "info") => {
  switch (variant) {
    case "success":
      return /* @__PURE__ */ jsx14(SuccessIcon, {});
    case "warning":
      return /* @__PURE__ */ jsx14(WarningIcon, {});
    case "danger":
      return /* @__PURE__ */ jsx14(DangerIcon, {});
    case "info":
    default:
      return /* @__PURE__ */ jsx14(InfoIcon, {});
  }
};
var Alert = forwardRef14(
  ({ className, variant, title, icon, onClose, children, ...props }, ref) => /* @__PURE__ */ jsxs4(
    "div",
    {
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props,
      children: [
        icon !== false && /* @__PURE__ */ jsx14(
          "span",
          {
            className: "shrink-0 mt-0.5 [&_svg]:size-5",
            "aria-hidden": "true",
            children: icon ?? defaultIconForVariant(variant)
          }
        ),
        /* @__PURE__ */ jsxs4("div", { className: "flex-1 min-w-0", children: [
          title && /* @__PURE__ */ jsx14("div", { className: "font-semibold mb-1", children: title }),
          children
        ] }),
        onClose && /* @__PURE__ */ jsx14(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Dismiss",
            className: "shrink-0 -mt-1 -mr-1 p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-current/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 transition-opacity [&_svg]:size-4",
            children: /* @__PURE__ */ jsx14(CloseIcon, {})
          }
        )
      ]
    }
  )
);
Alert.displayName = "Alert";

// src/components/Badge.tsx
import { forwardRef as forwardRef15 } from "react";
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx15 } from "react/jsx-runtime";
var badgeVariants = cva9(
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
var Badge = forwardRef15(
  ({ className, variant, size, soft, ...props }, ref) => /* @__PURE__ */ jsx15(
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
import { forwardRef as forwardRef16 } from "react";
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx16 } from "react/jsx-runtime";
var cardVariants = cva10(
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
var Card = forwardRef16(
  ({ className, elevation, ...props }, ref) => /* @__PURE__ */ jsx16(
    "div",
    {
      ref,
      className: cn(cardVariants({ elevation }), className),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
    "div",
    {
      ref,
      className: cn("flex flex-col gap-1.5 px-6 pt-6 pb-0", className),
      ...props
    }
  )
);
CardHeader.displayName = "CardHeader";
var CardTitle = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
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
var CardDescription = forwardRef16(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  "p",
  {
    ref,
    className: cn("text-sm text-foreground-muted transition-colors", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardBody = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16("div", { ref, className: cn("p-6", className), ...props })
);
CardBody.displayName = "CardBody";
var CardFooter = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
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
import React, { forwardRef as forwardRef17 } from "react";
import { cva as cva11 } from "class-variance-authority";
var headingVariants = cva11(
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
var Heading = forwardRef17(
  ({ level = 2, size, className, children, ...props }, ref) => {
    const resolvedSize = size ?? DEFAULT_SIZE_BY_LEVEL[level];
    return React.createElement(
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
import { forwardRef as forwardRef18 } from "react";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx17 } from "react/jsx-runtime";
var separatorVariants = cva12("bg-border shrink-0 transition-colors", {
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
var Separator = forwardRef18(
  ({ orientation = "horizontal", decorative = true, className, ...props }, ref) => /* @__PURE__ */ jsx17(
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
import { forwardRef as forwardRef19 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var Code = forwardRef19(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
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
import { forwardRef as forwardRef20 } from "react";
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx19 } from "react/jsx-runtime";
var kbdVariants = cva13(
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
var Kbd = forwardRef20(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsx19(
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
import { forwardRef as forwardRef21 } from "react";
import { cva as cva14 } from "class-variance-authority";
import { jsx as jsx20, jsxs as jsxs5 } from "react/jsx-runtime";
var spinnerVariants = cva14("animate-spin text-current", {
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
var Spinner2 = forwardRef21(
  ({ className, size, label = "Loading", ...props }, ref) => /* @__PURE__ */ jsxs5(
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
        /* @__PURE__ */ jsx20(
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
        /* @__PURE__ */ jsx20(
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
import { forwardRef as forwardRef22 } from "react";
import { cva as cva15 } from "class-variance-authority";
import { jsx as jsx21 } from "react/jsx-runtime";
var textVariants = cva15("", {
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
var Text = forwardRef22(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx21(
    "p",
    {
      ref,
      className: cn(textVariants({ variant }), className),
      ...props
    }
  )
);
Text.displayName = "Text";
export {
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
  Spinner2 as Spinner,
  Switch,
  Text,
  Textarea
};
//# sourceMappingURL=index.js.map