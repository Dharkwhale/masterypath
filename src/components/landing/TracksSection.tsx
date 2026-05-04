"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Coins, GitFork, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = "all" | "finance" | "programming";

const TRACKS: { id: string; category: Category; categoryLabel: string; icon: string | LucideIcon; title: string; desc: string; lessons: number }[] = [
  {
    id: "python",
    category: "programming",
    categoryLabel: "Programming & AI",
    icon: "</>",
    title: "Python",
    desc: "Variables to OOP, APIs, data structures, algorithms, async Python, to production system design and deployment.",
    lessons: 24,
  },
  {
    id: "forex",
    category: "finance",
    categoryLabel: "Finance & Trading",
    icon: "↗",
    title: "Forex Trading",
    desc: "Currency markets, chart patterns, risk management, to building a systematic trading strategy with backtesting.",
    lessons: 18,
  },
  {
    id: "web-dev",
    category: "programming",
    categoryLabel: "Programming & AI",
    icon: Globe,
    title: "Web Development",
    desc: "HTML/CSS/JS fundamentals, React, REST APIs, databases, authentication, CI/CD, to scalable full-stack architecture.",
    lessons: 26,
  },
  {
    id: "crypto",
    category: "finance",
    categoryLabel: "Finance & Trading",
    icon: Coins,
    title: "Crypto & Blockchain",
    desc: "Blockchain fundamentals, DeFi protocols, on-chain analysis, derivatives, to building trading bots.",
    lessons: 16,
  },
  {
    id: "ai-engineering",
    category: "programming",
    categoryLabel: "Programming & AI",
    icon: GitFork,
    title: "AI & Machine Learning",
    desc: "What AI is, supervised learning, model training, deep learning, neural networks, transformers, to fine-tuning LLMs.",
    lessons: 22,
  },
  {
    id: "stocks",
    category: "finance",
    categoryLabel: "Finance & Trading",
    icon: Landmark,
    title: "Personal Finance",
    desc: "Budgeting, debt management, investment vehicles, tax-advantaged accounts, to a complete personal wealth system.",
    lessons: 14,
  },
];

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "All 12 tracks" },
  { id: "finance", label: "Finance & Trading" },
  { id: "programming", label: "Programming & AI" },
];

function TrackIcon({ icon }: { icon: string | LucideIcon }) {
  if (typeof icon === "string") return <span>{icon}</span>;
  const Icon = icon;
  return <Icon size={18} color="#21494A" strokeWidth={1.5} />;
}

export function TracksSection() {
  const [active, setActive] = useState<Category>("all");
  const visible = TRACKS.filter((t) => active === "all" || t.category === active);

  return (
    <section id="tracks" className="py-20" style={{ backgroundColor: "#EDE8DC" }}>
      <div className="mx-auto max-w-315.5 px-6 flex flex-col gap-13">

        {/* Header — 758px wide */}
        <div className="flex flex-col gap-4" style={{ maxWidth: "758px" }}>
          <p
            className="font-syne font-normal uppercase tracking-widest"
            style={{ fontSize: "24px", color: "#21494a" }}
          >
            What you&apos;ll learn
          </p>
          <h2
            className="font-cormorant leading-[1.08]"
            style={{ fontSize: "52px", fontWeight: 500, color: "#000000" }}
          >
            <span
              className="font-cormorant italic"
              style={{ fontSize: "52px", fontWeight: 500, color: "#21494a" }}
            >
              12 tracks.
            </span>
            {" "}Pick exactly
            <br />
            what you want to master.
          </h2>
          <p
            className="font-syne font-normal leading-relaxed"
            style={{ fontSize: "20px", color: "#3b3b3b" }}
          >
            Every track is independent. You pick one track, your AI builds your personal curriculum
            around it, and you go from beginner to mastery at your own pace.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center" style={{ gap: "24px" }}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="font-syne font-normal transition-colors"
              style={{
                height: "46px",
                borderRadius: "24px",
                padding: "10px 28px",
                fontSize: "16px",
                backgroundColor: active === f.id ? "#1B3829" : "#FFFFFF",
                color: active === f.id ? "#FFFFFF" : "#3b3b3b",
                border: active === f.id ? "none" : "0.5px solid #E2DDD4",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Track cards grid — 1262×724, gap 32px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((track) => (
            <div
              key={track.id}
              className="rounded-xl flex flex-col"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2DDD4",
                padding: "26px",
              }}
            >
              {/* Category */}
              <p
                className="font-syne font-normal uppercase tracking-wider"
                style={{ fontSize: "16px", color: "#8B8B8B" }}
              >
                {track.categoryLabel}
              </p>

              {/* Icon — 40×40 */}
              <div
                className="flex items-center justify-center rounded-md"
                style={{
                  width: "40px",
                  height: "40px",
                  marginTop: "12px",
                  border: "1px solid #E2DDD4",
                  backgroundColor: "#F4FAFA",
                  fontSize: "14px",
                  color: "#21494A",
                  flexShrink: 0,
                }}
              >
                <TrackIcon icon={track.icon} />
              </div>

              {/* Title */}
              <p
                className="font-syne"
                style={{ fontWeight: 500, fontSize: "20px", color: "#000000", marginTop: "12px" }}
              >
                {track.title}
              </p>

              {/* Description */}
              <p
                className="font-syne font-normal"
                style={{
                  fontSize: "16px",
                  color: "#3B3B3B",
                  marginTop: "12px",
                  lineHeight: "1.5",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {track.desc}
              </p>

              {/* Divider — 20px below description */}
              <div style={{ marginTop: "20px", borderTop: "0.5px solid #BDBDBD" }} />

              {/* Footer — 12px below divider */}
              <div
                className="flex items-center justify-between"
                style={{ marginTop: "12px" }}
              >
                <span
                  className="font-syne font-normal"
                  style={{ fontSize: "12px", color: "#21494A" }}
                >
                  Beginner → Mastery
                </span>
                <span
                  className="flex items-center justify-center rounded-full font-syne font-normal"
                  style={{
                    height: "37px",
                    padding: "0 16px",
                    fontSize: "14px",
                    color: "#21494A",
                    backgroundColor: "#F4FAFA",
                    border: "1px solid #E2DDD4",
                  }}
                >
                  {track.lessons} Lessons
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browse all CTA */}
        <div className="flex justify-center">
          <Link
            href="/sign-up"
            className=" font-syne font-normal transition-colors"
            style={{
              backgroundColor: "#21494A",
              color: "#EEE7E7",
              fontSize: "16px",
              height: "46px",
              padding: "0 32px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Browse all 12 tracks here
          </Link>
        </div>

      </div>
    </section>
  );
}
