import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { JourneyWizard } from "@/components/journey/JourneyWizard";

export const metadata: Metadata = { title: "New Journey" };

export default async function NewJourneyPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const token = session?.access_token ?? null;

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Start a New Journey
        </h1>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Answer a few questions and your AI tutor will build a custom curriculum for you.
        </p>
      </div>
      <JourneyWizard token={token} />
    </div>
  );
}
