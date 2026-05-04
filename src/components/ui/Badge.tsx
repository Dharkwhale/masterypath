import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]",
        success: "bg-[#22c55e1a] text-[var(--color-success)]",
        warning: "bg-[#f59e0b1a] text-[var(--color-warning)]",
        muted: "bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
