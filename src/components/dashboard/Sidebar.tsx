"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/ui-store";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/new-journey", label: "New Journey", icon: PlusCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { sidebarOpen, toggleSidebar } = useUIStore();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/sign-in");
    router.refresh();
  }

  return (
    <aside
      className={cn(
        "relative flex h-screen flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200",
        sidebarOpen ? "w-[260px]" : "w-16"
      )}
    >
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-[var(--color-border)] px-4">
        {sidebarOpen ? (
          <span className="text-base font-bold tracking-tight">
            Mastery<span className="text-[var(--color-accent)]">Path</span>
          </span>
        ) : (
          <span className="text-[var(--color-accent)] font-bold text-lg">M</span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 p-2 pt-4">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === href
                ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text-primary)]"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {sidebarOpen && <span>{label}</span>}
          </Link>
        ))}
      </nav>

      {/* Sign out */}
      <div className="border-t border-[var(--color-border)] p-2">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text-primary)]"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {sidebarOpen && <span>Sign out</span>}
        </button>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-16 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] shadow-sm hover:text-[var(--color-text-primary)]"
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {sidebarOpen ? (
          <ChevronLeft className="h-3 w-3" />
        ) : (
          <ChevronRight className="h-3 w-3" />
        )}
      </button>
    </aside>
  );
}
