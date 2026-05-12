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

import { useEffect, useState } from "react";
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
  Code,
  DateInput,
  TimeInput,
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
  FormError,
  Separator,
  Spinner,
  Switch,
  Text,
  Textarea,
  type BadgeProps,
  type ButtonProps,
  type TextProps,
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

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-4"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-4"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

// ───────────────────────── page ─────────────────────────

export default function DesignSystemPage() {
  const [showAlert, setShowAlert] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [isDark]);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground transition-colors">
      <header className="mx-auto max-w-6xl px-8 pt-16 pb-8">
        <div className="flex items-center gap-3">
          <Heading level={1} size="5xl">@jameszambon/ui</Heading>
          <Badge variant="accent" soft>v2026.0512</Badge>
        </div>
        <p className="mt-2 max-w-2xl text-lg text-foreground-muted">
          Design system reference for JZ Productions. Bootstrap structure, brand colors, Tailwind v4.
        </p>
      </header>

      <nav className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-x-6 gap-y-2 px-8 py-4 text-sm font-medium">
          <a href="#foundation" className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Foundation</a>
          <a href="#actions"    className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Actions</a>
          <a href="#forms"      className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Forms</a>
          <a href="#toggles"    className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Toggles</a>
          <a href="#feedback"   className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Feedback</a>
          <a href="#structure"  className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Structure</a>
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-auto inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground-muted hover:bg-surface-muted hover:text-foreground transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* ===== FOUNDATION ===== */}
      <section id="foundation" className="mx-auto max-w-6xl scroll-mt-20 space-y-8 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Foundation</Heading>
          <p className="mt-1 text-foreground-muted">Color scales and the type scale.</p>
        </header>

        <div className="space-y-3">
          <Heading level={3} size="lg">Brand color scale</Heading>
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
          <Heading level={3} size="lg">Accent color scale</Heading>
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
          <Heading level={3} size="lg">Neutral color scale</Heading>
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
          <Heading level={3} size="lg">Typography</Heading>
          <div className="rounded-md border border-border bg-surface divide-y divide-border">
            {TYPE_SCALE.map((t) => (
              <div key={t.name} className="flex items-baseline gap-6 px-4 py-3">
                <div className="w-24 shrink-0 font-mono text-xs text-foreground-subtle">{t.name}</div>
                <div className={`${t.className} truncate font-medium leading-tight`}>The quick brown fox</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Primitives</Heading>

          <div className="space-y-4 rounded-md border border-border bg-surface p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Heading levels</div>
            {([
              { level: 1, size: "5xl" },
              { level: 2, size: "4xl" },
              { level: 3, size: "3xl" },
              { level: 4, size: "2xl" },
              { level: 5, size: "xl" },
              { level: 6, size: "base" },
            ] as const).map(({ level, size }) => (
              <div key={level} className="flex items-baseline gap-6">
                <div className="w-24 shrink-0 font-mono text-xs text-foreground-subtle">h{level} / {size}</div>
                <Heading level={level}>The quick brown fox</Heading>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-md border border-border bg-surface p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Separator</div>
            <div className="space-y-3">
              <p className="text-sm text-foreground-muted">Above the divider.</p>
              <Separator />
              <p className="text-sm text-foreground-muted">Below the divider.</p>
            </div>
            <div className="flex h-12 items-center gap-4">
              <span className="text-sm text-foreground-muted">Left</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-foreground-muted">Right</span>
            </div>
          </div>

          <div className="space-y-3 rounded-md border border-border bg-surface p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Inline Code &amp; Kbd</div>
            <p className="text-foreground-muted">
              Edit <Code>app/layout.tsx</Code> to load Inter via <Code>next/font</Code>.
            </p>
            <p className="text-foreground-muted">
              Press <Kbd>Cmd</Kbd> <Kbd>K</Kbd> to open the command palette.
            </p>
          </div>

          <div className="space-y-4 rounded-md border border-border bg-surface p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Text variants</div>
            {(["body", "lead", "muted", "subtle", "small", "caption"] as const).map((v) => (
              <div key={v} className="flex items-baseline gap-6">
                <div className="w-24 shrink-0 font-mono text-xs text-foreground-subtle">{v}</div>
                <Text variant={v as NonNullable<TextProps["variant"]>}>
                  The quick brown fox jumps over the lazy dog.
                </Text>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-md border border-border bg-background p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Spinner</div>
            <div className="grid grid-cols-3 gap-6">
              {(["sm", "md", "lg"] as const).map((s) => (
                <div key={s} className="flex flex-col items-center gap-2 text-foreground-muted">
                  <Spinner size={s} />
                  <div className="font-mono text-xs text-foreground-subtle">{s}</div>
                </div>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Loading render queue</CardTitle>
                <CardDescription>Fetching jobs from the worker pool.</CardDescription>
              </CardHeader>
              <CardBody className="flex items-center gap-3 text-foreground-muted">
                <Spinner size="md" />
                <span>Just a moment&hellip;</span>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== ACTIONS ===== */}
      <section id="actions" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Actions</Heading>
          <p className="mt-1 text-foreground-muted">Button and ButtonGroup.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Buttons — variants × sizes</Heading>
          <div className="grid grid-cols-[180px_repeat(3,minmax(0,1fr))] items-center gap-x-4 gap-y-3 rounded-md border border-border bg-surface p-6">
            <div />
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">{s}</div>
            ))}
            {BUTTON_VARIANTS.flatMap((v) => [
              <div key={`${v}-l`} className="font-mono text-xs text-foreground-muted">{v}</div>,
              ...BUTTON_SIZES.map((s) => (
                <div key={`${v}-${s}`}>
                  <Button variant={v} size={s}>{v}</Button>
                </div>
              )),
            ])}
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">States</Heading>
          <div className="flex flex-wrap items-center gap-3 rounded-md border border-border bg-surface p-6">
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
          <Heading level={3} size="lg">ButtonGroup</Heading>
          <div className="space-y-4 rounded-md border border-border bg-surface p-6">
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

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== FORMS ===== */}
      <section id="forms" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Forms</Heading>
          <p className="mt-1 text-foreground-muted">Label, Input, Textarea, Select, FormField, helper / error text.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Contact form</Heading>
          <form action="#" className="mx-auto w-full max-w-md space-y-4 rounded-md border border-border bg-surface p-6">
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
          <Heading level={3} size="lg">Error state</Heading>
          <form action="#" className="mx-auto w-full max-w-md space-y-4 rounded-md border border-border bg-surface p-6">
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
          <Heading level={3} size="lg">Sizes</Heading>
          <div className="grid grid-cols-3 gap-6 rounded-md border border-border bg-surface p-6">
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">{s}</div>
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
          <Heading level={3} size="lg">Disabled</Heading>
          <div className="grid grid-cols-3 gap-6 rounded-md border border-border bg-surface p-6">
            <Input disabled defaultValue="Disabled input" />
            <Select disabled defaultValue="">
              <option value="" disabled>Disabled select</option>
            </Select>
            <Textarea disabled defaultValue="Disabled textarea" />
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Date picker</Heading>
          <p className="text-sm text-foreground-muted">
            Native <Code>&lt;input type=&quot;date&quot;&gt;</Code> on touch devices; themed react-day-picker popover on
            desktop. Wire format is always YYYY-MM-DD. Requires <Code>react-day-picker/style.css</Code> imported once globally.
          </p>
          <div className="grid grid-cols-1 gap-6 rounded-md border border-border bg-surface p-6 md:grid-cols-3">
            <FormField>
              <Label htmlFor="ds-date-basic">Basic</Label>
              <DateInput id="ds-date-basic" name="date-basic" />
            </FormField>
            <FormField>
              <Label htmlFor="ds-date-default">Default value</Label>
              <DateInput id="ds-date-default" name="date-default" defaultValue="2026-05-11" />
            </FormField>
            <FormField>
              <Label htmlFor="ds-date-bounded">Min / max (May 2026)</Label>
              <DateInput
                id="ds-date-bounded"
                name="date-bounded"
                min="2026-05-01"
                max="2026-05-31"
              />
            </FormField>
          </div>

          <div className="grid grid-cols-3 gap-6 rounded-md border border-border bg-surface p-6">
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">{s}</div>
                <DateInput size={s} defaultValue="2026-05-11" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 rounded-md border border-border bg-surface p-6 md:grid-cols-2">
            <FormField>
              <Label htmlFor="ds-date-disabled">Disabled</Label>
              <DateInput id="ds-date-disabled" defaultValue="2026-05-11" disabled />
            </FormField>
            <FormField>
              <Label htmlFor="ds-date-invalid">Invalid</Label>
              <DateInput id="ds-date-invalid" defaultValue="2026-05-11" invalid aria-describedby="ds-date-invalid-msg" />
              <FormErrorMessage id="ds-date-invalid-msg">Pick a date in the future.</FormErrorMessage>
            </FormField>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Time picker</Heading>
          <p className="text-sm text-foreground-muted">
            Native <Code>&lt;input type=&quot;time&quot;&gt;</Code> on touch devices; themed column popover on desktop.
            Wire format is always 24-hour <Code>HH:MM</Code>; the <Code>display</Code> prop only changes the visible UI.
          </p>
          <div className="grid grid-cols-1 gap-6 rounded-md border border-border bg-surface p-6 md:grid-cols-3">
            <FormField>
              <Label htmlFor="ds-time-basic">Basic (24h, step=5)</Label>
              <TimeInput id="ds-time-basic" name="time-basic" />
            </FormField>
            <FormField>
              <Label htmlFor="ds-time-12h">12-hour display</Label>
              <TimeInput id="ds-time-12h" name="time-12h" display="12h" defaultValue="09:30" />
            </FormField>
            <FormField>
              <Label htmlFor="ds-time-bounded">Min / max (09:00&ndash;17:00)</Label>
              <TimeInput
                id="ds-time-bounded"
                name="time-bounded"
                min="09:00"
                max="17:00"
                step={15}
                defaultValue="12:00"
              />
            </FormField>
          </div>

          <div className="grid grid-cols-3 gap-6 rounded-md border border-border bg-surface p-6">
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">{s}</div>
                <TimeInput size={s} defaultValue="14:30" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 rounded-md border border-border bg-surface p-6 md:grid-cols-2">
            <FormField>
              <Label htmlFor="ds-time-disabled">Disabled</Label>
              <TimeInput id="ds-time-disabled" defaultValue="14:30" disabled />
            </FormField>
            <FormField>
              <Label htmlFor="ds-time-invalid">Invalid</Label>
              <TimeInput id="ds-time-invalid" defaultValue="14:30" invalid aria-describedby="ds-time-invalid-msg" />
              <FormErrorMessage id="ds-time-invalid-msg">Pick a time during business hours.</FormErrorMessage>
            </FormField>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Form-level errors</Heading>
          <div className="space-y-4 rounded-md border border-border bg-surface p-6">
            <FormError>Could not submit form &mdash; network error.</FormError>
            <FormError className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4 shrink-0"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>Two of your fields are missing required information.</span>
            </FormError>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== TOGGLES ===== */}
      <section id="toggles" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Toggles</Heading>
          <p className="mt-1 text-foreground-muted">Checkbox, RadioGroup / Radio, Switch.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Notification preferences</Heading>
          <div className="rounded-md border border-border bg-background p-6">
            <ul className="divide-y divide-border">
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
          <Heading level={3} size="lg">Plan</Heading>
          <RadioGroup defaultValue="pro" name="ds-plan" aria-label="Subscription plan" className="rounded-md border border-border p-2">
            {PLANS.map((p) => (
              <Label
                key={p.value}
                htmlFor={`ds-plan-${p.value}`}
                className="mb-0 flex cursor-pointer items-start gap-3 rounded-md p-3 transition-colors hover:bg-surface-muted"
              >
                <Radio id={`ds-plan-${p.value}`} value={p.value} className="mt-0.5" />
                <div className="flex-1 font-normal">
                  <div className="font-medium text-foreground">{p.title}</div>
                  <div className="text-sm text-foreground-muted">{p.help}</div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Permissions</Heading>
          <fieldset className="rounded-md border border-border bg-background p-6">
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
                  <span className="text-foreground">{p.title}</span>
                </Label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Sizes</Heading>
          <div className="grid grid-cols-3 gap-6">
            {BUTTON_SIZES.map((s) => (
              <div key={s} className="space-y-4 rounded-md border border-border bg-surface p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">{s}</div>
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
          <Heading level={3} size="lg">States</Heading>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3 rounded-md border border-border bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Disabled</div>
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
            <div className="space-y-3 rounded-md border border-border bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Invalid</div>
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

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== FEEDBACK ===== */}
      <section id="feedback" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Feedback</Heading>
          <p className="mt-1 text-foreground-muted">Alert and Badge.</p>
        </header>

        <div className="space-y-3">
          <Heading level={3} size="lg">Alerts</Heading>
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
            <Code>src/app/page.tsx</Code>
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
          <Heading level={3} size="lg">Badges — solid</Heading>
          <div className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-surface p-4">
            {BADGE_VARIANTS.map((v) => (
              <Badge key={v} variant={v}>{v}</Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Heading level={3} size="lg">Badges — soft</Heading>
          <div className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-surface p-4">
            {BADGE_VARIANTS.map((v) => (
              <Badge key={v} variant={v} soft>{v}</Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Heading level={3} size="lg">Badges in context</Heading>
          <div className="space-y-4 rounded-md border border-border bg-background p-6">
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

            <Card>
              <ul className="divide-y divide-border-subtle">
                {FILES.map((f) => (
                  <li key={f.name} className="flex items-center justify-between gap-3 p-4">
                    <span>{f.name}</span>
                    <Badge variant={f.variant} soft size="sm">{f.status}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== STRUCTURE ===== */}
      <section id="structure" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Structure</Heading>
          <p className="mt-1 text-foreground-muted">Card family.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Basic</Heading>
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Render pipeline</CardTitle>
              <CardDescription>Background processing for video and image assets.</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="text-foreground-muted">
                Jobs are queued in priority order and executed across the worker pool. Each render produces a manifest
                with hashes for every output artifact, which the rest of the pipeline uses for cache invalidation. Failed
                jobs retry with exponential backoff up to three times before surfacing in the dead-letter queue.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">With actions</Heading>
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Delete project</CardTitle>
              <CardDescription>Once deleted, this project and all its assets cannot be recovered.</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="text-foreground-muted">
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
          <Heading level={3} size="lg">Body only</Heading>
          <Card className="mx-auto max-w-2xl">
            <CardBody>
              <p className="text-foreground-muted">
                A Card with just a Body is the simplest shape &mdash; useful for callouts, empty states, or any rectangular
                content surface that needs the brand border + background but no structured header.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Elevation</Heading>
          <div className="grid grid-cols-5 gap-4">
            {(["none", "sm", "md", "lg", "xl"] as const).map((e) => (
              <Card key={e} elevation={e}>
                <CardBody className="text-center font-mono text-sm text-foreground-muted">
                  {e}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Stats grid</Heading>
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <Card key={s.label}>
                <CardBody>
                  <div className="text-3xl font-bold tabular-nums text-foreground">{s.value}</div>
                  <div className="mt-1 text-sm text-foreground-muted">{s.label}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Settings panel</Heading>
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
                  <p className="text-sm text-foreground-muted">
                    Occasional emails about new features and changelog highlights.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Switch id="ds-settings-weekly" name="weekly-digest" />
                <div className="flex-1">
                  <Label htmlFor="ds-settings-weekly" className="mb-0.5">Weekly digest</Label>
                  <p className="text-sm text-foreground-muted">A Monday-morning summary of your team&rsquo;s activity.</p>
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
