import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const token = session?.access_token ?? null;
  const userName = session?.user?.user_metadata?.full_name as string | undefined;

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            {userName ? `Welcome back, ${userName.split(" ")[0]}` : "Your Dashboard"}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Pick up where you left off, or start a new journey.
          </p>
        </div>

        <Link
          href="/new-journey"
          className="flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-[var(--color-accent)]/20 transition-colors hover:bg-[var(--color-accent-hover)]"
        >
          <Plus className="h-4 w-4" />
          Start New Journey
        </Link>
      </div>

      {/* Client component handles the TanStack Query fetch */}
      <DashboardClient token={token} />
    </div>
  );
}
