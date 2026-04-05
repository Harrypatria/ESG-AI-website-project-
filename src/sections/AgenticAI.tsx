import { motion } from "motion/react";
import { Brain, Zap, Shield, Target } from "lucide-react";

const features = [
  {
    title: "Autonomous reasoning",
    description: "Beyond simple automation, our agents reason through complex ESG datasets to identify hidden decarbonisation opportunities.",
    icon: Brain,
  },
  {
    title: "Real-time adaptation",
    description: "Agents that evolve with your operational data, ensuring that climate strategies remain effective in volatile markets.",
    icon: Zap,
  },
  {
    title: "Scholarly rigour",
    description: "Every algorithm is backed by peer-reviewed research and practical industrial experience in energy and mining.",
    icon: Shield,
  },
  {
    title: "Impact driven",
    description: "We don't just build AI; we build intelligence for a better planet, focusing on measurable carbon reduction.",
    icon: Target,
  }
];

export function AgenticAI() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white text-brand-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">The paradigm shift</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] tracking-tighter">
              Why Agentic AI is the <br />
              <span className="gradient-text">Ultimate game changer</span>
            </h2>
            <p className="text-[10px] text-brand-muted leading-relaxed font-normal tracking-[0.2em]">
              Traditional AI reacts; Agentic AI acts. We are moving beyond passive interfaces 
              to autonomous systems that can manage entire procurement cycles, 
              optimise mining operations, and lead global ESG strategies with 
              unprecedented precision.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary group-hover:text-brand-secondary transition-all shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium font-display mt-6 tracking-tighter">{feature.title}</h3>
                  <p className="text-brand-muted text-[10px] font-normal tracking-widest leading-relaxed mt-4">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl shadow-brand-primary/10">
            <img 
              src="https://picsum.photos/seed/ai-tech-modern/1200/1200" 
              alt="Agentic AI visualization" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent flex flex-col justify-end p-12 backdrop-blur-[2px]">
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <Brain className="w-40 h-40 text-brand-primary" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-brand-primary font-medium text-6xl font-display tracking-tighter">98%</span>
                  <span className="text-brand-muted text-[10px] font-medium tracking-widest uppercase">Efficiency</span>
                </div>
                <p className="text-brand-text text-lg font-normal leading-tight">Gain in autonomous ESG reporting cycles across global operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
