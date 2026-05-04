"use client";

import { useFormContext } from "react-hook-form";
import type { JourneyFormData } from "./JourneyWizard";
import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";

const SKILL_LEVELS = [
  { id: "beginner", label: "Beginner", description: "Little to no experience" },
  { id: "intermediate", label: "Intermediate", description: "Some experience, want to go deeper" },
  { id: "advanced", label: "Advanced", description: "Solid foundation, pursuing mastery" },
] as const;

export function GoalForm() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<JourneyFormData>();

  const skillLevel = watch("skillLevel");

  return (
    <div className="flex flex-col gap-5">
      <Textarea
        id="goal"
        label="What do you want to achieve?"
        placeholder="e.g. I want to build and deploy my own AI-powered web app within 3 months..."
        rows={4}
        error={errors.goal?.message}
        {...register("goal")}
      />

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-[var(--color-text-secondary)]">
          Current skill level
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {SKILL_LEVELS.map((level) => (
            <button
              key={level.id}
              type="button"
              onClick={() => setValue("skillLevel", level.id)}
              className={cn(
                "rounded-lg border p-3 text-left transition-all",
                skillLevel === level.id
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50"
              )}
            >
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">{level.label}</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{level.description}</p>
            </button>
          ))}
        </div>
        {errors.skillLevel && (
          <p className="text-xs text-[var(--color-error)]">{errors.skillLevel.message}</p>
        )}
      </div>
    </div>
  );
}
