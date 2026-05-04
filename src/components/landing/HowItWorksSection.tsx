import { User, Star, MessageSquare, CheckCircle } from "lucide-react";

const STEPS = [
  {
    n: "1",
    Icon: User,
    title: "Tell us your goal",
    desc: "Choose Finance or Programming. Pick your track. Tell us your level in 60 seconds. That's all the AI needs to get started.",
  },
  {
    n: "2",
    Icon: Star,
    title: "AI builds your curriculum",
    desc: "In seconds, your tutor researches 30+ sources and generates a full personalized course — structured modules, lessons, and exercises calibrated exactly to you.",
  },
  {
    n: "3",
    Icon: MessageSquare,
    title: "Learn through conversation",
    desc: "Your AI tutor doesn't just answer — it challenges you, asks questions back, and adapts to your pace. Every session ends with a summary saved to your memory.",
  },
  {
    n: "4",
    Icon: CheckCircle,
    title: "Track, quiz, certify",
    desc: "Adaptive quizzes after every lesson. Module exams with cooldowns. A streak that keeps you honest. A certificate when you're done.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto max-w-315.5 px-6 flex flex-col gap-13">

        {/* Header — 758px wide, 16px gap between children */}
        <div className="flex flex-col gap-4" style={{ maxWidth: "758px" }}>
          <p
            className="font-syne font-normal uppercase tracking-widest"
            style={{ fontSize: "24px", color: "#21494a" }}
          >
            How it works
          </p>
          <h2
            className="font-cormorant leading-[1.08]"
            style={{ fontSize: "52px", fontWeight: 500, color: "#000000" }}
          >
            Four steps from
            <br />
            signup to{" "}
            <span
              className="font-cormorant italic"
              style={{ fontSize: "52px", fontWeight: 500, color: "#21494a" }}
            >
              mastery.
            </span>
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

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="rounded-xl flex flex-col gap-3"
              style={{
                backgroundColor: "#F4FAFA",
                border: "1px solid #E2DDD4",
                padding: "24px",
                minHeight: "192px",
              }}
            >
              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <step.Icon size={20} color="#21494a" strokeWidth={1.5} />
                <span
                  className="font-cormorant"
                  style={{ fontWeight: 600, fontSize: "32px", color: "#BDBDBD", lineHeight: 1 }}
                >
                  {step.n}
                </span>
              </div>
              {/* Title */}
              <p
                className="font-syne"
                style={{ fontWeight: 500, fontSize: "20px", color: "#000000" }}
              >
                {step.title}
              </p>
              {/* Description */}
              <p
                className="font-syne font-normal leading-relaxed"
                style={{ fontSize: "14px", color: "#3b3b3b" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
