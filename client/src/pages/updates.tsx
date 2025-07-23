import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import CircleBackground from "@/components/TriangleBackground";

const newsItems = [
  {
    title: "xAI raises $10B in debt and equity to bolster AI initiatives",
    date: "July 1, 2025",
    summary:
      "Elon Musk-backed xAI has raised $5B in debt and $5B in equity, with Morgan Stanley leading the deal. The funds will support advanced AI development, including one of the world's largest data centers and the Grok platform.",
    link: "https://techcrunch.com/2025/07/01/xai-raises-10b-in-debt-and-equity/",
  },
  {
    title: "Meta forms Superintelligence Labs for AGI push",
    date: "July 1, 2025",
    summary:
      "Meta CEO Mark Zuckerberg reorganizes AI efforts into Meta Superintelligence Labs, focused on building AGI. The new division is led by Alexandr Wang, with major hires from OpenAI and Google DeepMind.",
    link: "https://www.linkedin.com/pulse/ai-news-funding-updates-from-last-24-hours01st-july-2025-anshuman-jha-oxwnc",
  },
  {
    title: "Campfire raises $35M to disrupt enterprise accounting with AI",
    date: "July 1, 2025",
    summary:
      "AI-powered accounting startup Campfire secures $35M Series A led by Accel, aiming to automate financial tasks and challenge legacy ERP software. Early traction includes clients like Replit.",
    link: "https://www.linkedin.com/pulse/ai-news-funding-updates-from-last-24-hours01st-july-2025-anshuman-jha-oxwnc",
  },
  {
    title: "Zango raises $4.8M to help financial firms with regulatory compliance using agentic AI",
    date: "July 1, 2025",
    summary:
      "London-based Zango Global raises $4.8M to provide AI agents for regulatory compliance in finance, aiming to automate and streamline complex legal workflows for banks and fintechs.",
    link: "https://siliconangle.com/2025/07/01/zango-raises-4-8m-help-financial-firms-regulatory-compliance-using-agentic-ai/",
  },
];

export default function Updates() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerWhite, setHeaderWhite] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setIsScrolled(scrolled > 50);
      const lightEffect = document.querySelector(".bg-light-source");
      if (lightEffect) {
        (lightEffect as HTMLElement).style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderWhite(!entry.isIntersecting);
      },
      { threshold: 0.45 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <HeaderWhite />

      {/* Hero Section */}
        <div ref={heroRef}>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#000000]">
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-28">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
          
              <span className="text-sm text-gray-300">Latest News & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
              Stay Informed with the Latest in AI
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore the most recent news, funding rounds, and breakthroughs in AI, xAI, and the broader tech industry.
            </p>
          </div>
        </section>
      </div>

      {/* Divider Line (remains after removing News Feature Section) */}
      <div className="w-full border-t" style={{ borderColor: 'rgb(39 39 42 / var(--tw-border-opacity, 1))' }}></div>

      {/* News Grid Section */}
      <section className="w-full bg-black pt-24 pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              date: 'December 18, 2024',
              title: 'xAI raises $6B Series C',
              summary: 'xAI raises $6B Series C with participation from top investors. Funds will accelerate Grok and infrastructure.',
            },
            {
              date: 'December 18, 2024',
              title: 'Bringing Grok to Everyone',
              summary: 'Grok is now available for everyone, expanding access to advanced AI reasoning.',
            },
            {
              date: 'December 18, 2024',
              title: 'Grok Image Generation Release',
              summary: 'Grok launches image generation with state-of-the-art capabilities.',
            },
            {
              date: 'November 18, 2024',
              title: 'API Public Beta',
              summary: 'xAI opens API public beta, enabling developers to build on Grok.',
            },
            {
              date: 'March 31, 2024',
              title: 'Grok-2 Beta Release',
              summary: 'Grok-2 Beta and Grok-2 model released with major improvements.',
            },
            {
              date: 'July 31, 2024',
              title: 'Series B funding round',
              summary: 'xAI closes its Series B funding round of $3B.',
            },
            {
              date: 'April 18, 2024',
              title: 'Grok 1.5 Vision Preview',
              summary: 'Preview of Grok 1.5 Vision, our most multimodal model.',
            },
            {
              date: 'March 28, 2024',
              title: 'Announcing Grok-1.5',
              summary: 'Grok-1.5 launches with improved reasoning and speed.',
            },
            {
              date: 'March 28, 2024',
              title: 'Open Release of Grok-1',
              summary: 'Grok-1 weights and architecture released for research.',
            },
            {
              date: 'November 18, 2023',
              title: 'Announcing PromptIDE',
              summary: 'PromptIDE is now available for advanced prompt engineering.',
            },
            {
              date: 'November 18, 2023',
              title: 'Announcing Grok',
              summary: 'Grok is here! A new era of advanced AI begins.',
            },
          ].map((item, i) => (
            <div key={i} className="group relative border-[0.5px] border-zinc-800 p-6 bg-transparent transition-colors duration-300 flex flex-col h-full">
              <div className="text-xs text-gray-400 tracking-widest mb-2">{item.date}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm text-justify mb-4 flex-1">{item.summary}</p>
              <div className="flex items-center justify-between mt-auto">
                <a href="#" className="text-xs text-slate-600 hover:underline font-medium">Read</a>
                <span className="text-[10px] tracking-widest font-thin uppercase text-gray-400">Category</span>
              </div>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </div>
          ))}
        </div>
        {/* Centered More Button */}
        <div className="flex justify-center mt-12">
          <button className="ml-4 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border border-white/30 text-white bg-transparent hover:bg-white/10 transition-all duration-200">More</button>
        </div>
      </section>
      <Footer />
    </div>
  );
} 