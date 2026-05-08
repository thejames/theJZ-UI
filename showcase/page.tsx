"use client";

/**
 * @jameszambon/ui — Design system showcase
 *
 * Drop this file into any Next.js 14+ App Router app at app/design-system/page.tsx
 * to render the full component reference. Requires:
 *   - @jameszambon/ui installed (any version with Card and Badge)
 *   - Tailwind CSS v4 configured
 *   - Inter loaded via next/font and applied to <body>
 *   - Global stylesheet imports:
 *       @import "tailwindcss";
 *       @import "@jameszambon/ui/theme.css";
 */

import { useState } from "react";
import {
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
  FormErrorMessage,
  FormField,
  FormHelperText,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Textarea,
  type BadgeProps,
  type ButtonProps,
} from "@jameszambon/ui";

// ───────────────────────── static data ─────────────────────────

const BUTTON_VARIANTS: NonNullable<ButtonProps["variant"]>[] = [
  "primary", "secondary", "accent",
  "success", "danger", "warning", "info",
  "light", "dark",
  "outline-primary", "outline-secondary", "outline-accent",
  "outline-success", "outline-danger", "outline-warning", "outline-info",
  "ghost", "link",
];

const BUTTON_SIZES: NonNullable<ButtonProps["size"]>[] = ["sm", "md", "lg"];

const BADGE_VARIANTS: NonNullable<BadgeProps["variant"]>[] = [
  "primary", "secondary", "accent",
  "success", "danger", "warning", "info",
];

const BRAND_SCALE = [
  { shade: "50",  bg: "bg-brand-50",  text: "text-neutral-950" },
  { shade: "100", bg: "bg-brand-100", text: "text-neutral-950" },
  { shade: "200", bg: "bg-brand-200", text: "text-neutral-950" },
  { shade: "300", bg: "bg-brand-300", text: "text-neutral-950" },
  { shade: "400", bg: "bg-brand-400", text: "text-neutral-50" },
  { shade: "500", bg: "bg-brand-500", text: "text-neutral-50" },
  { shade: "600", bg: "bg-brand-600", text: "text-neutral-50" },
  { shade: "700", bg: "bg-brand-700", text: "text-neutral-50" },
  { shade: "800", bg: "bg-brand-800", text: "text-neutral-50" },
  { shade: "900", bg: "bg-brand-900", text: "text-neutral-50" },
  { shade: "950", bg: "bg-brand-950", text: "text-neutral-50" },
];

const ACCENT_SCALE = [
  { shade: "50",  bg: "bg-accent-50",  text: "text-neutral-950" },
  { shade: "100", bg: "bg-accent-100", text: "text-neutral-950" },
  { shade: "200", bg: "bg-accent-200", text: "text-neutral-950" },
  { shade: "300", bg: "bg-accent-300", text: "text-neutral-950" },
  { shade: "400", bg: "bg-accent-400", text: "text-neutral-50" },
  { shade: "500", bg: "bg-accent-500", text: "text-neutral-50" },
  { shade: "600", bg: "bg-accent-600", text: "text-neutral-50" },
  { shade: "700", bg: "bg-accent-700", text: "text-neutral-50" },
  { shade: "800", bg: "bg-accent-800", text: "text-neutral-50" },
  { shade: "900", bg: "bg-accent-900", text: "text-neutral-50" },
  { shade: "950", bg: "bg-accent-950", text: "text-neutral-50" },
];

const NEUTRAL_SCALE = [
  { shade: "50",  bg: "bg-neutral-50",  text: "text-neutral-950" },
  { shade: "100", bg: "bg-neutral-100", text: "text-neutral-950" },
  { shade: "200", bg: "bg-neutral-200", text: "text-neutral-950" },
  { shade: "300", bg: "bg-neutral-300", text: "text-neutral-950" },
  { shade: "400", bg: "bg-neutral-400", text: "text-neutral-950" },
  { shade: "500", bg: "bg-neutral-500", text: "text-neutral-50" },
  { shade: "600", bg: "bg-neutral-600", text: "text-neutral-50" },
  { shade: "700", bg: "bg-neutral-700", text: "text-neutral-50" },
  { shade: "800", bg: "bg-neutral-800", text: "text-neutral-50" },
  { shade: "900", bg: "bg-neutral-900", text: "text-neutral-50" },
  { shade: "950", bg: "bg-neutral-950", text: "text-neutral-50" },
];

const TYPE_SCALE = [
  { name: "text-xs",   className: "text-xs" },
  { name: "text-sm",   className: "text-sm" },
  { name: "text-base", className: "text-base" },
  { name: "text-lg",   className: "text-lg" },
  { name: "text-xl",   className: "text-xl" },
  { name: "text-2xl",  className: "text-2xl" },
  { name: "text-3xl",  className: "text-3xl" },
  { name: "text-4xl",  className: "text-4xl" },
  { name: "text-5xl",  className: "text-5xl" },
  { name: "text-6xl",  className: "text-6xl" },
  { name: "text-7xl",  className: "text-7xl" },
];

const PROJECT_TYPES = [
  { value: "",        label: "Select a project type" },
  { value: "brand",   label: "Brand identity" },
  { value: "web",     label: "Web design" },
  { value: "video",   label: "Video production" },
  { value: "consult", label: "Consultation" },
];

const NOTIFICATIONS = [
  { id: "ds-notif-email", title: "Email",   help: "Weekly digest and important account activity.",  defaultOn: true },
  { id: "ds-notif-push",  title: "Push",    help: "Real-time alerts on your devices.",              defaultOn: true },
  { id: "ds-notif-sms",   title: "SMS",     help: "Critical security messages only.",                defaultOn: false },
  { id: "ds-notif-app",   title: "In-app",  help: "Banner notifications inside the dashboard.",     defaultOn: true },
];

const PLANS = [
  { value: "starter", title: "Starter", help: "For solo creators getting started." },
  { value: "pro",     title: "Pro",     help: "For working professionals." },
  { value: "studio",  title: "Studio",  help: "For teams and agencies." },
];

const PERMISSIONS: { id: string; title: string; defaultChecked?: boolean; indeterminate?: boolean }[] = [
  { id: "ds-perm-read",   title: "Read",   defaultChecked: true },
  { id: "ds-perm-write",  title: "Write",  defaultChecked: true },
  { id: "ds-perm-delete", title: "Delete", defaultChecked: false },
  { id: "ds-perm-admin",  title: "Admin",  indeterminate: true },
];

const STATS = [
  { label: "Active sessions", value: "142" },
  { label: "Storage used",    value: "47.3 GB" },
  { label: "API calls today", value: "1,294" },
];

const FILES = [
  { name: "render-pipeline-v3.mp4", status: "ready",      variant: "success" as const },
  { name: "brand-reel-final.mov",   status: "processing", variant: "warning" as const },
  { name: "client-cut-draft.mp4",   status: "failed",     variant: "danger"  as const },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.32.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .32-.988l5.518-.442a.562.562 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

// ───────────────────────── page ─────────────────────────

export default function DesignSystemPage() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <main className="min-h-screen bg-neutral-100 font-sans text-neutral-950">
      <header className="mx-auto max-w-6xl px-8 pt-16 pb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-5xl font-bold">@jameszambon/ui</h1>
          <Badge variant="accent" soft>v2026.0508</Badge>
        </div>
        <p className="mt-2 max-w-2xl text-lg text-neutral-600">
          Design system reference for JZ Productions. Bootstrap structure, brand colors, Tailwind v4.
        </p>
      </header>

      <nav className="sticky top-0 z-10 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-x-6 gap-y-2 px-8 py-4 text-sm font-medium">
          <a href="#foundation" className="hover:text-brand-700 transition-colors">Foundation</a>
          <a href="#actions"    className="hover:text-brand-700 transition-colors">Actions</a>
          <a href="#forms"      className="hover:text-brand-700 transition-colors">Forms</a>
          <a href="#toggles"    className="hover:text-brand-700 transition-colors">Toggles</a>
          <a href="#feedback"   className="hover:text-brand-700 transition-colors">Feedback</a>
          <a href="#structure"  className="hover:text-brand-700 transition-colors">Structure</a>
        </div>
      </nav>

      {/* ===== FOUNDATION ===== */}
      <section id="foundation" className="mx-auto max-w-6xl scroll-mt-20 space-y-8 px-8 py-16 border-t border-neutral-200">
        <header>
          <h2 className="text-3xl font-bold">Foundation</h2>
          <p className="mt-1 text-neutral-600">Color scales and the type scale.</p>
        </header>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Brand color scale</h3>
          <div className="grid grid-cols-11 gap-px overflow-hidden rounded-md">
            {BRAND_SCALE.map((s) => (
              <div key={s.shade} className={`${s.bg} ${s.text} flex h-20 flex-col justify-end p-2`}>
                <div className="text-xs font-semibold">{s.shade}</div>
                <div className="font-mono text-[10px] opacity-70">{s.bg}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Accent color scale</h3>
          <div className="grid grid-cols-11 gap-px overflow-hidden rounded-md">
            {ACCENT_SCALE.map((s) => (
              <div key={s.shade} className={`${s.bg} ${s.text} flex h-20 flex-col justify-end p-2`}>
                <div className="text-xs font-semibold">{s.shade}</div>
                <div className="font-mono text-[10px] opacity-70">{s.bg}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Neutral color scale</h3>
          <div className="grid grid-cols-11 gap-px overflow-hidden rounded-md">
            {NEUTRAL_SCALE.map((s) => (
              <div key={s.shade} className={`${s.bg} ${s.text} flex h-20 flex-col justify-end p-2`}>
                <div className="text-xs font-semibold">{s.shade}</div>
                <div className="font-mono text-[10px] opacity-70">{s.bg}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Typography</h3>
          <div className="rounded-md border border-neutral-200 bg-neutral-50 divide-y divide-neutral-200">
            {TYPE_SCALE.map((t) => (
              <div key={t.name} className="flex items-baseline gap-6 px-4 py-3">
                <div className="w-24 shrink-0 font-mono text-xs text-neutral-500">{t.name}</div>
                <div className={`${t.className} truncate font-medium leading-tight`}>The quick brown fox</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTIONS ===== */}
      <section id="actions" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16 border-t border-neutral-200">
        <header>
          <h2 className="text-3xl font-bold">Actions</h2>
          <p className="mt-1 text-neutral-600">Button and ButtonGroup.</p>
        </header>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Buttons — variants × sizes</h3>
          <div className="grid grid-cols-[180px_repeat(3,minmax(0,1fr))] items-center gap-x-4 gap-y-3 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <div />
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{s}</div>
            ))}
            {BUTTON_VARIANTS.flatMap((v) => [
              <div key={`${v}-l`} className="font-mono text-xs text-neutral-700">{v}</div>,
              ...BUTTON_SIZES.map((s) => (
                <div key={`${v}-${s}`}>
                  <Button variant={v} size={s}>{v}</Button>
                </div>
              )),
            ])}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">States</h3>
          <div className="flex flex-wrap items-center gap-3 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button variant="outline-primary" loading>Working…</Button>
            <Button asChild variant="link">
              <a href="#foundation">As anchor (asChild)</a>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">ButtonGroup</h3>
          <div className="space-y-4 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <ButtonGroup aria-label="Text formatting">
              <Button variant="outline-secondary">Bold</Button>
              <Button variant="outline-secondary">Italic</Button>
              <Button variant="outline-secondary">Underline</Button>
            </ButtonGroup>

            <div>
              <ButtonGroup aria-label="Save or discard">
                <Button variant="primary">Save</Button>
                <Button variant="outline-primary">Save as draft</Button>
                <Button variant="outline-danger">Discard</Button>
              </ButtonGroup>
            </div>

            <div>
              <ButtonGroup orientation="vertical" aria-label="Sort by">
                <Button variant="outline-secondary">Date</Button>
                <Button variant="outline-secondary">Title</Button>
                <Button variant="outline-secondary">Author</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMS ===== */}
      <section id="forms" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16 border-t border-neutral-200">
        <header>
          <h2 className="text-3xl font-bold">Forms</h2>
          <p className="mt-1 text-neutral-600">Label, Input, Textarea, Select, FormField, helper / error text.</p>
        </header>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact form</h3>
          <form action="#" className="mx-auto w-full max-w-md space-y-4 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <FormField>
              <Label htmlFor="ds-contact-name" required>Name</Label>
              <Input id="ds-contact-name" name="name" placeholder="Jane Doe" />
            </FormField>
            <FormField>
              <Label htmlFor="ds-contact-email" required>Email</Label>
              <Input id="ds-contact-email" name="email" type="email" placeholder="jane@example.com" aria-describedby="ds-contact-email-help" />
              <FormHelperText id="ds-contact-email-help">We&rsquo;ll never share your email.</FormHelperText>
            </FormField>
            <FormField>
              <Label htmlFor="ds-contact-project">Project type</Label>
              <Select id="ds-contact-project" name="project" defaultValue="">
                {PROJECT_TYPES.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ""}>{opt.label}</option>
                ))}
              </Select>
            </FormField>
            <FormField>
              <Label htmlFor="ds-contact-message" required>Message</Label>
              <Textarea id="ds-contact-message" name="message" placeholder="Tell us about your project…" />
            </FormField>
            <Button type="submit" className="w-full">Send message</Button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Error state</h3>
          <form action="#" className="mx-auto w-full max-w-md space-y-4 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <FormField>
              <Label htmlFor="ds-err-name" required>Name</Label>
              <Input id="ds-err-name" name="name" defaultValue="Jane Doe" />
            </FormField>
            <FormField>
              <Label htmlFor="ds-err-email" required>Email</Label>
              <Input id="ds-err-email" name="email" type="email" defaultValue="not-an-email" invalid aria-describedby="ds-err-email-msg" />
              <FormErrorMessage id="ds-err-email-msg">Please enter a valid email address.</FormErrorMessage>
            </FormField>
            <FormField>
              <Label htmlFor="ds-err-message" required>Message</Label>
              <Textarea id="ds-err-message" name="message" placeholder="Tell us about your project…" />
            </FormField>
            <Button type="submit" className="w-full">Send message</Button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sizes</h3>
          <div className="grid grid-cols-3 gap-6 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{s}</div>
                <Input size={s} placeholder={`Input ${s}`} />
                <Select size={s} defaultValue="">
                  <option value="" disabled>Select option</option>
                  <option value="a">Option A</option>
                  <option value="b">Option B</option>
                </Select>
                <Textarea size={s} placeholder={`Textarea ${s}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Disabled</h3>
          <div className="grid grid-cols-3 gap-6 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <Input disabled defaultValue="Disabled input" />
            <Select disabled defaultValue="">
              <option value="" disabled>Disabled select</option>
            </Select>
            <Textarea disabled defaultValue="Disabled textarea" />
          </div>
        </div>
      </section>

      {/* ===== TOGGLES ===== */}
      <section id="toggles" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16 border-t border-neutral-200">
        <header>
          <h2 className="text-3xl font-bold">Toggles</h2>
          <p className="mt-1 text-neutral-600">Checkbox, RadioGroup / Radio, Switch.</p>
        </header>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Notification preferences</h3>
          <div className="rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <ul className="divide-y divide-neutral-200">
              {NOTIFICATIONS.map((n) => (
                <li key={n.id} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <Switch id={n.id} name={n.id} defaultChecked={n.defaultOn} />
                  <div className="flex-1">
                    <Label htmlFor={n.id} className="mb-0.5">{n.title}</Label>
                    <FormHelperText>{n.help}</FormHelperText>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Plan</h3>
          <RadioGroup defaultValue="pro" name="ds-plan" aria-label="Subscription plan" className="rounded-md border border-neutral-200 bg-neutral-50 p-2">
            {PLANS.map((p) => (
              <Label
                key={p.value}
                htmlFor={`ds-plan-${p.value}`}
                className="mb-0 flex cursor-pointer items-start gap-3 rounded-md p-3 transition-colors hover:bg-neutral-100"
              >
                <Radio id={`ds-plan-${p.value}`} value={p.value} className="mt-0.5" />
                <div className="flex-1 font-normal">
                  <div className="font-medium text-neutral-950">{p.title}</div>
                  <div className="text-sm text-neutral-600">{p.help}</div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Permissions</h3>
          <fieldset className="rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <legend className="sr-only">Permissions</legend>
            <div className="flex flex-col gap-3">
              {PERMISSIONS.map((p) => (
                <Label
                  key={p.id}
                  htmlFor={p.id}
                  className="mb-0 flex cursor-pointer items-center gap-3 font-normal"
                >
                  {p.indeterminate ? (
                    <Checkbox id={p.id} name={p.id} checked="indeterminate" onCheckedChange={() => {}} />
                  ) : (
                    <Checkbox id={p.id} name={p.id} defaultChecked={p.defaultChecked} />
                  )}
                  <span className="text-neutral-950">{p.title}</span>
                </Label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sizes</h3>
          <div className="grid grid-cols-3 gap-6">
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="space-y-4 rounded-md border border-neutral-200 bg-neutral-50 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{s}</div>
                <div className="flex items-center gap-3">
                  <Checkbox id={`ds-cb-${s}`} size={s} defaultChecked />
                  <Label htmlFor={`ds-cb-${s}`} className="mb-0 font-normal">Checkbox</Label>
                </div>
                <RadioGroup defaultValue="a" name={`ds-size-r-${s}`} aria-label={`Radio ${s}`}>
                  <Label htmlFor={`ds-r-a-${s}`} className="mb-0 flex items-center gap-3 font-normal">
                    <Radio id={`ds-r-a-${s}`} size={s} value="a" />
                    <span>Radio</span>
                  </Label>
                </RadioGroup>
                <div className="flex items-center gap-3">
                  <Switch id={`ds-sw-${s}`} size={s} defaultChecked />
                  <Label htmlFor={`ds-sw-${s}`} className="mb-0 font-normal">Switch</Label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">States</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3 rounded-md border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Disabled</div>
              <div className="flex items-center gap-3">
                <Checkbox id="ds-dis-cb" disabled defaultChecked />
                <Label htmlFor="ds-dis-cb" className="mb-0 font-normal">Checkbox</Label>
              </div>
              <RadioGroup defaultValue="a" name="ds-dis-r" aria-label="Disabled radio">
                <Label htmlFor="ds-dis-r-a" className="mb-0 flex items-center gap-3 font-normal">
                  <Radio id="ds-dis-r-a" value="a" disabled />
                  <span>Radio</span>
                </Label>
              </RadioGroup>
              <div className="flex items-center gap-3">
                <Switch id="ds-dis-sw" disabled defaultChecked />
                <Label htmlFor="ds-dis-sw" className="mb-0 font-normal">Switch</Label>
              </div>
            </div>
            <div className="space-y-3 rounded-md border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Invalid</div>
              <div className="flex items-center gap-3">
                <Checkbox id="ds-inv-cb" invalid defaultChecked />
                <Label htmlFor="ds-inv-cb" className="mb-0 font-normal">Checkbox</Label>
              </div>
              <RadioGroup defaultValue="a" name="ds-inv-r" aria-label="Invalid radio">
                <Label htmlFor="ds-inv-r-a" className="mb-0 flex items-center gap-3 font-normal">
                  <Radio id="ds-inv-r-a" value="a" invalid />
                  <span>Radio</span>
                </Label>
              </RadioGroup>
              <div className="flex items-center gap-3">
                <Switch id="ds-inv-sw" invalid defaultChecked />
                <Label htmlFor="ds-inv-sw" className="mb-0 font-normal">Switch</Label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEEDBACK ===== */}
      <section id="feedback" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16 border-t border-neutral-200">
        <header>
          <h2 className="text-3xl font-bold">Feedback</h2>
          <p className="mt-1 text-neutral-600">Alert and Badge.</p>
        </header>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Alerts</h3>
          <Alert variant="info" title="Heads up">
            We&rsquo;re running scheduled maintenance from 02:00&ndash;03:00 UTC tonight.
          </Alert>
          <Alert variant="success" title="Saved">
            Your changes were published to production.
          </Alert>
          <Alert variant="warning" title="Approaching limit">
            You&rsquo;ve used 80% of your monthly render quota.
          </Alert>
          <Alert variant="danger" title="Build failed">
            <code className="font-mono text-xs">src/app/page.tsx</code>
            : Type &lsquo;string&rsquo; is not assignable to type &lsquo;number&rsquo;.
          </Alert>
          <Alert variant="info" icon={<StarIcon />} title="New feature">
            Custom icon override &mdash; the auto-icon is replaced with whatever node you pass.
          </Alert>
          {showAlert && (
            <Alert variant="success" title="Dismissible" onClose={() => setShowAlert(false)}>
              Click the close button to dismiss this alert.
            </Alert>
          )}
          {!showAlert && (
            <Button variant="outline-secondary" size="sm" onClick={() => setShowAlert(true)}>
              Restore dismissed alert
            </Button>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Badges — solid</h3>
          <div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 p-4">
            {BADGE_VARIANTS.map((v) => (
              <Badge key={v} variant={v}>{v}</Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Badges — soft</h3>
          <div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 p-4">
            {BADGE_VARIANTS.map((v) => (
              <Badge key={v} variant={v} soft>{v}</Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Badges in context</h3>
          <div className="space-y-4 rounded-md border border-neutral-200 bg-neutral-50 p-6">
            <h4 className="flex items-center gap-2 text-xl font-semibold">
              Render queue
              <Badge variant="accent" size="sm">New</Badge>
            </h4>

            <div>
              <Button variant="primary">
                Inbox
                <Badge variant="danger" size="sm" className="ml-1">12</Badge>
              </Button>
            </div>

            <ul className="divide-y divide-neutral-200 rounded-md border border-neutral-200 bg-neutral-50">
              {FILES.map((f) => (
                <li key={f.name} className="flex items-center justify-between gap-3 p-4">
                  <span>{f.name}</span>
                  <Badge variant={f.variant} soft size="sm">{f.status}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== STRUCTURE ===== */}
      <section id="structure" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16 border-t border-neutral-200">
        <header>
          <h2 className="text-3xl font-bold">Structure</h2>
          <p className="mt-1 text-neutral-600">Card family.</p>
        </header>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic</h3>
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Render pipeline</CardTitle>
              <CardDescription>Background processing for video and image assets.</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="text-neutral-700">
                Jobs are queued in priority order and executed across the worker pool. Each render produces a manifest
                with hashes for every output artifact, which the rest of the pipeline uses for cache invalidation. Failed
                jobs retry with exponential backoff up to three times before surfacing in the dead-letter queue.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">With actions</h3>
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Delete project</CardTitle>
              <CardDescription>Once deleted, this project and all its assets cannot be recovered.</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="text-neutral-700">
                Type the project name to confirm. Active renders will be cancelled, webhooks will stop firing, and team
                members will lose access immediately.
              </p>
            </CardBody>
            <CardFooter className="justify-end">
              <Button variant="outline-secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Body only</h3>
          <Card className="mx-auto max-w-2xl">
            <CardBody>
              <p className="text-neutral-700">
                A Card with just a Body is the simplest shape &mdash; useful for callouts, empty states, or any rectangular
                content surface that needs the brand border + background but no structured header.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stats grid</h3>
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <Card key={s.label}>
                <CardBody>
                  <div className="text-3xl font-bold tabular-nums text-neutral-950">{s.value}</div>
                  <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Settings panel</h3>
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Account preferences</CardTitle>
              <CardDescription>
                Update your display name and notification settings. Changes are applied across all your devices.
              </CardDescription>
            </CardHeader>
            <CardBody className="space-y-5">
              <FormField>
                <Label htmlFor="ds-settings-name">Display name</Label>
                <Input id="ds-settings-name" name="display-name" defaultValue="James Zambon" />
              </FormField>
              <FormField>
                <Label htmlFor="ds-settings-email">Email</Label>
                <Input id="ds-settings-email" name="email" type="email" defaultValue="james@zambon.us" />
              </FormField>
              <div className="flex items-start gap-3 pt-2">
                <Switch id="ds-settings-marketing" name="marketing" defaultChecked />
                <div className="flex-1">
                  <Label htmlFor="ds-settings-marketing" className="mb-0.5">Product updates</Label>
                  <p className="text-sm text-neutral-600">
                    Occasional emails about new features and changelog highlights.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Switch id="ds-settings-weekly" name="weekly-digest" />
                <div className="flex-1">
                  <Label htmlFor="ds-settings-weekly" className="mb-0.5">Weekly digest</Label>
                  <p className="text-sm text-neutral-600">A Monday-morning summary of your team&rsquo;s activity.</p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="justify-end">
              <Button variant="outline-secondary">Cancel</Button>
              <Button variant="primary">Save changes</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
