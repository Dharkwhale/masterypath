import type { Metadata } from "next";
import Link from "next/link";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = { title: "Create Account" };

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Mastery<span className="text-[var(--color-accent)]">Path</span>
          </span>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Create your account to get started
          </p>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <SignUpForm />

          <p className="mt-5 text-center text-sm text-[var(--color-text-muted)]">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-[var(--color-accent)] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
