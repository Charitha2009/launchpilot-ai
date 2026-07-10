export enum ScanStatus {
  IDLE = "IDLE",
  VALIDATING = "VALIDATING",
  SUBMITTING = "SUBMITTING",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export enum ProcessingStage {
  OPENING_BROWSER = "OPENING_BROWSER",
  LOADING_PAGE = "LOADING_PAGE",
  CAPTURING_SCREENSHOT = "CAPTURING_SCREENSHOT",
  FINISHING = "FINISHING",
}

export type ScanRequest = {
  url: string;
};

export type ScanResponse = {
  url: string;
  status: ScanStatus.SUCCESS;
  capturedAt: string;
  viewport: "Desktop";
  screenshotUrl: string;
};
