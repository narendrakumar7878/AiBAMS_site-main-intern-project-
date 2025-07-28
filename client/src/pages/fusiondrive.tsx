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




            {/* 5. AI Section */}
            <section className="py-20 px-4 bg-[#0f172a] relative">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        🧠 Embedded Intelligence
                    </h3>
                    <div className="p-6 bg-[#1e293b] rounded-xl border border-purple-500/30 inline-block">
                        <p className="text-gray-300">
                            "Soon, Fusion-Drive will auto-tag files, generate previews from audio/video, and suggest storage optimization strategies."
                        </p>
                    </div>
                </div>
            </section>





            {/* 6. CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-blue-900/40 to-purple-900/40">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        🚀 Ready to Simplify File Chaos?
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Get started with 5GB free — no card required. Your team's assets, ideas, and data now have a smarter home.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all shadow-lg">
                        📁 START USING FUSION-DRIVE
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}