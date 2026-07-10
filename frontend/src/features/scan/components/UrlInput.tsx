import { useId } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * Presentational URL field — no React Hook Form, no fetch, no local state.
 * Controlled by AnalyzeForm / useAnalyzeForm.
 *
 * TODO(v1.1)
 *
 * Support paste validation
 * Support keyboard shortcuts
 * Support drag-and-drop URL
 * Optional Globe icon prefix inside the input
 */
export interface UrlInputProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
}

export default function UrlInput({
  value,
  onValueChange,
  disabled = false,
  error,
  placeholder = "https://example.com",
}: UrlInputProps) {
  const id = useId();
  const inputId = `${id}-url`;
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-foreground text-sm leading-none font-medium"
      >
        Landing Page URL
      </label>

      <Input
        id={inputId}
        type="url"
        inputMode="url"
        autoComplete="url"
        spellCheck={false}
        required
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        onChange={handleChange}
        className={cn(
          hasError && "border-destructive focus-visible:ring-destructive",
        )}
      />

      {hasError ? (
        <p
          id={errorId}
          role="alert"
          className="text-destructive text-sm leading-snug"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
