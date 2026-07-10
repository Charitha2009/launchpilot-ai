# ADR-003: Form Validation

## Status

Accepted

---

## Context

LaunchPilot AI collects user input starting with a landing page URL (PRD MVP).

Validation must be consistent, typed, and reusable across React Hook Form on the frontend and potentially FastAPI on the backend.

---

## Decision

Use **Zod** for all form validation.

Schemas live in feature `schemas/` folders (e.g. `features/scan/schemas/analyze.schema.ts`).

---

## Rationale

- **Single source of truth** — validation rules are defined once per form
- **Type inference** — `z.infer` keeps TypeScript types aligned with runtime checks
- **Excellent React Hook Form support** — via `@hookform/resolvers/zod`
- **Consistent error messages** — user-facing copy lives next to the rule
- **Easy backend reuse** — the same schema shape can be shared or mirrored in Python later

---

## Consequences

Pros

- Typed, testable validation without UI coupling
- Clear home for `DEFAULT_VALUES` and form value types

Cons

- Another dependency to keep updated (Zod major versions can change APIs)
- Team must keep schemas in `schemas/`, not inline in components
