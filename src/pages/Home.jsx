import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="relative min-h-dvh flex items-center bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-28 xl:px-32 overflow-hidden -mt-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Bottom glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255,255,255,0.09), transparent 65%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 100%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 100%, #000 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-24 md:flex-row items-center gap-16 md:gap-8 w-full">
        {/* LEFT */}
        <div className="flex-1 max-md:text-center">
          {/* Top label */}
          <div className="label mb-8 flex items-center gap-2 max-md:justify-center">
            <span
              className="inline-block w-4 h-px"
              style={{ background: "rgba(255,255,255,0.25)" }}
            />
            React Performance — {new Date().getFullYear()}
          </div>

          {/* Heading */}
          <h1 className="hero-title text-4xl md:text-[3.5rem] lg:text-[4rem] text-white/90 mb-2">
            React Performance
          </h1>
          <h1 className="hero-title text-4xl md:text-[3.5rem] lg:text-[4rem] italic text-white/30 mb-3">
            Optimization
          </h1>
          <h1 className="hero-title text-4xl md:text-[3.5rem] lg:text-[4rem] text-white/90">
            Practice
          </h1>

          {/* Description */}
          <p
            className="text-sm md:text-[0.9rem] text-white/45 mt-8 max-w-sm leading-[1.85]"
            style={{ fontWeight: 300 }}
          >
            Images in this section are{" "}
            <span
              className="text-white/70"
              style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
            >
              lazy loaded
            </span>{" "}
            to improve initial load performance.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-8 max-md:justify-center">
            <Link to="/store" className="btn-primary">
              View Store
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 9L9 1M9 1H3M9 1V7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

            <Link to="/about" className="btn-secondary">
              About
            </Link>
          </div>

          {/* Bottom footnote */}
          <div className="label mt-10 max-md:justify-center flex gap-4">
            <span>Lazy Loading</span>
            <span className="opacity-40">·</span>
            <span>Code Splitting</span>
            <span className="opacity-40">·</span>
            <span>Memoization</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative w-full md:max-w-xs lg:max-w-md shrink-0"
          style={{ aspectRatio: "3 / 4" }}
        >
          {/* Skeleton */}
          {!imgLoaded && (
            <div
              className="hero-skeleton absolute inset-0 rounded-sm md:mt-24"
              style={{ zIndex: 2 }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 14,
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.18)",
                  fontWeight: 400,
                }}
              >
                Loading image…
              </div>
            </div>
          )}

          {/* Border frame */}
          <div
            className="absolute -inset-px rounded-sm pointer-events-none"
            style={{ zIndex: 3 }}
          />

          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt=""
            className="hero-img absolute inset-0 w-full object-cover md:mt-24"
            style={{
              opacity: imgLoaded ? 0.8 : 0,
              filter: "brightness(0.95)",
              transition: "opacity 0.5s ease",
              zIndex: 1,
            }}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
