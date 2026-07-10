/**
 * Brain of the Analyze Landing Page form.
 *
 * Responsibilities (to implement):
 * - Initialize React Hook Form
 * - Connect Zod resolver (analyzeSchema)
 * - Handle submit
 * - Call ScanService.createScan
 * - Expose loading state
 * - Return handlers for AnalyzeForm / UrlInput / AnalyzeButton
 *
 * Only this hook knows about submission. Presentational components stay dumb.
 */
export function useAnalyzeForm() {
  // TODO: wire useForm + zodResolver(analyzeSchema)
  // TODO: onSubmit → createScan({ url })
  // TODO: track isSubmitting / loading

  return {
    // TODO: register, handleSubmit, formState, loading, onSubmit
  };
}
