const STATS = [
  { value: "12", label: "Curated learning\ntracks" },
  { value: "30+", label: "Sources researched\nper course" },
  { value: "4", label: "Levels per track,\nbeginner to mastery" },
  { value: "∞", label: "AI memory — never\nforgets" },
];

export function StatsBar() {
  return (
    <section style={{ backgroundColor: "#084243" }}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {STATS.map((stat) => (
            <div key={stat.value} className="px-6 py-6 md:py-0 text-center first:pl-0 last:pr-0">
              <p
                className="font-cormorant font-semibold leading-none"
                style={{ fontSize: "48px", color: "#abf3f3" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 font-syne font-normal leading-snug whitespace-pre-line"
                style={{ fontSize: "24px", color: "#dedede" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
