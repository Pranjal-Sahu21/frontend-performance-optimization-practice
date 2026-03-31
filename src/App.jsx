import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Home is not lazy loaded
import Home from "./pages/Home";

// Lazy imports for all other pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Store = lazy(() => import("./pages/Store"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Prefetch functions 
const prefetchAbout = () => import("./pages/About");
const prefetchContact = () => import("./pages/Contact");
const prefetchStore = () => import("./pages/Store");
const prefetchNotFound = () => import("./pages/NotFound");

// Skeleton fallback 
const PageLoader = () => (
  <div
    className="min-h-screen px-6 md:px-16 lg:px-28 py-24"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    <div className="max-w-3xl mx-auto">
      <div className="skel h-2 w-28 mb-10" />
      <div className="skel h-10 md:h-14 w-48 mb-3" />
      <div className="skel h-10 md:h-14 w-64 mb-12" />
      <div className="flex flex-col gap-2 max-w-sm">
        <div className="skel h-3 w-full" />
        <div className="skel h-3 w-5/6" />
        <div className="skel h-3 w-4/6" />
      </div>
      <div
        className="w-full h-px my-12"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="skel h-3 w-20" />
            <div className="skel h-3 w-full" />
            <div className="skel h-3 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// App
const App = () => {
  useEffect(() => {
    const prefetchAll = () => {
      prefetchAbout();
      prefetchContact();
      prefetchStore();
      prefetchNotFound();
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetchAll);
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for Safari which doesn't support requestIdleCallback
      const id = setTimeout(prefetchAll, 200);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Routes>
        {/* Home — not lazy loaded */}
        <Route path="/" element={<Home />} />

        {/* Each lazy page gets its own Suspense boundary */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/store"
          element={
            <Suspense fallback={<PageLoader />}>
              <Store />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
