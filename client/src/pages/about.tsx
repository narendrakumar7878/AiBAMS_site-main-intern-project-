import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { Sparkles, ArrowRight, Target, Users, Zap, Globe } from 'lucide-react';
import riyankImg from '../assets/riyank.png';
import shivImg from '../assets/shiv.png';
import vyonishImg from '../assets/vyonish.png';
import himnishImg from '../assets/himnish.png';
import sakibImg from '../assets/mohd.sakib raja.png';
import shubhamImg from '../assets/shubham.png';
import modelImg from '../assets/3dmodel.png';

// changes by me 
import * as THREE from "three";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerWhite, setHeaderWhite] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // Glass effect for header
      setIsScrolled(scrolled > 50);

      // Parallax effect for light source
      const lightEffect = document.querySelector(".bg-light-source");
      if (lightEffect) {
        (lightEffect as HTMLElement).style.transform =
          `translateY(${scrolled * 0.1}px)`;
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

  // Galaxy starfield animation
  useEffect(() => {
    const starCount = 180;
    const stars: HTMLDivElement[] = [];
    const container = document.getElementById('galaxy-starfield');
    if (!container) return;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'galaxy-star';
      const size = Math.random() * 1.2 + 0.3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      star.style.animationDelay = `${Math.random() * 8}s`;
      container.appendChild(star);
      stars.push(star);
    }
    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);


  //my code ends here hero section
  //const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.fog.min").then((VANTA) => {
        setVantaEffect(
          VANTA.default({
            el: heroRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xffffff,
            midtoneColor: 0x888888,
            lowlightColor: 0x000000,
            baseColor: 0x111111,
            blurFactor: 0.5,
            speed: 0.5,
            zoom: 1,

            mouseEase: true,
            mouseForce: 0.5,     // more responsive effect (try 0.1 to 0.5)
            gyroControls: false,
            

          })
        );
      });
    }

    return () => {
      if (vantaEffect && typeof (vantaEffect as any).destroy === "function") {
        (vantaEffect as any).destroy();
      }
    };
  }, [vantaEffect]);




  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <HeaderWhite />

      {/* Hero Section */}
      {/* <div ref={heroRef}>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#191d1e] py-24">
          <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-300">Transforming Business Dynamics</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
              AIBAMS Suite
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Intelligent Tools. Limitless Growth.
            </p>
          </div>
        </section>
      </div> */}

      {/* my code starts here hero section */}
      <div ref={heroRef}>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24">
          <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-300">Transforming Business Dynamics</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
              AIBAMS Suite
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Intelligent Tools. Limitless Growth.
            </p>
          </div>
        </section>
      </div>







      {/* Vision Section */}
      <section className="w-full bg-black py-12 md:py-24 border-t-[1px] border-zinc-800">
        <div className="max-w-6xl px-4 md:px-[1rem] mx-auto">
          <div className="mb-12 md:mb-20 w-full">
            <div className="text-xs tracking-widest text-gray-500 mb-2"># OUR VISION</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 w-full">Redefining the Future of Work</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 md:mb-8 text-justify w-full">
              At AIBAMS, we envision a world where businesses don't just survive—they scale effortlessly. Our goal is to replace cluttered systems and disconnected tools with a single, intelligent platform tailored for Indian entrepreneurs, professionals, and growing teams. </p>
            <p className="text-sm text-gray-300 leading-relaxed text-justify w-full">
              With 45+ AI-integrated applications under one roof, we're on a mission to help you save time, cut costs, and operate smarter—without writing a single line of code. </p>
          </div>
          {/* Feature boxes row: Intelligence at Core and Global Impact */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
            {/* Intelligence at Core box */}
            <div className="group relative px-4 py-6 md:px-0 md:py-10 h-full lg:p-8 flex flex-col space-y-4 from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-6 md:gap-10 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
                <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
                <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
                <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
                <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
              </div>
              <div className="max-w-sm group grow">
                <h3 className="text-xl text-white">Intelligence at Core</h3>
                <p className="mt-4 text-gray-700 dark:text-secondary group-hover:text-primary">Every app in our Fusion Suite is powered by advanced AI, offering automation, insights, and performance like never before.</p>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="opacity-75 flex-1 pointer-events-none flex items-center justify-center">
                  <svg className="w-[90%] h-[200px] md:h-[260px] mx-auto block opacity-40 group-hover:opacity-70 duration-100 group-hover:skew-y-[12deg] group-hover:scale-75 origin-center" width="489" viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1">
                      <rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)" />
                      <line x1="55.6387" y1="97.6836" x2="394.812" y2="97.6836" stroke="white" strokeOpacity="0.7" />
                      <line x1="55.6387" y1="135.651" x2="394.812" y2="135.651" stroke="white" strokeOpacity="0.6" />
                      <line x1="55.6387" y1="173.618" x2="394.812" y2="173.618" stroke="white" strokeOpacity="0.5" />
                      <line x1="55.6387" y1="211.585" x2="394.812" y2="211.585" stroke="white" strokeOpacity="0.4" />
                      <line x1="55.6387" y1="249.552" x2="394.812" y2="249.552" stroke="white" strokeOpacity="0.3" />
                      <line x1="55.6387" y1="287.52" x2="394.812" y2="287.52" stroke="white" strokeOpacity="0.2" />
                      <line x1="55.6387" y1="325.487" x2="394.812" y2="325.487" stroke="white" strokeOpacity="0.1" />
                    </g>
                    <defs>
                      <linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="0.8" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            {/* Global Impact box */}
            <div className="group relative px-4 py-6 md:px-0 md:py-10 h-full lg:p-8 flex flex-col space-y-4 from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-6 md:gap-10 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
                <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
                <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
                <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
                <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
              </div>
              <div className="max-w-sm group grow">
                <h3 className="text-xl text-white">Global Impact</h3>
                <p className="mt-4 text-gray-700 dark:text-secondary group-hover:text-primary">AIBAMS empowers users around the world to digitize, automate, and grow—using tools made in India, for the world.</p>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex-1 pointer-events-none flex items-center justify-center">
                  <img
                    src="data:image /jpeg;base64,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"
                    alt="Global Impact"
                    className="w-[90%] h-[200px] md:h-[260px] mx-auto block group-hover:opacity-70 duration-100 group-hover:scale-75 origin-center animate-fade-in object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Strategic Focus box */}
            <div className="group relative px-4 py-6 md:px-0 md:py-10 h-full lg:p-8 flex flex-col space-y-4 from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0 lg:hover:bg-gradient-to-b md:flex-row lg:flex-col gap-6 md:gap-10 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-0 z-10 isolate border border-primary/10 group-hover:opacity-100 hidden lg:block">
                <div className="absolute -translate-x-px -translate-y-px -left-1 -top-1 size-2 bg-primary z-10"></div>
                <div className="absolute translate-x-px -translate-y-px -right-1 -top-1 size-2 bg-primary z-10"></div>
                <div className="absolute -translate-x-px translate-y-px -left-1 -bottom-1 size-2 bg-primary z-10"></div>
                <div className="absolute translate-x-px translate-y-px -right-1 -bottom-1 size-2 bg-primary z-10"></div>
              </div>
              <div className="max-w-sm group grow">
                <h3 className="text-xl text-white">Strategic Focus</h3>
                <p className="mt-4 text-gray-700 dark:text-secondary group-hover:text-primary">We prioritize what matters most: empowering businesses to focus on growth, innovation, and customer success with clarity and precision.</p>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex-1 pointer-events-none flex items-center justify-center">
                  <svg className="w-[90%] h-[200px] md:h-[260px] mx-auto block group-hover:opacity-70 duration-100 group-hover:scale-75 origin-center animate-fade-in" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                    <rect x="201.54" y="21.42" width="45.52" height="45.18" fill="#fff" />
                    <polygon fill="#fff" points="242.56 81.53 201.54 81.53 201.54 102.21 201.54 147.79 201.54 196.22 187.26 168.71 136.5 70.93 110.61 21.42 108.37 25.74 84.92 70.93 34.17 168.71 14.28 206.62 10.34 214.29 2.94 228.48 2.88 228.58 14.28 228.58 54.26 228.58 61.72 214.29 90.31 159.8 108.36 124.8 110.61 120.44 135.68 168.71 108.54 168.71 92 214.18 91.97 214.29 154.99 214.29 159.5 214.29 166.9 228.48 166.96 228.58 203.9 228.58 206.94 228.58 216.49 228.58 218.48 228.58 247.12 228.58 247.12 147.79 247.12 102.21 247.12 81.53 242.56 81.53" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Core Team Section */}
      <section className="w-full bg-black py-12 md:py-20 lg:py-24 border-t-[1px] border-zinc-800">
        {/* Team Members Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
  {/* Shiv Gadway */}
  <div className="flex flex-col items-center py-6 sm:py-8 cursor-pointer select-none relative">
    <div className="transition-all duration-300 hover:scale-105 transform-gpu origin-center">
      <img src={shivImg} alt="Shiv Gadway" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mb-2 shadow-lg border-4 border-[#222] bg-[#181818] mx-auto" />
      <h3 className="font-bold text-base sm:text-lg text-white mb-1 text-center">Shiv Gadway</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center">Developer</p>
    </div>
  </div>

  {/* Riyank */}
  <div className="flex flex-col items-center py-6 sm:py-8 cursor-pointer select-none relative">
    <div className="transition-all duration-300 hover:scale-105 transform-gpu origin-center">
      <img src={riyankImg} alt="Riyank" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mb-2 shadow-lg border-4 border-[#222] bg-[#181818] mx-auto" />
      <h3 className="font-bold text-base sm:text-lg text-white mb-1 text-center">Riyank Singh</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center">Developer</p>
    </div>
  </div>

  {/* Himnish Parmar */}
  <div className="flex flex-col items-center py-6 sm:py-8 cursor-pointer select-none relative">
    <div className="transition-all duration-300 hover:scale-105 transform-gpu origin-center">
      <img src={himnishImg} alt="Himnish Parmar" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mb-2 shadow-lg border-4 border-[#222] bg-[#181818] mx-auto" />
      <h3 className="font-bold text-base sm:text-lg text-white mb-1 text-center">Himnish Parmar</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center">CTO</p>
    </div>
  </div>

  {/* Vyonish Momaya */}
  <div className="flex flex-col items-center py-6 sm:py-8 cursor-pointer select-none relative">
    <div className="transition-all duration-300 hover:scale-105 transform-gpu origin-center">
      <img src={vyonishImg} alt="Vyonish Momaya" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mb-2 shadow-lg border-4 border-[#222] bg-[#181818] mx-auto" />
      <h3 className="font-bold text-base sm:text-lg text-white mb-1 text-center">Vyonish Momaya</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center">COO</p>
    </div>
  </div>

  {/* Mohd. Sakib Raja */}
  <div className="flex flex-col items-center py-6 sm:py-8 cursor-pointer select-none relative">
    <div className="transition-all duration-300 hover:scale-105 transform-gpu origin-center">
      <img src={sakibImg} alt="Mohd. Sakib Raja" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mb-2 shadow-lg border-4 border-[#222] bg-[#181818] mx-auto" />
      <h3 className="font-bold text-base sm:text-lg text-white mb-1 text-center">Mohd. Sakib Raja</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center">CMO</p>
    </div>
  </div>

  {/* Shubham Parmar */}
  <div className="flex flex-col items-center py-6 sm:py-8 cursor-pointer select-none relative">
    <div className="transition-all duration-300 hover:scale-105 transform-gpu origin-center">
      <img src={shubhamImg} alt="Shubham Parmar" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mb-2 shadow-lg border-4 border-[#222] bg-[#181818] mx-auto" />
      <h3 className="font-bold text-base sm:text-lg text-white mb-1 text-center">Shubham Parmar</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center">CEO & Founder</p>
    </div>
  </div>
</div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// MarqueeContributors component
function MarqueeContributors() {
  const names = [
    "Riyank Singh",
    "Shiv Gadway",
    "Vyonish Momaya",
    "Himnish Parmar",
    "Shubham Parmar"
  ];
  // Repeat names enough times for seamless loop
  const repeatedNames = Array(10).fill(names).flat();
  // Calculate width for seamless loop
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth);
    }
  }, []);
  return (
    <div
      className="marquee-wrapper mt-8"
      style={{
        background: 'transparent',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    >
      <motion.div
        className="marquee"
        ref={marqueeRef}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
        animate={{ x: [0, -width / 2] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 240
        }}
      >
        {/* Repeat names twice for seamless loop */}
        {repeatedNames.concat(repeatedNames).map((name, idx) => (
          <span key={idx} style={{ margin: '0 2rem', fontSize: '0.875rem', color: 'white', display: 'inline-block' }}>{name}</span>
        ))}
      </motion.div>
      <style>{`
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 60px;
        }
      `}</style>
    </div>
  );
} 