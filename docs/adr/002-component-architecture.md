# ADR-002: Component Architecture

## Status

Accepted

---

## Context

ADR-001 established a single dashboard page with a state-driven UI.

The frontend must follow PROJECT_CONTEXT engineering principles: feature-first structure, Clean Architecture, Dependency Injection, strong typing, and testable code.

If UI components call `fetch()` directly, networking, state, and presentation become coupled and hard to test or replace (e.g. when adding streaming).

---

## Decision

### Final frontend layout

```text
frontend/
└── src/
    ├── app/
    │   └── page.tsx
    ├── components/
    │   ├── layout/
    │   └── ui/
    ├── features/
    │   └── scan/
    │       ├── api/
    │       │   └── scan.service.ts
    │       ├── hooks/
    │       │   └── useScan.ts
    │       ├── types/
    │       │   └── scan.ts
    │       └── components/
    │           ├── AnalyzeForm.tsx
    │           ├── UrlInput.tsx
    │           ├── AnalyzeButton.tsx
    │           ├── ResultPanel.tsx
    │           ├── ProcessingStatus.tsx
    │           ├── SuccessResult.tsx
    │           ├── ErrorState.tsx
    │           ├── EmptyState.tsx
    │           ├── ScreenshotViewer.tsx
    │           ├── ScanSummary.tsx
    │           └── ResultActions.tsx
    └── lib/
        ├── api.ts
        ├── constants.ts
        └── utils.ts
```

| Path | Responsibility |
|------|----------------|
| `app/` | Next.js routes only (thin composition) |
| `components/layout`, `components/ui` | Shared shell + shadcn primitives |
| `features/scan/api/scan.service.ts` | Framework-free scan application API |
| `features/scan/hooks/useScan.ts` | Workflow state machine + actions |
| `features/scan/types/scan.ts` | `ScanRequest`, `ScanResponse`, `ScanStatus`, `ProcessingStage` |
| `features/scan/components/` | Presentational scan UI (props only) |
| `lib/` | Fetch wrapper, constants, helpers |

### Finite scan status

```text
ScanStatus: IDLE | VALIDATING | SUBMITTING | PROCESSING | SUCCESS | ERROR
```

`ProcessingStage` covers in-flight steps while `status === PROCESSING`.

### Data access layering

```text
page / ScanWorkspace UI
    ↓
useScan
    ↓
scan.service
    ↓
lib/api → FastAPI
```

Not: UI → `fetch()`.

---

## Rationale

- `src/` matches standard Next.js App Router layout.
- Service under `api/` keeps the scan transport boundary next to the feature.
- Hook owns state; components stay presentational and testable.
- Shared `lib/` prepares Dependency Injection-friendly HTTP and utilities.

---

## Consequences

Pros

- Clear feature boundaries and DI-ready layers
- Types and status machine live outside UI files
- Ready for streaming stage updates later

Cons

- More files than a single-page `fetch`
- Requires discipline to keep `scan.service` free of React
