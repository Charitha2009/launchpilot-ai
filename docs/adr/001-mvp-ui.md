# ADR-001: MVP User Experience

## Status

Accepted

---

## Context

LaunchPilot AI is an AI-powered landing page auditing platform.

The MVP should validate the core workflow before adding advanced capabilities.

---

## Decision

The MVP will consist of a single dashboard page.

The application follows a state-driven UI instead of multiple pages.

States

- Idle
- Loading
- Success
- Error

Users remain on the same page throughout the workflow.

The MVP scope includes only:

- URL Input
- Screenshot Capture
- Screenshot Display

Excluded

- Lighthouse
- Tracking
- AI Review
- PDF Reports
- Authentication

---

## Rationale

A single workflow minimizes implementation complexity while validating the core product value.

Future features can be layered on without redesigning navigation.

---

## Consequences

Pros

- Simple UX
- Faster development
- Easier testing

Cons

- Limited functionality
- Future dashboard expansion required
