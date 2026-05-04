import type {
  GenerateCurriculumRequest,
  GenerateCurriculumResponse,
  GetLearningPathsResponse,
  GetSessionResponse,
} from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

async function apiFetch<T>(
  path: string,
  options?: RequestInit & { token?: string }
): Promise<T> {
  const { token, ...fetchOptions } = options ?? {};

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...fetchOptions.headers,
  };

  const res = await fetch(`${BASE_URL}${path}`, { ...fetchOptions, headers });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message ?? `API error ${res.status}`);
  }

  return res.json() as Promise<T>;
}

// Learning Paths
export async function getLearningPaths(token: string): Promise<GetLearningPathsResponse> {
  return apiFetch<GetLearningPathsResponse>("/paths", { token });
}

// Session
export async function getSession(sessionId: string, token: string): Promise<GetSessionResponse> {
  return apiFetch<GetSessionResponse>(`/sessions/${sessionId}`, { token });
}

// Generate curriculum — triggers AI-based curriculum creation
export async function generateCurriculum(
  payload: GenerateCurriculumRequest,
  token: string
): Promise<GenerateCurriculumResponse> {
  return apiFetch<GenerateCurriculumResponse>("/curriculum/generate", {
    method: "POST",
    body: JSON.stringify(payload),
    token,
  });
}

// Build SSE URL for the chat stream — used by the EventSource hook
export function buildChatStreamUrl(sessionId: string, message: string, token: string): string {
  const params = new URLSearchParams({ message, token });
  return `${BASE_URL}/sessions/${sessionId}/chat/stream?${params.toString()}`;
}
