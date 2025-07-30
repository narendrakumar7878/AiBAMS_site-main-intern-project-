import React, { useState, useEffect } from 'react';

const Footer = () => {
    // Image slider state and configuration
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'https://source.unsplash.com/random/800x500?tech',
        'https://source.unsplash.com/random/800x500?nature',
        'https://source.unsplash.com/random/800x500?business',
        'https://source.unsplash.com/random/800x500?architecture',
        'https://source.unsplash.com/random/800x500?computer'
    ];

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <footer
            className="w-full min-h-[80vh] flex flex-col text-white relative overflow-hidden"
            style={{
                background: `
          radial-gradient(ellipse 300vh 120vh at 50% 130%, 
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 205, 110, 0.14) 12%,
            rgba(255, 155, 60, 0.09) 25%,
            rgba(255, 125, 45, 0.055) 35%,
            rgba(9, 9, 9, 0.04) 45%,
            rgba(155, 85, 25, 0.022) 55%,
            rgba(105, 55, 15, 0.013) 65%,
            rgba(55, 30, 8, 0.007) 75%,
            transparent 85%
          ),
          radial-gradient(ellipse 90% 70% at 50% 110%, 
            rgba(255, 255, 255, 0.28) 0%,
            rgba(255, 225, 155, 0.19) 18%,
            rgba(255, 185, 85, 0.115) 35%,
            rgba(255, 145, 65, 0.062) 50%,
            rgba(205, 105, 45, 0.027) 65%,
            transparent 80%
          ),
          radial-gradient(ellipse 55% 45% at 50% 102%, 
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 245, 205, 0.38) 25%,
            rgba(255, 205, 125, 0.19) 45%,
            rgba(255, 165, 85, 0.088) 65%,
            rgba(225, 125, 55, 0.035) 80%,
            transparent 95%
          ),
          linear-gradient(180deg,
            #000000 0%,
            #000000 40%,
            #020202 50%,
            #050505 60%,
            #0a0a0a 68%,
            #111111 74%,
            #1a1a1a 80%,
            #2a1f17 84%,
            #3d2a1d 88%,
            #533625 91%,
            #6b432a 94%,
            #8b5530 96%,
            #a66b35 98%,
            #c8843f 100%
          )
        `,
            }}
        >
            {/* Image Slider Section */}
            <div className="w-full h-[300px] relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 h-[300px]"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-gray-400'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Rest of your footer content */}
            <div className="flex-1">
                {/* Desktop lighting layers (completely unchanged) */}
                <div className="hidden md:block absolute inset-0 pointer-events-none"
                    style={{
                        background: `
          radial-gradient(ellipse 20% 15% at 50% 98%, 
            rgba(255, 255, 255, 0.75) 0%,
            rgba(255, 255, 255, 0.58) 25%,
            rgba(255, 250, 225, 0.35) 50%,
            rgba(255, 225, 165, 0.20) 70%,
            rgba(255, 185, 105, 0.10) 85%,
            transparent 100%
          )
        `
                    }}
                />

                {/* Mobile-optimized lighting (only affects mobile) */}
                <div className="md:hidden absolute inset-0 pointer-events-none"
                    style={{
                        background: `
          /* Stronger top dark gradient to ensure text contrast */
          linear-gradient(to bottom, 
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.7) 30%,
            rgba(0,0,0,0.4) 70%,
            transparent 100%
          ),
          /* Bottom lighting - more compact and focused */
          radial-gradient(ellipse 100% 30% at 50% 110%, 
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 225, 165, 0.25) 20%,
            rgba(255, 185, 105, 0.15) 40%,
            rgba(225, 145, 75, 0.08) 60%,
            transparent 80%
          )
        `
                    }}
                />

                {/* Footer Content - unchanged */}
                <div className="w-full pt-12 md:pt-20 pb-12 md:pb-16 relative z-10 px-5 sm:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-10">

                            {/* Column 1 - Social */}
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Social</h4>
                                <ul className="space-y-2.5 md:space-y-3 text-sm">
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Instagram</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">LinkedIN</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">YouTube</a></li>
                                </ul>
                            </div>

                            {/* Column 2 - Fusion Suite */}
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Fusion Suite</h4>
                                <ul className="space-y-2.5 md:space-y-3 text-sm">
                                    <li><a href="/webx" className="hover:text-white text-gray-400 transition-colors duration-300">WebX</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Drive</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Docs</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Sheet</a></li>
                                    <li><a href="/fusionmail" className="hover:text-white text-gray-400 transition-colors duration-300">Mail</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Chat</a></li>
                                </ul>
                            </div>

                            {/* Column 3 - Company */}
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Company</h4>
                                <ul className="space-y-2.5 md:space-y-3 text-sm">
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">About Us</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Careers</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Contact</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Updates</a></li>
                                </ul>
                            </div>

                            {/* Column 4 - Resources */}
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Resources</h4>
                                <ul className="space-y-2.5 md:space-y-3 text-sm">
                                    <li><a href="/privacy" className="hover:text-white text-gray-400 transition-colors duration-300">Privacy policy</a></li>
                                    <li><a href="/security" className="hover:text-white text-gray-400 transition-colors duration-300">Security</a></li>
                                    <li><a href="/legal" className="hover:text-white text-gray-400 transition-colors duration-300">Legal</a></li>
                                    <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Status</a></li>
                                    <li><a href="/sitemapfusion" className="hover:text-white text-gray-400 transition-colors duration-300">Sitemap</a></li>
                                    <li><a href="/blog" className="hover:text-white text-gray-400 transition-colors duration-300">Blog</a></li>
                                </ul>
                            </div>

                            {/* New Column 5 - Language Selector */}
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Language</h4>
                                <div className="relative">
                                    <select
                                        className="appearance-none bg-transparent border border-gray-600 rounded-md py-2 pl-3 pr-8 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                                    >
                                        <option value="en" className="bg-gray-900 text-white">English</option>
                                        <option value="hi" className="bg-gray-900 text-white">हिन्दी (Hindi)</option>
                                        <option value="es" className="bg-gray-900 text-white">Español (Spanish)</option>
                                        <option value="fr" className="bg-gray-900 text-white">Français (French)</option>
                                        <option value="de" className="bg-gray-900 text-white">Deutsch (German)</option>
                                        <option value="ja" className="bg-gray-900 text-white">日本語 (Japanese)</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Change your preferred language</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright section - with mobile text visibility improvements */}
                <div className="w-full text-center text-xs text-white pb-4 z-20 relative mb-[30px]">
                    <div className="md:text-black">© 2025 All Rights Reserved by AIBAMS.</div>
                    <div className="mt-3 tracking-widest flex flex-col items-center justify-center">
                        <span className="flex items-center justify-center gap-2 text-white md:text-black">
                            <span className="uppercase">MADE WITH</span>
                            <span style={{ color: '#b90101', fontSize: '1rem', margin: '0 0.25rem' }}>❤</span>
                            <span className="uppercase">BY</span>
                            <span className="font-bold tracking-widest ml-1 underline decoration-dotted">SHDPIXEL</span>
                            <span className="uppercase ml-1">IN</span>
                            <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png"
                                style={{ display: 'inline', width: '20px', height: 'auto', marginLeft: '0.25rem', verticalAlign: 'middle', filter: 'invert(1) brightness(2) md:filter-none' }}
                                alt="Bharat / India" />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;