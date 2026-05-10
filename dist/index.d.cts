import * as react from 'react';
import react__default, { ButtonHTMLAttributes, HTMLAttributes, LabelHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ComponentPropsWithoutRef, ReactNode, SVGAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';

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

export { Alert, type AlertProps, Badge, type BadgeProps, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Card, CardBody, type CardBodyProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, Checkbox, type CheckboxProps, Code, type CodeProps, FormError, FormErrorMessage, type FormErrorMessageProps, type FormErrorProps, FormField, type FormFieldProps, FormHelperText, type FormHelperTextProps, Heading, type HeadingProps, Input, type InputProps, Kbd, type KbdProps, Label, type LabelProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Select, type SelectProps, Separator, type SeparatorProps, Spinner, type SpinnerProps, Switch, type SwitchProps, Text, type TextProps, Textarea, type TextareaProps };
