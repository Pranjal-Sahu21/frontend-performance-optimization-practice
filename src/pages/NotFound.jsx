import "../styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white flex items-center -mt-20 px-6 md:px-16 lg:px-28"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ghost 404 background number */}
      <span className="ghost-number">404</span>

      <div className="relative z-10 max-w-3xl">
        {/* Top label */}
        <div className="label mb-8 flex items-center gap-2">
          <span
            className="inline-block w-4 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
          Error — Page Not Found
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
          className="text-4xl md:text-6xl text-white/90 mb-2"
        >
          Lost in
        </h1>
        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
          }}
          className="text-4xl md:text-6xl text-white/35 mb-10"
        >
          the void.
        </h1>

        {/* Description */}
        <p
          className="text-white/50 text-sm leading-[1.85] max-w-xs mb-10"
          style={{ fontWeight: 300 }}
        >
          The page you're looking for doesn't exist or may have been moved. Head
          back and try again.
        </p>

        {/* CTA */}
        <Link to="/" className="back-btn">
          Back to Home
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 9L9 1M9 1H3M9 1V7"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
