import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import LatestNewsSection from "@/components/LatestNewsSection";
import AboutAIBAMSSection from "@/components/AboutAIBAMSSection";
import LaunchSection from "@/components/LaunchSection";
import gradientDivider from '../assets/gradient-divider.png';
// import HeaderWhite from "@/components/HeaderWhite";
import HomeHeroSection from "@/components/HomeHeroSection";
import NewFooter from "@/components/NewFooter";

export default function Home() {
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
    <div className="min-h-screen bg-gray-900 ">
      {/* Header */}
      <Header white={headerWhite} />
      {/* <Header /> */}
      <div ref={heroRef}>
        {/* <HeroSection /> */}
        <HomeHeroSection />
      </div>



      {/* <AboutAIBAMSSection />
      <LaunchSection />
      <CapabilitiesSection />
      <LatestNewsSection /> */}
      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
}
