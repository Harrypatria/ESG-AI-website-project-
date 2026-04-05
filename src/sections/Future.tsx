import { motion } from "motion/react";
import { Sparkles, Zap, Shield, Globe } from "lucide-react";

const futureInsights = [
  {
    title: "Autonomous decision making",
    description: "AI agents will move from assisting humans to autonomously managing complex industrial processes, reducing human error and increasing safety.",
    icon: Zap
  },
  {
    title: "Real-time ESG compliance",
    description: "Continuous monitoring and reporting of sustainability metrics will become the standard, driven by agents that verify data at the source.",
    icon: Shield
  },
  {
    title: "Global resource optimization",
    description: "Agentic systems will optimize the global supply chain for energy and minerals, ensuring minimal waste and maximum efficiency.",
    icon: Globe
  },
  {
    title: "Human-agent collaboration",
    description: "The future workforce will focus on high-level strategy while agents handle the data-intensive execution and operational reasoning.",
    icon: Sparkles
  }
];

export function Future() {
  return (
    <section id="future" className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />
            <div className="relative space-y-8">
              <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">The vision</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
                How Agentic AI <br /> <span className="gradient-text">Reshapes our future</span>
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed font-normal">
                We are entering an era where intelligence is not just a tool, but an autonomous partner 
                in solving the world's most complex industrial and environmental challenges.
              </p>
              
              <div className="p-10 rounded-[3rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-primary/10 transition-all duration-700" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-brand-text tracking-tighter">The 2030 outlook</h3>
                </div>
                <p className="text-brand-muted leading-relaxed italic text-lg font-normal relative z-10">
                  "By 2030, Agentic AI will be the backbone of industrial operations, 
                  autonomously managing 70% of routine decision-making in heavy industry."
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {futureInsights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary mb-6 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] group-hover:text-brand-secondary transition-all duration-500">
                  <insight.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-medium text-brand-text mb-3 tracking-tighter">{insight.title}</h4>
                <p className="text-brand-muted text-[10px] font-normal tracking-widest leading-relaxed uppercase">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
