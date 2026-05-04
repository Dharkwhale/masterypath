const TOOLS = [
  {
    tag: "• YOUTUBE",
    feature: "Watch intro content",
    desc: "Unstructured, no progression. Algorithm pulls you off-topic. No one tracks what you watched.",
    highlight: false,
  },
  {
    tag: "• CHATGPT / CLAUDE",
    feature: "Ask follow-up questions",
    desc: "Zero memory of what you already learned. No curriculum context. Starts from scratch every session.",
    highlight: false,
  },
  {
    tag: "• UDEMY / COURSEA",
    feature: "Buy a structured course",
    desc: "Pre-recorded, no personalization, fixed pace. 90% of buyers never finish. No one notices if you stop.",
    highlight: false,
  },
  {
    tag: "• YOUTUBE",
    feature: "Search for clarification",
    desc: "Conflicting answers, no synthesis. You lose 20 minutes on a 2-minute question every time",
    highlight: false,
  },
  {
    tag: "• RANDOM QUIZ SITES",
    feature: "Take practice quizzes",
    desc: "No connection to what you actually learned. Generic questions that don't adapt to your level.",
    highlight: false,
  },
  {
    tag: "• MASTERYPATH",
    feature: "All of it. One place.\nOne AI that knows you.",
    desc: "Personalized curriculum. Memory that compounds. Quizzes built from what you've actually learned.",
    highlight: true,
  },
];

export function ProblemSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#EBE1CF" }}>
      <div className="mx-auto max-w-[1262px] px-6 flex flex-col gap-[52px]">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <p
            className="font-syne font-normal uppercase tracking-widest"
            style={{ fontSize: "24px", color: "#21494a" }}
          >
            The Problem
          </p>
          <h2
            className="font-cormorant leading-[1.08]"
            style={{ fontSize: "52px", fontWeight: 500, color: "#000000" }}
          >
            Learning today is{" "}
            <span
              className="font-cormorant italic"
              style={{ fontSize: "52px", fontWeight: 500, color: "#21494a" }}
            >
              broken
            </span>
            <br />
            and fragmented.
          </h2>
          <p
            className="font-syne font-normal leading-relaxed"
            style={{ fontSize: "20px", color: "#3b3b3b" }}
          >
            The average person trying to learn Forex or Python uses 5–7 different tools. None of
            <br />
            them talk to each other. None of them remember you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <div
              key={`${tool.tag}-${tool.feature}`}
              className="rounded-xl flex flex-col justify-start"
              style={{
                backgroundColor: tool.highlight ? "#1B3829" : "#FFFFFF",
                minHeight: "192px",
                padding: "27px 27px 27px 27px",
              }}
            >
              {/* Inner content: 346×89 equivalent */}
              <div className="flex flex-col gap-2" style={{ maxWidth: "346px" }}>
                <p
                  className="font-syne font-normal"
                  style={{
                    fontSize: "16px",
                    color: tool.highlight ? "rgba(255,255,255,0.6)" : "#8B8B8B",
                  }}
                >
                  {tool.tag}
                </p>
                <p
                  className="font-syne whitespace-pre-line"
                  style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    color: tool.highlight ? "#FFFFFF" : "#000000",
                  }}
                >
                  {tool.feature}
                </p>
                <p
                  className="font-syne font-normal leading-relaxed"
                  style={{
                    fontSize: "16px",
                    color: tool.highlight ? "rgba(255,255,255,0.7)" : "#3b3b3b",
                  }}
                >
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
