import { motion } from "motion/react";
import { Microscope, BrainCircuit, LineChart, ShieldCheck, Zap, Globe, ArrowRight } from "lucide-react";

const focusAreas = [
  {
    title: "agentic ai & autonomous reasoning",
    description: "developing agents that can reason through complex industrial datasets and make autonomous decisions to optimize operations.",
    icon: BrainCircuit,
  },
  {
    title: "esg & sustainability analytics",
    description: "leveraging machine learning to automate esg data collection and provide real-time carbon intensity insights.",
    icon: Globe,
  },
  {
    title: "predictive maintenance & health monitoring",
    description: "advanced deep learning models for forecasting equipment failures and optimizing maintenance cycles in heavy industry.",
    icon: LineChart,
  },
  {
    title: "secure ai & data privacy",
    description: "ensuring industrial data remains private and secure while leveraging the power of generative ai models.",
    icon: ShieldCheck,
  },
  {
    title: "energy optimization",
    description: "ai-driven strategies for decarbonisation and energy efficiency in mining and engineering services.",
    icon: Zap,
  },
  {
    title: "strategic ai transformation",
    description: "frameworks for enterprise-wide ai adoption, bridging the gap between research and industrial excellence.",
    icon: Microscope,
  }
];

export function Research() {
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">Scholarly rigour</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
              Research & <br /> <span className="gradient-text">Focus areas</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed font-normal">
              Our research is grounded in the intersection of advanced computational 
              intelligence and global sustainability imperatives.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-6 rounded-3xl bg-white border border-brand-border shadow-sm flex flex-col items-center justify-center text-center space-y-2 group hover:shadow-md transition-all duration-500">
              <span className="text-4xl font-display font-medium text-brand-primary tracking-tighter group-hover:scale-110 transition-transform">40+</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-brand-muted uppercase">Publications</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] hover:shadow-[16px_16px_32px_#d1d9e6,-16px_-16px_32px_#ffffff] transition-all group flex flex-col"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] group-hover:text-brand-secondary transition-all duration-500">
                <area.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-4 text-brand-text tracking-tighter">{area.title}</h3>
              <p className="text-brand-muted leading-relaxed mb-10 flex-grow text-[10px] font-normal tracking-widest">{area.description}</p>
              <button className="flex items-center gap-2 text-brand-primary font-medium text-[10px] tracking-[0.3em] group/btn uppercase">
                Learn more 
                <div className="w-6 h-6 rounded-lg bg-white border border-brand-border flex items-center justify-center group-hover/btn:border-brand-primary transition-all">
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
