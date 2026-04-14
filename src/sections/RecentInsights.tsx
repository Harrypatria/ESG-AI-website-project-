import { motion } from "motion/react";
import { ArrowRight, BookOpen, FileText, Calendar } from "lucide-react";

const insights = [
  {
    title: "The Rise of Agentic AI in Industrial Procurement",
    excerpt: "Exploring how autonomous agents are transforming supply chain resilience and operational efficiency in heavy industry.",
    date: "April 12, 2026",
    type: "Research Paper",
    icon: FileText,
  },
  {
    title: "ESG 2.0: Beyond Compliance to Autonomous Intelligence",
    excerpt: "Why the next generation of sustainability reporting will be driven by real-time agentic data collection and verification.",
    date: "April 08, 2026",
    type: "Blog Post",
    icon: BookOpen,
  },
  {
    title: "Predictive Maintenance: A Scholarly Approach",
    excerpt: "Deep dive into the neural architectures powering PT AII's 94% accuracy in forecasting mechanical failures.",
    date: "March 28, 2026",
    type: "Research Paper",
    icon: FileText,
  }
];

export function RecentInsights() {
  return (
    <section id="insights" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">Latest thinking</span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
              Recent <br /> <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed font-normal">
              Stay updated with our latest research papers, technical blog posts, 
              and industrial intelligence reports.
            </p>
          </div>
          <button className="px-8 py-4 bg-white border border-brand-border rounded-2xl text-[10px] font-medium tracking-widest text-brand-text hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm flex items-center gap-3 uppercase group">
            View all publications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] hover:shadow-[16px_16px_32px_#d1d9e6,-16px_-16px_32px_#ffffff] transition-all group flex flex-col border border-transparent hover:border-brand-primary/10"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                  <post.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-[8px] font-medium tracking-widest text-brand-muted uppercase">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
              
              <div className="space-y-4 flex-grow">
                <span className="text-[8px] font-medium tracking-[0.3em] text-brand-primary uppercase">{post.type}</span>
                <h3 className="text-2xl font-display font-medium text-brand-text tracking-tighter leading-tight group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-[10px] font-normal tracking-widest">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="mt-10 pt-8 border-t border-brand-border">
                <button className="flex items-center gap-2 text-brand-text font-medium text-[10px] tracking-[0.3em] group/btn uppercase hover:text-brand-primary transition-colors">
                  Read more 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
