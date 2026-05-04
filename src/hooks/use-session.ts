"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "@/lib/api/client";
import type { Session } from "@/types/learning";

export function useSession(sessionId: string, token: string | null) {
  return useQuery<Session>({
    queryKey: ["session", sessionId],
    queryFn: async () => {
      const res = await getSession(sessionId, token!);
      return res.data;
    },
    enabled: !!sessionId && !!token,
    staleTime: 1000 * 30, // 30 seconds
  });
}
