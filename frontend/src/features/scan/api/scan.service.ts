import type { ScanRequest, ScanResponse } from "@/features/scan/types/analyze";

/**
 * Framework-free scan application service.
 * Layer: Components → Hooks → Services → API (never skip a layer).
 *
 * TODO: Implement createScan(request) via lib/api — no React imports.
 * TODO: Do not call fetch from components or hooks directly.
 */
export async function createScan(_request: ScanRequest): Promise<ScanResponse> {
  // TODO: POST scan request to backend and return ScanResponse.
  throw new Error("createScan is not implemented");
}
