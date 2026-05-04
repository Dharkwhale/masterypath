import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }: CardProps) {
  return (
    <h3
      className={cn(
        "text-base font-semibold text-[var(--color-text-primary)]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardTitle, CardContent };
