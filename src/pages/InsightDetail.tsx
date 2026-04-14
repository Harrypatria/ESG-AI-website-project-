import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Share2, Twitter, Linkedin, FileText, BookOpen } from "lucide-react";

const insights = [
  {
    id: "rise-of-agentic-ai",
    title: "The Rise of Agentic AI in Industrial Procurement",
    excerpt: "Exploring how autonomous agents are transforming supply chain resilience and operational efficiency in heavy industry.",
    content: `
      Autonomous agents are no longer a futuristic concept. In the realm of industrial procurement, these agents are actively transforming how organizations manage supply chain resilience and operational efficiency. 
      
      By leveraging advanced neural architectures and real-time data streams, PT AII's agents can identify potential disruptions before they occur, automatically negotiate with suppliers, and optimize inventory levels with millisecond precision.
      
      This scholarly deep dive explores the technical frameworks and industrial applications of these autonomous systems.
    `,
    date: "April 12, 2026",
    type: "Research Paper",
    icon: FileText,
  },
  {
    id: "esg-2-0",
    title: "ESG 2.0: Beyond Compliance to Autonomous Intelligence",
    excerpt: "Why the next generation of sustainability reporting will be driven by real-time agentic data collection and verification.",
    content: `
      Sustainability reporting is undergoing a paradigm shift. Traditional compliance-based models are being replaced by autonomous intelligence systems that provide real-time verification and insights.
      
      PT AII's ESG 2.0 framework integrates agentic data collection across global industrial operations, ensuring that carbon intensity metrics are not just reported, but actively managed and optimized.
      
      This shift from passive reporting to active intelligence is critical for achieving true net-zero targets.
    `,
    date: "April 08, 2026",
    type: "Blog Post",
    icon: BookOpen,
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance: A Scholarly Approach",
    excerpt: "Deep dive into the neural architectures powering PT AII's 94% accuracy in forecasting mechanical failures.",
    content: `
      Mechanical failures in heavy industry can cost millions in downtime. PT AII's predictive maintenance models utilize deep learning to forecast these failures with unprecedented accuracy.
      
      By analyzing vibration patterns, thermal data, and operational logs, our agents can identify the subtle signatures of impending component failure weeks in advance.
      
      This research paper outlines the specific neural architectures and data processing techniques that enable our 94% accuracy rate.
    `,
    date: "March 28, 2026",
    type: "Research Paper",
    icon: FileText,
  }
];

export function InsightDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = insights.find(p => p.id === id) || insights[0];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-all text-[10px] font-medium tracking-[0.3em] uppercase group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to insights
        </button>

        <motion.div 
          layoutId={`card-${id}`}
          className="p-12 md:p-20 rounded-[4rem] bg-white shadow-[20px_20px_40px_#d1d9e6,-20px_-20px_40px_#ffffff] border border-brand-primary/5 space-y-10"
        >
          <div className="flex items-center justify-between">
            <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
              <post.icon className="w-8 h-8" />
            </div>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-widest text-brand-muted uppercase">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">{post.type}</span>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-brand-text tracking-tighter leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed font-normal italic">
              {post.excerpt}
            </p>
          </div>

          <div className="prose prose-brand max-w-none">
            <p className="text-brand-text leading-loose text-lg font-normal tracking-wide whitespace-pre-line">
              {post.content}
            </p>
          </div>

          <div className="pt-12 border-t border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="p-3 rounded-xl bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-brand-muted hover:text-brand-primary transition-all">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-xl bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-brand-muted hover:text-brand-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-xl bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-brand-muted hover:text-brand-primary transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <span className="text-[10px] font-medium tracking-[0.3em] text-brand-muted uppercase">
              PT AII Research Intelligence
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
