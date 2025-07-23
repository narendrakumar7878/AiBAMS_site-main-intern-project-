import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Fs from "../assets/fusion-suite.png";
import { Rocket, Gem, Gift, Zap, ArrowRight, Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion"

export default function LaunchSection() {
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

  const features = [
    {
      icon: Rocket,
      title: "Early Access",
      description: "Be among the first 100 to join the AI revolution with exclusive access.",
      color: "blue"
    },
    {
      icon: Gem,
      title: "Premium Support",
      description: "24/7 real human support to guide your journey.",
      color: "purple"
    },
    {
      icon: Gift,
      title: " Bonus Templates & Tools",
      description: " Access pre-built templates, automation flows & marketing boosters.",
      color: "green"
    },
    {
      icon: Star,
      title: "Founders-Only Pricing",
      description: " One-time lifetime access. No recurring fees. Limited-time only.",
      color: "yellow"
    }
  ];

  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 60,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };


  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-400";
      case "purple":
        return "text-purple-400";
      case "green":
        return "text-green-400";
      case "yellow":
        return "text-yellow-400";
      default:
        return "text-gray-200";
    }
  };

  return (
    <section className="w-full bg-black py-24 px-4  relative overflow-hidden">
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
        <div className="text-center mb-12 flex justify-center flex-col items-center">
          <img src={Fs} alt="Fusion Suite" className="w-1/3 " />
          <p className="text-md md:text-l text-gray-300 my-6">
            The Ultimate AI Business Platform
          </p>
        </div>

        {/* Features grid - CapabilitiesSection style */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0 ">
            {/* Early Access Card */}
            <motion.div
              className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20 bg-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
              viewport={{ once: true, amount: 0.3 }}
            >

              <Rocket className="w-7 h-7 text-gray-200 mb-4 group-hover:text-yellow-400 transition-colors duration-300"/>
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Early Access</h3>
              <p className="text-gray-400 text-base"> Be among the first 100 to join the AI revolution with exclusive access.
              </p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </motion.div>

            
            {/* Premium Support Card */}


            <motion.div
              className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20 bg-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
              viewport={{ once: true, amount: 0.3 }}
            >

              <Gem className="w-7 h-7 text-gray-200 mb-4 group-hover:text-yellow-400 transition-colors duration-300" />
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Premium Support</h3>
              <p className="text-gray-400 text-base"> 24/7 real human support to guide your journey.</p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </motion.div>
            {/* Bonus Features Card 1 */}


            <motion.div
              className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20 bg-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
              viewport={{ once: true, amount: 0.3 }}
            >

              <Gift className="w-7 h-7 text-gray-200 mb-4 group-hover:text-yellow-400 transition-colors duration-300" />
              <h3 className="text-[1.125rem] font-semibold text-white mb-2">Bonus Templates & Tools
              </h3>
              <p className="text-gray-400 text-base"> Access pre-built templates, automation flows & marketing boosters.
              </p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </motion.div>
            {/* Bonus Features Card 2 */}
            <motion.div
              className="group relative border border-zinc-800 p-8 flex flex-col min-h-[200px] shadow transition-all duration-300 hover:z-20 bg-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
              viewport={{ once: true, amount: 0.3 }}
            >

              <Gift className="w-7 h-7 text-gray-200 mb-4 group-hover:text-yellow-400 transition-colors duration-300"/>
              <h3 className="text-[1.125rem] font-semibold text-white mb-2"> Founders-Only Pricing
              </h3>
              <p className="text-gray-400 text-base"> One-time lifetime access. No recurring fees. Limited-time only.
              </p>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </motion.div>
          </div>
          <div className="w-full border border-zinc-800 mt-16 p-12 bg-black shadow flex flex-col items-center">
            <h3 className="text-[1.875rem] font-bold text-white mb-4 text-center">Redefine how your business works.
            </h3>
            <p className="text-gray-400 text-lg mb-8 text-center">Be part of our early access community and start using AIBAMS today. Get 6 powerful AI apps, priority onboarding, lifetime discounts, and zero setup fees—built for Indian entrepreneurs who want to work smarter.
            </p>
            <div className="flex justify-center mb-12">
              {/* chnages animate pulse */}
              <div className="relative group cursor-pointer animate-pulse"> 
                <div className="absolute -inset-1 rounded-full blur-xl opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]" />
                <div className="relative p-[2px] bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] rounded-full transition-opacity duration-300 group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]">
                  <div className="bg-black px-8 py-3 rounded-full group-hover:bg-black/80 transition-colors duration-300">
                    <span className="text-lg font-bold tracking-wider uppercase text-white group-hover:text-white/90 transition-colors duration-300">🎯 Claim Your Spot Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 text-gray-400 text-base mt-2">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>Instant Activation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>Discounted Subscription (₹849/month)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>Zero Development or Service Charges
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>Full Access to First 6 AI Tools

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <hr className="border-t border-zinc-800 mt-24 mb-24" /> */}
    </section>
  );
}
