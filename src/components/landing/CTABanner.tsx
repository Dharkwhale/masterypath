import Link from "next/link";

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0d1f1f", paddingTop: "104px", paddingBottom: "104px" }}
    >
      {/* Wave background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 120% 80% at 20% 120%, rgba(27,56,41,0.7) 0%, transparent 55%)",
            "radial-gradient(ellipse 100% 60% at 80% -20%, rgba(15,40,40,0.8) 0%, transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,30,30,0.5) 0%, transparent 70%)",
          ].join(", "),
        }}
      />
      {/* Subtle wave shapes */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: [
            "radial-gradient(ellipse 200% 40% at -10% 60%, rgba(30,60,50,0.6) 0%, transparent 40%)",
            "radial-gradient(ellipse 200% 40% at 110% 40%, rgba(20,50,45,0.5) 0%, transparent 40%)",
          ].join(", "),
        }}
      />

      {/* Content — 562×252 centered */}
      <div
        className="relative mx-auto flex flex-col items-center text-center"
        style={{ width: "562px", maxWidth: "100%", gap: "28px" }}
      >
        {/* Heading — 562×126 */}
        <h2
          className="font-cormorant w-full"
          style={{ fontSize: "52px", fontWeight: 500, color: "#FFFFFF", lineHeight: "63px" }}
        >
          Your tutor is
          <br />
          <span className="font-cormorant italic" style={{ fontSize: "52px", fontWeight: 500 }}>
            waiting
          </span>
          {" "}for you
        </h2>

        {/* Subtitle — 562×24 */}
        <p
          className="font-syne font-normal w-full"
          style={{ fontSize: "20px", color: "#F5F5F5", lineHeight: "24px" }}
        >
          Free to start. No credit card. Your first session in under 2 minutes.
        </p>

        {/* Button — 151×46 */}
        <Link
          href="/sign-up"
          className="font-syne font-normal transition-colors inline-flex items-center justify-center"
          style={{
            height: "46px",
            padding: "0 28px",
            fontSize: "16px",
            backgroundColor: "#FFFFFF",
            color: "#21494A",
          }}
        >
          Start learning
        </Link>
      </div>
    </section>
  );
}
