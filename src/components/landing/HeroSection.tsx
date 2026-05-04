import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-cream pt-28 pb-[79px] md:pt-36 overflow-visible">

      {/* ── Badge ─────────────────────────────────────────────────── */}
      <div className="mb-7 flex justify-center">
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-off-white px-4 py-1.5 font-syne font-normal text-[12px] text-teal"
          style={{ border: "0.3px solid var(--color-teal)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          AI - Powered Tutoring
        </span>
      </div>

      {/* ── Heading + annotation cards ────────────────────────────── */}
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative">

          {/* LEFT card — AI Memory — counter-clockwise */}
          <div
            className="absolute hidden xl:block"
            style={{ left: 0, top: "6px", transform: "rotate(-10deg)", zIndex: 10 }}
          >
            <Image
              src="/images/landing/hero/AI-Memory.png"
              alt="AI Memory"
              width={165}
              height={41}
              unoptimized
              style={{ height: "auto" }}
            />
          </div>

          <h1 className="mx-auto max-w-2xl text-center font-cormorant font-semibold text-[64px] leading-[1.08] text-black">
            From{" "}
            <span className="italic font-cormorant text-teal">Zero</span>
            {" "}to mastery
          </h1>

          {/* RIGHT card — Adaptive Quizzes — clockwise */}
          <div
            className="absolute hidden xl:block"
            style={{ right: 0, top: "-4px", transform: "rotate(6deg)", zIndex: 10 }}
          >
            <Image
              src="/images/landing/hero/Adaptive-Quizzes.png"
              alt="Adaptive Quizzes"
              width={165}
              height={68}
              unoptimized
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* ── Subtitle + CTAs ───────────────────────────────────────── */}
      <div className="mx-auto max-w-193 px-6">
        <p className="mt-5 mb-9 text-center font-syne font-medium text-[20px] leading-relaxed text-charcoal">
          The AI tutor that remembers you, builds your personal curriculum, and gets
          smarter with every session. Finance &amp; Programming — one platform.
        </p>

        <div className="mb-[clamp(2.5rem,5vw,3.5rem)] flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/sign-up"
            className="px-8 py-3 font-syne font-normal text-[16px] shadow-md transition-colors"
            style={{ backgroundColor: "#21494a", color: "#eee7e7" }}
          >
            Start learning
          </Link>
          <a
            href="#how-it-works"
            className="border border-divider px-8 py-3 font-syne font-normal text-[16px] transition-colors"
            style={{ backgroundColor: "#f4fafa", color: "#21494a" }}
          >
            See how it works
          </a>
        </div>
      </div>

      {/* ── Product mockup ────────────────────────────────────────── */}
      <div
        className="relative mx-auto w-full px-6"
        style={{ maxWidth: "772px" }}
      >
        {/* Spaced Repetition card */}
        <div
          className="absolute hidden md:block"
          style={{ left: "24px", top: "-24px", transform: "rotate(-9deg)", zIndex: 10 }}
        >
          <Image
            src="/images/landing/hero/Spaced-Rep.png"
            alt="Spaced Repetition"
            width={165}
            height={41}
            unoptimized
            style={{ height: "auto" }}
          />
        </div>

        <Image
          src="/images/landing/hero/MasteryPath-Hero.png"
          alt="MasteryPath session interface"
          width={700}
          height={422}
          className="w-full"
          style={{ height: "auto" }}
          priority
          unoptimized
        />

        {/* LLM fine tuning card */}
        <div
          className="absolute hidden md:block"
          style={{ right: "-8px", top: "44%", transform: "rotate(5deg)", zIndex: 10 }}
        >
          <Image
            src="/images/landing/hero/LLM.png"
            alt="LLM fine tuning"
            width={155}
            height={65}
            unoptimized
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
