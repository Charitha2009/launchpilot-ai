import type { PropsWithChildren } from "react";

import AppHeader from "@/components/layout/AppHeader";
import Container from "@/components/layout/Container";
import { HEADER_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Application chrome for the single-page MVP dashboard (ADR-001).
 * Layout only — no scan state or API calls (ADR-002).
 *
 * TODO(v1.1):
 * Replace AppHeader with TopNavigation after authentication
 * is introduced.
 */
export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <header className="border-border/80 bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
        <Container className={cn("flex items-center", HEADER_HEIGHT)}>
          <AppHeader />
        </Container>
      </header>

      <main data-testid="dashboard-main" className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col gap-8 py-8 sm:py-10">
          {children}
        </Container>
      </main>
    </div>
  );
}
