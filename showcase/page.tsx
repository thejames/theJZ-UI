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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
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
  Card,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Cite,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Code,
  ColorInput,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  Datalist,
  DatalistOption,
  DateInput,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Figure,
  FigureCaption,
  FileInput,
  TimeInput,
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
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Radio,
  RadioGroup,
  Select,
  FormError,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SimplePagination,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ToastProvider,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useToast,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
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
  const [pagerPage, setPagerPage] = useState(7);
  const [smallPagerPage, setSmallPagerPage] = useState(2);

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
          <a href="#data"       className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Data</a>
          <a href="#progress"   className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Progress</a>
          <a href="#overlays"   className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Overlays</a>
          <a href="#disclosure" className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Disclosure</a>
          <a href="#menus"      className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Menus</a>
          <a href="#composition" className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Composition</a>
          <a href="#navigation" className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Navigation</a>
          <a href="#extras"     className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Extras</a>
          <a href="#bs-extras"  className="hover:text-brand-700 dark:hover:text-brand-300 transition-colors">More</a>
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

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== DATA ===== */}
      <section id="data" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Data</Heading>
          <p className="mt-1 text-foreground-muted">Tables, pagination, and breadcrumb nav.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Breadcrumb</Heading>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Render pipeline</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Settings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Render pipeline</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Settings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Table — default</Heading>
          <Table>
            <TableCaption>Recent render jobs queued by the worker pool.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Job</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Started</TableHead>
                <TableHead className="text-right">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">render-pipeline-v3.mp4</TableCell>
                <TableCell><Badge variant="success" soft>Ready</Badge></TableCell>
                <TableCell className="text-foreground-muted">2 hours ago</TableCell>
                <TableCell className="text-right tabular-nums">00:04:21</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">brand-reel-final.mov</TableCell>
                <TableCell><Badge variant="warning" soft>Processing</Badge></TableCell>
                <TableCell className="text-foreground-muted">14 min ago</TableCell>
                <TableCell className="text-right tabular-nums">00:01:08</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">client-cut-draft.mp4</TableCell>
                <TableCell><Badge variant="danger" soft>Failed</Badge></TableCell>
                <TableCell className="text-foreground-muted">just now</TableCell>
                <TableCell className="text-right tabular-nums">00:00:03</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right tabular-nums">00:05:32</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Table — striped + hover</Heading>
          <Table striped hover>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead className="text-right">Assets</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Q3 brand refresh</TableCell>
                <TableCell className="text-foreground-muted">James Z</TableCell>
                <TableCell className="text-right tabular-nums">128</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Founder series cuts</TableCell>
                <TableCell className="text-foreground-muted">James Z</TableCell>
                <TableCell className="text-right tabular-nums">42</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marketing reel v4</TableCell>
                <TableCell className="text-foreground-muted">James Z</TableCell>
                <TableCell className="text-right tabular-nums">17</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sizzle 30s</TableCell>
                <TableCell className="text-foreground-muted">James Z</TableCell>
                <TableCell className="text-right tabular-nums">8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Table — bordered, compact</Heading>
          <Table bordered density="sm">
            <TableHeader>
              <TableRow>
                <TableHead>Setting</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Worker concurrency</TableCell>
                <TableCell className="font-mono text-xs">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Retry backoff</TableCell>
                <TableCell className="font-mono text-xs">exponential</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dead-letter queue</TableCell>
                <TableCell className="font-mono text-xs">dlq-renders</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Pagination — many pages</Heading>
          <SimplePagination
            page={pagerPage}
            pageCount={20}
            onPageChange={setPagerPage}
          />
          <p className="text-center text-sm text-foreground-muted">Page {pagerPage} of 20</p>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Pagination — small, no chevrons</Heading>
          <SimplePagination
            page={smallPagerPage}
            pageCount={5}
            onPageChange={setSmallPagerPage}
            size="sm"
            hidePrevNext
          />
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== PROGRESS / LOADING / IDENTITY ===== */}
      <section id="progress" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Progress, Loading & Identity</Heading>
          <p className="mt-1 text-foreground-muted">Progress bars, skeletons, and avatars.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Progress — determinate</Heading>
          <div className="space-y-3">
            <Progress value={25} label="Render progress" />
            <Progress value={62} variant="success" />
            <Progress value={88} variant="accent" size="lg" />
            <Progress value={40} variant="warning" size="sm" />
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Progress — indeterminate</Heading>
          <div className="space-y-3">
            <Progress />
            <Progress variant="accent" size="lg" />
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Skeleton</Heading>
          <Card className="mx-auto max-w-md">
            <CardBody className="space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton circle className="size-10" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-2/3" />
            </CardBody>
          </Card>
          <Card className="mx-auto max-w-md">
            <CardBody className="space-y-3">
              <Skeleton animation="shimmer" className="h-3 w-full" />
              <Skeleton animation="shimmer" className="h-3 w-5/6" />
              <Skeleton animation="shimmer" className="h-3 w-2/3" />
            </CardBody>
          </Card>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Avatar — sizes</Heading>
          <div className="flex items-center gap-3">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
              <Avatar key={s} size={s}>
                <AvatarFallback>JZ</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Avatar — with image fallback</Heading>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Demo user" />
              <AvatarFallback>DU</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/nope.png" alt="" />
              <AvatarFallback className="bg-brand-700 text-neutral-50">JZ</AvatarFallback>
            </Avatar>
            <Avatar shape="square">
              <AvatarFallback className="bg-accent-500 text-neutral-950">CK</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Avatar group</Heading>
          <AvatarGroup>
            <Avatar><AvatarFallback>JZ</AvatarFallback></Avatar>
            <Avatar><AvatarFallback className="bg-brand-700 text-neutral-50">CK</AvatarFallback></Avatar>
            <Avatar><AvatarFallback className="bg-accent-500 text-neutral-950">MR</AvatarFallback></Avatar>
            <Avatar><AvatarFallback className="bg-neutral-700 text-neutral-50">+3</AvatarFallback></Avatar>
          </AvatarGroup>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== OVERLAYS ===== */}
      <TooltipProvider delayDuration={150}>
        <section id="overlays" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
          <header>
            <Heading level={2} size="3xl">Overlays</Heading>
            <p className="mt-1 text-foreground-muted">Dialog, Tooltip, and Popover.</p>
          </header>

          <div className="space-y-4">
            <Heading level={3} size="lg">Dialog</Heading>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary">Delete project</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete project?</DialogTitle>
                  <DialogDescription>
                    This permanently removes the project and all its assets. Active renders
                    will be cancelled and team members will lose access immediately.
                  </DialogDescription>
                </DialogHeader>
                <FormField>
                  <Label htmlFor="ds-dialog-confirm">Type the project name to confirm</Label>
                  <Input id="ds-dialog-confirm" placeholder="render-pipeline" />
                </FormField>
                <DialogFooter>
                  <Button variant="outline-secondary">Cancel</Button>
                  <Button variant="danger">Delete project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            <Heading level={3} size="lg">Tooltip</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline-secondary" size="sm">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Tooltips appear on hover or focus.</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">Above the trigger</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Beside the trigger</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Under the trigger</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="space-y-4">
            <Heading level={3} size="lg">Popover</Heading>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline-primary">Edit display name</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Display name</p>
                    <p className="text-xs text-foreground-muted">Shown next to your avatar across the app.</p>
                  </div>
                  <FormField>
                    <Label htmlFor="ds-popover-name">Name</Label>
                    <Input id="ds-popover-name" defaultValue="James Zambon" />
                  </FormField>
                  <div className="flex justify-end gap-2">
                    <PopoverClose asChild>
                      <Button variant="ghost" size="sm">Cancel</Button>
                    </PopoverClose>
                    <PopoverClose asChild>
                      <Button size="sm">Save</Button>
                    </PopoverClose>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </TooltipProvider>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== DISCLOSURE ===== */}
      <section id="disclosure" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Disclosure</Heading>
          <p className="mt-1 text-foreground-muted">Tabs and Accordion for swapping panels.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Tabs</Heading>
          <Tabs defaultValue="general" className="max-w-2xl">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General</CardTitle>
                  <CardDescription>Display name, timezone, and language.</CardDescription>
                </CardHeader>
                <CardBody className="space-y-4">
                  <FormField>
                    <Label htmlFor="ds-tabs-name">Display name</Label>
                    <Input id="ds-tabs-name" defaultValue="James Zambon" />
                  </FormField>
                  <FormField>
                    <Label htmlFor="ds-tabs-tz">Timezone</Label>
                    <Select id="ds-tabs-tz" defaultValue="america-new-york">
                      <option value="america-new-york">America / New York</option>
                      <option value="america-los-angeles">America / Los Angeles</option>
                      <option value="europe-london">Europe / London</option>
                    </Select>
                  </FormField>
                </CardBody>
              </Card>
            </TabsContent>
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Authentication and recovery options.</CardDescription>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-foreground-muted">
                    Two-factor authentication, hardware keys, and active sessions live here.
                  </p>
                </CardBody>
              </Card>
            </TabsContent>
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing</CardTitle>
                  <CardDescription>Plan, payment method, and invoices.</CardDescription>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-foreground-muted">
                    Currently on <strong>Pro</strong>. Next invoice: $24.00 on the 1st.
                  </p>
                </CardBody>
              </Card>
            </TabsContent>
            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>Members and invites.</CardDescription>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-foreground-muted">3 members, 1 pending invite.</p>
                </CardBody>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Accordion — single</Heading>
          <Accordion type="single" collapsible className="max-w-2xl">
            <AccordionItem value="renders">
              <AccordionTrigger>How are renders prioritized?</AccordionTrigger>
              <AccordionContent>
                Jobs run in priority order across the worker pool. Manual edits jump to the front
                of the queue; scheduled batches run at lower priority during off-peak hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="failures">
              <AccordionTrigger>What happens when a render fails?</AccordionTrigger>
              <AccordionContent>
                Failed jobs retry with exponential backoff up to three times. Persistent failures
                surface in the dead-letter queue and trigger a Slack alert.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cache">
              <AccordionTrigger>How does cache invalidation work?</AccordionTrigger>
              <AccordionContent>
                Each render emits a manifest with content hashes for every output. Downstream
                consumers compare the manifest against the previous run to decide what to refresh.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Accordion — multiple</Heading>
          <Accordion type="multiple" defaultValue={["one"]} className="max-w-2xl">
            <AccordionItem value="one">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes — full keyboard support and ARIA via Radix primitives.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="two">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes — matches the rest of the design system out of the box.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="three">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes — height-based open/close transition via Radix CSS variables.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== MENUS + TOASTS ===== */}
      <ToastProvider>
        <section id="menus" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
          <header>
            <Heading level={2} size="3xl">Menus & Notifications</Heading>
            <p className="mt-1 text-foreground-muted">DropdownMenu and Toast.</p>
          </header>

          <div className="space-y-4">
            <Heading level={3} size="lg">Dropdown menu</Heading>
            <DropdownMenuDemo />
          </div>

          <div className="space-y-4">
            <Heading level={3} size="lg">Toasts</Heading>
            <ToastDemo />
          </div>
        </section>
      </ToastProvider>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== COMPOSITION ===== */}
      <section id="composition" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Composition</Heading>
          <p className="mt-1 text-foreground-muted">List group, input group, and slider.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">List group</Heading>
          <div className="grid gap-6 md:grid-cols-2">
            <ListGroup className="max-w-md">
              <ListGroupItem>render-pipeline-v3.mp4</ListGroupItem>
              <ListGroupItem active>brand-reel-final.mov</ListGroupItem>
              <ListGroupItem>client-cut-draft.mp4</ListGroupItem>
              <ListGroupItem disabled>archived-2024-q4.mov</ListGroupItem>
            </ListGroup>

            <ListGroup className="max-w-md">
              <ListGroupItem variant="success">Render complete</ListGroupItem>
              <ListGroupItem variant="warning">Approaching quota</ListGroupItem>
              <ListGroupItem variant="danger">Upload failed</ListGroupItem>
              <ListGroupItem variant="info">Tip — hold ⌥ to pan</ListGroupItem>
            </ListGroup>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">List group — flush inside a Card</Heading>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Recent files</CardTitle>
              <CardDescription>Last 4 uploads from this project.</CardDescription>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem interactive className="flex items-center justify-between">
                <span>render-pipeline-v3.mp4</span>
                <Badge variant="success" soft size="sm">Ready</Badge>
              </ListGroupItem>
              <ListGroupItem interactive className="flex items-center justify-between">
                <span>brand-reel-final.mov</span>
                <Badge variant="warning" soft size="sm">Processing</Badge>
              </ListGroupItem>
              <ListGroupItem interactive className="flex items-center justify-between">
                <span>client-cut-draft.mp4</span>
                <Badge variant="danger" soft size="sm">Failed</Badge>
              </ListGroupItem>
              <ListGroupItem interactive className="flex items-center justify-between">
                <span>sizzle-30s-v2.mp4</span>
                <Badge variant="success" soft size="sm">Ready</Badge>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Input group</Heading>
          <div className="grid gap-4 md:max-w-xl">
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <Input placeholder="0.00" />
              <InputGroupAddon>USD</InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>https://</InputGroupAddon>
              <Input placeholder="example.com" defaultValue="jameszambon.com" />
            </InputGroup>

            <InputGroup>
              <Input placeholder="Search files..." />
              <InputGroupButton>Search</InputGroupButton>
            </InputGroup>

            <InputGroup size="sm">
              <InputGroupAddon>@</InputGroupAddon>
              <Input placeholder="handle" />
            </InputGroup>

            <InputGroup size="lg" invalid>
              <InputGroupAddon>$</InputGroupAddon>
              <Input placeholder="0.00" defaultValue="-5" />
              <InputGroupAddon>USD</InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Slider</Heading>
          <div className="grid gap-6 md:max-w-xl">
            <div className="space-y-2">
              <Label>Volume</Label>
              <Slider defaultValue={[40]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <Label>Price range</Label>
              <Slider defaultValue={[20, 80]} max={100} step={5} variant="accent" />
            </div>
            <div className="space-y-2">
              <Label>Opacity (large + success)</Label>
              <Slider defaultValue={[65]} max={100} step={1} size="lg" variant="success" />
            </div>
            <div className="space-y-2">
              <Label>Disabled</Label>
              <Slider defaultValue={[50]} max={100} disabled />
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== NAVIGATION ===== */}
      <section id="navigation" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Navigation</Heading>
          <p className="mt-1 text-foreground-muted">Navbar, Nav, and Sheet (offcanvas drawer).</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Navbar</Heading>
          <div className="rounded-md border border-border overflow-hidden">
            <Navbar borderless>
              <NavbarBrand href="#">JZ Productions</NavbarBrand>
              <NavbarContent>
                <Nav variant="default">
                  <NavItem><NavLink href="#" active>Home</NavLink></NavItem>
                  <NavItem><NavLink href="#">Work</NavLink></NavItem>
                  <NavItem><NavLink href="#">About</NavLink></NavItem>
                  <NavItem><NavLink href="#" disabled>Press</NavLink></NavItem>
                </Nav>
              </NavbarContent>
              <NavbarActions>
                <Button variant="ghost" size="sm">Sign in</Button>
                <Button size="sm">Get started</Button>
              </NavbarActions>
            </Navbar>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Nav — underline</Heading>
          <Nav variant="underline">
            <NavItem><NavLink href="#" active>Overview</NavLink></NavItem>
            <NavItem><NavLink href="#">Members</NavLink></NavItem>
            <NavItem><NavLink href="#">Billing</NavLink></NavItem>
            <NavItem><NavLink href="#">Webhooks</NavLink></NavItem>
            <NavItem><NavLink href="#" disabled>Audit log</NavLink></NavItem>
          </Nav>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Nav — pills</Heading>
          <Nav variant="pills">
            <NavItem><NavLink href="#" active>All</NavLink></NavItem>
            <NavItem><NavLink href="#">Ready</NavLink></NavItem>
            <NavItem><NavLink href="#">Processing</NavLink></NavItem>
            <NavItem><NavLink href="#">Failed</NavLink></NavItem>
          </Nav>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Nav — vertical sidebar</Heading>
          <div className="grid gap-6 md:grid-cols-[200px_1fr] md:max-w-2xl">
            <Nav variant="default" vertical>
              <NavItem><NavLink href="#" active>Overview</NavLink></NavItem>
              <NavItem><NavLink href="#">Renders</NavLink></NavItem>
              <NavItem><NavLink href="#">Assets</NavLink></NavItem>
              <NavItem><NavLink href="#">Team</NavLink></NavItem>
              <NavItem><NavLink href="#">Settings</NavLink></NavItem>
            </Nav>
            <Card>
              <CardBody>
                <p className="text-foreground-muted">Panel content sits next to the sidebar.</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Sheet (Offcanvas)</Heading>
          <div className="flex flex-wrap items-center gap-2">
            {(["right", "left", "top", "bottom"] as const).map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline-secondary" size="sm">From {side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow the result set across the catalog.</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <FormField>
                      <Label htmlFor={`sheet-q-${side}`}>Search</Label>
                      <Input id={`sheet-q-${side}`} placeholder="render-pipeline..." />
                    </FormField>
                    <FormField>
                      <Label htmlFor={`sheet-tag-${side}`}>Tag</Label>
                      <Select id={`sheet-tag-${side}`} defaultValue="">
                        <option value="">Any</option>
                        <option value="brand">Brand</option>
                        <option value="reel">Reel</option>
                        <option value="cut">Cut</option>
                      </Select>
                    </FormField>
                    <div className="space-y-2">
                      <Label>Duration (s)</Label>
                      <Slider defaultValue={[15, 120]} max={300} step={5} />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button variant="ghost">Reset</Button>
                    <Button>Apply</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== EXTRAS (HoverCard, ContextMenu, ToggleGroup) ===== */}
      <section id="extras" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">Extras</Heading>
          <p className="mt-1 text-foreground-muted">HoverCard, ContextMenu, and Toggle / ToggleGroup.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">HoverCard</Heading>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-foreground-muted">Hover over</span>
            <HoverCard>
              <HoverCardTrigger asChild>
                <a href="#" className="text-brand-700 dark:text-brand-300 underline underline-offset-2 hover:no-underline">@jameszambon</a>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <Avatar size="lg">
                    <AvatarFallback className="bg-brand-700 text-neutral-50">JZ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">James Zambon</p>
                    <p className="text-xs text-foreground-muted">Renders, brand work, founder cuts.</p>
                    <p className="mt-2 text-xs text-foreground-subtle">Joined March 2018</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <span className="text-foreground-muted">to preview the profile.</span>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Context menu (right-click)</Heading>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <div className="flex h-32 max-w-md items-center justify-center rounded-md border-2 border-dashed border-border text-sm text-foreground-muted">
                Right-click anywhere in this box
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuLabel>File</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Open
                <ContextMenuShortcut>⌘O</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Rename
                <ContextMenuShortcut>F2</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Duplicate
                <ContextMenuShortcut>⌘D</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>Show hidden files</ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-danger focus:text-danger">
                Delete
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Toggle (standalone)</Heading>
          <div className="flex items-center gap-2">
            <Toggle aria-label="Toggle bold"><strong>B</strong></Toggle>
            <Toggle aria-label="Toggle italic"><em>I</em></Toggle>
            <Toggle aria-label="Toggle underline"><u>U</u></Toggle>
            <Toggle variant="outline" aria-label="Toggle strike"><s>S</s></Toggle>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">ToggleGroup — single</Heading>
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">Right</ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Justify">Justify</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">ToggleGroup — multiple (outline)</Heading>
          <ToggleGroup type="multiple" variant="outline" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold"><strong>B</strong></ToggleGroupItem>
            <ToggleGroupItem value="italic"><em>I</em></ToggleGroupItem>
            <ToggleGroupItem value="underline"><u>U</u></ToggleGroupItem>
            <ToggleGroupItem value="strike"><s>S</s></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ===== BOOTSTRAP EXTRAS (Carousel, File/Color/Datalist, Figure/Blockquote) ===== */}
      <section id="bs-extras" className="mx-auto max-w-6xl scroll-mt-20 space-y-10 px-8 py-16">
        <header>
          <Heading level={2} size="3xl">More</Heading>
          <p className="mt-1 text-foreground-muted">Carousel, file + color inputs, datalist, figure, blockquote.</p>
        </header>

        <div className="space-y-4">
          <Heading level={3} size="lg">Carousel</Heading>
          <Carousel opts={{ loop: true }} className="max-w-2xl mx-auto">
            <CarouselContent>
              {[
                { tone: "bg-brand-700",   label: "Slide 1" },
                { tone: "bg-accent-500",  label: "Slide 2" },
                { tone: "bg-neutral-700", label: "Slide 3" },
                { tone: "bg-success",     label: "Slide 4" },
                { tone: "bg-info",        label: "Slide 5" },
              ].map((s, idx) => (
                <CarouselItem key={idx}>
                  <div className={`flex h-48 items-center justify-center rounded-md ${s.tone} text-neutral-50 text-2xl font-semibold`}>
                    {s.label}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Carousel — multi-up</Heading>
          <Carousel opts={{ align: "start" }} className="max-w-3xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardBody className="text-center font-mono text-2xl text-foreground-muted">
                      {idx + 1}
                    </CardBody>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">File input</Heading>
          <div className="grid gap-4 md:max-w-md">
            <FileInput name="single-file" />
            <FileInput name="multi-file" multiple buttonText="Upload assets" />
            <FileInput name="img-file" accept="image/*" size="sm" />
            <FileInput name="img-invalid" invalid placeholder="Required" />
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Color input</Heading>
          <div className="flex flex-wrap items-center gap-4">
            <ColorInput defaultValue="#014c6c" />
            <ColorInput defaultValue="#d98a24" size="lg" />
            <ColorInput defaultValue="#10b981" size="sm" showHex={false} />
            <ColorInput defaultValue="#ef4444" invalid />
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Datalist (native autocomplete)</Heading>
          <FormField className="md:max-w-md">
            <Label htmlFor="ds-datalist-city">City</Label>
            <Input
              id="ds-datalist-city"
              list="ds-cities"
              placeholder="Start typing..."
            />
            <Datalist id="ds-cities">
              <DatalistOption value="Boston" />
              <DatalistOption value="Brooklyn" />
              <DatalistOption value="Chicago" />
              <DatalistOption value="Los Angeles" />
              <DatalistOption value="New York" />
              <DatalistOption value="Portland" />
              <DatalistOption value="San Francisco" />
              <DatalistOption value="Seattle" />
            </Datalist>
            <FormHelperText>Type the first letter to see suggestions.</FormHelperText>
          </FormField>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Blockquote</Heading>
          <div className="space-y-6 max-w-2xl">
            <Blockquote>
              The web is a system of constraints. Good design embraces them.
              <Cite>JZ, on building this thing</Cite>
            </Blockquote>
            <Blockquote align="center">
              Centered blockquotes work for callouts in long-form content.
              <Cite>Bootstrap convention</Cite>
            </Blockquote>
            <Blockquote align="end">
              Right-aligned variant flips the rule to the opposite edge.
              <Cite>Style guide</Cite>
            </Blockquote>
          </div>
        </div>

        <div className="space-y-4">
          <Heading level={3} size="lg">Figure</Heading>
          <Figure>
            <div className="flex h-40 w-80 items-center justify-center rounded-md bg-brand-700 text-neutral-50 text-sm font-mono">
              [image placeholder]
            </div>
            <FigureCaption>
              A caption sits below the image in muted footnote style.
            </FigureCaption>
          </Figure>
        </div>
      </section>
    </main>
  );
}

function DropdownMenuDemo() {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);
  const [view, setView] = useState<"compact" | "comfortable" | "cozy">(
    "comfortable",
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline-secondary">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>API (coming soon)</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-danger focus:text-danger">
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline-primary">View options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Sidebar</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={bookmarks}
            onCheckedChange={(c) => setBookmarks(Boolean(c))}
          >
            Show bookmarks
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={urls}
            onCheckedChange={(c) => setUrls(Boolean(c))}
          >
            Show full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Density</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={view}
            onValueChange={(v) => setView(v as typeof view)}
          >
            <DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="comfortable">Comfortable</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="cozy">Cozy</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline-secondary"
        onClick={() =>
          toast({
            title: "Project saved",
            description: "Your changes have been published.",
          })
        }
      >
        Default
      </Button>
      <Button
        variant="success"
        onClick={() =>
          toast({
            variant: "success",
            title: "Render complete",
            description: "render-pipeline-v3.mp4 is ready.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="warning"
        onClick={() =>
          toast({
            variant: "warning",
            title: "Approaching quota",
            description: "You've used 80% of your monthly render minutes.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          toast({
            variant: "danger",
            title: "Upload failed",
            description: "Connection lost. We'll retry automatically.",
            action: { label: "Retry now", onClick: () => {} },
          })
        }
      >
        Danger + action
      </Button>
      <Button
        variant="info"
        onClick={() =>
          toast({
            variant: "info",
            title: "Tip",
            description: "Hold ⌥ to drag-resize the panel.",
          })
        }
      >
        Info
      </Button>
    </div>
  );
}
