import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import PageTransition from "./components/PageTransition";

// Lazy load: ogni pagina viene caricata solo quando navighi verso di essa
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  const location = useLocation();

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-1 mx-auto max-w-[640px] px-6 py-12">
        <Suspense fallback={<div className="h-6 w-32 animate-pulse rounded bg-border" />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

export default App;
