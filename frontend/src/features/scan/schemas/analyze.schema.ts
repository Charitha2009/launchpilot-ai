import { z } from "zod";

import { MAX_URL_LENGTH } from "@/lib/constants";

/**
 * Validation only for the analyze URL form (PRD MVP: URL input).
 */
export const analyzeSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, "Please enter a landing page URL.")
    .max(MAX_URL_LENGTH, `URL must be ${MAX_URL_LENGTH} characters or fewer.`)
    .url("Please enter a valid URL (e.g. https://example.com).")
    .refine((value) => /^https?:\/\//i.test(value), {
      message: "Only http:// and https:// URLs are supported.",
    }),
});

export type AnalyzeFormValues = z.infer<typeof analyzeSchema>;

export const DEFAULT_VALUES: AnalyzeFormValues = {
  url: "",
};
