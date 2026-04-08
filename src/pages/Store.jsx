import { useRef, useEffect, useState } from "react";
import "../styles/Store.css";

const PAGE_SIZE = 40;

const images = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/${i + 1}/600/600`,
}));

// Lazy Image Component
const LazyImage = ({ src }) => {
  const wrapRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="product-img-wrap"
      style={{ position: "relative" }}
    >
      {!loaded && <div className="img-skeleton" />}
      {visible && (
        <img
          src={src}
          alt=""
          onLoad={() => setLoaded(true)}
          style={{
            position: "relative",
            zIndex: 1,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </div>
  );
};

// Store component
const Store = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(images.length / PAGE_SIZE);

  const currentImages = images.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen -mt-20 bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-28 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="label mb-8">
          Collection — {new Date().getFullYear()}
        </div>

        {/* Titles */}
        <h1 className="page-title text-4xl md:text-6xl text-white/90 mb-2">
          The
        </h1>
        <h1 className="page-title text-4xl md:text-6xl text-white/40 mb-10 italic">
          Store
        </h1>

        {/* Intro */}
        <p
          className="text-white/50 leading-[1.85] text-sm md:text-[0.95rem] max-w-xl mb-12"
          style={{ fontWeight: 300, fontFamily: "'DM Sans', sans-serif" }}
        >
          Over 500 high-quality images, loaded using pagination, lazy loading
          and intersection observers for{" "}
          <span
            className="text-white/80"
            style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
          >
            optimal performance
          </span>{" "}
          and user experience.
        </p>

        {/* Info */}
        <p className="label text-white/55 text-sm max-w-sm -mb-16">
          Page {page} of {totalPages}
        </p>

        <div className="divider" />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {currentImages.map((image) => (
            <LazyImage key={image.id} src={image.src} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="divider" />

        <div className="flex items-center justify-between mt-10">
          {/* Left: Prev */}
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="label"
            style={{
              opacity: page === 1 ? 0.5 : 0.8,
              cursor: page === 1 ? "not-allowed" : "pointer",
              transition: "opacity 0.3s ease",
            }}
          >
            ← Previous
          </button>

          {/* Center: Page indicator */}
          <div className="label" style={{ letterSpacing: "0.25em" }}>
            {String(page).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </div>

          {/* Right: Next */}
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="label"
            style={{
              opacity: page === totalPages ? 0.5 : 0.8,
              cursor: page === totalPages ? "not-allowed" : "pointer",
              transition: "opacity 0.3s ease",
            }}
          >
            Next →
          </button>
        </div>

        <div className="divider" />
      </div>
    </div>
  );
};

export default Store;
