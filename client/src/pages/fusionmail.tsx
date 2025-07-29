import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import MailBackground from "@/components/MailBackground";
import logoMail from "../assets/icon-mail-n.svg";

export default function FusionMail() {
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
                    <MailBackground />
                    <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                            <span className="text-sm text-gray-300">AIBAMS Fusion Suite</span>
                        </div>
                        <h1 className="flex items-center justify-center gap-3 md:gap-4 mb-8">
                            {/* Logo container with perfect alignment */}
                            <span className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
                                <img
                                    src={logoMail}
                                    alt="Fusion Mail Logo"
                                    className="h-full w-full object-contain"
                                    style={{
                                        filter: 'brightness(0) saturate(100%) invert(48%) sepia(90%) saturate(1600%) hue-rotate(250deg) brightness(1.1) contrast(1.2)'
                                    }}
                                />
                            </span>

                            {/* Text with responsive gradient */}
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Fusion Mail
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Your Smart, Secure Business Inbox. Designed for Work, Not Noise.
                        </p>
                    </div>
                </section>
            </div>

            {/* 2. Overview Section - Premium Black Theme */}
            <section className="relative py-28 px-6 sm:px-8 overflow-hidden bg-black">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-900/20 rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 mb-6">
                            <span className="text-xs font-medium tracking-widest text-blue-400">PRODUCT OVERVIEW</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Why Fusion-Mail?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Make communication fast, clutter-free, and business-first. Fusion-Mail isn't just email — it's your team's command center for projects, follow-ups, and files.
                        </p>
                    </div>
                </div>
            </section>



            {/* Divider Line - Top */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

            {/* 3. Key Features - Modern Black Theme with Perfect Card Padding */}
            <section className="relative py-24 px-4 sm:px-8 bg-black overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/10 rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-900/10 rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container padding */}
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 mb-6">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                            <span className="text-xs font-medium tracking-widest text-blue-400">KEY FEATURES</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Built for Busy Teams</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Everything you need to stay productive and focused
                        </p>
                    </div>

                    {/* Features grid with perfect card padding */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-2 lg:px-0"> {/* Responsive grid padding */}
                        {[
                            {
                                icon: "✅",
                                title: "Prioritized Inbox",
                                description: "Highlights leads, follow-ups, tasks — not just newsletters.",
                                color: "blue"
                            },
                            {
                                icon: "🔁",
                                title: "Deep Integration",
                                description: "Attach docs, pull sheets, or launch Fusion-Chat — all from inbox.",
                                color: "purple"
                            },
                            {
                                icon: "🔐",
                                title: "Privacy-First",
                                description: "No ads. No tracking. Just your emails and total control.",
                                color: "pink"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-6 sm:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-${feature.color}-500/30 transition-all duration-300 mx-2 sm:mx-3" // Added horizontal margins
                            >
                                {/* Hover effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="text-4xl mb-6 group-hover:text-${feature.color}-400 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-${feature.color}-300 transition-colors duration-300">
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

            {/* Divider Line - Bottom */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>




            {/* Email Actions - Enhanced Card Section */}
            <section className="py-20 px-4 bg-black relative">
                {/* Section Divider */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <span className="text-2xl">✉️</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Smarter <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Email Actions</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Powerful tools that integrate seamlessly with your email workflow
                        </p>
                    </div>

                    {/* Enhanced Card Grid */}
                    <div className="grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-8">
                        {/* Action 1 - AI Writing */}
                        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-900/30 text-3xl backdrop-blur-sm">🧠</div>
                                <h4 className="mb-3 text-xl font-semibold text-white">Write with AI</h4>
                                <p className="text-gray-400">
                                    Auto-compose replies, summarize threads, or draft cold emails with our advanced AI.
                                </p>
                                <div className="mt-4">
                                    <span className="inline-flex items-center text-sm text-blue-400 transition-all group-hover:text-blue-300">
                                        Try it now
                                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action 2 - Smart Reminders */}
                        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-purple-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-purple-900/30 text-3xl backdrop-blur-sm">🕐</div>
                                <h4 className="mb-3 text-xl font-semibold text-white">Smart Reminders</h4>
                                <p className="text-gray-400">
                                    "Reply later", "Nudge me in 3 days", or "Snooze till Monday" with natural language.
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {['Reply later', '3 days', 'Next week'].map((tag, i) => (
                                        <span key={i} className="rounded-full bg-purple-900/30 px-2.5 py-1 text-xs text-purple-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action 3 - Quick Attach */}
                        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 p-6 transition-all hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 to-pink-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-pink-900/30 text-3xl backdrop-blur-sm">📎</div>
                                <h4 className="mb-3 text-xl font-semibold text-white">Quick Attach</h4>
                                <p className="text-gray-400">
                                    Add docs, sheets, or forms directly from Fusion-Drive with one click.
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    {['📄', '📊', '📝'].map((icon, i) => (
                                        <div key={i} className="rounded-lg bg-gray-800/50 p-2 text-sm">
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action 4 - Shared Inboxes */}
                        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 p-6 transition-all hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-green-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-green-900/30 text-3xl backdrop-blur-sm">👥</div>
                                <h4 className="mb-3 text-xl font-semibold text-white">Shared Inboxes</h4>
                                <p className="text-gray-400">
                                    Collaborate on support@, sales@, info@ — manage as a unified team.
                                </p>
                                <div className="mt-4 flex -space-x-2">
                                    {['👩‍💻', '🧑‍💻', '👨‍💻', '👩‍💻'].map((avatar, i) => (
                                        <div key={i} className="h-8 w-8 rounded-full bg-gray-800/80 flex items-center justify-center text-sm">
                                            {avatar}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action 5 - Scheduled Send */}
                        <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 p-6 transition-all hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-yellow-900/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <div className="relative z-10">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-yellow-900/30 text-3xl backdrop-blur-sm">📩</div>
                                <h4 className="mb-3 text-xl font-semibold text-white">Scheduled Send</h4>
                                <p className="text-gray-400">
                                    Control delivery time for optimal impact, with message recall capability.
                                </p>
                                <div className="mt-4">
                                    <div className="flex items-center gap-2 text-sm text-yellow-400">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Set delivery time</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-700/50 bg-gray-900/30 p-6 text-center transition-all hover:border-purple-500/30 hover:bg-gray-900/50">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-2xl">
                                ✨
                            </div>
                            <h4 className="mb-2 text-xl font-semibold text-white">More Features</h4>
                            <p className="mb-4 text-gray-400">
                                Discover all the powerful email tools we've built
                            </p>
                            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-medium text-white hover:opacity-90 transition-opacity">
                                Explore All
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            
            
            {/* 5. Tools Checklist - Modern Linear Layout */}
            <section className="py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
                {/* Top Section Divider */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># EMAIL PRODUCTIVITY</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            🛠 Fusion-Mail Tools You'll Love
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Powerful features designed to streamline your email workflow
                        </p>
                    </div>

                    {/* Feature list with connecting lines */}
                    <div className="space-y-12 relative">
                        {/* Connecting line */}
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>

                        {/* Feature 1 - Email Templates */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-blue-400 text-xl p-2 group-hover:bg-blue-500/20 transition-colors duration-300">
                                ✍️
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    Templates for Everyday Replies
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Pre-designed templates for everyday replies and common scenarios.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 - Chat-Like Threads */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-purple-400 text-xl p-2 group-hover:bg-purple-500/20 transition-colors duration-300">
                                💬
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    Built-in Chat-Like Threads
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Conversational email flow that keeps discussions organized and accessible.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 - Billing Alerts */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-green-400 text-xl p-2 group-hover:bg-green-500/20 transition-colors duration-300">
                                🧾
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                                    Billing Alerts & Deal Follow-ups from CRM

                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Automated notifications from your CRM integration.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 - Pinned Conversations */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xl p-2 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                📌
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                    Pinned Conversations for Teams
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Keep important threads easily accessible when you need them.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 - Enterprise Security */}
                        <div className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="flex-shrink-0 flex items-start md:items-center justify-center w-10 h-10 rounded-full bg-gray-900 border border-gray-800 text-red-400 text-xl p-2 group-hover:bg-red-500/20 transition-colors duration-300">
                                🛡️
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                                    2FA + End-to-End Encryption
                                </h4>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Advanced protection for your sensitive communications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 7. Connected Workflow Section */}
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
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># SEAMLESS INTEGRATION</div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connected</span> to Your Workflow
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Fusion-Mail works seamlessly with the entire Fusion Suite
                        </p>
                    </div>

                    {/* Connected Apps Table */}
                    <div className="rounded-xl border border-gray-800 overflow-hidden bg-gray-900/50 backdrop-blur-sm max-w-3xl mx-auto">
                        <table className="w-full">
                            <thead className="border-b border-gray-800">
                                <tr>
                                    <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">Fusion App</th>
                                    <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">What You Can Do</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {/* Fusion-Docs */}
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-900/30 flex items-center justify-center">📄</span>
                                        Fusion-Docs
                                    </td>
                                    <td className="py-4 px-6 text-gray-400">Preview or attach docs without leaving inbox</td>
                                </tr>

                                {/* Fusion-Drive */}
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-900/30 flex items-center justify-center">📁</span>
                                        Fusion-Drive
                                    </td>
                                    <td className="py-4 px-6 text-gray-400">Auto-upload attachments</td>
                                </tr>

                                {/* Fusion-Sheets */}
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-900/30 flex items-center justify-center">📊</span>
                                        Fusion-Sheets
                                    </td>
                                    <td className="py-4 px-6 text-gray-400">Insert live data charts in email bodies</td>
                                </tr>

                                {/* Fusion-Chat */}
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-pink-900/30 flex items-center justify-center">💬</span>
                                        Fusion-Chat
                                    </td>
                                    <td className="py-4 px-6 text-gray-400">Ask AI to summarize threads or draft replies</td>
                                </tr>

                                {/* Fusion-CRM */}
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-900/30 flex items-center justify-center">👥</span>
                                        Fusion-CRM
                                    </td>
                                    <td className="py-4 px-6 text-gray-400">Get context about leads directly from email threads</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom divider line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>





            {/* Role-Based Email Section */}
            <section className="py-24 px-6 sm:px-8 bg-black relative overflow-hidden">
                
                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-widest text-gray-400 mb-3 font-medium"># TAILORED EXPERIENCE</div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Email</span> That Understands Roles
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Customized workflows for different team members
                        </p>
                    </div>



                    {/* Roles Grid - 5 columns (2 on mobile) */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
                        {/* Founders */}
                        <div className="group p-5 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-blue-500/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-blue-900/20 mb-3 flex items-center justify-center text-2xl mx-auto">
                                👔
                            </div>
                            <h4 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-blue-400">
                                Founders
                            </h4>
                            <ul className="space-y-1 text-xs text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-1">•</span>
                                    Investor communications
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-1">•</span>
                                    Cold outreach
                                </li>
                            </ul>
                        </div>

                        {/* Support Teams */}
                        <div className="group p-5 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-purple-500/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-purple-900/20 mb-3 flex items-center justify-center text-2xl mx-auto">
                                🛠️
                            </div>
                            <h4 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-purple-400">
                                Support
                            </h4>
                            <ul className="space-y-1 text-xs text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-1">•</span>
                                    Manage support inbox
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-1">•</span>
                                    Quick tags
                                </li>
                            </ul>
                        </div>

                        {/* Sales Teams */}
                        <div className="group p-5 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-pink-500/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-pink-900/20 mb-3 flex items-center justify-center text-2xl mx-auto">
                                💰
                            </div>
                            <h4 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-pink-400">
                                Sales
                            </h4>
                            <ul className="space-y-1 text-xs text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-pink-400 mr-1">•</span>
                                    Follow-up reminders
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-400 mr-1">•</span>
                                    Deal templates
                                </li>
                            </ul>
                        </div>

                        {/* Admins */}
                        <div className="group p-5 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-yellow-500/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-yellow-900/20 mb-3 flex items-center justify-center text-2xl mx-auto">
                                🔐
                            </div>
                            <h4 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-yellow-400">
                                Admins
                            </h4>
                            <ul className="space-y-1 text-xs text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-1">•</span>
                                    Filtered internal comms
                                </li>
                            </ul>
                        </div>

                        {/* Freelancers */}
                        <div className="group p-5 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/20 hover:border-green-500/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-green-900/20 mb-3 flex items-center justify-center text-2xl mx-auto">
                                🎨
                            </div>
                            <h4 className="text-lg font-semibold text-white text-center mb-2 group-hover:text-green-400">
                                Freelancers
                            </h4>
                            <ul className="space-y-1 text-xs text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-1">•</span>
                                    Branded email
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-1">•</span>
                                    Domain integration
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>






            {/* 6. CTA Section - Black Background with Dividers */}
            <section className="py-24 px-4 bg-black relative overflow-hidden">
                {/* Top Section Divider */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    {/* Section indicator (top) */}
                    <div className="text-xs tracking-widest text-gray-500 mb-8"># READY TO TRANSFORM YOUR EMAIL?</div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                       Business-Class Email Without the Bloat
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Fast, private, customizable — designed for teams to focus and communicate.
                    </p>

                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8 inline-block max-w-xs sm:max-w-none">
                        <p className="text-lg text-white mb-2">🎁 Early Access Offer</p>
                        <p className="text-gray-300">
                            Get 5 professional business emails — free forever.
                        </p>
                    </div>

                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-purple-500/30 text-base">
                        🚀 CLAIM YOUR EARLY ACCESS
                    </button>
                </div>

                {/* Bottom Section Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </section>
            
            <Footer />
        </div>
    );
}