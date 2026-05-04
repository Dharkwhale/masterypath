import type { LearningPath, Session, GenerateCurriculumPayload } from "./learning";

// Generic API response wrapper — update shape to match co-founder's API
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status: number;
}

// Request types
export type GenerateCurriculumRequest = GenerateCurriculumPayload;

export interface SendChatMessageRequest {
  sessionId: string;
  message: string;
}

// Response types
export type GetLearningPathsResponse = ApiResponse<LearningPath[]>;
export type GetSessionResponse = ApiResponse<Session>;
export type GenerateCurriculumResponse = ApiResponse<{ sessionId: string; path: LearningPath }>;
