"use client";

import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/types/learning";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-[var(--color-accent)] text-white"
            : "rounded-bl-sm bg-[var(--color-surface-raised)] text-[var(--color-text-primary)]"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}

export function StreamingMessage({ content }: { content: string }) {
  if (!content) return null;
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-[var(--color-surface-raised)] px-4 py-2.5 text-sm leading-relaxed text-[var(--color-text-primary)]">
        {content}
        <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-[var(--color-accent)]" />
      </div>
    </div>
  );
}
