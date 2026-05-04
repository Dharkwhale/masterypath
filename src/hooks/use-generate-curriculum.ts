"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generateCurriculum } from "@/lib/api/client";
import type { GenerateCurriculumPayload } from "@/types/learning";

export function useGenerateCurriculum(token: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: GenerateCurriculumPayload) =>
      generateCurriculum(payload, token!),
    onSuccess: () => {
      // Invalidate the paths list so the new path appears on the dashboard
      queryClient.invalidateQueries({ queryKey: ["learning-paths"] });
    },
  });
}
