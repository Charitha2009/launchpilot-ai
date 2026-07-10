import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Vertical page section for Dashboard / Reports / Settings layouts.
 */
export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("flex w-full flex-col gap-4", className)}>
      {children}
    </section>
  );
}
