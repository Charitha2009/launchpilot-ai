/**
 * Analyze / scan domain contracts for the MVP screenshot workflow (PRD v1).
 * Types only — no runtime business logic.
 */

/** High-level scan lifecycle for UI state (ADR-001). */
export enum ScanStatus {
  IDLE = "IDLE",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

/** Capture target viewport. MVP uses desktop; tablet/mobile reserved for later. */
export type Viewport = "desktop" | "tablet" | "mobile";

export interface ScanRequest {
  url: string;
}

export interface ScanResponse {
  id: string;
  url: string;
  status: ScanStatus;
  capturedAt: string;
  viewport: Viewport;
  screenshotUrl: string;
}
