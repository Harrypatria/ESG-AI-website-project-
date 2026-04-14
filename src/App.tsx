import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
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
import { InsightDetail } from "./pages/InsightDetail";
import { Chatbot } from "./components/Chatbot";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function MainContent() {
  return (
    <PageWrapper>
      <Hero />
      <AgenticAI />
      <ClimateImpact />
      <Future />
      <Research />
      <RecentInsights />
      <Experts />
      <IndustryExcellence />
    </PageWrapper>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !window.requestAnimationFrame) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainContent />} />
        <Route path="/demos" element={<PageWrapper><Demos /></PageWrapper>} />
        <Route path="/insights/:id" element={<PageWrapper><InsightDetail /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white text-brand-text">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
