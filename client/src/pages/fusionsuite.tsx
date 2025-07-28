// import React, { useState, useRef, useEffect } from "react";
// import HeaderWhite from "@/components/HeaderWhite";
// import Footer from "@/components/Footer";
// import Dither from "../components/Dither";
// // import Particles from "@/components/Particles";
// import logoWebx from "../assets/icon-webx-n.svg";
// import logoChat from "../assets/icon-chat-n.svg";
// import logoDoc from "../assets/icon-doc-n.svg";
// import logoMail from "../assets/icon-mail-n.svg";
// import logoSheet from "../assets/icon-sheet-n.svg";
// import logoDrive from "../assets/icon-drive-n.svg";
// // import { Canvas } from "@react-three/fiber";
// // import Threads from "../components/icon";
// import LaunchSection from "@/components/LaunchSection";
// import * as VANTA from 'vanta/dist/vanta.topology.min';
// import p5 from 'p5';
// import { FlipHorizontal, FlipVertical } from "lucide-react";


// export default function FusionSuite() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [lockedIndex, setLockedIndex] = useState<number | null>(null);
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const vantaEffect = useRef<any>(null);
//   const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const bgRef = useRef<HTMLDivElement>(null);
//   const fgRef = useRef<HTMLDivElement>(null);
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Place this near the top of the FusionSuite component, after icons and iconFilters
//   const tooltips = [
//     { heading: 'WebX', content: 'Launch stunning, AI-built websites in minutes—complete with SEO, forms, hosting, and zero code setup.' },
//     { heading: 'Fusion Mail', content: ' Professional-grade email with smart sorting, auto-responses, and AI insights—built for high-performance communication.' },
//     { heading: 'Fusion Doc', content: 'Create, edit, and collaborate on smart documents with built-in AI support and seamless tool integration—perfect for modern teams.' },
//     { heading: 'Fusion Sheet', content: 'Harness powerful data analytics, dynamic formulas, and automation to make every spreadsheet a growth engine.' },
//     { heading: 'Fusion Drive', content: ' Secure, scalable cloud storage to manage and access files across your business—fully integrated with Docs, Sheets, and WebX.' },
//     { heading: 'Fusion Chat', content: ' Unlock an AI-powered assistant for business insights, content creation, and real-time support—securely integrated across all your workflows.' },
//   ];

//   const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
//   const [scrollActiveIndex, setScrollActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (hoveredIndex !== null || lockedIndex !== null) return; // Don't update if hovering or locked
//       let minDistance = Infinity;
//       let activeIdx = 0;
//       iconRefs.current.forEach((ref, i) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const iconCenter = rect.top + rect.height / 2;
//           const viewportCenter = window.innerHeight / 2;
//           const distance = Math.abs(iconCenter - viewportCenter);
//           if (distance < minDistance) {
//             minDistance = distance;
//             activeIdx = i;
//           }
//         }
//       });
//       setScrollActiveIndex(activeIdx);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [hoveredIndex, lockedIndex]);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = VANTA.default({
//         el: vantaRef.current,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00,
//         color: 0xefde20,
//         backgroundColor: 0x545449,
//         p5: p5,
//       });
//     }
//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//         vantaEffect.current = null;
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!bgRef.current || !capabilitiesSectionRef.current) return;
//     const sectionRect = capabilitiesSectionRef.current.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     const scrollY = Math.max(0, windowHeight - sectionRect.top);
//     const bgSpeed = 0.08; // slower background
//     bgRef.current.style.transform = `translateY(${scrollY * bgSpeed}px) scaleX(-1)`;
//   }, []);

//   useEffect(() => {
//     function handleParallaxScroll() {
//       if (!bgRef.current || !fgRef.current) return;
//       const scrollY = window.scrollY;
//       // Background moves up (negative Y), foreground moves down (positive Y)
//       bgRef.current.style.transform = `scaleX(-1) translateY(${-scrollY * 0.10}px)`;
//       fgRef.current.style.transform = `translateY(${scrollY * 0.10}px)`;
//     }
//     window.addEventListener('scroll', handleParallaxScroll);
//     return () => window.removeEventListener('scroll', handleParallaxScroll);
//   }, []);

//   // Highlight arc box based on scroll position of right-side content
//   useEffect(() => {
//     const handleContentScroll = () => {
//       if (!contentRefs.current.length) return;
//       let activeIdx = 0;
//       let minDistance = Infinity;
//       contentRefs.current.forEach((ref, i) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const distance = Math.abs(rect.top - window.innerHeight / 2);
//           if (distance < minDistance) {
//             minDistance = distance;
//             activeIdx = i;
//           }
//         }
//       });
//       setScrollActiveIndex(activeIdx);
//     };
//     const scrollable = document.getElementById('fusion-suite-scrollable-content');
//     if (scrollable) {
//       scrollable.addEventListener('scroll', handleContentScroll);
//     }
//     return () => {
//       if (scrollable) {
//         scrollable.removeEventListener('scroll', handleContentScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Header */}
//       <HeaderWhite />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
//         {/* Hero background gradient with mask, blur, and blending */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             zIndex: 0,
//             pointerEvents: 'none',
//             background: 'conic-gradient(from 180deg at 50% 50%, lab(80% 60 -60) 0deg, lab(90% 0 80) 60deg, lab(100% -60 60) 120deg, lab(90% 0 -80) 180deg, lab(80% 60 60) 240deg, lab(80% 60 -60) 360deg)',
//             maskImage: 'url(/src/assets/circle.png)',
//             WebkitMaskImage: 'url(/src/assets/circle.png)',
//             maskSize: 'cover',
//             WebkitMaskSize: 'cover',
//             maskRepeat: 'no-repeat',
//             WebkitMaskRepeat: 'no-repeat',
//             maskPosition: 'center',
//             WebkitMaskPosition: 'center',
//             filter: 'blur(32px)',
//             opacity: 0.7,
//             mixBlendMode: 'lighten',
//             transition: 'opacity 0.3s',
//           }}
//         />
//         {/* Hero content and widgets */}
//         <div className="relative max-w-4xl mx-auto px-6 text-center z-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
//             <span className="text-sm text-gray-300">Fusion Suite</span>
//           </div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent whitespace-nowrap">
//             AIBAMS Fusion Suite
//           </h1>
//           <p className="text-base md:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//           Elevate Every Aspect. – A Unified Fusion of Intelligent Applications for Limitless Business Growth.</p>

//         </div>
//       </section>

//       {/* Suite Overview Section */}
//       <section className="w-full bg-black py-24 pl-[6.5rem] pr-[5rem] border-t-[1px] border-zinc-800 relative">

//         <div className="pr-4 flex flex-col items-start justify-center max-w-6xl mx-auto">
//           <div className="mb-10 w-full">
//             <div className="text-xs tracking-widest text-gray-500 mb-2 text-center"># SUITE OVERVIEW</div>
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">Welcome to the AIBAMS Suite</h2>
//             <p className="text-[0.875rem] text-gray-300 leading-relaxed mb-6 text-justify">
//             Step into the AIBAMS Suite—a revolutionary ecosystem of 45+ AI-driven applications crafted to transform how businesses operate. From Finance and Sales to HR, Inventory, Marketing, Websites, Services, and beyond—every app is purpose-built for efficiency, scalability, and smart automation.</p>
//             <p className="text-[0.875rem] text-gray-300 leading-relaxed mb-6 text-justify">
//             Each tool works seamlessly together, creating a connected experience that helps businesses adapt fast, reduce manual tasks, and unlock new growth avenues with unmatched speed and precision.</p>
//             <p className="text-[0.875rem] text-gray-300 leading-relaxed mb-6 text-justify">
//             Experience the power of one ecosystem, where intelligent automation drives data-backed decisions, custom workflows, and a dynamic management environment tailored to your needs.</p>
//             <p className="text-[0.875rem] text-gray-300 leading-relaxed mb-6 text-justify">
//             Stay competitive with predictive analytics, deep integrations, and adaptive AI systems that evolve with your business landscape.</p>
//             <p className="font-semibold text-white text-[0.875rem] leading-relaxed text-justify">
//             The future of business management is here. AIBAMS is launching soon—get ready to lead with intelligence, efficiency, and growth.</p>
//           </div>
//         </div>
//       </section>

//       {/* AI Tools Cross Layout Section */}
//       <section ref={capabilitiesSectionRef} className="w-full bg-black py-24 pl-[2rem] border-t-[1px] relative overflow-hidden min-h-[200vh]">
//       <div className="pr-4 flex flex-col items-start justify-center max-w-6xl mx-auto">
//       <div className="mb-10 w-full">
//       <div className="text-xs tracking-widest text-gray-500 mb-2 text-left"># CAPABILITIES</div>
//       <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-left">AI tools that will help your business grow exponentially </h2>

//        </div>
//        </div>
//         <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', zIndex: 1, overflow: 'hidden' }}>
//           {/* Absolutely Positioned Background */}
//           <div
//             ref={bgRef}
//             style={{
//               position: "absolute",
//               top: '85px',
//               left: '2%',
//               // transform: 'translateX(-50%) scaleX(-1)',
//               width: 400,
//               height: 400,
//               background: "radial-gradient(circle at center, #ffffff 1%, 20%, transparent 65%, transparent 100%)",
//               borderRadius: "100%",
//               border: "none",
//               outline: "none",
//               boxShadow: "none",
//               maskImage: "url('/src/assets/circle.png')",
//               WebkitMaskImage: "url('/src/assets/circle.png')",
//               maskSize: "120% 120%",
//               WebkitMaskSize: "120% 120%",
//               maskPosition: "center",
//               WebkitMaskPosition: "center",
//               maskRepeat: "no-repeat",
//               WebkitMaskRepeat: "no-repeat",
//               filter: "blur(5px)",
//               zIndex: 0,
//               pointerEvents: 'none',
//               transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
//               margin: '0 auto',
//             }}
//           />
//           {/* Foreground: Arc and Scrollable Content */}
//           <div className="max-w-6xl mx-auto flex flex-row items-center relative z-10 transition-transform duration-200 will-change-transform" style={{ height: '100vh', position: 'relative' }}>
//             {/* Fusion Suite Logo on the far left, vertically centered */}
//             <div style={{ position: 'absolute', left: '-15%', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
//               <img src="/src/assets/fusion-suite.png" alt="Fusion Suite" style={{ width: "30%", height: "30%", transform: 'rotate(90deg)' }} />
//             </div>
//             {/* Arc of icon boxes on the left */}
//             <div style={{ width: 220, height: 320, position: 'absolute', marginRight: 40, left: 220, top: '46%', transform: 'translateY(-50%)' }}>
//               {(() => {
//                 const logoWidth = 520 / 3;
//                 const arcWidth = logoWidth;
//                 const centerX = arcWidth / 2;
//                 const centerY = 160;
//                 const boxSize = 80;
//                 const icons = [
//                   { src: logoWebx, alt: 'webX' },
//                   { src: logoMail, alt: 'fusionMail' },
//                   { src: logoDoc, alt: 'fusionDoc' },
//                   { src: logoSheet, alt: 'fusionSheet' },
//                   { src: logoDrive, alt: 'fusionDrive' },
//                   { src: logoChat, alt: 'fusionChat' },
//                 ];
//                 const iconFilters = [
//                   'brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(2000%) hue-rotate(60deg) brightness(1.2) contrast(1)',
//                   'brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(2000%) hue-rotate(15deg) brightness(1.1) contrast(1)',
//                   'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(260deg) brightness(1.1) contrast(1)',
//                   'brightness(0) saturate(100%) invert(65%) sepia(100%) saturate(1500%) hue-rotate(140deg) brightness(1) contrast(1)',
//                   'brightness(0) saturate(100%) invert(41%) sepia(100%) saturate(1500%) hue-rotate(210deg) brightness(1) contrast(1)',
//                   'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(2000%) hue-rotate(345deg) brightness(1.2) contrast(1)',
//                 ];
//                 return (
//                   <div style={{ position: 'relative', width: arcWidth, height: 320, transform: 'rotate(89deg)' }}>
//                     {icons.map((icon, i) => {
//                       const startDeg = 170;
//                       const endDeg = 10;
//                       const startAngle = (startDeg * Math.PI) / 180;
//                       const endAngle = (endDeg * Math.PI) / 180;
//                       const angle = startAngle - i * ((startAngle - endAngle) / (icons.length - 1));
//                       const arcRadius = 180;
//                       let x = centerX + arcRadius * Math.cos(angle) - boxSize / 2 + 30;
//                       let y = centerY - arcRadius * Math.sin(angle) - boxSize / 2 + 220;
//                       if (i === 1) x -= 20;
//                       if (i === 4) x += 20;
//                       if (i === 2 || i === 3) { y += 40; y -= 20; }
//                       if (i === 0) { x -= 20; y += 18; }
//                       if (i === 5) { x += 20; y += 18; }
//                       // Determine if this box is active
//                       const isActive = scrollActiveIndex === i;
//                       return (
//                         <div
//                           key={icon.alt}
//                           className={`absolute group border w-16 h-16 flex items-center justify-center rounded-full bg-black animate-fade-in cursor-pointer m-0 p-0 transition-all duration-300 hover:z-20
//                             ${isActive ? 'border-yellow-400 scale-110 shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] z-20' : 'border-zinc-800' }
//                           `}
//                           style={{ ...((typeof x !== 'undefined' && typeof y !== 'undefined') ? { left: `${x}px`, top: `${y}px` } : {}), transform: 'rotate(-90deg)' }}
//                         >
//                           <img src={icon.src} className="w-8 h-8 z-10 m-0 p-0" alt={icon.alt} style={{ filter: iconFilters[i] }} />
//                           <span className="pointer-events-none absolute inset-0 border-transparent rounded-full group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               })()}
//             </div>
//             {/* Scrollable Right-side Content */}
//             <div id="fusion-suite-scrollable-content" style={{ width: 550, height: '45vh', overflowY: 'auto', background: '#000', borderRadius: 16, padding: 24, marginLeft: 'auto', alignSelf: 'center', border: '1px solid #333', textAlign: 'center', justifyContent:'center', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//               <style>{`
//                 #fusion-suite-scrollable-content::-webkit-scrollbar { display: none; }
//               `}</style>
//               {tooltips.map((item, i) => (
//                 <div
//                   key={i}
//                   ref={el => contentRefs.current[i] = el}
//                   style={{ minHeight: 200, marginBottom: 48, padding: 24, background: scrollActiveIndex === i ? '#000' : 'transparent', borderRadius: 12, transition: 'background 0.3s', cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(45vh - 48px)' }}
//                   onMouseEnter={e => (e.currentTarget.style.background = '#000')}
//                   onMouseLeave={e => (e.currentTarget.style.background = scrollActiveIndex === i ? '#000' : 'transparent')}
//                 >
//                   <div className="text-white font-bold text-lg mb-2 text-center">{item.heading}</div>
//                   <div className="text-gray-300 text-sm text-center">{item.content}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Launch Section */}
//       <LaunchSection />

//       {/* Footer */}
//       <Footer />

//     </div>
//   );
// }




// import React, { useState, useRef, useEffect } from "react";
// import HeaderWhite from "@/components/HeaderWhite";
// import Footer from "@/components/Footer";
// import Dither from "../components/Dither";
// // import Particles from "@/components/Particles";
// import logoWebx from "../assets/icon-webx-n.svg";
// import logoChat from "../assets/icon-chat-n.svg";
// import logoDoc from "../assets/icon-doc-n.svg";
// import logoMail from "../assets/icon-mail-n.svg";
// import logoSheet from "../assets/icon-sheet-n.svg";
// import logoDrive from "../assets/icon-drive-n.svg";
// // import { Canvas } from "@react-three/fiber";
// // import Threads from "../components/icon";
// import LaunchSection from "@/components/LaunchSection";
// import * as VANTA from 'vanta/dist/vanta.topology.min';
// import p5 from 'p5';
// import { FlipHorizontal, FlipVertical } from "lucide-react";


// export default function FusionSuite() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [lockedIndex, setLockedIndex] = useState<number | null>(null);
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const vantaEffect = useRef<any>(null);
//   const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const bgRef = useRef<HTMLDivElement>(null);
//   const fgRef = useRef<HTMLDivElement>(null);
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Place this near the top of the FusionSuite component, after icons and iconFilters
//   const tooltips = [
//     { heading: 'WebX', content: 'Launch stunning, AI-built websites in minutes—complete with SEO, forms, hosting, and zero code setup.' },
//     { heading: 'Fusion Mail', content: ' Professional-grade email with smart sorting, auto-responses, and AI insights—built for high-performance communication.' },
//     { heading: 'Fusion Doc', content: 'Create, edit, and collaborate on smart documents with built-in AI support and seamless tool integration—perfect for modern teams.' },
//     { heading: 'Fusion Sheet', content: 'Harness powerful data analytics, dynamic formulas, and automation to make every spreadsheet a growth engine.' },
//     { heading: 'Fusion Drive', content: ' Secure, scalable cloud storage to manage and access files across your business—fully integrated with Docs, Sheets, and WebX.' },
//     { heading: 'Fusion Chat', content: ' Unlock an AI-powered assistant for business insights, content creation, and real-time support—securely integrated across all your workflows.' },
//   ];

//   const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
//   const [scrollActiveIndex, setScrollActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (hoveredIndex !== null || lockedIndex !== null) return; // Don't update if hovering or locked
//       let minDistance = Infinity;
//       let activeIdx = 0;
//       iconRefs.current.forEach((ref, i) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const iconCenter = rect.top + rect.height / 2;
//           const viewportCenter = window.innerHeight / 2;
//           const distance = Math.abs(iconCenter - viewportCenter);
//           if (distance < minDistance) {
//             minDistance = distance;
//             activeIdx = i;
//           }
//         }
//       });
//       setScrollActiveIndex(activeIdx);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [hoveredIndex, lockedIndex]);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = VANTA.default({
//         el: vantaRef.current,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00,
//         color: 0xefde20,
//         backgroundColor: 0x545449,
//         p5: p5,
//       });
//     }
//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//         vantaEffect.current = null;
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!bgRef.current || !capabilitiesSectionRef.current) return;
//     const sectionRect = capabilitiesSectionRef.current.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     const scrollY = Math.max(0, windowHeight - sectionRect.top);
//     const bgSpeed = 0.08; // slower background
//     bgRef.current.style.transform = `translateY(${scrollY * bgSpeed}px) scaleX(-1)`;
//   }, []);

//   useEffect(() => {
//     function handleParallaxScroll() {
//       if (!bgRef.current || !fgRef.current) return;
//       const scrollY = window.scrollY;
//       // Background moves up (negative Y), foreground moves down (positive Y)
//       bgRef.current.style.transform = `scaleX(-1) translateY(${-scrollY * 0.10}px)`;
//       fgRef.current.style.transform = `translateY(${scrollY * 0.10}px)`;
//     }
//     window.addEventListener('scroll', handleParallaxScroll);
//     return () => window.removeEventListener('scroll', handleParallaxScroll);
//   }, []);

//   // Highlight arc box based on scroll position of right-side content
//   useEffect(() => {
//     const handleContentScroll = () => {
//       if (!contentRefs.current.length) return;
//       let activeIdx = 0;
//       let minDistance = Infinity;
//       contentRefs.current.forEach((ref, i) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const distance = Math.abs(rect.top - window.innerHeight / 2);
//           if (distance < minDistance) {
//             minDistance = distance;
//             activeIdx = i;
//           }
//         }
//       });
//       setScrollActiveIndex(activeIdx);
//     };
//     const scrollable = document.getElementById('fusion-suite-scrollable-content');
//     if (scrollable) {
//       scrollable.addEventListener('scroll', handleContentScroll);
//     }
//     return () => {
//       if (scrollable) {
//         scrollable.removeEventListener('scroll', handleContentScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Header */}
//       <HeaderWhite />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
//         {/* Hero background gradient with mask, blur, and blending */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             zIndex: 0,
//             pointerEvents: 'none',
//             background: 'conic-gradient(from 180deg at 50% 50%, lab(80% 60 -60) 0deg, lab(90% 0 80) 60deg, lab(100% -60 60) 120deg, lab(90% 0 -80) 180deg, lab(80% 60 60) 240deg, lab(80% 60 -60) 360deg)',
//             maskImage: 'url(/src/assets/circle.png)',
//             WebkitMaskImage: 'url(/src/assets/circle.png)',
//             maskSize: 'cover',
//             WebkitMaskSize: 'cover',
//             maskRepeat: 'no-repeat',
//             WebkitMaskRepeat: 'no-repeat',
//             maskPosition: 'center',
//             WebkitMaskPosition: 'center',
//             filter: 'blur(32px)',
//             opacity: 0.7,
//             mixBlendMode: 'lighten',
//             transition: 'opacity 0.3s',
//           }}
//         />
//         {/* Hero content and widgets */}
//         <div className="relative max-w-4xl mx-auto px-6 text-center z-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
//             <span className="text-sm text-gray-300">Fusion Suite</span>
//           </div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent whitespace-nowrap">
//             AIBAMS Fusion Suite
//           </h1>
//           <p className="text-base md:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//             Elevate Every Aspect. – A Unified Fusion of Intelligent Applications for Limitless Business Growth.</p>

//         </div>
//       </section>

      {/* Suite Overview Section */}
      {/* Suite Overview Section - Optimized Responsive */}
      // <section className="w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 border-t border-zinc-800 relative">
      //   <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
      //     <div className="w-full mb-8 sm:mb-10 md:mb-12">
      //       <div className="text-xs tracking-widest text-gray-500 mb-2 text-center"># SUITE OVERVIEW</div>
      //       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 text-center">
      //         Welcome to the AIBAMS Suite
      //       </h2>

      //       <div className="space-y-4 sm:space-y-5 md:space-y-6">
      //         <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
      //           Step into the AIBAMS Suite—a revolutionary ecosystem of 45+ AI-driven applications crafted to transform how businesses operate. From Finance and Sales to HR, Inventory, Marketing, Websites, Services, and beyond—every app is purpose-built for efficiency, scalability, and smart automation.
      //         </p>

      //         <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
      //           Each tool works seamlessly together, creating a connected experience that helps businesses adapt fast, reduce manual tasks, and unlock new growth avenues with unmatched speed and precision.
      //         </p>

      //         <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
      //           Experience the power of one ecosystem, where intelligent automation drives data-backed decisions, custom workflows, and a dynamic management environment tailored to your needs.
      //         </p>

      //         <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
      //           Stay competitive with predictive analytics, deep integrations, and adaptive AI systems that evolve with your business landscape.
      //         </p>

      //         <p className="font-semibold text-white text-sm sm:text-[0.875rem] leading-relaxed sm:leading-loose text-justify">
      //           The future of business management is here. AIBAMS is launching soon—get ready to lead with intelligence, efficiency, and growth.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </section>





//       {/* AI Tools Cross Layout Section */}





//       {/* Launch Section */}
//       <LaunchSection />

//       {/* Footer */}
//       <Footer />

//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import logoWebx from "../assets/icon-webx-n.svg";
import logoChat from "../assets/icon-chat-n.svg";
import logoDoc from "../assets/icon-doc-n.svg";
import logoMail from "../assets/icon-mail-n.svg";
import logoSheet from "../assets/icon-sheet-n.svg";
import logoDrive from "../assets/icon-drive-n.svg";
import LaunchSection from "@/components/LaunchSection";

export default function FusionSuite() {
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);
  const desktopContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Define icons array
  const icons = [
    { src: logoWebx, alt: 'webX' },
    { src: logoMail, alt: 'fusionMail' },
    { src: logoDoc, alt: 'fusionDoc' },
    { src: logoSheet, alt: 'fusionSheet' },
    { src: logoDrive, alt: 'fusionDrive' },
    { src: logoChat, alt: 'fusionChat' },
  ];

  // Define icon filters
  const iconFilters = [
    'brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(2000%) hue-rotate(60deg) brightness(1.2) contrast(1)',
    'brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(2000%) hue-rotate(15deg) brightness(1.1) contrast(1)',
    'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(260deg) brightness(1.1) contrast(1)',
    'brightness(0) saturate(100%) invert(65%) sepia(100%) saturate(1500%) hue-rotate(140deg) brightness(1) contrast(1)',
    'brightness(0) saturate(100%) invert(41%) sepia(100%) saturate(1500%) hue-rotate(210deg) brightness(1) contrast(1)',
    'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(2000%) hue-rotate(345deg) brightness(1.2) contrast(1)',
  ];

  // Define tooltips
  const tooltips = [
    { heading: 'WebX', content: 'Launch stunning, AI-built websites in minutes—complete with SEO, forms, hosting, and zero code setup.' },
    { heading: 'Fusion Mail', content: 'Professional-grade email with smart sorting, auto-responses, and AI insights—built for high-performance communication.' },
    { heading: 'Fusion Doc', content: 'Create, edit, and collaborate on smart documents with built-in AI support and seamless tool integration—perfect for modern teams.' },
    { heading: 'Fusion Sheet', content: 'Harness powerful data analytics, dynamic formulas, and automation to make every spreadsheet a growth engine.' },
    { heading: 'Fusion Drive', content: 'Secure, scalable cloud storage to manage and access files across your business—fully integrated with Docs, Sheets, and WebX.' },
    { heading: 'Fusion Chat', content: 'Unlock an AI-powered assistant for business insights, content creation, and real-time support—securely integrated across all your workflows.' },
  ];

  // Handle mobile icon click
  const handleMobileIconClick = (index: number) => {
    setScrollActiveIndex(index);
    if (mobileScrollRef.current && mobileContentRefs.current[index]) {
      mobileContentRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  // Handle mobile scroll to detect active content
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerHeight = container.clientHeight;
      const scrollPosition = container.scrollTop + containerHeight / 3;

      mobileContentRefs.current.forEach((ref, index) => {
        if (ref) {
          const refTop = ref.offsetTop;
          const refHeight = ref.clientHeight;

          if (scrollPosition >= refTop && scrollPosition <= refTop + refHeight) {
            setScrollActiveIndex(index);
          }
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop scroll handler (your original implementation)
  useEffect(() => {
    const handleContentScroll = () => {
      if (!desktopContentRefs.current.length) return;
      let activeIdx = 0;
      let minDistance = Infinity;
      desktopContentRefs.current.forEach((ref, i) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            activeIdx = i;
          }
        }
      });
      setScrollActiveIndex(activeIdx);
    };

    const scrollable = document.getElementById('fusion-suite-scrollable-content');
    if (scrollable) {
      scrollable.addEventListener('scroll', handleContentScroll);
    }
    return () => {
      if (scrollable) {
        scrollable.removeEventListener('scroll', handleContentScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <HeaderWhite />

      {/* Hero Section */}
      {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
              {/* Hero background gradient with mask, blur, and blending */}
               <div
                style={{
                 position: 'absolute',
                 inset: 0,
                 zIndex: 0,
                 pointerEvents: 'none',
                  background: 'conic-gradient(from 180deg at 50% 50%, lab(80% 60 -60) 0deg, lab(90% 0 80) 60deg, lab(100% -60 60) 120deg, lab(90% 0 -80) 180deg, lab(80% 60 60) 240deg, lab(80% 60 -60) 360deg)',
                   maskImage: 'url(/src/assets/circle.png)',
                   WebkitMaskImage: 'url(/src/assets/circle.png)',
                 maskSize: 'cover',
                  WebkitMaskSize: 'cover',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                   WebkitMaskPosition: 'center',
                   filter: 'blur(32px)',
                 opacity: 0.7,
                  mixBlendMode: 'lighten',
                  transition: 'opacity 0.3s',
                }}
              />
              {/* Hero content and widgets */}
               <div className="relative max-w-4xl mx-auto px-6 text-center z-20">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                   <span className="text-sm text-gray-300">Fusion Suite</span>
                 </div>
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent whitespace-nowrap">
                   AIBAMS Fusion Suite
                </h1>
                 <p className="text-base md:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Elevate Every Aspect. – A Unified Fusion of Intelligent Applications for Limitless Business Growth.</p>

             </div>
          </section>




      {/* Suite Overview Section */}
      {/* Suite Overview Section - Optimized Responsive */}
      <section className="w-full bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 border-t border-zinc-800 relative">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          <div className="w-full mb-8 sm:mb-10 md:mb-12">
            <div className="text-xs tracking-widest text-gray-500 mb-2 text-center"># SUITE OVERVIEW</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 text-center">
              Welcome to the AIBAMS Suite
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
                Step into the AIBAMS Suite—a revolutionary ecosystem of 45+ AI-driven applications crafted to transform how businesses operate. From Finance and Sales to HR, Inventory, Marketing, Websites, Services, and beyond—every app is purpose-built for efficiency, scalability, and smart automation.
              </p>

              <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
                Each tool works seamlessly together, creating a connected experience that helps businesses adapt fast, reduce manual tasks, and unlock new growth avenues with unmatched speed and precision.
              </p>

              <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
                Experience the power of one ecosystem, where intelligent automation drives data-backed decisions, custom workflows, and a dynamic management environment tailored to your needs.
              </p>

              <p className="text-sm sm:text-[0.875rem] text-gray-300 leading-relaxed sm:leading-loose text-justify">
                Stay competitive with predictive analytics, deep integrations, and adaptive AI systems that evolve with your business landscape.
              </p>

              <p className="font-semibold text-white text-sm sm:text-[0.875rem] leading-relaxed sm:leading-loose text-justify">
                The future of business management is here. AIBAMS is launching soon—get ready to lead with intelligence, efficiency, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* AI Tools Section */}
      <section ref={capabilitiesSectionRef} className="w-full bg-black py-12 md:py-24 px-4 md:pl-8 border-t border-zinc-800 relative overflow-hidden min-h-screen md:min-h-[200vh]">
        {/* Mobile View */}
        <div className="block md:hidden">
          {/* Header Section */}
          <div className="w-full bg-black pt-8 px-4">
            <div className="text-xs tracking-widest text-gray-500 mb-1"># CAPABILITIES</div>
            <h2 className="text-xl font-bold text-white mb-6">
              AI tools that will help your business grow exponentially
            </h2>
          </div>



          {/* Fusion Suite Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/src/assets/fusion-suite.png"
              alt="Fusion Suite"
              className="w-25 h-8"
            />
          </div>

          {/* Icons Row */}
          <div className="flex overflow-x-auto pb-2 mb-2 scrollbar-hide px-2">
            <div className="flex space-x-4 mx-auto">
              {icons.map((icon, i) => (
                <div
                  key={icon.alt}
                  onClick={() => handleMobileIconClick(i)}
                  className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border-2 transition-all ${scrollActiveIndex === i
                    ? 'border-yellow-400 scale-110 bg-black/50 shadow-lg'
                    : 'border-zinc-700 bg-black/30'
                    }`}
                >
                  <img
                    src={icon.src}
                    className="w-8 h-8"
                    alt={icon.alt}
                    style={{ filter: iconFilters[i] }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Compact Content Box (Smaller height) */}
          <div
            ref={mobileScrollRef}
            className="h-[35vh] overflow-y-auto scrollbar-hide bg-black/30 rounded-lg border border-zinc-700 mx-2"
          >
            {tooltips.map((item, i) => (
              <div
                key={i}
                ref={el => mobileContentRefs.current[i] = el}
                className={`p-3 min-h-[35vh] flex flex-col justify-center ${scrollActiveIndex === i ? 'bg-black/40' : ''
                  }`}
              >
                <div className="text-white font-bold text-base mb-1 text-center">{item.heading}</div>
                <div className="text-gray-300 text-xs text-center">{item.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Your exact implementation */}
        <div className="hidden md:block">
          <div className="pr-4 flex flex-col items-start justify-center max-w-6xl mx-auto">
            <div className="mb-10 w-full">
              <div className="text-xs tracking-widest text-gray-500 mb-2 text-left"># CAPABILITIES</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-left">AI tools that will help your business grow exponentially</h2>
            </div>
          </div>

          <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', zIndex: 1, overflow: 'hidden' }}>
            {/* Background Gradient */}
            <div
              ref={bgRef}
              style={{
                position: "absolute",
                top: '85px',
                left: '2%',
                width: 400,
                height: 400,
                background: "radial-gradient(circle at center, #ffffff 1%, 20%, transparent 65%, transparent 100%)",
                borderRadius: "100%",
                maskImage: "url('/src/assets/circle.png')",
                WebkitMaskImage: "url('/src/assets/circle.png')",
                maskSize: "120% 120%",
                WebkitMaskSize: "120% 120%",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                filter: "blur(5px)",
                zIndex: 0,
                pointerEvents: 'none',
                transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
                margin: '0 auto',
              }}
            />

            {/* Content Container */}
            <div className="max-w-6xl mx-auto flex flex-row items-center relative z-10 transition-transform duration-200 will-change-transform" style={{ height: '100vh', position: 'relative' }}>
              {/* Fusion Suite Logo */}
              <div style={{ position: 'absolute', left: '-15%', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                <img src="/src/assets/fusion-suite.png" alt="Fusion Suite" style={{ width: "30%", height: "30%", transform: 'rotate(90deg)' }} />
              </div>

              {/* Icon Arc */}
              <div style={{ width: 220, height: 320, position: 'absolute', marginRight: 40, left: 220, top: '46%', transform: 'translateY(-50%)' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', transform: 'rotate(89deg)' }}>
                  {icons.map((icon, i) => {
                    const startDeg = 170;
                    const endDeg = 10;
                    const startAngle = (startDeg * Math.PI) / 180;
                    const endAngle = (endDeg * Math.PI) / 180;
                    const angle = startAngle - i * ((startAngle - endAngle) / (icons.length - 1));
                    const arcRadius = 180;
                    let x = 50 + arcRadius * Math.cos(angle) - 40 + 30;
                    let y = 50 - arcRadius * Math.sin(angle) - 40 + 220;
                    if (i === 1) x -= 20;
                    if (i === 4) x += 20;
                    if (i === 2 || i === 3) { y += 20; }
                    if (i === 0) { x -= 20; y += 18; }
                    if (i === 5) { x += 20; y += 18; }

                    return (
                      <div
                        key={icon.alt}
                        className={`absolute group border w-16 h-16 flex items-center justify-center rounded-full bg-black animate-fade-in cursor-pointer m-0 p-0 transition-all duration-300 hover:z-20 ${scrollActiveIndex === i ? 'border-yellow-400 scale-110 shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] z-20' : 'border-zinc-800'
                          }`}
                        style={{ left: `${x}px`, top: `${y}px`, transform: 'rotate(-90deg)' }}
                      >
                        <img src={icon.src} className="w-8 h-8 z-10 m-0 p-0" alt={icon.alt} style={{ filter: iconFilters[i] }} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scrollable Content */}
              <div
                id="fusion-suite-scrollable-content"
                className="w-[550px] h-[45vh] overflow-y-auto bg-black rounded-xl border border-zinc-700 p-6 ml-auto scrollbar-hide"
                style={{ alignSelf: 'center' }}
              >
                {tooltips.map((item, i) => (
                  <div
                    key={i}
                    ref={el => desktopContentRefs.current[i] = el}
                    className={`min-h-[180px] mb-8 p-6 rounded-lg transition-all flex flex-col items-center justify-center ${scrollActiveIndex === i ? 'bg-black/40' : 'bg-transparent'
                      }`}
                  >
                    <div className="text-white font-bold text-lg mb-2 text-center">{item.heading}</div>
                    <div className="text-gray-300 text-sm text-center">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LaunchSection />
      <Footer />
    </div>
  );
}