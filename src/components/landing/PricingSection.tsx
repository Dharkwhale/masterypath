import Link from "next/link";

type Feature = { text: string; included: boolean };

const PLANS: {
  id: string;
  name: string;
  badge: string;
  price: string;
  period: string;
  features: Feature[];
  cta: string;
  href: string;
  highlight: boolean;
}[] = [
  {
    id: "starter",
    name: "Starter",
    badge: "FREE",
    price: "$0",
    period: "Forever free",
    features: [
      { text: "5 AI messages per day", included: true },
      { text: "1 preview course", included: true },
      { text: "Knowledge checks", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "AI memory", included: false },
      { text: "Module quizzes & finals", included: false },
      { text: "Certificates", included: false },
    ],
    cta: "Get started free",
    href: "/sign-up",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    badge: "MOST POPULAR",
    price: "$19",
    period: "per month · cancel anytime",
    features: [
      { text: "Unlimited AI message", included: true },
      { text: "Unlimited course generation", included: true },
      { text: "Full AI memory system", included: true },
      { text: "Module quizzes & finals", included: true },
      { text: "Branded PDF certificates", included: true },
      { text: "AI voice calls", included: true },
      { text: "Spaced repetition engine", included: true },
    ],
    cta: "Start with pro",
    href: "/sign-up?plan=pro",
    highlight: true,
  },
  {
    id: "teams",
    name: "Teams",
    badge: "INSTITUTIONS",
    price: "$99",
    period: "per month · up to 30 users",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 30 learner seats", included: true },
      { text: "Admin dashboard", included: true },
      { text: "Per-learner progress report", included: true },
      { text: "Custom syllabuses", included: true },
      { text: "Institution-branded certs", included: true },
      { text: "Dedicated Slack support", included: true },
    ],
    cta: "Contact us",
    href: "/contact",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20" style={{ backgroundColor: "#EBE1CF" }}>
      <div className="mx-auto max-w-315.5 px-6 flex flex-col gap-20">

        {/* Header — 488×163 centered */}
        <div className="flex flex-col items-center gap-4 text-center mx-auto" style={{ maxWidth: "488px" }}>
          <p
            className="font-syne font-normal uppercase tracking-widest"
            style={{ fontSize: "24px", color: "#21494a" }}
          >
            Pricing
          </p>
          <h2
            className="font-cormorant leading-[1.08]"
            style={{ fontSize: "52px", fontWeight: 500, color: "#000000" }}
          >
            Simple{" "}
            <span
              className="font-cormorant italic"
              style={{ fontSize: "52px", fontWeight: 500, color: "#21494a" }}
            >
              pricing.
            </span>
            <br />
            No surprises.
          </h2>
        </div>

        {/* Plans grid — 1081×564, gap 20px, centered with 90.5px margins */}
        <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: "1081px" }}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col"
              style={{
                backgroundColor: plan.highlight ? "#21494A" : "#FFFFFF",
                border: plan.highlight ? "none" : "1px solid #E2DDD4",
                borderRadius: "20px",
                padding: "40px 20px",
              }}
            >
              {/* Badge — 37px tall, #F4FAFA (50% opacity on highlight card) */}
              <div className="mb-5">
                <span
                  className="font-syne font-normal rounded-full inline-flex items-center px-4"
                  style={{
                    height: "37px",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    backgroundColor: plan.highlight
                      ? "rgba(244,250,250,0.5)"
                      : "#F4FAFA",
                    color: plan.highlight ? "rgba(255,255,255,0.85)" : "#6B7280",
                    border: plan.highlight ? "none" : "1px solid #E2DDD4",
                  }}
                >
                  {plan.badge}
                </span>
              </div>

              {/* Plan name */}
              <p
                className="font-syne font-normal mb-2"
                style={{ fontSize: "16px", color: plan.highlight ? "rgba(255,255,255,0.7)" : "#8B8B8B" }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <p
                className="font-cormorant font-semibold leading-none mb-1"
                style={{ fontSize: "52px", color: plan.highlight ? "#FFFFFF" : "#000000" }}
              >
                {plan.price}
              </p>

              {/* Period */}
              <p
                className="font-syne font-normal mb-6"
                style={{ fontSize: "13px", color: plan.highlight ? "rgba(255,255,255,0.55)" : "#8B8B8B" }}
              >
                {plan.period}
              </p>

              {/* Divider */}
              <div
                className="mb-5"
                style={{ borderTop: `0.5px solid ${plan.highlight ? "rgba(255,255,255,0.2)" : "#E2DDD4"}` }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5">
                    <span
                      className="font-syne font-normal shrink-0"
                      style={{
                        fontSize: "13px",
                        color: f.included
                          ? (plan.highlight ? "#abf3f3" : "#21494A")
                          : (plan.highlight ? "rgba(255,255,255,0.3)" : "#BDBDBD"),
                      }}
                    >
                      {f.included ? "✓" : "✗"}
                    </span>
                    <span
                      className="font-syne font-normal"
                      style={{
                        fontSize: "14px",
                        color: f.included
                          ? (plan.highlight ? "rgba(255,255,255,0.9)" : "#3B3B3B")
                          : (plan.highlight ? "rgba(255,255,255,0.3)" : "#BDBDBD"),
                      }}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className="block font-syne font-normal text-center transition-colors"
                style={{
                  fontSize: "16px",
                  padding: "12px 24px",
                  backgroundColor: plan.highlight ? "#FFFFFF" : "#21494A",
                  color: plan.highlight ? "#21494A" : "#EEE7E7",
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
