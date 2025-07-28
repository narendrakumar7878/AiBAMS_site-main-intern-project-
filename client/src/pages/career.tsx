// import { useState, useEffect, useRef } from "react";
// import HeaderWhite from "@/components/HeaderWhite";
// import Footer from "@/components/Footer";
// import Particles from "@/components/Particles";
// import { Sparkles, ArrowRight, Briefcase, Palette, Video, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import React from "react";

// export default function Career() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [headerWhite, setHeaderWhite] = useState(false);
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const formRef = useRef<HTMLDivElement | null>(null);
//   const [resumeMethod, setResumeMethod] = useState("");
//   const [manualResume, setManualResume] = useState("");
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const [isIntern, setIsIntern] = useState<boolean>(false);

//   // Snowflake rendering logic
//   const snowflakes = Array.from({ length: 50 }).map((_, i) => {
//     // Smaller snowflakes: size between 0.2vw and 0.5vw
//     const size = (Math.random() * 0.3 + 0.2).toFixed(2) + 'vw';
//     const left = Math.floor(Math.random() * 100) + 'vw';
//     const leftIni = (Math.random() * 20 - 10).toFixed(2) + 'vw';
//     const leftEnd = (Math.random() * 20 - 10).toFixed(2) + 'vw';
//     const duration = (5 + Math.random() * 10).toFixed(2) + 's';
//     const delay = (-Math.random() * 10).toFixed(2) + 's';
//     const blur = (i + 1) % 6 === 0 ? 'blur(1px)' : 'none';
//     return (
//       <div
//         key={i}
//         className="snowflake"
//         style={{
//           '--size': size,
//           left,
//           '--left-ini': leftIni,
//           '--left-end': leftEnd,
//           animation: `snowfall ${duration} linear infinite`,
//           animationDelay: delay,
//           filter: blur,
//         } as React.CSSProperties}
//       />
//     );
//   });

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

//   // Handlers for resume upload methods
//   const handleAttachClick = () => {
//     setResumeMethod("attach");
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };
//   const handleManualClick = () => {
//     setResumeMethod("manual");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Header */}
//       <HeaderWhite />

//       {/* Hero Section */}
//       <div ref={heroRef}>
//         <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black py-24">
//           <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>

//               <span className="text-sm text-gray-300">Join Our Team as an Intern</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
//               Launch your career with us!
//             </h1>
//             <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//             We offer exciting internship roles where you’ll learn by building real products, collaborating with experienced mentors, and contributing to cutting-edge AI technology. Grow fast, make an impact, and start your journey in a high-energy, innovation-driven environment.</p>
//           </div>
//         </section>
//       </div>

//       {/* Divider Line (remains after removing News Feature Section) */}

      
      
      
//       {/* Positions Section */}
//       <section className="w-full bg-black py-24  border-t-[1px] border-zinc-800">
//         <div className="max-w-6xl pl-[1rem] pr-[1rem] mx-auto">
//           <div className="mb-8">
//             <div className="text-xs tracking-widest text-gray-500 mb-2"># AVAILABLE POSITIONS</div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Explore Our Internship Opportunities</h2>
//           </div>
//           <div className="flex flex-col">
//             {/* List Header */}
//             <div className="flex items-center px-4 py-2 pl-4 text-gray-400 text-lg font-bold border-b border-zinc-800 gap-16" style={{ fontSize: '0.875rem' }}>
//               <div className="w-1/2">Position</div>
//               <div className="w-1/4">Location</div>
//               <div className="w-1/4"></div>
//             </div>
//             {/* Internship rows */}
//             {[
//               { position: "Fullstack Developer Intern", location: "Vadodara, Gujarat" },
//               { position: "Graphic Designer Intern", location: "Vadodara, Gujarat" },
//               { position: "Digital Marketing Intern", location: "Vadodara, Gujarat" },
//               { position: "Sales & Marketing Intern", location: "Vadodara, Gujarat" },
//               { position: "Video Intern", location: "Vadodara, Gujarat" },
//             ].map((item, i) => (
//               <div key={i} className="flex items-center px-4 py-4 border-b border-zinc-800 gap-16">
//                 <div className="w-1/2 text-white text-lg" style={{ fontSize: '0.875rem' }}>{item.position}</div>
//                 <div className="w-1/4 text-gray-300">{item.location}</div>
//                 <div className="w-1/4 flex justify-start">
//                   <button
//                     className="bg-black px-5 py-1.5 rounded-full border border-gray-500 text-sm font-bold tracking-wider uppercase text-white hover:text-black hover:border-black hover:bg-gray-200 transition-colors duration-300 shadow leading-4"
//                     onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
//                   >
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>









//       {/* Interview Process Section */}
//       <section className="w-full bg-black py-24 border-t-[1px] border-zinc-800">
//         <div className="max-w-6xl pl-[1rem] pr-[1rem] mx-auto">
//           <div className="flex flex-col md:flex-row justify-between md:items-start mb-16">
//             <div>
//               <div className="text-xs tracking-widest text-gray-500 mb-2 text-justify"># WHAT TO EXPECT</div>
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-0 text-justify">Interview process</h2>
//             </div>
//             <div className="md:w-1/2 text-white text-sm md:text-base font-semibold leading-relaxed text-justify">
//               <p className="text-gray-200 text-justify">
//               We believe in hiring people—not just profiles.
//               Our technical team directly evaluates all applications. Interviews may be virtual or conducted on-site depending on availability.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-12">
//             {/* Step 1 */}
//             <div className="flex flex-row items-start gap-8">
//               <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 1</div>
//               <div className="flex-1 text-justify pl-8 md:pl-16">
//                 <div className="text-white text-lg font-semibold mb-2 text-justify">Submit your application</div>
//                 <div className="text-gray-400 mb-4 text-sm md:text-base text-justify" style={{ fontSize: '0.875rem' }}>Tell us who you are and what makes you different. We carefully review every submission.</div>
//                 <button className="px-6 py-2 rounded-full border border-gray-500 text-white text-sm font-bold tracking-wider uppercase hover:text-black hover:border-black hover:bg-gray-200 transition-colors duration-300 leading-4">Apply Now</button>
//               </div>
//             </div>
//             {/* Step 2 */}
//             <div className="flex flex-row items-start gap-8">
//               <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 2</div>
//               <div className="flex-1 text-justify pl-8 md:pl-16">
//                 <div className="text-white text-lg font-semibold mb-2 text-justify">Screening Call</div>
//                 <div className="text-gray-400 text-sm md:text-base text-justify" style={{ fontSize: '0.875rem' }}>A short introductory call to understand your interests, availability, and fit with AIBAMS. You may be asked about past projects or basic concepts.</div>
//               </div>
//             </div>
//             {/* Step 3 */}
//             <div className="flex flex-row items-start gap-8">
//               <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 3</div>
//               <div className="flex-1 text-justify pl-8 md:pl-16">
//                 <div className="text-white text-lg font-semibold mb-2 text-justify">Skills Evaluation</div>
//                 <div className="text-gray-400 text-sm md:text-base text-justify" style={{ fontSize: '0.875rem' }}> A hands-on interview or assignment to assess your technical strengths, creative thinking, and problem-solving skills. We care more about how you think, less about what you’ve memorized. </div>
//               </div>
//             </div>
//             {/* Step 4 */}
//             <div className="flex flex-row items-start gap-8">
//               <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 4</div>
//               <div className="flex-1 text-justify pl-8 md:pl-16">
//                 <div className="text-white text-lg font-semibold mb-2 text-justify">Offer & Onboarding</div>
//                 <div className="text-gray-400 text-sm md:text-base text-justify" style={{ fontSize: '0.875rem' }}>If selected, you'll receive a prompt offer. We aim to onboard fast and make sure you have everything you need to succeed from Day 1.</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Application Form Section */}
//       <section ref={formRef} className="w-full bg-black py-24 pl-12 pr-4 border-t-[1px] border-zinc-800">
//         <div className="max-w-6xl mx-auto p-0 md:p-0 bg-black">
//         <div className="text-xs tracking-widest text-gray-500 mb-2 text-justify"># JOB APPLICATION</div>
//           <h2 className="text-5xl font-bold text-white mb-2">Apply for this job</h2>
//           <p className="text-gray-400 mb-8 text-sm">All fields marked with an asterisk () are required.*</p>
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-300 font-semibold mb-1">First Name<span className="text-red-500">*</span></label>
//                 <input type="text" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white" />
//               </div>
//               <div>
//                 <label className="block text-gray-300 font-semibold mb-1">Last Name<span className="text-red-500">*</span></label>
//                 <input type="text" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white" />
//               </div>
//               <div>
//                 <label className="block text-gray-300 font-semibold mb-1">Email<span className="text-red-500">*</span></label>
//                 <input type="email" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white" />
//               </div>
//               <div>
//                 <label className="block text-gray-300 font-semibold mb-1">Phone<span className="text-red-500">*</span></label>
//                 <input type="tel" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white" />
//               </div>
//             </div>

//             {/* Resume/CV Upload */}
//             <div>
//               <label className="block text-gray-300 font-semibold mb-1">Resume/CV<span className="text-red-500">*</span></label>
//               <div className="flex flex-col md:flex-row gap-3 mt-2">
//                 <button
//                   className="bg-zinc-800 text-white px-4 py-2 rounded-md mr-2 mb-2 text-xs font-semibold hover:bg-zinc-700 border border-zinc-700"
//                   type="button"
//                   onClick={handleAttachClick}
//                 >
//                   Attach
//                 </button>
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   accept=".pdf,.doc,.docx,.txt,.rtf"
//                   className="hidden"
//                   onChange={e => setResumeMethod("attach")}
//                 />
//                 <button
//                   className="bg-zinc-800 text-white px-4 py-2 rounded-md mb-2 text-xs font-semibold hover:bg-zinc-700 border border-zinc-700"
//                   type="button"
//                   onClick={handleManualClick}
//                 >
//                   Enter manually
//                 </button>
//               </div>
//               {resumeMethod === "manual" && (
//                 <textarea
//                   className="w-full min-h-[90px] mt-4 px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white resize-none"
//                   placeholder="Paste or type your resume here..."
//                   value={manualResume}
//                   onChange={e => setManualResume(e.target.value)}
//                 />
//               )}
//               <p className="text-xs text-gray-400 mt-2"> (Accepted: PDF, DOCX, TXT, RTF)</p>
//             </div>

//             {/* Exceptional Work */}
//             <div>
//               <label className="block text-gray-300 font-semibold mb-1">What exceptional work have you done?<span className="text-red-500">*</span></label>
//               <textarea required className="w-full min-h-[90px] px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white resize-none" />
//               <p className="text-xs text-gray-400 mt-1"> In 100 words or less, tell us about something you’re proud of.</p>
//             </div>

//             {/* Intern Toggle Switch */}
//             <div className="flex items-center mb-4">
//               <label htmlFor="intern-toggle" className="block text-gray-300 font-semibold mr-4">Are you an intern?</label>
//               <div className="relative w-16 h-8">
//                 <button
//                   id="intern-toggle"
//                   type="button"
//                   className={`w-16 h-8 rounded-full transition-colors duration-200 focus:outline-none border-2 flex items-center ${isIntern ? 'bg-gray-500 border-gray-500' : 'bg-zinc-800 border-zinc-700'}`}
//                   onClick={() => setIsIntern(!isIntern)}
//                   aria-pressed={isIntern}
//                 >
//                   <span className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200 ${isIntern ? 'translate-x-8' : ''}`}></span>
//                 </button>
//               </div>
//               <span className="ml-4 text-gray-400 text-sm">{isIntern ? 'Yes' : 'No '}</span>
//             </div>

//             {/* Optional Fields with Toggle Logic */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {!isIntern && (
//                 <>
//                   <div>
//                     <label className="block text-gray-300 font-semibold mb-1">Current company</label>
//                     <input type="text" className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white" />
//                   </div>
//                   <div>
//                     <label className="block text-gray-300 font-semibold mb-1">Current title</label>
//                     <input type="text" className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white" />
//                   </div>
//                 </>
//               )}
//               <div>
//                 <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-1">LinkedIn Profile</label>
//                 <input type="url" id="linkedin" name="linkedin" className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#c8843f]" placeholder="https://linkedin.com/in/yourprofile" />
//               </div>
//               <div>
//                 <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-1">GitHub Profile</label>
//                 <input type="url" id="github" name="github" className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#c8843f]" placeholder="https://github.com/yourprofile" />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center pt-4">
//               <button type="submit" className="px-6 py-2 rounded-full bg-white text-black font-semibold text-base tracking-wider transition hover:bg-zinc-200">Submit</button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// } 








// here is the code for the career page create by me 

import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { Sparkles, ArrowRight, Briefcase, Palette, Video, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Career() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerWhite, setHeaderWhite] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const [resumeMethod, setResumeMethod] = useState("");
  const [manualResume, setManualResume] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isIntern, setIsIntern] = useState<boolean>(false);

  // Snowflake rendering logic
  const snowflakes = Array.from({ length: 50 }).map((_, i) => {
    // Smaller snowflakes: size between 0.2vw and 0.5vw
    const size = (Math.random() * 0.3 + 0.2).toFixed(2) + 'vw';
    const left = Math.floor(Math.random() * 100) + 'vw';
    const leftIni = (Math.random() * 20 - 10).toFixed(2) + 'vw';
    const leftEnd = (Math.random() * 20 - 10).toFixed(2) + 'vw';
    const duration = (5 + Math.random() * 10).toFixed(2) + 's';
    const delay = (-Math.random() * 10).toFixed(2) + 's';
    const blur = (i + 1) % 6 === 0 ? 'blur(1px)' : 'none';
    return (
      <div
        key={i}
        className="snowflake"
        style={{
          '--size': size,
          left,
          '--left-ini': leftIni,
          '--left-end': leftEnd,
          animation: `snowfall ${duration} linear infinite`,
          animationDelay: delay,
          filter: blur,
        } as React.CSSProperties}
      />
    );
  });

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

  // Handlers for resume upload methods
  const handleAttachClick = () => {
    setResumeMethod("attach");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleManualClick = () => {
    setResumeMethod("manual");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <HeaderWhite />

      {/* Hero Section */}
      <div ref={heroRef}>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black py-12 md:py-24 px-4">
          <div className="relative z-20 max-w-4xl mx-auto text-center pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              <span className="text-sm text-gray-300">Join Our Team as an Intern</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
              Launch your career with us!
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              We offer exciting internship roles where you'll learn by building real products, collaborating with experienced mentors, and contributing to cutting-edge AI technology. Grow fast, make an impact, and start your journey in a high-energy, innovation-driven environment.
            </p>
          </div>
        </section>
      </div>

      {/* Positions Section */}
      {/* Positions Section */}
      {/* Positions Section */}
      <section className="w-full bg-black py-12 md:py-24 border-t border-zinc-800 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <div className="text-xs tracking-widest text-gray-500 mb-2"># AVAILABLE POSITIONS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Explore Our Internship Opportunities</h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* List Header - Hidden on mobile */}
              <div className="hidden md:flex items-center px-4 py-3 text-gray-400 text-sm font-bold border-b border-zinc-800">
                <div className="w-1/2 pl-4">Position</div>
                <div className="w-1/4">Location</div>
                <div className="w-1/4"></div>
              </div>

              {/* Internship rows */}
              {[
                { position: "Fullstack Developer Intern", location: "Vadodara, Gujarat" },
                { position: "Graphic Designer Intern", location: "Vadodara, Gujarat" },
                { position: "Digital Marketing Intern", location: "Vadodara, Gujarat" },
                { position: "Sales & Marketing Intern", location: "Vadodara, Gujarat" },
                { position: "Video Intern", location: "Vadodara, Gujarat" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-center md:items-start p-4 md:px-4 border-b border-zinc-800 gap-3 md:gap-0"
                >
                  <div className="w-full md:w-1/2 text-white text-base md:text-sm text-center md:text-left md:pl-4">
                    <span className="font-semibold md:font-normal">{item.position}</span>
                  </div>
                  <div className="w-full md:w-1/4 text-gray-300 text-sm md:text-base text-center md:text-left">
                    {item.location}
                  </div>
                  <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-2 md:mt-0">
                    <button
                      className="bg-black px-5 py-2 md:py-1.5 rounded-full border border-gray-500 text-sm font-bold tracking-wider uppercase text-white hover:text-black hover:border-black hover:bg-gray-200 transition-colors duration-300 shadow"
                      onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interview Process Section */}
      <section className="w-full bg-black py-12 md:py-24 border-t border-zinc-800 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 md:mb-16">
            <div className="mb-6 md:mb-0">
              <div className="text-xs tracking-widest text-gray-500 mb-2"># WHAT TO EXPECT</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-0">Interview process</h2>
            </div>
            <div className="md:w-1/2 text-white text-sm md:text-base font-semibold leading-relaxed">
              <p className="text-gray-200">
                We believe in hiring people—not just profiles.
                Our technical team directly evaluates all applications. Interviews may be virtual or conducted on-site depending on availability.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 1</div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <div className="text-white text-lg font-semibold mb-2">Submit your application</div>
                <div className="text-gray-400 mb-4 text-sm md:text-base">
                  Tell us who you are and what makes you different. We carefully review every submission.
                </div>
                <button className="px-6 py-2 rounded-full border border-gray-500 text-white text-sm font-bold tracking-wider uppercase hover:text-black hover:border-black hover:bg-gray-200 transition-colors duration-300 leading-4"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                  Apply Now
                </button>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 2</div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <div className="text-white text-lg font-semibold mb-2">Screening Call</div>
                <div className="text-gray-400 text-sm md:text-base">
                  A short introductory call to understand your interests, availability, and fit with AIBAMS. You may be asked about past projects or basic concepts.
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 3</div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <div className="text-white text-lg font-semibold mb-2">Skills Evaluation</div>
                <div className="text-gray-400 text-sm md:text-base">
                  A hands-on interview or assignment to assess your technical strengths, creative thinking, and problem-solving skills. We care more about how you think, less about what you've memorized.
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <div className="min-w-[90px] text-gray-400 text-base tracking-widest pt-1">STEP 4</div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <div className="text-white text-lg font-semibold mb-2">Offer & Onboarding</div>
                <div className="text-gray-400 text-sm md:text-base">
                  If selected, you'll receive a prompt offer. We aim to onboard fast and make sure you have everything you need to succeed from Day 1.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="w-full bg-black py-12 md:py-24 border-t border-zinc-800 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-black">
          <div className="text-xs tracking-widest text-gray-500 mb-2"># JOB APPLICATION</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Apply for this job</h2>
          <p className="text-gray-400 mb-6 md:mb-8 text-sm">All fields marked with an asterisk (*) are required.</p>
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">First Name<span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white text-sm md:text-base" />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Last Name<span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white text-sm md:text-base" />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Email<span className="text-red-500">*</span></label>
                <input type="email" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white text-sm md:text-base" />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Phone<span className="text-red-500">*</span></label>
                <input type="tel" required className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white text-sm md:text-base" />
              </div>
            </div>

            {/* Resume/CV Upload */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Resume/CV<span className="text-red-500">*</span></label>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button
                  className="bg-zinc-800 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-zinc-700 border border-zinc-700"
                  type="button"
                  onClick={handleAttachClick}
                >
                  Attach
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx,.txt,.rtf"
                  className="hidden"
                  onChange={e => setResumeMethod("attach")}
                />
                <button
                  className="bg-zinc-800 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-zinc-700 border border-zinc-700"
                  type="button"
                  onClick={handleManualClick}
                >
                  Enter manually
                </button>
              </div>
              {resumeMethod === "manual" && (
                <textarea
                  className="w-full min-h-[90px] mt-4 px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white resize-none text-sm md:text-base"
                  placeholder="Paste or type your resume here..."
                  value={manualResume}
                  onChange={e => setManualResume(e.target.value)}
                />
              )}
              <p className="text-xs text-gray-400 mt-2">(Accepted: PDF, DOCX, TXT, RTF)</p>
            </div>

            {/* Exceptional Work */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1">What exceptional work have you done?<span className="text-red-500">*</span></label>
              <textarea required className="w-full min-h-[90px] px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white resize-none text-sm md:text-base" />
              <p className="text-xs text-gray-400 mt-1">In 100 words or less, tell us about something you're proud of.</p>
            </div>

            {/* Intern Toggle Switch */}
            <div className="flex items-center mb-4">
              <label htmlFor="intern-toggle" className="block text-gray-300 font-semibold mr-4 text-sm md:text-base">Are you an intern?</label>
              <div className="relative w-14 h-7 md:w-16 md:h-8">
                <button
                  id="intern-toggle"
                  type="button"
                  className={`w-full h-full rounded-full transition-colors duration-200 focus:outline-none border-2 flex items-center ${isIntern ? 'bg-gray-500 border-gray-500' : 'bg-zinc-800 border-zinc-700'}`}
                  onClick={() => setIsIntern(!isIntern)}
                  aria-pressed={isIntern}
                >
                  <span className={`absolute left-1 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white shadow-md transition-transform duration-200 ${isIntern ? 'translate-x-6 md:translate-x-8' : ''}`}></span>
                </button>
              </div>
              <span className="ml-4 text-gray-400 text-sm md:text-base">{isIntern ? 'Yes' : 'No'}</span>
            </div>

            {/* Optional Fields with Toggle Logic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {!isIntern && (
                <>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Current company</label>
                    <input type="text" className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white text-sm md:text-base" />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-1">Current title</label>
                    <input type="text" className="w-full px-4 py-2 rounded bg-[#181818] text-white border border-zinc-700 focus:outline-none focus:border-white text-sm md:text-base" />
                  </div>
                </>
              )}
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-1">LinkedIn Profile</label>
                <input type="url" id="linkedin" name="linkedin" className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#c8843f] text-sm md:text-base" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div>
                <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-1">GitHub Profile</label>
                <input type="url" id="github" name="github" className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#c8843f] text-sm md:text-base" placeholder="https://github.com/yourprofile" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button type="submit" className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm md:text-base tracking-wider transition hover:bg-zinc-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}