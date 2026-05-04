import { create } from "zustand";
import type { ChatMessage } from "@/types/learning";

interface ChatState {
  messages: ChatMessage[];
  streamingContent: string;
  isStreaming: boolean;
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  appendStreamToken: (token: string) => void;
  finalizeStream: () => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  streamingContent: "",
  isStreaming: false,

  addMessage: (message) =>
    set((s) => ({ messages: [...s.messages, message] })),

  setMessages: (messages) => set({ messages }),

  appendStreamToken: (token) =>
    set((s) => ({
      streamingContent: s.streamingContent + token,
      isStreaming: true,
    })),

  finalizeStream: () => {
    const { streamingContent, messages } = get();
    if (!streamingContent) return;

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: streamingContent,
      createdAt: new Date().toISOString(),
    };

    set({
      messages: [...messages, assistantMessage],
      streamingContent: "",
      isStreaming: false,
    });
  },

  clearChat: () => set({ messages: [], streamingContent: "", isStreaming: false }),
}));
