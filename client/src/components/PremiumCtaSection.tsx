import React from 'react';

export default function PremiumCtaSection() {
    return (
        <>
            {/* Premium CTA Section */}
            <section className="relative py-28 px-6 overflow-hidden bg-black">
                {/* Animated gradient background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-purple-900/10"></div>
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[90px] animate-float-slow"></div>
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600/5 rounded-full blur-[90px] animate-float-slow animation-delay-2000"></div>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    {/* Animated badge */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative inline-flex">
                            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-sm group-hover:blur-md transition-all duration-500"></div>
                            <span className="relative inline-flex items-center justify-center rounded-full bg-black px-4 py-1.5 text-xs font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 border border-gray-800/50 backdrop-blur-sm">
                                EARLY ACCESS
                            </span>
                        </div>
                    </div>

                    {/* Headline with gradient animation */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
                            Make Your Web Presence Instant
                        </span>
                    </h3>

                    <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                        Claim your WebX and launch within the hour — really.
                    </p>

                    {/* Animated CTA button */}
                    <div className="relative group max-w-fit mx-auto mb-8">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-80 group-hover:opacity-100 group-hover:blur-md transition-all duration-500"></div>
                        <button className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl border border-blue-400/20 overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                <span className="inline-block animate-bounce-slow">🌐</span>
                                <span className="ml-2">LAUNCH WITH WEBX</span>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine"></span>
                        </button>
                    </div>

                    <p className="text-gray-400 text-sm">
                        Free AI site builds & hosting for early access members.
                    </p>
                </div>
            </section>
        </>
    );
} 