"use client";

import { useCallback, useRef } from "react";
import { buildChatStreamUrl } from "@/lib/api/client";
import { useChatStore } from "@/stores/chat-store";
import type { ChatMessage } from "@/types/learning";

export function useChatStream(sessionId: string, token: string | null) {
  const { addMessage, appendStreamToken, finalizeStream } = useChatStore();
  const eventSourceRef = useRef<EventSource | null>(null);

  const sendMessage = useCallback(
    (content: string) => {
      if (!token || !sessionId) return;

      // Add the user message to the store immediately
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content,
        createdAt: new Date().toISOString(),
      };
      addMessage(userMessage);

      // Close any existing stream
      eventSourceRef.current?.close();

      const url = buildChatStreamUrl(sessionId, content, token);
      const es = new EventSource(url);
      eventSourceRef.current = es;

      es.onmessage = (event) => {
        const data = event.data as string;

        if (data === "[DONE]") {
          finalizeStream();
          es.close();
          eventSourceRef.current = null;
          return;
        }

        try {
          const parsed = JSON.parse(data) as { token?: string; content?: string };
          appendStreamToken(parsed.token ?? parsed.content ?? data);
        } catch {
          // Raw token (not JSON-wrapped)
          appendStreamToken(data);
        }
      };

      es.onerror = () => {
        finalizeStream();
        es.close();
        eventSourceRef.current = null;
      };
    },
    [sessionId, token, addMessage, appendStreamToken, finalizeStream]
  );

  const stopStream = useCallback(() => {
    eventSourceRef.current?.close();
    eventSourceRef.current = null;
    finalizeStream();
  }, [finalizeStream]);

  return { sendMessage, stopStream };
}
