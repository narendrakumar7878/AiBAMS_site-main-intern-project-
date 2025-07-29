import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import DriveBackground from "../components/DriveBackground";
import logoDrive from "../assets/icon-drive-n.svg";

export default function FusionDrive() {
    const [isScrolled, setIsScrolled] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.pageYOffset > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0f172a]">
            <HeaderWhite />

            {/* 1. Hero Section */}
            <div ref={heroRef}>
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                    <DriveBackground />
                    <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <span className="text-sm text-gray-300">AIBAMS Fusion Suite</span>
                        </div>
                        <h1 className="flex items-center justify-center gap-3 md:gap-4 mb-8">
                            {/* Logo container with perfect alignment */}
                            <span className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
                                <img
                                    src={logoDrive}
                                    alt="Fusion drive Logo"
                                    className="h-full w-full object-contain"
                                    style={{
                                        filter: 'brightness(0) saturate(100%) invert(45%) sepia(90%) saturate(2000%) hue-rotate(200deg) brightness(1.3) contrast(1.2)'
                                    }}
                                />
                            </span>

                            {/* Text with responsive gradient */}
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Fusion Drive
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            The Smart Cloud Storage Built for Business. Not Just Backup.
                        </p>
                    </div>
                </section>
            </div>

            {/* 2. Overview Section - Enhanced */}
            <section className="py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># DRIVE OVERVIEW</div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Why</span> Fusion-Drive?
                        </h2>

                        {/* Description paragraphs */}
                        <div className="space-y-5 max-w-3xl mx-auto">
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                You're not just storing files — you're powering workflows. Fusion-Drive is where your proposals, creatives, policies, and assets live, move, and sync.
                            </p>
                            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                                It's clean. It's fast. And it's connected to everything else you already use in the Fusion Suite.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Thin divider line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>





            {/* 3. Core Advantages - Modern */}
            <section className="py-24 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Top divider line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># DRIVE CORE ADVANTAGES</div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Core</span> Advantages
                        </h3>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Powerful features designed to transform how you work with files
                        </p>
                    </div>

                    {/* Advantages List */}
                    <div className="space-y-6">
                        {/* Advantage 1 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-blue-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-xl group-hover:text-blue-400 transition-colors">
                                    ➤
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        5GB Free to Start. Pay Only As You Grow.
                                    </h4>
                                    <p className="text-gray-400">
                                        Every account gets generous storage with no hidden limits. Add more as needed for ₹99/GB/month.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Advantage 2 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-purple-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-xl group-hover:text-purple-400 transition-colors">
                                    ➤
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        Live Previews, No Download Needed
                                    </h4>
                                    <p className="text-gray-400">
                                        Open Docs, Sheets, PDFs, images, and even slide decks right inside Drive.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Advantage 3 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-pink-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center text-xl group-hover:text-pink-400 transition-colors">
                                    ➤
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                                        Smart Search & Tags
                                    </h4>
                                    <p className="text-gray-400">
                                        Don't just scroll — find. Filter by app, content type, tags, or even contributors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Advantage 4 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-green-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center text-xl group-hover:text-green-400 transition-colors">
                                    ➤
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        Secure Share Links with Expiry
                                    </h4>
                                    <p className="text-gray-400">
                                        Control what gets out — and when. Password protection and timed links built-in.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Advantage 5 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-yellow-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center text-xl group-hover:text-yellow-400 transition-colors">
                                    ➤
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                        Built-in WebX Backups
                                    </h4>
                                    <p className="text-gray-400">
                                        Your Fusion-WebX websites are automatically backed up in Drive — no extra cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom divider line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>






            {/* 4. Use Cases - Modern */}
            <section className="py-24 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># DRIVE USE CASES</div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Team</span> Use Cases
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Discover how different teams leverage Fusion-Drive for their workflows
                        </p>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid md:grid-cols-2 px-4 gap-8">
                        {/* Use Case 1 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                            <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-500/20 transition-colors">
                                🧑‍🎨
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                Creative Studios
                            </h4>
                            <p className="text-gray-400">
                                Organize brand assets, export-ready videos, and versioned files in a shared space.
                            </p>
                        </div>

                        {/* Use Case 2 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-16 h-16 rounded-lg bg-purple-900/30 flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-500/20 transition-colors">
                                📄
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                Legal & Admin
                            </h4>
                            <p className="text-gray-400">
                                Keep compliance docs, contracts, and government forms securely stored & permission-gated.
                            </p>
                        </div>

                        {/* Use Case 3 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-pink-500/30 transition-all hover:shadow-lg hover:shadow-pink-500/10">
                            <div className="w-16 h-16 rounded-lg bg-pink-900/30 flex items-center justify-center text-3xl mb-6 group-hover:bg-pink-500/20 transition-colors">
                                💼
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                                Freelancers & Agencies
                            </h4>
                            <p className="text-gray-400">
                                Deliver files with branded links, receive client uploads in shared folders.
                            </p>
                        </div>

                        {/* Use Case 4 */}
                        <div className="group p-8 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                            <div className="w-16 h-16 rounded-lg bg-emerald-900/30 flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                📊
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                Founders & Ops
                            </h4>
                            <p className="text-gray-400">
                                Back up pitch decks, track monthly reports, and store analytics from Sheets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            {/* 5. AI Section - Modern */}
            <section className="py-24 px-6 bg-black relative overflow-hidden">
                {/* Top divider line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># DRIVE AI</div>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Embedded</span> Intelligence
                        </h3>
                    </div>

                    {/* AI Feature Box */}
                    <div className="p-8 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur-sm inline-block max-w-full">
                        <p className="text-lg text-gray-300 leading-relaxed italic">
                            "Soon, Fusion-Drive will auto-tag files, generate previews from audio/video, and suggest storage optimization strategies."
                        </p>
                        {/* <div className="mt-4 text-sm text-purple-400 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Coming soon
                        </div> */}
                    </div>
                </div>

                {/* Bottom divider line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>


            {/* 7. Connected Suite Section - Modern */}
            <section className="py-24 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Top divider line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># CONNECTED ECOSYSTEM</div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connected</span> Across the Suite
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you store can be used across the Fusion ecosystem
                        </p>
                    </div>

                    {/* Connected Apps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {/* Fusion-Mail */}
                        <div className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                            <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-500/20 transition-colors">
                                ✉️
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                Fusion-Mail
                            </h4>
                            <p className="text-sm text-gray-400">
                                Attach documents to outgoing mail directly from Drive
                            </p>
                        </div>

                        {/* Fusion-Docs */}
                        <div className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-purple-900/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-purple-500/20 transition-colors">
                                📝
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                Fusion-Docs
                            </h4>
                            <p className="text-sm text-gray-400">
                                Embed or link reference materials in your docs
                            </p>
                        </div>

                        {/* Fusion-WebX */}
                        <div className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                            <div className="w-12 h-12 rounded-lg bg-emerald-900/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                🌐
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                Fusion-WebX
                            </h4>
                            <p className="text-sm text-gray-400">
                                Sync media, images, and site backups
                            </p>
                        </div>

                        {/* Fusion-Chat */}
                        <div className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-pink-500/30 transition-all hover:shadow-lg hover:shadow-pink-500/10">
                            <div className="w-12 h-12 rounded-lg bg-pink-900/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-pink-500/20 transition-colors">
                                💬
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
                                Fusion-Chat
                            </h4>
                            <p className="text-sm text-gray-400">
                                Let AI scan, summarize, and analyze stored files instantly
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom divider line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>



            {/* 6. CTA Section - Modern */}
            <section className="py-24 px-6 bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    {/* Section header */}
                    <div className="text-xs tracking-widest text-gray-400 mb-4 font-medium uppercase">
                        # READY TO TRANSFORM YOUR FILES?
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Simplify</span> File Chaos
                    </h3>

                    <p className="text-gray-300 mb-10 max-w-lg mx-auto text-lg">
                        Get started with 5GB free — no card required. Your team's assets, ideas, and data now have a smarter home.
                    </p>

                    {/* Animated button */}
                    <button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            📁 START USING FUSION-DRIVE
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                </div>

                {/* Bottom divider line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>

            <Footer />
        </div>
    );
}