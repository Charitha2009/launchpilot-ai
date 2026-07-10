import { APP_NAME, APP_SUBTITLE } from "@/lib/constants";

/**
 * Product brand mark for the MVP dashboard (ADR-001).
 * Branding only — no navigation or actions (auth TopNavigation is v1.1).
 *
 * Uses a div (not header): AppShell already wraps this in <header>.
 */
export default function AppHeader() {
  return (
    <div className="flex min-w-0 flex-col gap-0.5 text-left">
      <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
        {APP_NAME}
      </h1>
      <p className="text-muted-foreground max-w-prose text-xs leading-snug sm:text-sm">
        {APP_SUBTITLE}
      </p>
    </div>
  );
}
