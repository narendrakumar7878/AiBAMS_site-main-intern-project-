import React from "react";
import { Check } from "lucide-react";
import PixelCard from "./PixelCard";
import FSlogo from "../assets/fusion-suite.png";
import { motion } from "framer-motion";
import Orb from "./orb";

const PricingPlans = () => {
  const features = [
    "Unlimited API calls",
    "Advanced AI models access",
    "Priority support",
    "Custom integrations",
    "Team collaboration",
    "Advanced analytics",
  ];

  return (
    <section className="relative bg-black py-24 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Centered heading and description */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-12 px-4">
        <div className="text-xs tracking-widest text-gray-500 mb-2 uppercase"># Capabilities</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Pricing Plan</h2>
        <p className="text-sm text-gray-300 leading-relaxed max-w-5xl text-justify ">
        Powerful AI at one transparent price. Get everything you need to automate, manage, and grow your business with zero complexity. Whether you're a solopreneur or scaling startup, this plan is built for real impact.</p>
      </div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        {/* Orb animation with logo overlay */}
        <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          {/* Overlay content in the center of the orb */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              width: '320px',
              maxWidth: '90vw',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
            className="items-center justify-center text-center flex flex-col h-full w-full"
          >
            <img
              src={FSlogo}
              alt="Fusion Suite Logo"
              style={{
                width: '180px',
                height: '120px',
                objectFit: 'contain',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.1)',
                marginBottom: '0.1rem',
                pointerEvents: 'none',
              }}
            />
            <div className="text-white font-medium mb-2 text-sm" style={{ pointerEvents: 'auto' }}>All-in-One Business AI Platform</div>
            <div className="flex items-end gap-2 mt-6  mb-6 justify-center" style={{ pointerEvents: 'auto' }}>
              <span className="text-5xl font-semibold text-white">₹849</span>
              <span className="text-gray-400 mb-1 text-sm" style={{ fontSize: '0.875rem' }}>/month</span>
            </div>
            <div className="text-white font-medium mb-4 text-sm" style={{ pointerEvents: 'auto' }}>The best of AI—at the price of a coffee a day.</div>
            <div className="relative group cursor-pointer w-full flex justify-center" style={{ pointerEvents: 'auto' }}>
              <div className="absolute -inset-1 rounded-full blur-xl opacity-40 transition-opacity duration-300 bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]"></div>
              <div className="relative p-[2px] bg-gradient-to-r from-[#9978ff] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] to-[#00bbff] rounded-full transition-opacity duration-300 group-hover:from-[#ffa184] group-hover:via-[#ff96dd] group-hover:via-[#ffa184] group-hover:via-[#ffff55] group-hover:via-[#71f800] group-hover:via-[#00bbff] group-hover:to-[#00bbff]">
                <div className="bg-black px-5 py-2 rounded-full group-hover:bg-black/80 transition-colors duration-300">
                  <span className="text-base font-bold tracking-wider uppercase text-white group-hover:text-white/90 transition-colors duration-300">Get Started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What's Included Section */}
      <div className="w-full flex flex-col items-center justify-center mt-12">
        <h3 className="text-3xl font-bold text-white mb-6 text-center" style={{ lineHeight: '1rem' }}>What's Included</h3>
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: 3 items */}
          <ul className="text-white font-normal space-y-4" style={{ lineHeight: '1rem' }}>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Full Access to 6 AI-Powered Apps</li>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Unlimited AI Usage (API & UI)</li>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Discount (early access price)</li>
          </ul>
          {/* Column 2: 2 items */}
          <ul className="text-white font-normal space-y-4" style={{ lineHeight: '1rem' }}>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Priority Customer Support</li>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Custom Tool Integrations</li>
          </ul>
          {/* Column 3: 2 items */}
          <ul className="text-white font-normal space-y-4" style={{ lineHeight: '1rem' }}>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Collaboration Tools for Teams</li>
            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem', lineHeight: '1rem' }}><span className="text-green-400 text-xl">✓</span> Smart Reports & Business Analytics</li>
          </ul>
        </div>
      </div>
      {/* Both the features and plan boxes have been removed as requested. */}
    </section>
  );
};

export default PricingPlans;
