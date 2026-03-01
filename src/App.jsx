import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-1 mx-auto max-w-[640px] px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
