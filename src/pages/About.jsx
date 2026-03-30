import "../styles/About.css";

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
      className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-28 py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Top label */}
        <div className="label mb-8">
          React Performance — {new Date().getFullYear()}
        </div>

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
                className="bg-[#0f0f0f] p-6 flex flex-col gap-3 group hover:bg-[#141414] transition-colors duration-300"
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
