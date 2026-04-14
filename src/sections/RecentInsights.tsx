import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, Calendar, Twitter, Linkedin, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

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
  },
  {
    title: "Autonomous Grid Optimization for Net Zero",
    excerpt: "How AI agents are balancing renewable energy loads across national grids with millisecond precision.",
    date: "March 15, 2026",
    type: "Research Paper",
    icon: FileText,
  },
  {
    title: "Decarbonizing Mining: The Role of Intelligence",
    excerpt: "Strategic insights into the integration of autonomous machinery and carbon tracking in deep-pit operations.",
    date: "March 02, 2026",
    type: "Blog Post",
    icon: BookOpen,
  },
  {
    title: "The Ethics of Autonomous Industrial Agents",
    excerpt: "A philosophical and technical framework for ensuring safety and transparency in agentic decision-making.",
    date: "February 20, 2026",
    type: "Research Paper",
    icon: FileText,
  }
];

export function RecentInsights() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  const totalPages = Math.ceil(insights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInsights = insights.slice(startIndex, startIndex + itemsPerPage);

  const handleShare = (platform: string, title: string) => {
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this insight from PT AII: ${title}`);
    
    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "threads") {
      shareUrl = `https://www.threads.net/intent/post?text=${text}%20${url}`;
    }
    
    if (shareUrl) window.open(shareUrl, "_blank");
  };

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
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              {currentInsights.map((post, index) => (
                <motion.div 
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="p-10 rounded-[2.5rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] hover:shadow-[16px_16px_32px_#d1d9e6,-16px_-16px_32px_#ffffff] transition-all group flex flex-col border border-transparent hover:border-brand-primary/10 h-full text-left relative">
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
                      <Link to="/insights/placeholder" className="block">
                        <h3 className="text-2xl font-display font-medium text-brand-text tracking-tighter leading-tight hover:text-brand-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-brand-muted leading-loose text-[10px] font-normal tracking-widest [text-shadow:0_1px_1px_rgba(0,0,0,0.05)]">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-brand-border flex items-center justify-between">
                      <Link 
                        to="/insights/placeholder"
                        className="flex items-center gap-2 text-brand-text font-medium text-[10px] tracking-[0.3em] group/btn uppercase hover:text-brand-primary transition-colors"
                      >
                        Read more 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleShare("twitter", post.title)}
                          className="p-2 rounded-full hover:bg-brand-surface text-brand-muted hover:text-brand-primary transition-all"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleShare("linkedin", post.title)}
                          className="p-2 rounded-full hover:bg-brand-surface text-brand-muted hover:text-brand-primary transition-all"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleShare("threads", post.title)}
                          className="p-2 rounded-full hover:bg-brand-surface text-brand-muted hover:text-brand-primary transition-all"
                          aria-label="Share on Threads"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 pt-10">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-4 rounded-2xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] text-brand-muted hover:text-brand-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={cn(
                      "w-10 h-10 rounded-xl text-[10px] font-medium transition-all",
                      currentPage === i + 1
                        ? "bg-brand-primary text-white shadow-lg"
                        : "bg-white text-brand-muted shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:text-brand-text"
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-4 rounded-2xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] text-brand-muted hover:text-brand-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
