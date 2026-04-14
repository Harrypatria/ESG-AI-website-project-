import { Linkedin, Mail, Twitter, Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-surface border-t border-brand-border py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center font-display font-medium text-xl text-brand-primary shadow-sm group-hover:border-brand-primary transition-all">
                A
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-display font-medium text-xl tracking-tighter text-brand-text">PT AII</span>
                <span className="text-[6px] font-medium tracking-[0.4em] text-brand-primary uppercase">Artificial Intelligence</span>
              </div>
            </div>
            <p className="text-brand-muted leading-relaxed text-[10px] font-normal tracking-widest uppercase">
              Intelligence for a better planet. A subsidiary of Patria & Co., specializing in sustainability and AI solutions.
            </p>
            <div className="space-y-2 text-[10px] text-brand-muted font-normal tracking-widest uppercase">
              <p className="flex items-center gap-2 hover:text-brand-primary transition-colors cursor-pointer"><Mail className="w-4 h-4 text-brand-primary" /> sustainability@patriaco.id</p>
              <p className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Sovereign Plaza, Floor 12<br />Jakarta, Indonesia</span>
              </p>
            </div>
            <div className="flex gap-4">
              {[Linkedin, Mail, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-muted hover:text-brand-primary shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-medium tracking-[0.3em] text-brand-text uppercase">Solutions</h4>
            <ul className="space-y-4">
              {["Agentic AI", "ESG analytics", "Predictive maintenance", "Secure AI"].map((item) => (
                <li key={item}>
                  <a href="#" className="relative text-brand-muted text-[10px] font-normal tracking-widest hover:text-brand-primary transition-colors flex items-center gap-2 group uppercase after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-medium tracking-[0.3em] text-brand-text uppercase">Company</h4>
            <ul className="space-y-4">
              {["About us", "Research", "Experts", "Demos", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="relative text-brand-muted text-[10px] font-normal tracking-widest hover:text-brand-primary transition-colors flex items-center gap-2 group uppercase after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-medium tracking-[0.3em] text-brand-text uppercase">Newsletter</h4>
            <p className="text-brand-muted text-[10px] font-normal tracking-widest leading-relaxed uppercase">
              Subscribe to our research updates and industrial insights.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-primary outline-none transition-all text-[10px] font-normal tracking-widest uppercase"
              />
              <button className="w-full py-4 bg-white text-brand-text rounded-2xl text-[10px] font-medium tracking-widest hover:text-brand-primary transition-all border border-brand-border hover:border-brand-primary uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-muted text-[10px] font-normal tracking-widest uppercase">
            © 2026 PT AII - Intelligence for a better planet. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="relative text-brand-muted text-[10px] font-normal tracking-widest hover:text-brand-primary transition-colors uppercase after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">Privacy policy</a>
            <a href="#" className="relative text-brand-muted text-[10px] font-normal tracking-widest hover:text-brand-primary transition-colors uppercase after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
