import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

export default function Blog() {
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
      <HeaderWhite />
      <div ref={heroRef}>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#000000]">
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={800}
              particleSpread={10}
              speed={0.01}
              particleBaseSize={22}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              className="w-full h-full"
            />
          </div>
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              <span className="text-sm text-gray-300">Our Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
              Insights, Stories & Ideas
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our latest blog posts, stories, and insights on AI, technology, and innovation.
            </p>
          </div>
        </section>
      </div>
      {/* Divider Line */}
      <div className="w-full border-t" style={{ borderColor: 'rgb(39 39 42 / var(--tw-border-opacity, 1))' }}></div>

      {/* Blog Grid Section */}
      <section className="w-full bg-black pt-24 pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              date: 'June 30, 2025',
              title: 'The Future of AI in Business',
              summary: 'How AI is transforming industries and what to expect in the coming years.',
            },
            {
              date: 'June 25, 2025',
              title: 'Building Ethical AI Systems',
              summary: 'A guide to creating responsible and ethical AI solutions.',
            },
            {
              date: 'June 20, 2025',
              title: 'AI and Creativity: Myths & Realities',
              summary: 'Exploring the intersection of artificial intelligence and human creativity.',
            },
            {
              date: 'June 15, 2025',
              title: 'Scaling Startups with Automation',
              summary: 'How automation and AI can help startups grow faster and smarter.',
            },
            {
              date: 'June 10, 2025',
              title: 'Understanding Large Language Models',
              summary: 'A deep dive into LLMs and their impact on technology.',
            },
            {
              date: 'June 5, 2025',
              title: 'The Rise of Multimodal AI',
              summary: 'What is multimodal AI and why does it matter?',
            },
            {
              date: 'June 1, 2025',
              title: 'AI for Good: Social Impact',
              summary: 'How AI is being used to solve real-world problems and drive positive change.',
            },
            {
              date: 'May 28, 2025',
              title: 'From Research to Product: AI Deployment',
              summary: 'Best practices for taking AI from the lab to production.',
            },
            {
              date: 'May 20, 2025',
              title: 'The Human Side of AI',
              summary: 'Why empathy and human-centered design matter in AI.',
            },
            {
              date: 'May 15, 2025',
              title: 'Prompt Engineering 101',
              summary: 'Tips and tricks for effective prompt engineering in LLMs.',
            },
            {
              date: 'May 10, 2025',
              title: 'AI Trends to Watch in 2025',
              summary: 'Key trends and predictions for the future of AI.',
            },
          ].map((item, i) => (
            <div key={i} className="group relative border-[0.5px] border-zinc-800 p-6 bg-transparent transition-colors duration-300 flex flex-col h-full">
              <div className="text-xs text-gray-400 tracking-widest mb-2">{item.date}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm text-justify mb-4 flex-1">{item.summary}</p>
              <div className="flex items-center justify-between mt-auto">
                <a href="#" className="text-xs text-slate-600 hover:underline font-medium">Read</a>
                <span className="text-[10px] tracking-widest font-thin uppercase text-gray-400">Blog</span>
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