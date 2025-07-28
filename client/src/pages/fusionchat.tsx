import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
//import CircleBackground from "@/components/TriangleBackground";
import logoChat from "../assets/icon-chat-n.svg";
import ChatBackground from "@/components/ChatBackground";

export default function FusionChat() {
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


    //    logoChat
    // const LogoChat = ({ className = "w-12 h-12" }) => (
    //     <svg
    //         className={`inline-block mr-3 ${className}`}
    //         viewBox="0 0 512 512"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //     >
    //         {/* Gradient Definition */}
    //         <defs>
    //             <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    //                 <stop offset="0%" stopColor="#3B82F6" />   {/* Blue-500 */}
    //                 <stop offset="50%" stopColor="#8B5CF6" />  {/* Purple-400 */}
    //                 <stop offset="100%" stopColor="#EC4899" /> {/* Pink-500 */}
    //             </linearGradient>
    //             <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
    //                 <feGaussianBlur stdDeviation="8" result="blur" />
    //                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
    //             </filter>
    //         </defs>

    //         {/* Chat Bubble */}
    //         <path
    //             d="M256 32C132.3 32 32 125.2 32 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 123.7 0 224-93.1 224-208S379.7 32 256 32z"
    //             fill="url(#logo-gradient)"
    //             filter="url(#glow)"
    //         />

    //         {/* AI Icon (Example - Modify as per your actual logo) */}
    //         <path
    //             d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm20.2 109.7l-19.6 43.2-19.6-43.2-43.2-19.6 43.2-19.6 19.6-43.2 19.6 43.2 43.2 19.6-43.2 19.6z"
    //             fill="white"
    //             opacity="0.9"
    //         />
    //     </svg>
    // );


    return (
        <div className="min-h-screen bg-black-900">
            <HeaderWhite />

            {/* Hero Section */}
            <div ref={heroRef}>
                <section className="relative min-h-[60vh] pt-20 flex items-center justify-center overflow-hidden bg-[#000000]">
                    {/* Replace CircleBackground with ChatBackground */}
                    <ChatBackground />

                    {/* Radial gradient overlay */}
                    <div className="absolute inset-0 bg-radial-gradient" style={{
                        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'
                    }}></div>

                    <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>
                            <span className="text-sm text-gray-300">AIBAMS Fusion Chat</span>
                        </div>
                        <h1 className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                            {/* Logo with perfect alignment */}
                            <span className="flex-shrink-0 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                                <img
                                    src={logoChat}
                                    alt="Logo"
                                    className="h-full w-full object-contain"
                                    style={{
                                        filter: "invert(57%) sepia(62%) saturate(390%) hue-rotate(120deg) brightness(95%) contrast(90%)"
                                    }}
                                />
                            </span>

                            {/* Text with responsive sizing */}
                            <span
                                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                                style={{
                                    lineHeight: '1.2' // Adjust if needed
                                }}
                            >
                                Fusion Chat
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Your Smartest Teammate — Powered by AI.
                        </p>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Skip the fluff, get instant answers, automate tasks, and think better — all inside your business workspace.
                        </p>
                    </div>
                </section>
            </div>

            <div className="w-full border-t border-gray-800"></div>





            {/* Overview Section */}
            {/* Overview Section */}
            <section className="w-full bg-black py-28 px-6 sm:px-8 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-0.5 rounded-lg mb-10 mx-auto max-w-md">
                        <div className="bg-black rounded-lg py-2 px-4">
                            <p className="text-sm font-medium text-blue-400 text-center"># INTRODUCING FUSION CHAT</p>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center leading-tight">
                        Meet Fusion Chat — <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your AI-Powered Business Brain</span>
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-300 mb-8 text-center leading-relaxed">
                            Fusion Chat isn't just another chatbot. It's your always-on, context-aware, task-savvy copilot built into your everyday workflows.
                        </p>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                            <p className="relative text-base md:text-lg text-gray-300 px-6 py-4 bg-gray-900/50 rounded-lg  text-center leading-relaxed">
                                Ask questions, analyze documents, generate ideas, or write that sales email — instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full bg-black py-16 px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
                        ⚡ What Makes Fusion Chat Special?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/30 transition-all">
                            <div className="text-purple-400 mb-4 text-xl">📝</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Natural, Intelligent Conversations</h4>
                            <p className="text-gray-400">Get human-like replies with actual context, not just copy-paste fluff.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-all">
                            <div className="text-blue-400 mb-4 text-xl">🔄</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Deep Fusion Suite Integration</h4>
                            <p className="text-gray-400">Talk to your data inside Sheets, Docs, Mail, and Drive — no switching tabs.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all">
                            <div className="text-green-400 mb-4 text-xl">📊</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Analytics & Summaries, Instantly</h4>
                            <p className="text-gray-400">Drop a file or paste raw data — get charts, insights, and action steps in seconds.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-yellow-500/30 transition-all">
                            <div className="text-yellow-400 mb-4 text-xl">✍️</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Content & Copy That Converts</h4>
                            <p className="text-gray-400">From pitch decks to blog intros — generate pro-quality content in your brand tone.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-red-500/30 transition-all">
                            <div className="text-red-400 mb-4 text-xl">🧾</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Smart Document Parsing</h4>
                            <p className="text-gray-400">Upload PDFs, contracts, or spreadsheets — let Chat read and explain them like a human assistant.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-pink-500/30 transition-all">
                            <div className="text-pink-400 mb-4 text-xl">🧩</div>
                            <h4 className="text-xl font-semibold text-white mb-2">Custom Prompts for Teams</h4>
                            <p className="text-gray-400">Create reusable prompt templates for support, marketing, HR, and sales workflows.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-t border-zinc-800" />

            {/* Use Cases Section */}
            {/* Use Cases Section */}
            <div className="relative z-10 max-w-6xl mx-auto pt-1">
                {/* Section header (matches first section style) */}
                <div className="mb-16 text-center">
                    <div className="text-xs tracking-widest text-gray-400 mb-2 font-medium"># USE CASES</div>
                    <h2 className="text-4xl md:text-[3rem] font-bold text-white mb-6">
                        🎯 Built For Real Workflows
                    </h2>
                    <p className="text-[1.125rem] text-gray-300 max-w-3xl mx-auto">
                        A few cases where Fusion Chat works wonders:
                    </p>
                </div>

                {/* Personas grid (matches capabilities grid structure) */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Divider lines for 3x2 grid (same as first section) */}
                    <div className="hidden lg:block absolute top-0 left-1/3 w-px h-full bg-white/10 z-20" style={{ left: '33.33%' }}></div>
                    <div className="hidden lg:block absolute top-0 left-2/3 w-px h-full bg-white/10 z-20" style={{ left: '66.66%' }}></div>
                    <div className="hidden md:block absolute left-0 top-1/2 w-full h-px bg-white/10 z-20" style={{ top: '50%' }}></div>

                    {/* Persona cards with hover effects */}
                    {[
                        {
                            icon: "🔹",
                            color: "blue",
                            title: "Marketing Teams",
                            description: "Generates campaign copy, analyzes trends, and drafts social posts in brand voice."
                        },
                        {
                            icon: "🔹",
                            color: "purple",
                            title: "Founders & Executives",
                            description: "Summarizes reports, drafts investor updates, and analyzes competitor data."
                        },
                        {
                            icon: "🔹",
                            color: "green",
                            title: "Support Agents",
                            description: "Auto-drafts customer replies and fetches order details instantly."
                        },
                        {
                            icon: "🔹",
                            color: "yellow",
                            title: "Sales Teams",
                            description: "Generates personalized outreach, analyzes CRM data, and drafts proposals."
                        },
                        {
                            icon: "🔹",
                            color: "red",
                            title: "Freelancers",
                            description: "Manages client communication, drafts contracts, and generates content ideas."
                        },
                        {
                            icon: "🔹",
                            color: "pink",
                            title: "Research Teams",
                            description: "Summarizes papers, analyzes datasets, and generates literature reviews."
                        }
                    ].map((persona, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl border border-transparent hover:border-${persona.color}-400/30 transition-all duration-300"
                        >
                            {/* Hover glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${persona.color}-500/5 to-${persona.color}-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-10 h-10 rounded-full bg-${persona.color}-500/20 flex items-center justify-center text-${persona.color}-400`}>
                                        {persona.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white transition-colors duration-300" style={{ fontSize: '1.125rem' }}>
                                        {persona.title}
                                    </h3>
                                </div>

                                <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-300" style={{ fontSize: '0.875rem' }}>
                                    "{persona.description}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>







            {/* CTA Section */}
            {/* CTA Section */}
            <section className="w-full border border-zinc-800 mt-16 p-12 bg-black shadow">
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
                    <h3 className="text-[1.875rem] font-bold text-white mb-4">
                        🚀 Get Early Access to the Smartest AI Chat for Work
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Fusion Chat is now live for early testers inside Fusion Suite.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                            <p className="text-green-400 text-base flex items-center gap-2">
                                <span>✓</span> Free during early access
                            </p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                            <p className="text-green-400 text-base flex items-center gap-2">
                                <span>✓</span> Connects with Fusion Suite
                            </p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                            <p className="text-green-400 text-base flex items-center gap-2">
                                <span>✓</span> Works on mobile and desktop
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 rounded-full blur-xl opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]" />
                            <div className="relative p-[2px] bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] rounded-full transition-opacity duration-300 group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]">
                                <div className="bg-black px-8 py-3 rounded-full group-hover:bg-black/80 transition-colors duration-300">
                                    <span className="text-lg font-bold tracking-wider uppercase text-white group-hover:text-white/90 transition-colors duration-300">Start Talking Smarter — FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-500 mt-2 text-base">
                        🔗 Already using Fusion Suite? Chat is automatically available in your workspace.
                    </p>
                </div>
            </section>





            <Footer />
        </div>
    );
}