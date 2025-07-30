import React, { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import SheetsBackground from "@/components/SheetsBackground";
import logoSheet from "../assets/icon-sheet-n.svg";

export default function FusionSheets() {
    const [isScrolled, setIsScrolled] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);




    // Scroll effect
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
                    <SheetsBackground />
                    <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <span className="text-sm text-gray-300">AIBAMS Fusion Suite</span>
                        </div>
                        <h1 className="flex items-center justify-center gap-3 md:gap-4 mb-8">
                            {/* Logo container with perfect alignment */}
                            <span className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
                                <img
                                    src={logoSheet}
                                    alt="Fusion Sheets Logo"
                                    className="h-full w-full object-contain"
                                    style={{
                                        filter: 'brightness(0) saturate(100%) invert(60%) sepia(90%) saturate(1200%) hue-rotate(80deg) brightness(1.1) contrast(1.2)'
                                    }}
                                />
                            </span>

                            {/* Text with responsive gradient */}
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Fusion Sheets
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Turn data into clarity — no formulas required.
                        </p>
                    </div>
                </section>
            </div>



            
            {/* Modern Overview Section */}
            <section className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden">
                {/* Glowing background elements */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/30 rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-900/30 rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            <span className="relative">
                                What It Is
                                {/* Thin underline */}
                                <div className="flex justify-center my-8">
                                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                                </div>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Fusion-Sheets is your next-gen spreadsheet engine — powered by AI, built for speed, and designed for people who don't want to wrestle with formulas.
                        </p>
                    </div>

                    {/* Thin divider between paragraphs */}
                    {/* <div className="flex justify-center my-8">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    </div> */}

                    {/* Second paragraph with subtle highlight */}
                    <div className="text-center">
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-6 py-4 bg-gray-900/30 rounded-lg border border-gray-800/50">
                            Whether it's budgets, analytics, or forecasts, Sheets gives you the power of a data team in one click.
                        </p>
                    </div>
                </div>
                {/* Section bottom divider - ultra thin */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>



            {/* 3. Core Capabilities - Premium Version */}

            <section className="py-24 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-900/30 rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-900/30 rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># POWER FEATURES</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            🔍 Core Capabilities
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Advanced tools designed for modern data work
                        </p>
                    </div>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Capability 1 */}
                        <div className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                    📈
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    AI Formula Builder
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Just describe what you want — we'll handle the syntax.
                                </p>
                            </div>
                        </div>

                        {/* Capability 2 */}
                        <div className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                                    🧠
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                    Instant Dashboards
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Auto-generate visual reports with one-click templates.
                                </p>
                            </div>
                        </div>

                        {/* Capability 3 */}
                        <div className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                                    🧹
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                                    Data Cleanse Tool
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Remove errors, duplicates & misalignments effortlessly.
                                </p>
                            </div>
                        </div>

                        {/* Capability 4 */}
                        <div className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-5 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                                    📥
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                                    Multi-Source Import
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Drag in files from Excel, Drive, or other Fusion tools.
                                </p>
                            </div>
                        </div>

                        {/* Capability 5 */}
                        <div className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                                    📊
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                                    Live Metric Widgets
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Build KPI boxes for ongoing monitoring & goal tracking.
                                </p>
                            </div>
                        </div>

                        {/* Capability 6 */}
                        <div className="group relative p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="text-4xl mb-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                                    🔗
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                                    Seamless Integration
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Natively connects to Docs, Mail & Drive in the Suite.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* 4. Use Cases - Auto-Scrolling Carousel */}
            <section className="py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-900/20 rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-900/20 rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-12 px-4">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># PERFECT FOR</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            👥 Built for Teams That Think in Numbers
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Designed for professionals who need powerful data tools without complexity
                        </p>
                    </div>

                    {/* Carousel container */}
                    <div className="relative px-4">
                        {/* Scrollable track */}
                        <div className="overflow-hidden py-4">
                            <div className="flex gap-6 animate-scroll">
                                {[...Array(3)].map((_, loopIndex) => (
                                    <React.Fragment key={`loop-${loopIndex}`}>
                                        {[
                                            {
                                                emoji: '🧮',
                                                title: 'Finance & Accounting',
                                                description: 'Stay on top of budgets, reconcile faster, and close with confidence.',
                                                color: 'blue'
                                            },
                                            {
                                                emoji: '📊',
                                                title: 'Marketing Analysts',
                                                description: 'Track campaign performance and generate real-time dashboards.',
                                                color: 'purple'
                                            },
                                            {
                                                emoji: '🚀',
                                                title: 'Founders & Ops',
                                                description: 'Make fast decisions backed by smart visuals and automated calculations.',
                                                color: 'pink'
                                            },
                                            {
                                                emoji: '📋',
                                                title: 'Freelancers',
                                                description: 'Deliver polished, data-backed reports that wow your clients.',
                                                color: 'green'
                                            },
                                            {
                                                emoji: '🧑‍💻',
                                                title: 'Non-Technical Teams',
                                                description: 'No code? No formulas? No problem — just type what you need.',
                                                color: 'yellow'
                                            }
                                        ].map((useCase, index) => (
                                            <div
                                                key={`${useCase.title}-${loopIndex}`}
                                                className="flex-shrink-0 w-72 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                                            >
                                                <div className={`text-3xl mb-4 text-${useCase.color}-400`}>{useCase.emoji}</div>
                                                <h4 className="text-xl font-semibold text-white mb-2">{useCase.title}</h4>
                                                <p className="text-gray-400">{useCase.description}</p>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Gradient fade edges - mobile only */}
                        <div className="sm:hidden absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-20"></div>
                        <div className="sm:hidden absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-20"></div>
                    </div>
                </div>

                {/* Animation styles */}
                <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 5 * 3)); }
        }
        .animate-scroll {
            display: flex;
            animation: scroll 30s linear infinite;
            width: calc(250px * 5 * 3);
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
    `}</style>
                {/* Section bottom divider - ultra thin */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            </section>




            






            {/* Premium CTA Section - Pure Black Theme */}
            <section className="relative py-28 px-6 sm:px-8 overflow-hidden bg-black">
                {/* Background elements - Pure black version */}
                <div className="absolute inset-0">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-900/5 rounded-full filter blur-[80px]"></div>
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-900/5 rounded-full filter blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    {/* Decorative elements - Minimal version */}
                    <div className="mb-8 flex justify-center">
                        <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 p-0.5 rounded-full">
                            <div className="bg-black rounded-full px-4 py-1 border border-gray-800">
                                <span className="text-xs font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                                    EARLY ACCESS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Ready to Rethink Spreadsheets?
                    </h3>

                    <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                        Don't just calculate — strategize, analyze, and visualize in real time.
                    </p>

                    {/* Enhanced button - Glowing version */}
                    <div className="relative group max-w-fit mx-auto mb-8">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                        <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/20">
                            📈 GET STARTED WITH FUSION-SHEETS
                        </button>
                    </div>

                    <p className="text-gray-400 text-sm">
                        Join early and unlock dashboard credits + AI features free for life.
                    </p>
                </div>
                {/* Section bottom divider - ultra thin */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            </section>







            

            {/* 6. Ecosystem Integration - Modern Black Theme */}
            <section className="py-24 px-6 bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-900/30 rounded-full filter blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-purple-900/30 rounded-full filter blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 mb-6">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                            <span className="text-xs font-medium tracking-widest text-blue-400">ECOSYSTEM INTEGRATION</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            🔄 Part of the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fusion Ecosystem</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Fusion-Sheets works seamlessly with Docs, Drive, WebX, and Chat — making your numbers instantly usable across your content, cloud, and conversations.
                        </p>
                    </div>

                    {/* Integration logos */}
                    {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12">
                        {['Docs', 'Drive', 'WebX', 'Chat'].map((product) => (
                            <div key={product} className="group relative">
                                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 group-hover:border-blue-400/30 transition-all duration-300">
                                    <div className="text-3xl mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                        {product === 'Docs' && '📄'}
                                        {product === 'Drive' && '📁'}
                                        {product === 'WebX' && '🌐'}
                                        {product === 'Chat' && '💬'}
                                    </div>
                                    <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                                        Fusion-{product}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>


                {/* Divider Line */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-8">
                    <div className="absolute inset-0 flex justify-center">
                        <div className="w-1/3 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></div>
                    </div>
                </div>
            </section>


            
            <Footer />
        </div>
    );
}