"use client";

import Link from "next/link";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import type { LearningPath, Track } from "@/types/learning";
import { formatDate } from "@/lib/utils";

const TRACK_META: Record<Track, { label: string; color: string; emoji: string }> = {
  python: { label: "Python", color: "#3b82f6", emoji: "🐍" },
  "ai-engineering": { label: "AI Engineering", color: "#8b5cf6", emoji: "🤖" },
  forex: { label: "Forex", color: "#22c55e", emoji: "💱" },
  stocks: { label: "Stocks", color: "#f59e0b", emoji: "📈" },
};

interface PathCardProps {
  path: LearningPath;
}

export function PathCard({ path }: PathCardProps) {
  const meta = TRACK_META[path.track];
  const completedModules = path.modules.filter((m) => m.status === "completed").length;

  return (
    <Card className="group hover:border-[var(--color-accent)] transition-colors">
      <CardContent>
        {/* Track header */}
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{meta.emoji}</span>
            <Badge>{meta.label}</Badge>
          </div>
          {path.lastAccessedAt && (
            <span className="text-xs text-[var(--color-text-muted)]">
              {formatDate(path.lastAccessedAt)}
            </span>
          )}
        </div>

        {/* Title & Goal */}
        <h3 className="mb-1 font-semibold text-[var(--color-text-primary)]">{path.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-[var(--color-text-secondary)]">{path.goal}</p>

        {/* Progress bar */}
        <div className="mb-1 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            {completedModules} / {path.modules.length} modules
          </span>
          <span>{path.progressPercent}%</span>
        </div>
        <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-surface-raised)]">
          <div
            className="h-full rounded-full bg-[var(--color-accent)] transition-all"
            style={{ width: `${path.progressPercent}%` }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
            <Clock className="h-3 w-3" />
            {path.hoursPerWeek}h / week
          </span>
          <Link
            href={`/session/${path.id}`}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            Resume <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
