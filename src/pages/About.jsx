import "../styles/About.css";

// Differences b/w preload and prefetch.
const differences = [
  ["", "Preload", "Prefetch"],
  ["When", "Current page", "Future page"],
  ["Priority", "High — starts immediately", "Low — runs when idle"],
  [
    "Use for",
    "Fonts, hero images, critical CSS",
    "Lazy route chunks, next-page assets",
  ],
  ["In React", "In index.html <head>", "requestIdle\ncallback"],
];

// Skills
const skills = [
  ["Code Splitting", "using dynamic imports to reduce initial bundle size"],
  ["Lazy Loading", "components and images to improve load performance"],
  [
    "Memoization",
    "with React.memo, useMemo, and useCallback to prevent unnecessary re-renders",
  ],
  [
    "Efficient State Management",
    "to avoid excessive updates and prop drilling",
  ],
  ["Rendering Optimization", "minimizing DOM updates and reconciliation costs"],
];

// Vitals
const vitals = [
  {
    abbr: "LCP",
    full: "Largest Contentful Paint",
    desc: "How quickly main content becomes visible to the user",
  },
  {
    abbr: "FID",
    full: "First Input Delay",
    desc: "Reducing interaction delays for better responsiveness",
  },
  {
    abbr: "CLS",
    full: "Cumulative Layout Shift",
    desc: "Ensuring visual stability and preventing layout jumps",
  },
];

const About = () => {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-28 py-24 -mt-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top label */}
        <div className="label mb-8">React Performance — 2025</div>

        {/* Heading */}
        <h1 className="page-title text-4xl md:text-6xl text-white/90 mb-2">
          About This
        </h1>
        <h1 className="page-title text-4xl md:text-6xl italic text-white/35 mb-10">
          Project
        </h1>

        {/* Intro */}
        <p
          className="text-white/50 leading-[1.85] text-sm md:text-[0.95rem] max-w-xl"
          style={{ fontWeight: 300 }}
        >
          This project explores real-world{" "}
          <span
            className="text-white/80"
            style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
          >
            React performance optimization
          </span>{" "}
          techniques — understanding how modern applications can be made faster,
          more efficient, and truly scalable.
        </p>

        <div className="divider" />

        {/* What I'm Practicing */}
        <section>
          <div className="flex items-center gap-2 mb-1">
            <div className="ping-dot">
              <span className="ping-outer"></span>
              <span className="ping-inner"></span>
            </div>
            <div className="label">Currently Practicing</div>
          </div>

          <h2 className="section-heading text-xl md:text-2xl text-white/85 mb-8 mt-3">
            What I'm <span className="italic text-white/40">Practicing</span>
          </h2>

          <ul className="space-y-5">
            {skills.map(([title, desc], i) => (
              <li key={i} className="skill-item flex gap-4">
                <span className="side-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  <span
                    className="skill-label text-white/80 transition-colors duration-300"
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                    }}
                  >
                    {title}
                  </span>{" "}
                  — {desc}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="divider" />

        {/* Core Web Vitals */}
        <section>
          <div className="flex items-center gap-2 mb-1">
            <div className="ping-dot">
              <span className="ping-outer"></span>
              <span className="ping-inner"></span>
            </div>
            <div className="label">Metrics</div>
          </div>

          <h2 className="section-heading text-xl md:text-2xl text-white/85 mb-8 mt-3">
            Core Web <span className="italic text-white/40">Vitals</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden">
            {vitals.map(({ abbr, full, desc }) => (
              <div
                key={abbr}
                className="bg-[#0f0f0f] p-6 flex flex-col gap-2 group hover:bg-[#141414] transition-colors duration-300"
              >
                <div
                  className="text-3xl text-white/15 group-hover:text-white/25 transition-colors duration-300"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  {abbr}
                </div>
                <div>
                  <div
                    className="text-white/70 text-xs mb-1"
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontStyle: "italic",
                      fontWeight: 300,
                    }}
                  >
                    {full}
                  </div>
                  <p
                    className="text-white/35 text-xs leading-relaxed"
                    style={{ fontWeight: 300 }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Preload & Prefetch */}
        <section>
          <div className="flex items-center gap-2 mb-1">
            <div className="ping-dot">
              <span className="ping-outer"></span>
              <span className="ping-inner"></span>
            </div>
            <div className="label">Resource Hints</div>
          </div>

          <h2 className="section-heading text-xl md:text-2xl text-white/85 mb-8 mt-3">
            Preload & Prefetch{" "}
            <span className="italic text-white/40">Practice</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-sm overflow-hidden mb-8">
            {/* Preload */}
            <div className="bg-[#0f0f0f] p-6 flex flex-col gap-4 group hover:bg-[#141414] transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div
                  className="text-2xl text-white/15 group-hover:text-white/25 transition-colors duration-300"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Preload
                </div>
                <span
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    fontWeight: 400,
                    marginTop: "4px",
                  }}
                >
                  High Priority
                </span>
              </div>
              <p
                className="text-white/50 text-xs leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Tells the browser to fetch a resource{" "}
                <span
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  immediately
                </span>{" "}
                — before it's discovered in the HTML. Use for critical assets on
                the current page: fonts, hero images, above-the-fold CSS.
              </p>
              <div
                className="mt-auto text-white/20 text-xs leading-relaxed"
                style={{
                  fontFamily: "monospace",
                  background: "rgba(255,255,255,0.03)",
                  padding: "10px 12px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {'<link rel="preload" href="/font.woff2"'}
                <br />
                {'      as="font" crossorigin />'}
              </div>
            </div>

            {/* Prefetch */}
            <div className="bg-[#0f0f0f] p-6 flex flex-col gap-4 group hover:bg-[#141414] transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div
                  className="text-2xl text-white/15 group-hover:text-white/25 transition-colors duration-300"
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  Prefetch
                </div>
                <span
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    fontWeight: 400,
                    marginTop: "4px",
                  }}
                >
                  Low Priority
                </span>
              </div>
              <p
                className="text-white/50 text-xs leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Fetches a resource during browser{" "}
                <span
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  idle time
                </span>{" "}
                for use on a future page. Use for lazy-loaded routes — the chunk
                is cached before the user even clicks the link.
              </p>
              <div
                className="mt-auto text-white/20 text-xs leading-relaxed"
                style={{
                  fontFamily: "monospace",
                  background: "rgba(255,255,255,0.03)",
                  padding: "10px 12px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {'<link rel="prefetch" href="/about.chunk.js"'}
                <br />
                {'      as="script" />'}
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {differences.map(([label, left, right], i) => (
              <div
                key={i}
                className="grid grid-cols-3 transition-colors duration-200"
                style={{
                  borderBottom:
                    i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  background:
                    i === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                }}
              >
                <div
                  className="px-4 py-3"
                  style={{
                    fontFamily:
                      i === 0 ? "DM Sans, sans-serif" : "DM Sans, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    fontWeight: 400,
                  }}
                >
                  {label}
                </div>
                <div
                  className="px-4 py-3 text-xs"
                  style={{
                    color:
                      i === 0
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(255,255,255,0.4)",
                    fontWeight: i === 0 ? 400 : 300,
                    fontFamily:
                      i === 0 ? "Fraunces, serif" : "DM Sans, sans-serif",
                    fontStyle: i === 0 ? "italic" : "normal",
                    fontSize: i === 0 ? "0.85rem" : "0.75rem",
                  }}
                >
                  {left}
                </div>
                <div
                  className="px-4 py-3 text-xs"
                  style={{
                    color:
                      i === 0
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(255,255,255,0.4)",
                    fontWeight: i === 0 ? 400 : 300,
                    fontFamily:
                      i === 0 ? "Fraunces, serif" : "DM Sans, sans-serif",
                    fontStyle: i === 0 ? "italic" : "normal",
                    fontSize: i === 0 ? "0.85rem" : "0.75rem",
                  }}
                >
                  {right}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Why it Matters */}
        <section>
          <div className="flex items-center gap-2 mb-1">
            <div className="ping-dot">
              <span className="ping-outer"></span>
              <span className="ping-inner"></span>
            </div>
            <div className="label">Context</div>
          </div>

          <h2 className="section-heading text-xl md:text-2xl text-white/85 mb-6 mt-3">
            Why it <span className="italic text-white/40">Matters</span>
          </h2>

          <p
            className="text-white/50 text-sm md:text-[0.95rem] leading-[1.9]"
            style={{ fontWeight: 300 }}
          >
            Performance plays a critical role in user experience. Faster apps
            lead to better engagement, improved accessibility, and higher
            scalability. This project serves as a hands-on playground to apply
            best practices and measure{" "}
            <span
              className="text-white/75"
              style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
            >
              real improvements.
            </span>
          </p>
        </section>

        <div className="divider" />

        {/* Footer label */}
        <div className="label text-right">End of Overview</div>
      </div>
    </div>
  );
};

export default About;
