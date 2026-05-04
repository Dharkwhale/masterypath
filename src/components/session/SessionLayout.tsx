"use client";

import { useEffect } from "react";
import { useSessionStore } from "@/stores/session-store";
import { useChatStore } from "@/stores/chat-store";
import { CurriculumMap } from "./CurriculumMap";
import { ChatPanel } from "./ChatPanel";
import type { Session } from "@/types/learning";

interface SessionLayoutProps {
  session: Session;
  token: string | null;
}

export function SessionLayout({ session, token }: SessionLayoutProps) {
  const { setCurrentSession } = useSessionStore();
  const { setMessages } = useChatStore();

  // Hydrate stores with server data once
  useEffect(() => {
    setCurrentSession(session);
    if (session.messages?.length) {
      setMessages(session.messages);
    }
  }, [session, setCurrentSession, setMessages]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Curriculum map — fixed width */}
      <div className="hidden w-72 shrink-0 border-r border-[var(--color-border)] md:flex md:flex-col">
        <CurriculumMap modules={session.path.modules} />
      </div>

      {/* Right: AI Chat — fills remaining space */}
      <div className="flex flex-1 flex-col">
        <ChatPanel sessionId={session.id} token={token} />
      </div>
    </div>
  );
}
