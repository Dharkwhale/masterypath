const BULLETS = [
  "Pinecone vector memory — semantic retrieval",
  "Spaced repetition — weak concepts resurface automatically",
  "Full transparency — view, edit and delete your memory anytime",
];

export function MemorySection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#21494A" }}>
      <div className="mx-auto max-w-315.5 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <p
              className="font-syne font-normal uppercase tracking-widest"
              style={{ fontSize: "24px", color: "rgba(255,255,255,0.55)" }}
            >
              The Memory System
            </p>

            <h2
              className="font-cormorant leading-[1.08]"
              style={{ fontSize: "52px", fontWeight: 500, color: "#FFFFFF" }}
            >
              An AI that actually
              <br />
              <span
                className="font-cormorant italic"
                style={{ fontSize: "52px", fontWeight: 500, color: "#abf3f3" }}
              >
                remembers you.
              </span>
            </h2>

            <p
              className="font-syne font-normal leading-relaxed"
              style={{ fontSize: "20px", color: "rgba(255,255,255,0.75)" }}
            >
              After every session, your tutor writes a structured memory entry — what you
              understood, where you struggled, what to revisit. Every new session starts with
              those memories loaded in. The longer you use MasteryPath, the more
              irreplaceable it becomes.
            </p>

            <ul className="flex flex-col gap-3">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 rounded-full"
                    style={{ width: "6px", height: "6px", backgroundColor: "#abf3f3" }}
                  />
                  <span
                    className="font-syne font-normal"
                    style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — memory card mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">

              {/* Back cards (stacked depth effect) */}
              <div
                className="absolute inset-x-6 rounded-2xl"
                style={{ top: "12px", height: "100%", backgroundColor: "rgba(255,255,255,0.15)" }}
              />
              <div
                className="absolute inset-x-3 rounded-2xl"
                style={{ top: "6px", height: "100%", backgroundColor: "rgba(255,255,255,0.25)" }}
              />

              {/* Front card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: "#FFFFFF" }}>

                {/* Card header */}
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ backgroundColor: "#21494A" }}
                >
                  <p
                    className="font-syne font-normal uppercase tracking-wider"
                    style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)" }}
                  >
                    Session Memory · Today
                  </p>
                  <span
                    className="rounded-full font-syne font-normal px-2 py-0.5"
                    style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    Saved · 9 min ago
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <p
                    className="font-syne font-normal leading-relaxed"
                    style={{ fontSize: "13px", color: "#3b3b3b" }}
                  >
                    Strong session. Nailed the 1% rule and connected it to stop-loss
                    placement. Ready to move to R:R ratios. Ask about the asymmetric
                    trade setup next time.
                  </p>
                </div>

                {/* Card footer */}
                <div
                  className="px-5 py-3"
                  style={{ borderTop: "1px solid #F0EBE3" }}
                >
                  <p
                    className="font-syne font-normal"
                    style={{ fontSize: "11px", color: "#9CA3AF" }}
                  >
                    Forex Trading · Lesson 9
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
