export type Track = "python" | "ai-engineering" | "forex" | "stocks";

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export type ModuleStatus = "locked" | "available" | "in-progress" | "completed";

export interface Module {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  status: ModuleStatus;
  order: number;
  concepts: string[];
}

export interface LearningPath {
  id: string;
  userId: string;
  track: Track;
  title: string;
  goal: string;
  skillLevel: SkillLevel;
  hoursPerWeek: number;
  targetDate?: string;
  progressPercent: number;
  modules: Module[];
  createdAt: string;
  updatedAt: string;
  lastAccessedAt?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export interface Session {
  id: string;
  pathId: string;
  path: LearningPath;
  messages: ChatMessage[];
  currentModuleId: string | null;
  progressMarkers: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GenerateCurriculumPayload {
  track: Track;
  goal: string;
  skillLevel: SkillLevel;
  hoursPerWeek: number;
  targetDate?: string;
}
