import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Hero } from "./sections/Hero";
import { AgenticAI } from "./sections/AgenticAI";
import { ClimateImpact } from "./sections/ClimateImpact";
import { Experts } from "./sections/Experts";
import { IndustryExcellence } from "./sections/IndustryExcellence";
import { Research } from "./sections/Research";
import { RecentInsights } from "./sections/RecentInsights";
import { Future } from "./sections/Future";
import { Footer } from "./sections/Footer";
import { Navbar } from "./components/Navbar";
import { Demos } from "./pages/Demos";
import { Chatbot } from "./components/Chatbot";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainContent() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.requestAnimationFrame) {
      console.warn('Smooth scrolling (Lenis) is not supported in this environment.');
      return;
    }

    let lenis: Lenis | null = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    } catch (error) {
      console.error('Failed to initialize Lenis:', error);
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <AgenticAI />
      <ClimateImpact />
      <Future />
      <Research />
      <RecentInsights />
      <Experts />
      <IndustryExcellence />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white text-brand-text">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/demos" element={<Demos />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
