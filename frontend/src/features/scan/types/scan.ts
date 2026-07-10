/**
 * Fine-grained in-flight pipeline stages while status === PROCESSING.
 * Coarse lifecycle status lives in `./analyze` (ScanStatus).
 */

export enum ProcessingStage {
  OPENING_BROWSER = "OPENING_BROWSER",
  LOADING_PAGE = "LOADING_PAGE",
  CAPTURING_SCREENSHOT = "CAPTURING_SCREENSHOT",
  FINISHING = "FINISHING",
}
