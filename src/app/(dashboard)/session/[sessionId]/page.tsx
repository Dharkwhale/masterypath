import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSession } from "@/lib/api/client";
import { SessionLayout } from "@/components/session/SessionLayout";

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sessionId } = await params;
  return { title: `Session ${sessionId}` };
}

export default async function SessionPage({ params }: PageProps) {
  const { sessionId } = await params;

  const supabase = await createClient();
  const {
    data: { session: authSession },
  } = await supabase.auth.getSession();

  const token = authSession?.access_token ?? null;

  // Fetch session data server-side for instant first paint
  let session;
  try {
    const res = await getSession(sessionId, token!);
    session = res.data;
  } catch {
    notFound();
  }

  return <SessionLayout session={session} token={token} />;
}
