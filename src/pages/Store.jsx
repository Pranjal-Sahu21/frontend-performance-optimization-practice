import { useState } from "react";
import "../styles/Store.css";

// Products
const products = [
  {
    id: 1,
    name: "Velocity Runner",
    category: "Footwear",
    price: "$128",
    tag: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 2,
    name: "Minimal Tote",
    category: "Bags",
    price: "$74",
    tag: null,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  },
  {
    id: 3,
    name: "Arc Jacket",
    category: "Outerwear",
    price: "$210",
    tag: "Limited",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    id: 4,
    name: "Studio Watch",
    category: "Accessories",
    price: "$340",
    tag: null,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 5,
    name: "Form Hoodie",
    category: "Apparel",
    price: "$96",
    tag: "New",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
  },
  {
    id: 6,
    name: "Drift Sneaker",
    category: "Footwear",
    price: "$152",
    tag: null,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
  },
  {
    id: 7,
    name: "Onyx Sunglasses",
    category: "Accessories",
    price: "$88",
    tag: "Limited",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
  },
  {
    id: 8,
    name: "Linen Overshirt",
    category: "Apparel",
    price: "$112",
    tag: null,
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
  },
];

const categories = [
  "All",
  "Footwear",
  "Apparel",
  "Accessories",
  "Bags",
  "Outerwear",
];

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      className="min-h-screen -mt-20 bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-28 py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top label */}
        <div className="label mb-8">
          Collection — {new Date().getFullYear()}
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
          The
        </h1>
        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
          }}
          className="text-4xl md:text-6xl text-white/40 mb-10"
        >
          Store
        </h1>

        {/* Intro */}
        <p
          className="text-white/55 text-sm leading-[1.85] max-w-sm"
          style={{ fontWeight: 300 }}
        >
          A curated selection of products — each image below is{" "}
          <span
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            lazy loaded
          </span>{" "}
          to demonstrate optimized load performance.
        </p>

        <div className="divider" />

        {/* Filter row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-1 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="label transition-all duration-200"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.08)" : "none",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid transparent",
                    borderRadius: "3px",
                    cursor: "pointer",
                    color: isActive
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(255,255,255,0.35)",
                    padding: "5px 10px",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div
            className="label hidden sm:block"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
          </div>
        </div>

        {/* Product grid or empty state */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filtered.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <div className="img-skeleton" />
                  <img
                    loading="lazy"
                    src={product.img}
                    alt={product.name}
                    onLoad={(e) => {
                      e.target.setAttribute("data-loaded", "true");
                      const skeleton = e.target.previousSibling;
                      if (skeleton) skeleton.style.display = "none";
                    }}
                    style={{ position: "relative", zIndex: 1 }}
                  />
                  {product.tag && (
                    <span className="product-tag">{product.tag}</span>
                  )}
                </div>
                <div className="product-info">
                  <div className="product-meta">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                  </div>
                  <span className="product-category">{product.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center gap-3">
            <p
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.25)",
                fontSize: "1.5rem",
              }}
            >
              Nothing here yet.
            </p>
            <p className="label" style={{ color: "rgba(255,255,255,0.2)" }}>
              No products in this category
            </p>
          </div>
        )}

        <div className="divider" />

        {/* Footer label */}
        <div className="label text-right">End of Collection</div>
      </div>
    </div>
  );
};

export default Store;
