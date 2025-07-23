import React, { useState, useEffect } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";

const NAV_ITEMS = [
  { id: "trust-statement", label: "Trust Statement" },
  { id: "security-measures", label: "Security Measures" },
  { id: "vulnerability-reporting", label: "Vulnerability Reporting" },
  { id: "trust-portal", label: "Trust Portal" },
  { id: "security-domains", label: "Security Domains" },
];

const sectionContent: { [key: string]: React.ReactNode } = {
  "trust-statement": (
    <section id="trust-statement" className="scroll-mt-24 pt-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
        <span className="text-sm text-gray-300">Security & Trust</span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
        xAI Trust Statement
      </h1>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        At xAI, we prioritize the responsible management of data and the trust our users place in our technology.
      </p>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        For more information please visit <a href="https://trust.x.ai" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">https://trust.x.ai</a>
      </p>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        Data privacy and security are fundamental to our mission of empowering businesses with responsible AI solutions.
      </p>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        We understand the importance of transparency and accountability in the field of AI, and we actively embrace open communication and ethical practices. Our commitment to trust is reflected in our:
      </p>
    </section>
  ),
  "security-measures": (
    <section id="security-measures" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># SECURITY MEASURES</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Robust Security & Best Practices</h2>
        <ul className="list-disc list-inside text-gray-300 text-base pl-2 space-y-2 text-justify mb-4">
          <li><b>Robust security measures:</b> We implement industry-leading safeguards to protect your data from unauthorized access, use, or disclosure.</li>
          <li><b>Adherence to industry standards:</b> We comply with relevant data privacy regulations and adhere to industry best practices.</li>
          <li><b>Transparency and accountability:</b> We provide clear and accessible information about our data handling practices and policies.</li>
        </ul>
        <p className="text-gray-300 text-base mb-4 text-justify">
          We believe that trust is built through open communication and continuous improvement.
        </p>
        <p className="text-gray-300 text-base mb-4 text-justify">
          Our Trust Portal provides detailed information about our security measures, certifications, and data handling practices.
        </p>
      </div>
    </section>
  ),
  "vulnerability-reporting": (
    <section id="vulnerability-reporting" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># VULNERABILITY REPORTING</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Vulnerability Reporting</h2>
        <p className="text-gray-300 text-base mb-4 text-justify">
          To report vulnerabilities, please contact the xAI security team through our HackerOne program at <a href="https://hackerone.com/x" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">https://hackerone.com/x</a> or by emailing <a href="mailto:vulnerabilities@x.ai" className="text-blue-400 underline">vulnerabilities@x.ai</a> with the subject line "Responsible Disclosure". All reported vulnerabilities will be tracked via our HackerOne bug bounty program for efficient resolution and acknowledgment.
        </p>
      </div>
    </section>
  ),
  "trust-portal": (
    <section id="trust-portal" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># TRUST PORTAL</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Explore the xAI Trust Portal to:</h2>
        <ul className="list-disc list-inside text-gray-300 text-base pl-2 space-y-2 text-justify mb-4">
          <li>Review our security and privacy policies</li>
          <li>Access our data handling procedures</li>
          <li>Learn about our compliance certifications</li>
          <li>Request copies of our security assessments</li>
          <li>Get answers to frequently asked questions about data privacy at xAI</li>
        </ul>
        <p className="text-gray-300 text-base mb-4 text-justify">
          We are committed to building trust through responsible AI. Let us know how we can help you achieve your business goals with transparency and accountability.
        </p>
      </div>
    </section>
  ),
  "security-domains": (
    <section id="security-domains" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># SECURITY DOMAINS</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Product & Data Security Domains</h2>
        <ul className="list-disc list-inside text-gray-300 text-base pl-2 space-y-2 text-justify mb-4">
          <li>Product Security</li>
          <li>Data Security</li>
          <li>Data Privacy</li>
          <li>Access Control</li>
          <li>Application Security</li>
          <li>Infrastructure Security</li>
          <li>Endpoint Security</li>
          <li>Network Security</li>
          <li>Corporate Security</li>
        </ul>
      </div>
    </section>
  ),
};

export default function Security() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  // Scroll to section on click
  const handleItemClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Intersection Observer for active state
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = 0; i < NAV_ITEMS.length; i++) {
        const id = NAV_ITEMS[i].id;
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveId(id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveId(NAV_ITEMS[0].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for footer visibility
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.01 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-['Inter',sans-serif] bg-black flex flex-col pt-24">
      <HeaderWhite />
      <div className="flex flex-row max-w-6xl mx-auto w-full justify-center">
        <main className="flex-1 max-w-2xl pt-8 px-4 pb-[100px] text-white">
          {NAV_ITEMS.map((item) => sectionContent[item.id])}
        </main>
        {!footerVisible && (
          <nav
            className="w-10 flex flex-col items-center fixed left-[70rem] top-[32rem] self-start z-20 ml-4 pb-[162px]"
            aria-label="Section Navigation"
          >
            <ul className="flex flex-col gap-2 w-full items-center">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredIdx === idx;
                return (
                  <li key={item.id} className="relative flex flex-col items-center w-full">
                    {/* Label appears right of line on hover/focus with slide/scale effect */}
                    <span
                      className={`
                        absolute left-10 top-1/2 -translate-y-1/2
                        text-xs px-2 py-1 rounded bg-[#222] text-white shadow
                        whitespace-nowrap z-10
                        transition-all duration-200
                        origin-left
                        ${isHovered ? "opacity-100 scale-105 translate-x-2" : "opacity-0 scale-95 -translate-x-2 pointer-events-none"}
                      `}
                    >
                      {item.label}
                    </span>
                    <button
                      type="button"
                      aria-label={item.label}
                      onClick={() => handleItemClick(item.id)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onFocus={() => setHoveredIdx(idx)}
                      onBlur={() => setHoveredIdx(null)}
                      className={`
                        w-6 h-3 flex items-center justify-center
                        bg-transparent border-none outline-none
                        cursor-pointer
                      `}
                      style={{ padding: 0 }}
                    >
                      <div
                        className={`w-full h-px transition-all duration-200
                          ${isActive ? "bg-white" : "bg-zinc-600"}
                          ${isHovered ? "bg-white" : ""}
                        `}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
      <Footer />
      <style>
        {`
          section { font-size: 0.785rem !important; }
          span { font-size: 0.75rem !important; }
          .text-base { font-size: 0.875rem !important; }
          @media (min-width: 768px) {
            .md\:text-lg { font-size: 0.875rem !important; }
          }
        `}
      </style>
    </div>
  );
} 