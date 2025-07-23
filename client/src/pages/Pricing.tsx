import { useState, useEffect, useRef } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import PricingHero from "@/components/PricingHero";
import PricingPlans from "@/components/PricingPlans";
import PricingFeatures from "@/components/PricingFeatures";
import PixelCard from "@/components/PixelCard";
import Particles from "@/components/Particles";
import PricingCta from "@/components/PricingCta";

export default function Pricing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerWhite, setHeaderWhite] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { 
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Glass effect for header
      setIsScrolled(scrolled > 50);
      
      // Parallax effect for light source
      const lightEffect = document.querySelector(".bg-light-source");
      if (lightEffect) {
        (lightEffect as HTMLElement).style.transform =
          `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderWhite(!entry.isIntersecting);
      },
      { threshold: 0.45 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <HeaderWhite />
      
      {/* Hero Section */}
      <div ref={heroRef}>
        <PricingHero />
        <div className="w-full border-t border-zinc-800" />
      </div>
      
      {/* Pricing Plans */}
      <section className="py-24 bg-black relative overflow-hidden">
        <PricingPlans />
      </section>
      
      {/* Features Section */}
      <section className=" bg-black relative overflow-hidden">
        <PricingFeatures />
      </section>

       <PricingCta />

      {/* Footer */}
      <Footer />
    </div>
  );
}