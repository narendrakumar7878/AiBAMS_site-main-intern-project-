import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Fs from "../assets/fusion-suite.png";
import { Rocket, Gem, Gift } from "lucide-react";

export default function PricingCta() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2024-12-31T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Top border with enhanced glow effect */}
      <div className="absolute left-0 top-0 w-full pointer-events-none z-10 flex justify-center flex-col items-center">
        <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#fdc43f] to-transparent text-center shadow-[0_0_20px_rgba(253,196,63,0.5)]" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Special Offer Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider animate-bounce">
            ⚡ Limited Time Offer ⚡
          </div>
        </div>

        {/* Main heading */}
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-12 flex justify-center flex-col items-center">
          <img
            src={Fs}
            alt="Fusion Suite"
            className="w-2/3 sm:w-1/2 md:w-1/3 max-w-xs"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 mb-2 sm:mb-0">
            The Ultimate AI Business Platform
          </p>
        </div>

        {/* Features grid - CapabilitiesSection style */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0 ">
            {/* Early Access Card */}
            <div className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20">
              <Rocket className="w-7 h-7 text-gray-200 mb-4" />
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Early Access</h3>
              <p className="text-gray-400 text-base"> Be among the first 100 users to activate Fusion Suite.</p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </div>
            {/* Premium Support Card */}
            <div className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20">
              <Gem className="w-7 h-7 text-gray-200 mb-4" />
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Premium Support</h3>
              <p className="text-gray-400 text-base"> Get 24/7 onboarding help and instant resolution.</p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </div>
            {/* Bonus Features Card 1 */}
            <div className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20">
              <Gift className="w-7 h-7 text-gray-200 mb-4" />
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Exclusive Features</h3>
              <p className="text-gray-400 text-base"> Preloaded templates, smart automations, and priority feature access.</p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </div>
            {/* Bonus Features Card 2 */}
            <div className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20">
              <Gift className="w-7 h-7 text-gray-200 mb-4" />
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Lifetime Discount</h3>
              <p className="text-gray-400 text-base">Just ₹849/month with zero development or setup fees.</p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </div>
          </div>


          <div className="w-full border border-zinc-800 mt-8 sm:mt-16 p-6 sm:p-8 md:p-12 bg-black shadow-xl flex flex-col items-center rounded-xl sm:rounded-2xl">
            <h3 className="text-2xl sm:text-[1.875rem] md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
              Unlock Lifetime Access to Fusion Suite
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 text-center max-w-2xl px-2">
              Join the future of work with India's first AI business platform. Early access members get full access to the first 6 tools, bonus perks, and a lifetime discount.
            </p>

            <div className="flex justify-center mb-8 sm:mb-12 w-full px-2">
              <div className="relative group cursor-pointer w-full max-w-md">
                <div className="absolute -inset-1 rounded-full blur-xl opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] group-hover:opacity-60"></div>
                <div className="relative p-[2px] bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] rounded-full transition-all duration-300 group-hover:brightness-110 w-full">
                  <div className="bg-black px-6 py-3 sm:px-8 sm:py-3 rounded-full group-hover:bg-black/80 transition-colors duration-300 w-full text-center">
                    <span className="text-base sm:text-lg font-bold tracking-wider uppercase text-white group-hover:text-white/90 transition-colors duration-300">
                      <span className="inline-block animate-bounce">🎯</span> Claim Your Support Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-gray-400 text-sm sm:text-base mt-2 w-full px-4">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-green-400 text-xl">✓</span>
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-green-400 text-xl">✓</span>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-green-400 text-xl">✓</span>
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}