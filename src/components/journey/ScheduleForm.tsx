"use client";

import { useFormContext } from "react-hook-form";
import type { JourneyFormData } from "./JourneyWizard";
import { Input } from "@/components/ui/Input";

const HOURS_OPTIONS = [3, 5, 7, 10, 15, 20];

export function ScheduleForm() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<JourneyFormData>();

  const hoursPerWeek = watch("hoursPerWeek");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-[var(--color-text-secondary)]">
          Hours per week
        </p>
        <div className="flex flex-wrap gap-2">
          {HOURS_OPTIONS.map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => setValue("hoursPerWeek", h)}
              className={
                hoursPerWeek === h
                  ? "rounded-lg border border-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-4 py-2 text-sm font-medium text-[var(--color-accent)]"
                  : "rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/50"
              }
            >
              {h}h
            </button>
          ))}
        </div>
        {errors.hoursPerWeek && (
          <p className="text-xs text-[var(--color-error)]">{errors.hoursPerWeek.message}</p>
        )}
      </div>

      <Input
        id="targetDate"
        label="Target completion date (optional)"
        type="date"
        error={errors.targetDate?.message}
        {...register("targetDate")}
      />
    </div>
  );
}
