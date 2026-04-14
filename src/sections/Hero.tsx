import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Cpu, Zap, Brain, Shield, Sparkles } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const agentRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<HTMLDivElement>(null);
  const charactersRef = useRef<HTMLDivElement>(null);
  const neuralRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!titleRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Neural Network Animation
      const dots = neuralRef.current?.querySelectorAll("circle");
      const lines = neuralRef.current?.querySelectorAll("line");
      
      if (dots && lines) {
        gsap.to(dots, {
          attr: { cx: "random(0, 100)%", cy: "random(0, 100)%" },
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.1,
        });

        gsap.to(lines, {
          opacity: "random(0.1, 0.4)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          stagger: 0.2,
        });
      }

      // Scatter and Reassemble Title Animation
      const titleChars = titleRef.current?.querySelectorAll("span.char");
      if (titleChars) {
        gsap.from(titleChars, {
          x: () => (Math.random() - 0.5) * window.innerWidth * 1.5,
          y: () => (Math.random() - 0.5) * window.innerHeight * 1.5,
          z: () => Math.random() * 1000 - 500,
          opacity: 0,
          rotation: () => Math.random() * 720 - 360,
          rotationX: () => Math.random() * 720 - 360,
          rotationY: () => Math.random() * 720 - 360,
          duration: 3.5,
          ease: "power4.out",
          stagger: {
            amount: 1.2,
            from: "random"
          },
        });
      }

      // Floating Icons Animation
      const icons = floatingIconsRef.current?.children;
      if (icons) {
        gsap.to(icons, {
          y: "random(-40, 40)",
          x: "random(-40, 40)",
          rotation: "random(-15, 15)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 2,
            from: "random",
          },
        });
      }

      // Character (Agent) Animations
      const characters = charactersRef.current?.children;
      if (characters) {
        gsap.to(characters, {
          scale: "random(0.8, 1.2)",
          opacity: "random(0.4, 0.8)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.5,
        });
      }

      // Responsive Parallax Effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);
        
        // Scale parallax intensity based on screen width
        const intensity = window.innerWidth < 768 ? 0.3 : 1;

        gsap.to(agentRef.current, {
          x: xPos * 100 * intensity,
          y: yPos * 100 * intensity,
          duration: 2,
          ease: "power2.out",
        });

        gsap.to(".hero-subtitle", {
          x: xPos * 30 * intensity,
          y: yPos * 30 * intensity,
          duration: 1.5,
          ease: "power2.out",
        });

        gsap.to(charactersRef.current, {
          x: xPos * -150 * intensity,
          y: yPos * -150 * intensity,
          duration: 2.5,
          ease: "power2.out",
        });

        gsap.to(floatingIconsRef.current, {
          x: xPos * 50 * intensity,
          y: yPos * 50 * intensity,
          duration: 1.5,
          ease: "power2.out",
        });
        
        gsap.to(neuralRef.current, {
          x: xPos * 30 * intensity,
          y: yPos * 30 * intensity,
          duration: 3,
          ease: "power1.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block origin-bottom">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      {/* Neural Network Background */}
      <svg ref={neuralRef} className="absolute inset-0 w-full h-full -z-10 opacity-[0.15] pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {[...Array(20)].map((_, i) => (
          <circle key={`dot-${i}`} cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r="2" fill="#10b981" />
        ))}
        {[...Array(15)].map((_, i) => (
          <line key={`line-${i}`} x1={`${Math.random() * 100}%`} y1={`${Math.random() * 100}%`} x2={`${Math.random() * 100}%`} y2={`${Math.random() * 100}%`} stroke="#10b981" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Agentic AI Character Representations */}
      <div ref={charactersRef} className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-brand-primary/10 rounded-[2rem] blur-xl" />
        <div className="absolute top-[60%] right-[10%] w-48 h-48 bg-brand-secondary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-[10%] left-[20%] w-24 h-24 bg-brand-primary/5 rounded-full blur-lg" />
        
        {/* Abstract Agent Shapes */}
        <svg className="absolute top-[30%] left-[5%] w-40 h-40 text-brand-primary/10 animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="10 5" />
          <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-[20%] right-[5%] w-64 h-64 text-brand-secondary/10" viewBox="0 0 200 200">
          <rect x="50" y="50" width="100" height="100" rx="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {/* Floating Icons */}
      <div ref={floatingIconsRef} className="absolute inset-0 pointer-events-none -z-5">
        <div className="absolute top-[20%] left-[15%] text-brand-primary/20"><Cpu className="w-12 h-12" /></div>
        <div className="absolute top-[25%] right-[20%] text-brand-secondary/20"><Zap className="w-10 h-10" /></div>
        <div className="absolute bottom-[20%] left-[25%] text-brand-primary/20"><Brain className="w-16 h-16" /></div>
        <div className="absolute bottom-[30%] right-[15%] text-brand-secondary/20"><Shield className="w-8 h-8" /></div>
        <div className="absolute top-[40%] right-[10%] text-brand-primary/20"><Sparkles className="w-6 h-6" /></div>
      </div>
      
      <div className="max-w-6xl text-center space-y-12">
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-subtitle"
          >
            <span className="inline-block px-6 py-2.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-medium tracking-[0.3em] mb-10 border border-brand-primary/20 shadow-sm backdrop-blur-sm">
              Intelligence for a better planet
            </span>
          </motion.div>
          <h1 ref={titleRef} className="text-7xl md:text-[8rem] lg:text-[10rem] font-display font-medium leading-[0.8] tracking-tighter text-brand-text perspective-1000">
            {splitText("Architecting")}<br />
            <span className="gradient-text">
              {splitText("Agentic Future")}
            </span>
          </h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-brand-muted max-w-4xl mx-auto leading-relaxed font-medium tracking-widest text-[10px]"
        >
          Bridging scholarly rigour and industrial excellence to solve the planet's most complex climate and ESG challenges through autonomous intelligence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12"
        >
          <button className="group px-14 py-7 bg-white text-brand-text rounded-2xl font-medium flex items-center gap-4 hover:text-brand-primary transition-all shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] active:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] relative overflow-hidden">
            <span className="relative z-10 text-[10px] tracking-[0.3em]">Explore solutions</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
          </button>
          <button className="px-14 py-7 bg-white text-brand-muted rounded-2xl font-medium tracking-[0.3em] hover:text-brand-text transition-all shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-[10px]">
            Meet the scholars
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.4em] text-brand-muted font-medium">Scroll</span>
        <div className="w-0.5 h-20 bg-gradient-to-b from-brand-primary to-transparent rounded-full relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
