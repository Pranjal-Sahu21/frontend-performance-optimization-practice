import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-dvh flex items-center bg-black text-white px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden -mt-20">
      {/* Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 100%, #000 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 100%, #000 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-24 md:flex-row items-center gap-12 w-full">
        {/* LEFT */}
        <div className="max-md:text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl leading-tight max-w-xl">
            React Performance{" "}
            <span className="italic text-white/70">Optimization</span> Practice
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/50 mt-6 max-w-lg">
            Images in this section are lazy loaded to
            improve initial load performance.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6 max-md:justify-center">
            <Link
              to="/store"
              className="px-4 py-2 text-sm rounded-md bg-white text-black hover:bg-gray-200 transition"
            >
              View Store
            </Link>

            <Link
              to="/about"
              className="px-4 py-2 text-sm rounded-md border border-white/20 hover:bg-white/10 transition"
            >
              About
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:max-w-xs lg:max-w-lg">
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt=""
            className="w-full h-auto opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
