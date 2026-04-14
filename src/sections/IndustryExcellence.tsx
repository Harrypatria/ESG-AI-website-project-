import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, Pickaxe, Landmark, Cpu, Database, ShoppingCart, Leaf, ArrowRight } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const radarData = [
  { subject: 'Efficiency', A: 120, B: 110, fullMark: 150 },
  { subject: 'Safety', A: 98, B: 130, fullMark: 150 },
  { subject: 'ESG', A: 86, B: 130, fullMark: 150 },
  { subject: 'Cost', A: 99, B: 100, fullMark: 150 },
  { subject: 'Speed', A: 85, B: 90, fullMark: 150 },
  { subject: 'Reliability', A: 65, B: 85, fullMark: 150 },
];

const industries = [
  { name: "Energy & Natural Resources", icon: Building2 },
  { name: "Mining & Engineering Services", icon: Pickaxe },
  { name: "Government & Public Institutions", icon: Landmark }
];

const solutions = [
  {
    title: "ESG Agentic AI",
    description: "Autonomous agents that collect, verify, and report ESG data with 99.9% accuracy. Transforming commitments into action.",
    icon: Leaf,
  },
  {
    title: "AI procurement agent",
    description: "Intelligent agents that manage complex supply chains and procurement cycles autonomously.",
    icon: ShoppingCart,
  },
  {
    title: "AI chatbot database",
    description: "Natural language interfaces for complex industrial databases and documentation using deep learning.",
    icon: Database,
  },
  {
    title: "AI in coal mining",
    description: "Optimising extraction, safety, and decarbonisation using real-time autonomous reasoning.",
    icon: Cpu,
  }
];

const pathways = [
  { title: "Strategic consulting", description: "Defining the AI roadmap and ESG strategy for your enterprise." },
  { title: "Custom development", description: "Building agentic systems tailored to your specific operational needs." },
  { title: "Seamless deployment", description: "Integrating autonomous agents into your existing industrial workflows." },
  { title: "Continuous optimisation", description: "Ensuring your agents evolve with real-time data and market shifts." }
];

const portfolio = [
  { name: "Global Energy Corp", impact: "30% carbon reduction", category: "Energy" },
  { name: "Indo Mining Group", impact: "25% efficiency gain", category: "Mining" },
  { name: "Public Sector AI", impact: "95% data accuracy", category: "Government" },
  { name: "Supply Chain Ltd", impact: "40% cost savings", category: "Logistics" }
];

export function IndustryExcellence() {
  return (
    <section id="solutions" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto space-y-24">
        <div id="portfolio" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">Our portfolio</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">Measurable <span className="gradient-text">Impact</span></h2>
            </div>
            <p className="text-brand-muted max-w-md">Proven results across diverse industrial sectors through the deployment of agentic intelligence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2), 0 0 30px rgba(16, 185, 129, 0.15)"
                }}
                className="p-8 rounded-[2.5rem] bg-white border border-brand-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all group cursor-pointer"
              >
                <span className="text-[10px] font-medium tracking-[0.3em] text-brand-primary mb-2 block uppercase">{item.category}</span>
                <h3 className="text-xl font-display font-medium text-brand-text mb-4 tracking-tighter">{item.name}</h3>
                <div className="text-3xl font-display font-medium text-brand-text group-hover:text-brand-primary transition-colors tracking-tighter">{item.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">Industrial transformation</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
              Excellence in <br /> <span className="gradient-text">Heavy industry</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed font-normal">
              We don't just provide software; we provide a new operational reality. 
              Our agents are deployed in the most demanding environments on earth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2), 0 0 30px rgba(16, 185, 129, 0.15)"
                  }}
                  className="p-6 rounded-3xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] flex flex-col gap-6 group transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] group-hover:text-brand-secondary transition-all">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-brand-text text-[10px] tracking-widest uppercase">{industry.name}</span>
                  </div>
                  <Link 
                    to="/solutions/placeholder"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-[8px] font-medium tracking-[0.2em] text-brand-muted uppercase group/btn hover:text-brand-primary hover:border-brand-primary transition-all"
                  >
                    View details
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="p-12 rounded-[3.5rem] bg-white shadow-[16px_16px_32px_#d1d9e6,-16px_-16px_32px_#ffffff] flex flex-col space-y-10">
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-medium text-brand-text tracking-tighter">Operational transformation</h3>
              <p className="text-brand-muted text-[10px] font-medium tracking-[0.2em] uppercase">Traditional vs. AI-augmented performance metrics</p>
            </div>
            <div className="h-[400px] w-full p-6 bg-white rounded-[2.5rem] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 8, fontWeight: 'normal' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Traditional"
                    dataKey="A"
                    stroke="#94a3b8"
                    fill="#94a3b8"
                    fillOpacity={0.1}
                  />
                  <Radar
                    name="AI-augmented"
                    dataKey="B"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '16px', boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff' }}
                    itemStyle={{ fontSize: '10px', fontWeight: 'normal' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400 shadow-sm" />
                <span className="text-[10px] font-medium tracking-widest text-brand-muted uppercase">Traditional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-primary shadow-sm" />
                <span className="text-[10px] font-medium tracking-widest text-brand-muted uppercase">AI-augmented</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2), 0 0 30px rgba(16, 185, 129, 0.15)"
              }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] group-hover:text-brand-secondary transition-all duration-500">
                <solution.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-medium mb-4 text-brand-text tracking-tighter">{solution.title}</h3>
              <p className="text-brand-muted text-[10px] font-normal tracking-widest leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="p-16 rounded-[4rem] bg-white shadow-[20px_20px_40px_#d1d9e6,-20px_-20px_40px_#ffffff] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-12">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-6xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">Four pathways to <span className="text-brand-primary">adoption</span></h3>
              <p className="text-brand-muted text-[10px] font-medium tracking-[0.3em] max-w-2xl uppercase">A structured approach to integrating Agentic Intelligence into your enterprise.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pathways.map((path, index) => (
                <div key={index} className="space-y-4 p-8 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-md transition-all">
                  <span className="text-brand-primary font-display font-medium text-5xl opacity-20">0{index + 1}</span>
                  <h4 className="text-xl font-medium font-display text-brand-text tracking-tighter">{path.title}</h4>
                  <p className="text-brand-muted text-[10px] font-normal tracking-widest leading-relaxed">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
