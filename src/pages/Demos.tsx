import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ExternalLink, Shield, Key, User, Activity, BrainCircuit, Leaf, ShoppingCart, Sparkles, ArrowRight, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const demos = [
  {
    id: "engine-health-predictor",
    title: "Engine health predictor",
    category: "Predictive maintenance",
    description: "Advanced deep learning model forecasting mechanical failures in heavy mining equipment with 94% accuracy.",
    icon: Activity,
    credentials: {
      username: "masterclass",
      password: "agentic26"
    },
    url: "https://patriaco.co.uk/demos#engine-health-predictor",
    status: "Live"
  },
  {
    id: "ai-agent-trial",
    title: "AI agent trial",
    category: "Autonomous systems",
    description: "Experience the power of autonomous reasoning agents in a simulated industrial procurement environment. This trial allows you to interact with our proprietary reasoning engine.",
    icon: BrainCircuit,
    credentials: {
      username: "masterclass",
      password: "agentic26"
    },
    url: "https://patriaco.co.uk/demos#engine-health-predictor",
    status: "Live",
    featured: true
  },
  {
    id: "esg-reporting-agent",
    title: "ESG reporting agent",
    category: "Sustainability",
    description: "Autonomous data collection and verification agent for global ESG compliance frameworks.",
    icon: Leaf,
    status: "Beta"
  },
  {
    id: "procurement-optimizer",
    title: "Procurement optimizer",
    category: "Supply chain",
    description: "Agentic system for real-time supply chain risk assessment and autonomous procurement.",
    icon: ShoppingCart,
    status: "Coming soon"
  }
];

export function Demos() {
  const [selectedDemo, setSelectedDemo] = useState<typeof demos[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="space-y-8 max-w-3xl">
            <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">Interactive experience</span>
            <h1 className="text-6xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
              Agentic AI <br /> <span className="gradient-text">Live demos</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed font-normal">
              Experience the future of industrial intelligence. Our demos showcase 
              the practical application of autonomous agents in heavy industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {demos.map((demo, index) => (
              <motion.div 
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -16, 
                  scale: 1.03,
                  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
                }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-12 rounded-[4rem] transition-all group flex flex-col relative overflow-hidden border border-transparent",
                  demo.featured 
                    ? "elegant-card lg:col-span-2 min-h-[600px] hover:shadow-[0_50px_100px_rgba(16,185,129,0.15)] hover:border-brand-primary/20" 
                    : "neumorphic-card hover:shadow-[24px_24px_48px_#d1d9e6,-24px_-24px_48px_#ffffff] hover:border-brand-primary/10"
                )}
              >
                {demo.featured && (
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-brand-primary/20 to-transparent" />
                    <BrainCircuit className="w-full h-full scale-150 translate-x-1/4 translate-y-1/4" />
                  </div>
                )}

                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className={cn(
                    "w-24 h-24 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:rotate-6",
                    demo.featured ? "bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] text-brand-primary" : "bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-brand-primary"
                  )}>
                    <demo.icon className="w-12 h-12" />
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <span className={cn(
                      "px-6 py-2 rounded-full text-[10px] font-medium tracking-[0.2em] shadow-lg uppercase",
                      demo.featured 
                        ? "bg-brand-primary text-white" 
                        : demo.status === 'Live' ? 'bg-brand-primary text-white' : 'bg-brand-muted/10 text-brand-muted'
                    )}>
                      {demo.status}
                    </span>
                    {demo.featured && (
                      <span className="flex items-center gap-2 text-[10px] font-medium tracking-widest text-brand-primary animate-pulse uppercase">
                        <Sparkles className="w-3 h-3" /> Featured experience
                      </span>
                    )}
                  </div>
                </div>
                
                <div className={cn(
                  "space-y-6 flex-grow relative z-10",
                  demo.featured ? "max-w-2xl" : ""
                )}>
                  <span className="font-medium text-[10px] tracking-[0.3em] text-brand-primary uppercase">{demo.category}</span>
                  <h2 className={cn(
                    "font-display font-medium leading-tight text-brand-text",
                    demo.featured ? "text-6xl md:text-7xl tracking-tighter" : "text-4xl md:text-5xl"
                  )}>{demo.title}</h2>
                  <p className={cn(
                    "leading-relaxed text-brand-muted",
                    demo.featured ? "text-xl font-normal" : "text-lg font-normal"
                  )}>{demo.description}</p>
                </div>
                
                {demo.credentials && (
                  <div className={cn(
                    "mt-12 p-10 rounded-[3rem] space-y-6 relative z-10 backdrop-blur-md",
                    demo.featured ? "bg-white/40 border border-white/20 shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]" : "bg-white border border-brand-border"
                  )}>
                    <div className={cn(
                      "flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] uppercase",
                      demo.featured ? "text-brand-primary" : "text-brand-muted"
                    )}>
                      <Key className="w-4 h-4" /> Access credentials
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <span className={cn(
                          "text-[10px] tracking-widest font-medium text-brand-muted uppercase"
                        )}>Username</span>
                        <div className={cn(
                          "flex items-center gap-3 font-medium text-2xl text-brand-text"
                        )}>
                          <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-brand-primary" />
                          </div>
                          {demo.credentials.username}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className={cn(
                          "text-[10px] tracking-widest font-medium text-brand-muted uppercase"
                        )}>Password</span>
                        <div className={cn(
                          "flex items-center gap-3 font-medium text-2xl text-brand-text"
                        )}>
                          <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-brand-primary" />
                          </div>
                          {demo.credentials.password}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-12 flex flex-col sm:flex-row gap-6 relative z-10">
                  {demo.url ? (
                    demo.id === 'ai-agent-trial' ? (
                      <button 
                        onClick={() => setSelectedDemo(demo)}
                        className={cn(
                          "flex-grow py-8 rounded-3xl font-medium flex items-center justify-center gap-4 transition-all border border-brand-border hover:border-brand-primary group/btn uppercase",
                          demo.featured 
                            ? "bg-brand-primary text-white border-none" 
                            : "bg-white text-brand-text"
                        )}
                      >
                        <span className="text-[10px] tracking-[0.3em]">Launch demo</span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    ) : (
                      <a 
                        href={demo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                          "flex-grow py-8 rounded-3xl font-medium flex items-center justify-center gap-4 transition-all border border-brand-border hover:border-brand-primary group/btn uppercase",
                          demo.featured 
                            ? "bg-brand-primary text-white border-none" 
                            : "bg-white text-brand-text"
                        )}
                      >
                        <span className="text-[10px] tracking-[0.3em]">Launch demo</span>
                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                      </a>
                    )
                  ) : (
                    <button className="flex-grow py-8 bg-brand-surface text-brand-muted rounded-3xl font-medium cursor-not-allowed text-[10px] tracking-[0.3em] uppercase border border-brand-border">
                      Coming soon
                    </button>
                  )}
                  {demo.url && (
                    <a 
                      href={demo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full sm:w-24 h-24 rounded-3xl flex items-center justify-center transition-all shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] border border-white/20",
                        demo.featured 
                          ? "bg-white text-brand-text hover:text-brand-primary" 
                          : "bg-white text-brand-text hover:text-brand-primary"
                      )}
                    >
                      <ExternalLink className="w-10 h-10" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedDemo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDemo(null)}
              className="absolute inset-0 bg-brand-text/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="p-12 space-y-10">
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <selectedDemo.icon className="w-10 h-10" />
                  </div>
                  <button 
                    onClick={() => setSelectedDemo(null)}
                    className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand-muted hover:text-brand-text transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-brand-primary uppercase">{selectedDemo.category}</span>
                  <h2 className="text-4xl font-display font-medium tracking-tighter text-brand-text">{selectedDemo.title}</h2>
                  <p className="text-brand-muted leading-relaxed text-lg">{selectedDemo.description}</p>
                </div>

                {selectedDemo.credentials && (
                  <div className="p-8 rounded-3xl bg-brand-surface border border-brand-border space-y-6">
                    <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-brand-muted uppercase">
                      <Key className="w-4 h-4" /> Access credentials
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-widest font-medium text-brand-muted uppercase">Username</span>
                        <div className="flex items-center gap-3 font-medium text-xl text-brand-text">
                          <User className="w-4 h-4 text-brand-primary" />
                          {selectedDemo.credentials.username}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-widest font-medium text-brand-muted uppercase">Password</span>
                        <div className="flex items-center gap-3 font-medium text-xl text-brand-text">
                          <Shield className="w-4 h-4 text-brand-primary" />
                          {selectedDemo.credentials.password}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <a 
                  href={selectedDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-6 bg-brand-primary text-white rounded-2xl font-medium flex items-center justify-center gap-4 hover:bg-brand-text transition-all uppercase text-[10px] tracking-[0.3em]"
                >
                  Launch demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
