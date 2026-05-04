"use client";

import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";
import { useLearningPaths } from "@/hooks/use-learning-paths";
import { PathCard } from "@/components/dashboard/PathCard";

interface DashboardClientProps {
  token: string | null;
}

export function DashboardClient({ token }: DashboardClientProps) {
  const { data: paths, isLoading, isError } = useLearningPaths(token);

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-52 animate-pulse rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Could not load your learning paths. Please try refreshing.
        </p>
      </div>
    );
  }

  if (!paths || paths.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] py-20">
        <BookOpen className="mb-4 h-10 w-10 text-[var(--color-text-muted)]" />
        <h2 className="mb-1 text-base font-semibold text-[var(--color-text-primary)]">
          No learning paths yet
        </h2>
        <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
          Start your first AI-generated journey to get going.
        </p>
        <Link
          href="/new-journey"
          className="flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)]"
        >
          <Plus className="h-4 w-4" />
          Start New Journey
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {paths.map((path) => (
        <PathCard key={path.id} path={path} />
      ))}
    </div>
  );
}
