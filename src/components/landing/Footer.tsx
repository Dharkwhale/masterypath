import Link from "next/link";

const LINKS = {
  Product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features tracks", href: "#tracks" },
    { label: "Programming tracks", href: "#tracks" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Cookie policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="py-20" style={{ backgroundColor: "#F4F0E9" }}>
      <div className="mx-auto max-w-315.5 px-6 flex flex-col gap-12">

        {/* Main row — Brand (688px Fill) + Links (544px), 50.5px gap */}
        <div className="flex items-start" style={{ gap: "50.5px" }}>

          {/* Brand — 688 Fill × 96 Hug, gap 24px, 50.5px from top */}
          <div className="flex flex-col flex-1" style={{ gap: "24px", paddingTop: "50.5px" }}>
            {/* Logo row — 119×29 */}
            <div className="flex items-center gap-2">
              <span
                className="flex items-center justify-center rounded-md font-syne font-semibold text-white shrink-0"
                style={{ width: "29px", height: "29px", backgroundColor: "#21494A", fontSize: "13px" }}
              >
                M
              </span>
              <span
                className="font-syne font-semibold"
                style={{ fontSize: "16px", color: "#111111" }}
              >
                MasteryPath
              </span>
            </div>
            {/* Description — 424×48 */}
            <p
              className="font-syne font-normal"
              style={{ fontSize: "18px", color: "#030303", maxWidth: "424px", lineHeight: "24px" }}
            >
              From zero to mastery — one AI, one platform, every subject that matters
              for your career and wealth.
            </p>
          </div>

          {/* Links — 544px, 3 cols, 32px gap */}
          <div
            className="grid grid-cols-3 shrink-0"
            style={{ width: "544px", gap: "32px" }}
          >
            {Object.entries(LINKS).map(([col, items]) => (
              <div key={col} className="flex flex-col gap-4">
                <p
                  className="font-cormorant"
                  style={{ fontSize: "24px", fontWeight: 600, color: "#000000" }}
                >
                  {col}
                </p>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-syne font-normal transition-colors hover:text-teal"
                        style={{ fontSize: "14px", color: "#3B3B3B" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar — mirrors main row layout */}
        <div style={{ borderTop: "0.5px solid #BDBDBD", paddingTop: "20px" }}>
          <div className="flex items-start" style={{ gap: "48px" }}>
            {/* Aligns with brand section */}
            <div className="flex-1">
              <p
                className="font-syne font-normal"
                style={{ fontSize: "12px", color: "#8B8B8B" }}
              >
                © 2026 MasteryPath. All rights reserved.
              </p>
            </div>
            {/* Aligns with links section (544px) */}
            <div className="shrink-0" style={{ width: "544px" }}>
              <p
                className="font-syne font-normal leading-relaxed"
                style={{ fontSize: "12px", color: "#8B8B8B" }}
              >
                Finance content is for educational purposes only and does not constitute financial advice.
                Trading involves risk. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
