// import { useState, useEffect, useRef } from "react";
// import HeaderWhite from "@/components/HeaderWhite";
// import Footer from "@/components/Footer";
// import CircleBackground from "@/components/TriangleBackground";

// const webxItems = [
//   {
//     title: "WebX Launches: Next-Gen Website Builder",
//     date: "July 10, 2025",
//     summary:
//       "WebX is now live! Build stunning, AI-powered websites in minutes with drag-and-drop simplicity and deep business integrations.",
//     link: "#",
//   },
//   {
//     title: "AI Content Generation Now in WebX",
//     date: "July 8, 2025",
//     summary:
//       "Generate SEO-optimized content, images, and layouts instantly with WebX's integrated AI assistant.",
//     link: "#",
//   },
//   {
//     title: "WebX Marketplace Opens",
//     date: "July 5, 2025",
//     summary:
//       "Explore and install plugins, templates, and automations from the new WebX Marketplace to supercharge your site.",
//     link: "#",
//   },
//   {
//     title: "One-Click E-Commerce Setup",
//     date: "July 2, 2025",
//     summary:
//       "Launch your online store with WebX's e-commerce suite: payments, inventory, analytics, and more—all in one place.",
//     link: "#",
//   },
// ];

// export default function WebX() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [headerWhite, setHeaderWhite] = useState(false);
//   const heroRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.pageYOffset;
//       setIsScrolled(scrolled > 50);
//       const lightEffect = document.querySelector(".bg-light-source");
//       if (lightEffect) {
//         (lightEffect as HTMLElement).style.transform = `translateY(${scrolled * 0.1}px)`;
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (!heroRef.current) return;
//     const observer = new window.IntersectionObserver(
//       ([entry]) => {
//         setHeaderWhite(!entry.isIntersecting);
//       },
//       { threshold: 0.45 }
//     );
//     observer.observe(heroRef.current);
//     return () => observer.disconnect();
//   }, [heroRef]);

//   return (
//     <div className="min-h-screen bg-gray-900">
//       <HeaderWhite />
//       <div ref={heroRef}>
//         <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#000000]">
//           <CircleBackground />
//           <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
//               <span className="text-sm text-gray-300">AIBAMS WebX</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
//               AIBAMS WebX
//             </h1>
//             <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Seamless. Smart. WebX — Where Every Pixel Resonates Innovation.
//             </p>
//           </div>
//         </section>
//       </div>




//       <div className="w-full border-t" style={{ borderColor: 'rgb(39 39 42 / var(--tw-border-opacity, 1))' }}></div>
      
      
      
//       {/* WebX Details Section */}
//       <section className="w-full bg-black py-24 px-4 relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
//         {/* Radial gradient overlay */}
//         <div
//           style={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             zIndex: 1,
//             background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6) 100%)',
//             pointerEvents: 'none',
//           }}
//         />
//         <div className="relative z-10 max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AIBAMS WebX</h2>
//           <p className="text-lg text-gray-300 mb-12">
//             Seamless. Smart. WebX — Where Every Pixel Resonates Innovation.
//           </p>
//           <p className="text-base md:text-lg text-gray-300 mb-16 leading-relaxed">
//             AIBAMS introduces a groundbreaking milestone: <b>AI Website Builder</b><br/>
//             Unleash your digital presence effortlessly with our cutting-edge tool, <b>AIBAMS WebX</b>. Elevate your online presence with unparalleled ease using fully customizable options, intuitive drag-and-drop functionality, advanced developer-side features—all seamlessly powered by AI & MORE :). Witness the magic of image auto enhancement, auto background removal, and flexible site-building options offering a myriad of layout alternatives.<br/><br/>
//             Yet, WebX is merely the opening act. As the flagship among our suite of 45+ applications, it sets the stage for a connected digital ecosystem where innovation and intelligence converge. Your website isn't just built; it's crafted with precision, ingenuity, and the transformative power of AIBAMS.
//           </p>
//           {/* Features grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Feature: AI Builder */}
//             <div className="group relative p-8 bg-black border border-white/10 rounded-2xl shadow hover:scale-105 transition-all duration-300">
//               <span className="inline-block mb-4 text-blue-400">
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-2">AI Website Builder</h3>
//               <p className="text-sm text-gray-300">Let AI generate beautiful, responsive websites tailored to your business in seconds.</p>
//             </div>
//             {/* Feature: Drag & Drop */}
//             <div className="group relative p-8 bg-black border border-white/10 rounded-2xl shadow hover:scale-105 transition-all duration-300">
//               <span className="inline-block mb-4 text-green-400">
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-2">Drag & Drop Simplicity</h3>
//               <p className="text-sm text-gray-300">Intuitive, real-time editing with pixel-perfect control—no coding required.</p>
//             </div>
//             {/* Feature: Image Enhancement */}
//             <div className="group relative p-8 bg-black border border-white/10 rounded-2xl shadow hover:scale-105 transition-all duration-300">
//               <span className="inline-block mb-4 text-pink-400">
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6"/></svg>
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-2">Image Auto Enhancement</h3>
//               <p className="text-sm text-gray-300">Automatically improve image quality and vibrance for a professional look.</p>
//             </div>
//             {/* Feature: Background Removal */}
//             <div className="group relative p-8 bg-black border border-white/10 rounded-2xl shadow hover:scale-105 transition-all duration-300">
//               <span className="inline-block mb-4 text-yellow-400">
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 8h8v8H8z"/></svg>
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-2">Auto Background Removal</h3>
//               <p className="text-sm text-gray-300">Effortlessly remove backgrounds from images for clean, modern designs.</p>
//             </div>
//             {/* Feature: Layout Options */}
//             <div className="group relative p-8 bg-black border border-white/10 rounded-2xl shadow hover:scale-105 transition-all duration-300">
//               <span className="inline-block mb-4 text-purple-400">
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-2">Flexible Layouts</h3>
//               <p className="text-sm text-gray-300">Choose from a variety of modern, responsive layouts to match your brand.</p>
//             </div>
//             {/* Feature: Developer Tools */}
//             <div className="group relative p-8 bg-black border border-white/10 rounded-2xl shadow hover:scale-105 transition-all duration-300">
//               <span className="inline-block mb-4 text-cyan-400">
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
//               </span>
//               <h3 className="text-xl font-semibold text-white mb-2">Advanced Developer Tools</h3>
//               <p className="text-sm text-gray-300">Unlock custom code, integrations, and advanced site controls for power users.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// } 





import React, { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
//import WebXBackground from "@/components/WebXBackground";
import logoWebX from "../assets/icon-webx-n.svg";
import CircleBackground from "@/components/TriangleBackground";

export default function FusionWebX() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <HeaderWhite />

      {/* 1. Hero Section */}
      <div ref={heroRef}>
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* WebX Background - positioned absolutely within hero section */}
          
            {/* <WebXBackground /> */}
            <CircleBackground />
          

          {/* Content with higher z-index */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-sm text-gray-300">AIBAMS Fusion Suite</span>
            </div>
            <h1 className="flex items-center justify-center gap-3 md:gap-4 mb-8">
              <span className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
                <img
                  src={logoWebX}
                  alt="Fusion WebX Logo"
                  className="h-full w-full object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(60%) sepia(90%) saturate(1200%) hue-rotate(80deg) brightness(1.1) contrast(1.2)'
                  }}
                />
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Fusion-WebX
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Websites. Made by AI. Launched by You.
            </p>
          </div>
        </section>
      </div>


      {/* 2. Overview Section */}
      <section className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden">
        {/* Section border dividers */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

        {/* Glow effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/30 blur-[80px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-900/30 blur-[100px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {/* <span className="inline-block mr-3">🚀</span> */}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fusion-WebX transforms your ideas into a fully functional website — instantly. With AI-generated layouts, content, and hosting built-in, you can go from concept to live site in minutes. No code, no clutter, just conversion-ready design.
            </p>
          </div>
        </div>
      </section>




      {/* 3. Features Section */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden border-t border-b border-gray-800/50">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-900/30 to-transparent blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-tl from-purple-900/30 to-transparent blur-[120px]"></div>
        </div>

        {/* Section Border (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-4">
              <span className="text-xs tracking-widest text-gray-300 font-medium"># WHAT IT PACKS</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Core Features</span>
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-blue-500/80 to-purple-600/80 mx-auto mt-6"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "✨",
                title: "AI Layout & Content",
                description: "Auto-generates text, images & section structures",
                color: "blue-400"
              },
              {
                emoji: "🔒",
                title: "Free SSL & Hosting",
                description: "Secure cloud hosting with zero setup required",
                color: "purple-400"
              },
              {
                emoji: "🌍",
                title: "SEO-First Engine",
                description: "Optimized metadata, speed, and indexability",
                color: "pink-400"
              },
              {
                emoji: "💬",
                title: "Built-in Contact Forms",
                description: "Get leads straight to your dashboard",
                color: "emerald-400"
              },
              {
                emoji: "🛍️",
                title: "E-Commerce (Coming Soon)",
                description: "Product pages, cart, and checkout coming next rollout",
                color: "amber-400"
              },
              {
                emoji: "🌐",
                title: "Custom Domain Ready",
                description: "Plug your .com into WebX in 2 clicks",
                color: "indigo-400"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-[var(--color)]/10"
                style={{ '--color': `rgb(var(--${feature.color.split('-')[0]}-400))` } as React.CSSProperties}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-${feature.color.split('-')[0]}-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`text-4xl mb-5 text-${feature.color} group-hover:scale-110 transition-all duration-300`}>
                    {feature.emoji}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* 4. Use Cases Section - Divided Layout */}
      <section className="py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-900/20 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-900/20 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># WHO'S USING WEBX?</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              👤 Real Users, Real Impact
            </h3>
          </div>

          {/* 4-Column Grid with Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-4 px-2 gap-0 md:divide-x md:divide-gray-800">
            {[
              { emoji: "🎨", title: "Solo Creators & Influencers", description: "Craft stunning personal brands and portfolios, no devs required", color: "blue" },
              { emoji: "🏢", title: "Local Businesses", description: "Establish online presence, collect leads, and grow locally", color: "purple" },
              { emoji: "🧪", title: "Startup Founders", description: "Need an MVP or product launch page fast? This is it", color: "pink" },
              { emoji: "🎯", title: "Digital Agencies", description: "Build & deploy client websites at scale — with zero code", color: "green" }
            ].map((useCase, index) => (
              <div key={index} className="group relative p-8 text-center">
                {/* Vertical divider - only between items */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                )}

                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.emoji}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </section>

      {/* 5. CTA Section */}
      <section className="relative py-28 px-6 sm:px-8 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-900/5 blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-900/5 blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 p-0.5 rounded-full">
              <div className="bg-black rounded-full px-4 py-1 border border-gray-800">
                <span className="text-xs font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  EARLY ACCESS
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ⚡ Make Your Web Presence Instant
          </h3>

          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Claim your WebX and launch within the hour — really.
          </p>

          <div className="relative group max-w-fit mx-auto mb-8">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/20">
              🌐 LAUNCH WITH WEBX
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            Free AI site builds & hosting for early access members.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </section>



      <Footer />
    </div>
  );
}



