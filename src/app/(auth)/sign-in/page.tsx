import type { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = { title: "Sign In" };

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / wordmark */}
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Mastery<span className="text-[var(--color-accent)]">Path</span>
          </span>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Sign in to continue your learning journey
          </p>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <SignInForm />

          <p className="mt-5 text-center text-sm text-[var(--color-text-muted)]">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-[var(--color-accent)] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
