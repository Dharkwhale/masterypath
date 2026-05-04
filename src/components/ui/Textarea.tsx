import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--color-text-secondary)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "min-h-[100px] w-full resize-y rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[var(--color-error)] focus:ring-[var(--color-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
