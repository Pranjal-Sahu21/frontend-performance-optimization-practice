import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Store = lazy(() => import("./pages/Store"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

const PageLoader = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    <div className="flex flex-col items-center gap-6">
      <p
        style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(255,255,255,0.25)",
          fontSize: "1rem",
        }}
      >
        Loading
      </p>
      <div className="flex items-center gap-1.5">
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
      </div>
    </div>
  </div>
);

export default App;
