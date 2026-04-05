import { motion } from "motion/react";
import { GraduationCap, Briefcase, Linkedin, Mail } from "lucide-react";

const scholars = [
  {
    name: "Dr. Muhammad Zulkifli",
    role: "President of Commissioners • Energy, Operation Excellence & ESG Governance Expert",
    description: "30+ years C-suite energy leadership. Internationally recognized ESG governance authority with advisory roles for government ministries and Fortune 500 corporations. Published scholar in energy sustainability and corporate governance frameworks.",
    image: "https://i.pravatar.cc/400?img=11",
    experience: ["30+ years C-suite", "ESG authority", "Board advisor", "Published scholar"]
  },
  {
    name: "Dr. Harry Patria",
    role: "President Director • AI Strategy & Data Science Pioneer",
    description: "17 years deploying enterprise AI across 5 countries. Founded Indonesia's first data & AI firm. Pioneering practitioner-scholar in Agentic AI with 100+ platforms delivered. Faculty at four leading universities. International conference keynote speaker.",
    image: "https://i.pravatar.cc/400?img=12",
    experience: ["100+ AI platforms", "Agentic AI pioneer", "Faculty at 4 unis", "Global speaker"]
  },
  {
    name: "Ir. Muhammad Riandhy A. Yudhy, M.Eng",
    role: "Director • AI & Sustainability Integration",
    description: "Chartered Engineer (UK) with Halliburton, Chevron, Pertamina experience. $200m+ verified value creation through AI-driven efficiency. Expert in GHG reduction and renewable energy integration. Faculty in AI & Sustainability. Published researcher in sustainable AI applications.",
    image: "https://i.pravatar.cc/400?img=13",
    experience: ["Chartered Engineer", "$200m+ value", "Decarbonization", "AI sustainability"]
  },
  {
    name: "Rizky Agung Prasetyo",
    role: "Director • Digital Transformation & ESG Data",
    description: "Enterprise AI deployment specialist for Fortune 500 and government institutions. Expert in data architecture, ESG governance systems, and compliance reporting. Proven track record in change management and stakeholder engagement for complex digital transformation programs.",
    image: "https://i.pravatar.cc/400?img=14",
    experience: ["Enterprise AI", "ESG data", "Digital strategy", "Change leader"]
  }
];

export function Experts() {
  return (
    <section id="experts" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <span className="text-brand-secondary font-medium tracking-[0.3em] text-[10px] uppercase">The human intelligence</span>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
            Distinguished <br /> <span className="gradient-text">Practitioner-scholars</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Our team bridges the gap between high-level academic research and 
            on-the-ground industrial implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholars.map((scholar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2.5rem] bg-white border border-brand-border shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                <div className="w-full lg:w-48 shrink-0">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src={scholar.image} 
                      alt={scholar.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <div className="flex gap-3">
                        <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-all">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-medium text-brand-text tracking-tight">{scholar.name}</h3>
                    <p className="text-brand-primary font-medium text-xs tracking-widest uppercase">{scholar.role}</p>
                  </div>
                  
                  <p className="text-brand-muted leading-relaxed text-sm font-normal">{scholar.description}</p>
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-brand-text uppercase opacity-50">Key expertise</span>
                    <div className="flex flex-wrap gap-2">
                      {scholar.experience.map((exp, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-brand-surface border border-brand-border text-[10px] font-medium text-brand-muted tracking-wide group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-colors">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
