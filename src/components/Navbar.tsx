import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Bot, Zap, Home, Globe, Sparkles, Users, Cpu, Rocket } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 backdrop-blur-xl bg-white/70 border-b border-brand-border"
    >
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center font-display font-medium text-2xl text-brand-primary shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] transition-all duration-500">
          <Bot className="w-7 h-7" />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="font-display font-medium text-2xl tracking-tighter text-brand-text">PT AII</span>
          <span className="text-[8px] font-medium tracking-[0.4em] text-brand-primary uppercase">Artificial Intelligence</span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-widest text-brand-muted uppercase">
        {isHome ? (
          <>
            <a href="#about" className="hover:text-brand-primary transition-all relative group flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 hover:shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <Home className="w-3 h-3" />
              Home
            </a>
            <a href="#impact" className="hover:text-brand-primary transition-all relative group flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 hover:shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <Globe className="w-3 h-3" />
              Impact
            </a>
            <a href="#future" className="hover:text-brand-primary transition-all relative group flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 hover:shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <Sparkles className="w-3 h-3" />
              Future
            </a>
            <a href="#experts" className="hover:text-brand-primary transition-all relative group flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 hover:shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <Users className="w-3 h-3" />
              Leadership
            </a>
            <a href="#solutions" className="hover:text-brand-primary transition-all relative group flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 hover:shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
              <Cpu className="w-3 h-3" />
              Solutions
            </a>
          </>
        ) : (
          <Link to="/" className="hover:text-brand-primary transition-all flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 hover:shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
            <Home className="w-3 h-3" />
            Home
          </Link>
        )}
      </div>
      
      <Link to="/demos" className="px-8 py-3 bg-white text-brand-text rounded-2xl text-[10px] font-medium tracking-widest hover:text-brand-primary transition-all shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] border border-white/20 flex items-center gap-3 group uppercase">
        <Rocket className="w-4 h-4 text-brand-primary group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 fill-brand-primary/20" />
        Get started
      </Link>
    </motion.nav>
  );
}
