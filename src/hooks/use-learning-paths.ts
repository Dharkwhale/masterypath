"use client";

import { useQuery } from "@tanstack/react-query";
import { getLearningPaths } from "@/lib/api/client";
import type { LearningPath } from "@/types/learning";

export function useLearningPaths(token: string | null) {
  return useQuery<LearningPath[]>({
    queryKey: ["learning-paths"],
    queryFn: async () => {
      const res = await getLearningPaths(token!);
      return res.data;
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
