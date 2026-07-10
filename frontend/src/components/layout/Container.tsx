import { cn } from "@/lib/utils";
import { PAGE_WIDTH } from "@/lib/constants";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Centered page column — single source of truth for content width.
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        PAGE_WIDTH,
        className,
      )}
    >
      {children}
    </div>
  );
}
