import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, Zap, ArrowRight, ExternalLink, RefreshCw } from "lucide-react";
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import Markdown from "react-markdown";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_INSTRUCTION = `You are the PT AII Assistant, a super modern and intelligent AI designed to help users understand PT AII, sustainability, and Agentic AI.

PT AII (a subsidiary of Patria & Co.) bridges scholarly rigour and industrial excellence to solve complex climate and ESG (Environmental, Social, and Governance) challenges through autonomous intelligence.

Key Information:
- Website: https://ais-dev-mafqtc2inwnp6fo3dslotz-564987690659.europe-west2.run.app
- Parent Company: Patria & Co. (https://patriaco.co.uk/)
- Focus Areas: Agentic AI, ESG Analytics, Predictive Maintenance, Secure AI.
- Leadership: Muhammad Zulkifli (Chief Executive Officer), Harry Patria (Chief Strategy Officer), Muhammad Riandhy A. Yudhy (Chief Technology Officer), Rizky Agung Prasetyo (Chief Operating Officer).
- Location: Sovereign Plaza, Floor 12, Jakarta, Indonesia.

Formatting Rules:
1. Use plain text for emphasis. Do not use bold or italic formatting.
2. Capitalize specific terminology: AI, ESG, AII, PT AII, UK, and names of persons/places.
3. Use sentence case for general statements (Capitalize the first letter only).
4. Provide helpful hyperlinks to relevant content. If referring to Patria & Co., link to https://patriaco.co.uk/.
5. Be professional, scholarly, yet accessible.

Example of correct formatting:
"Agentic AI is a paradigm shift in how we approach ESG challenges at PT AII."`;

const QUICK_QUERIES = [
  "What is Agentic AI?",
  "How does PT AII help with ESG?",
  "Who are the scholars behind PT AII?",
  "Tell me about Patria & Co.",
];

interface Message {
  role: "user" | "model";
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hello! I'm the PT AII Assistant. How can I help you explore our world of Agentic AI and Sustainability today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat(userMessage).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const modelText = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: "model", text: modelText }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: "model", text: "I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-brand-primary text-white rounded-full shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] flex items-center justify-center group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageSquare className="w-8 h-8" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-brand-secondary rounded-full border-2 border-brand-primary"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
            className="fixed bottom-28 right-8 z-[60] w-[90vw] md:w-[450px] h-[600px] bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[24px_24px_48px_#d1d9e6,-24px_-24px_48px_#ffffff] border border-white/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-gradient-to-br from-brand-primary/10 to-transparent border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] flex items-center justify-center text-brand-primary">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl tracking-tighter text-brand-text">PT AII Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black tracking-widest text-brand-muted uppercase">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setMessages([{ role: "model", text: "Chat history cleared. How can I help you?" }])}
                className="p-3 rounded-xl hover:bg-white transition-colors text-brand-muted hover:text-brand-primary"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-6 rounded-3xl text-[12px] font-black tracking-wide leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-brand-primary text-white shadow-[8px_8px_16px_rgba(0,0,0,0.1)] rounded-tr-none" 
                      : "bg-white text-brand-text shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] rounded-tl-none"
                  }`}>
                    <div className="markdown-body">
                      <Markdown>{msg.text}</Markdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-6 rounded-3xl rounded-tl-none shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] flex gap-2">
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Queries */}
            {messages.length === 1 && (
              <div className="px-8 pb-4 flex flex-wrap gap-2">
                {QUICK_QUERIES.map((query, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(query)}
                    className="px-4 py-2 bg-white border border-brand-border rounded-full text-[10px] font-black tracking-widest text-brand-muted hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm"
                  >
                    {query}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-8 bg-white border-t border-brand-border">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about AI & Sustainability..."
                  className="w-full pl-6 pr-16 py-5 rounded-2xl bg-white border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-[12px] font-black tracking-widest"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <p className="mt-4 text-[8px] text-center text-brand-muted font-black tracking-[0.2em] uppercase">
                Powered by Gemini 3 Flash
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
