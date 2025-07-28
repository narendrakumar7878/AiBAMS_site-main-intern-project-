import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import DocsBackground from "@/components/DocsBackground";
import logoDoc from "../assets/icon-doc-n.svg";

export default function FusionDocs() {
    const [isScrolled, setIsScrolled] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.pageYOffset > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black-950">
            <HeaderWhite />

            {/* 1. Hero Section */}
            <div ref={heroRef}>
                <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                    <DocsBackground />
                    <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                <path d="M20 3v4"></path>
                                <path d="M22 5h-4"></path>
                                <path d="M4 17v2"></path>
                                <path d="M5 18H3"></path>
                            </svg>
                            <span className="text-sm text-gray-300">AIBAMS Fusion Docs</span>
                        </div>
                        <h1 className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                            {/* Logo container with responsive sizing */}
                            <span className="flex-shrink-0 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center">
                                <img
                                    src={logoDoc}
                                    alt="Fusion Docs Logo"
                                    className="h-full w-full object-contain"
                                    style={{
                                        filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(260deg) brightness(1.1) contrast(1)'
                                    }}
                                />
                            </span>

                            {/* Text with responsive gradient */}
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
                                Fusion Docs
                            </span>
                        </h1>
    



                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            More Than Just a Document Editor. It's Your Smart Workspace.
                        </p>
                    </div>
                </section>
            </div>

            {/* Overview Section */}
            <section className="w-full py-28 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Gradient background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Modern badge */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-0.5 rounded-lg mb-10 mx-auto max-w-md">
                        <div className="bg-black rounded-lg py-2 px-4">
                            <p className="text-sm font-medium text-blue-400 text-center"># FUSION-DOCS FEATURES</p>
                        </div>
                    </div>

                    {/* Main heading with gradient text */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center leading-tight">
                        A Modern Writing Experience <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Built for Business Teams</span>
                    </h2>

                    {/* Content with enhanced styling */}
                    <div className="relative group max-w-3xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                        <p className="relative text-xl text-gray-300 px-8 py-6 bg-gray-900/50 rounded-lg  text-center leading-relaxed">
                            Whether you're drafting contracts, creating SOPs, or writing newsletters — Fusion-Docs brings intelligence, structure, and collaboration into one clean interface.
                        </p>
                    </div>
                </div>
            </section>




            {/* 3. Key Features Section */}
            {/* Modern Features Section */}
            {/* Premium Features Section with Delicate Dividers */}
            <section className="py-24 px-6 sm:px-8 bg-black relative">
                {/* Ultra-thin section divider above */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-0.5 h-32 bg-blue-500"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-0.5 h-24 bg-purple-500"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Section header with delicate underline */}
                    <div className="text-center mb-20 pb-8 relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                        <div className="text-xs tracking-widest text-gray-400 mb-4 font-medium">CORE INNOVATIONS</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            💡 What Makes Fusion-Docs Different?
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Precision tools for modern document creation
                        </p>
                    </div>

                    {/* Features with ultra-thin borders */}
                    <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                        {/* Feature 1 */}
                        <div className="group relative pb-8 border-b md:border-b-0 md:border-r border-gray-800 md:pr-8 last:border-0">
                            <div className="text-4xl mb-6 text-blue-400 transition-all duration-300">🧠</div>
                            <h4 className="text-xl font-medium text-white mb-3">AI-Powered Writing</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Type your thoughts. Fusion AI helps you finish, format, and even rephrase — in your tone, for your audience.
                            </p>
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-500 md:hidden"></div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative pb-8 border-b md:border-b-0 md:border-r border-gray-800 md:pr-8 last:border-0">
                            <div className="text-4xl mb-6 text-purple-400 transition-all duration-300">🔗</div>
                            <h4 className="text-xl font-medium text-white mb-3">Real-Time Collaboration</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Tag teammates, assign comments, and co-edit with live updates. Like Google Docs, but deeply integrated.
                            </p>
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-500 md:hidden"></div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative pb-8">
                            <div className="text-4xl mb-6 text-emerald-400 transition-all duration-300">🗂</div>
                            <h4 className="text-xl font-medium text-white mb-3">Smart Organization</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Auto-sort docs into folders, link them to client dashboards, and apply project labels. No more digging around.
                            </p>
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-500 md:hidden"></div>
                        </div>
                    </div>
                </div>

                {/* Ultra-thin section divider below */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            </section>



            

            {/* 4. Use Cases Section - Modern Design */}
            
            <section className="w-full py-20 px-6 sm:px-8 lg:px-12 bg-black relative overflow-hidden">
                {/* Background gradient elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Section header with perfect spacing */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># POWERFUL USE CASES</div>
                        <h3 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white mb-4 leading-tight">
                            🚀 Use Fusion-Docs To...
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-[1.125rem]">
                            Transform how your team creates and manages documents
                        </p>
                    </div>

                    {/* Modern card grid with responsive spacing */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Use Case 1 */}
                        <div className="group relative p-6 sm:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-400/30 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="text-3xl p-3 bg-gray-800 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                                    📝
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                        Write Contracts & Agreements
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        Built-in templates. E-signature support coming soon.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Use Case 2 */}
                        <div className="group relative p-6 sm:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-400/30 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="text-3xl p-3 bg-gray-800 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                                    📢
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                        Draft Marketing Campaigns
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        Preview in different email formats. Export to Fusion-Mail in 1 click.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Use Case 3 */}
                        <div className="group relative p-6 sm:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="text-3xl p-3 bg-gray-800 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                                    📊
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                        Create Reports
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        Embed Fusion-Sheet graphs that auto-update inside your doc.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Use Case 4 */}
                        <div className="group relative p-6 sm:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-amber-400/30 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="text-3xl p-3 bg-gray-800 rounded-lg group-hover:bg-amber-500/20 transition-colors duration-300">
                                    📋
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                                        Maintain SOPs
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        Lock versions. Set permissions. Share with expiration settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            
            {/* 5. Features - Modern Linear Layout */}
            <section className="py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-0 md:w-4/5 lg:w-3/5">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># WORKFLOW ENHANCEMENTS</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            🔍 Features That Empower Your Work
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Seamlessly integrated tools for maximum productivity
                        </p>
                    </div>

                    {/* Feature list with connecting lines */}
                    <div className="space-y-12 relative">
                        {/* Connecting line */}
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>

                        {/* Feature 1 */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-blue-400 text-xl p-2 group-hover:bg-blue-500/20 transition-colors duration-300">
                                🎤
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    Voice-to-Text Dictation
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Capture thoughts instantly during meetings or while multitasking.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-emerald-400 text-xl p-2 group-hover:bg-emerald-500/20 transition-colors duration-300">
                                🌙
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                    Dark Mode & Reader View
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Comfort for long working hours, day or night.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-purple-400 text-xl p-2 group-hover:bg-purple-500/20 transition-colors duration-300">
                                🕰️
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    Document History
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Scroll back through every change. Restore older versions in 1 click.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xl p-2 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                🔗
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                    Built-in Citation
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Auto-format references and link to Fusion-Drive files or external URLs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <hr className="border-t border-zinc-800" />





            {/* CTA Section */}
            <section className="w-full  mt-16 p-20 bg-black shadow">
                <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
                    <div className="text-xs tracking-widest text-gray-400 mb-2 font-medium"># PRODUCTIVITY BOOST</div>
                    <h3 className="text-[1.875rem] font-bold text-white mb-6">
                         Simpler. Smarter. Faster.
                    </h3>
                    <p className="text-[1.125rem] text-gray-300 mb-8 max-w-lg mx-auto">
                        No learning curve. No fluff. Just a seamless editor for real business needs.
                    </p>

                    <div className="flex justify-center">
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 rounded-full blur-xl opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]" />
                            <div className="relative p-[2px] bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] rounded-full transition-opacity duration-300 group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]">
                                <div className="bg-black px-8 py-3 rounded-full group-hover:bg-black/80 transition-colors duration-300">
                                    <span className="text-lg font-bold tracking-wider uppercase text-white group-hover:text-white/90 transition-colors duration-300">📝 START WRITING IN FUSION-DOCS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-t border-zinc-800" />

            <Footer />
        </div>
    );
}