"use client";

import { cn } from "@/lib/utils";
import type { Track } from "@/types/learning";

const TRACKS: { id: Track; label: string; description: string; emoji: string }[] = [
  {
    id: "python",
    label: "Python",
    description: "Master Python from fundamentals to production-grade systems.",
    emoji: "🐍",
  },
  {
    id: "ai-engineering",
    label: "AI Engineering",
    description: "Build AI apps, fine-tune models, and deploy intelligent pipelines.",
    emoji: "🤖",
  },
  {
    id: "forex",
    label: "Forex Trading",
    description: "Understand currency markets, analysis, and trading strategy.",
    emoji: "💱",
  },
  {
    id: "stocks",
    label: "Stock Market",
    description: "Learn equity analysis, portfolio management, and investing.",
    emoji: "📈",
  },
];

interface TrackSelectorProps {
  value: Track | null;
  onChange: (track: Track) => void;
  error?: string;
}

export function TrackSelector({ value, onChange, error }: TrackSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {TRACKS.map((track) => (
          <button
            key={track.id}
            type="button"
            onClick={() => onChange(track.id)}
            className={cn(
              "flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
              value === track.id
                ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)] shadow-sm shadow-[var(--color-accent)]/10"
                : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-raised)]"
            )}
          >
            <span className="text-2xl">{track.emoji}</span>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">{track.label}</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{track.description}</p>
            </div>
          </button>
        ))}
      </div>
      {error && <p className="text-xs text-[var(--color-error)]">{error}</p>}
    </div>
  );
}
