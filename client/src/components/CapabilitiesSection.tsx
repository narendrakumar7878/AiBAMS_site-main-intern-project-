import { MessageCircle, ScanEye, SquareStack, Image, Zap, Search, Sparkles, ArrowRight } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Section's top relative to viewport + scrollY gives its top relative to document
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = rect.height;
      const scrollY = window.scrollY;
      // Only apply parallax while section is in view
      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        // How much the section has been scrolled through
        const progress = Math.min(Math.max(scrollY + windowHeight - sectionTop, 0), sectionHeight + windowHeight);
        // Parallax offset: only up to the section's height
        const maxOffset = sectionHeight * 0.6;
        const rawOffset = (scrollY - sectionTop) * 0.6;
        setOffset(Math.max(0, Math.min(rawOffset, maxOffset)));
      } else if (scrollY < sectionTop) {
        setOffset(0);
      } else {
        setOffset(sectionHeight * 0.6);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const capabilities = [
    {
      icon: MessageCircle,
      title: " Fusion-WebX",
      description: "AI Website Builder :  Launch stunning websites in minutes with AI-generated content, SEO-optimized structure, and built-in forms. No coding needed.",
       status: "active",
      color: "blue"
    },
    {
      icon: ScanEye,
      title: "Fusion-Chat",
      description: "AI Business Assistant:Your private AI assistant trained on your business data. Ask questions, draft documents, plan tasks—instantly.",
      status: "active",
      color: "green"
    },
    {
      icon: SquareStack,
      title: "Fusion-Mail",
      description: "Smart Email Suite: Manage business emails with intelligent features like auto-replies, summarization, priority tagging, and tone adjustment.",
      status: "active",
      color: "purple"
    },
    {
      icon: SquareStack,
      title: " Fusion-Docs",
      description: "AI-Powered Document Editor: Write, edit, and brainstorm in real time with AI copilots. From contracts to blogs—get intelligent suggestions, grammar help, and formatting.",
      status: "active",
      color: "orange"
    },
    {
      icon: Image,
      title: " Fusion-Sheets",
      description: "Smart Business Spreadsheets:Auto-analyze, visualize, and forecast your data with built-in AI functions—no formulas required.",
      status: "active",
      color: "pink"
    },
    {
      icon: Search,
      title: "Fusion-Drive",
      description: "Cloud Storage with AI Search: Securely store files and instantly find what you need with AI-driven search, smart tags, and auto-organization.",
      status: "active",
      color: "yellow"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">New</span>;
      case "coming-soon":
        return <span className="ml-2 text-xs bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full border border-gray-500/30">Coming soon</span>;
      default:
        return null;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-400 group-hover:text-blue-300";
      case "green":
        return "text-green-400 group-hover:text-green-300";
      case "purple":
        return "text-purple-400 group-hover:text-purple-300";
      case "orange":
        return "text-orange-400 group-hover:text-orange-300";
      case "pink":
        return "text-pink-400 group-hover:text-pink-300";
      case "yellow":
        return "text-yellow-400 group-hover:text-yellow-300";
      default:
        return "text-gray-200 group-hover:text-white";
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-black py-24 px-4 pb-0 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      {/* Radial gradient overlay */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Foreground content with parallax */}
      <div
        ref={fgRef}
        className="relative z-10 max-w-6xl mx-auto"
        style={{ transform: `translateY(-${offset}px)`, willChange: 'transform' }}
      >
        {/* Section header (no glass box) */}
        <div className="mb-16 text-center">
          <div className="text-xs tracking-widest text-gray-400 mb-2 font-medium"># CAPABILITIES</div>
          <h2 className="text-4xl md:text-[3rem] font-bold text-white mb-6">AI to Supercharge Your Business
          </h2>
          <p className="text-[1.125rem] text-gray-300 max-w-3xl mx-auto">
          Unlock the true potential of your business with our AI-powered app suite—designed to simplify, scale, and speed up everything from communication to data management.
          </p>
        </div>
        {/* Capabilities grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Divider lines for 3x2 grid */}
          <div className="hidden lg:block absolute top-0 left-1/3 w-px h-full bg-white/10 z-20" style={{left: '33.33%'}}></div>
          <div className="hidden lg:block absolute top-0 left-2/3 w-px h-full bg-white/10 z-20" style={{left: '66.66%'}}></div>
          <div className="hidden md:block absolute left-0 top-1/2 w-full h-px bg-white/10 z-20" style={{top: '50%'}}></div>
          {/* Capability boxes */}
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl border border-transparent"
            >
              {/* Hover glow effect */}
              {/* Removed background and hover effect */}
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <capability.icon className={`w-8 h-8 transition-colors duration-300`} />
          </div>

                <h3 className="text-xl font-semibold mb-2 flex items-center text-white group-hover:text-white transition-colors duration-300" style={{ fontSize: '1.125rem' }}>
                  {capability.title}
                  {getStatusBadge(capability.status)}
                </h3>
                
                <p className="text-sm leading-relaxed mb-4 text-gray-500 group-hover:text-white transition-colors duration-300" style={{ fontSize: '0.875rem' }}>
                  {capability.description}
                </p>
                {/* Add the span for Fusion-Chat only */}
                <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300" style={{ fontSize: '0.75rem' }}>
                  
          </div>
          </div>
          </div>
          ))}
        </div>
        
      </div>
      <hr className="border-t border-zinc-800 mt-24" />
    </section>
  );
}