import React from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";

const legalSections = [
  {
    title: "TERMS OF SERVICE",
    items: [
      { label: "Terms of Service - Consumer", url: "#" },
      { label: "Terms of Service - Enterprise", url: "#" },
    ],
  },
  {
    title: "POLICIES",
    items: [
      { label: "Acceptable Use Policy", url: "#" },
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Europe Privacy Policy Addendum", url: "#" },
      { label: "Cookie Policy", url: "#" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { label: "FAQ – Consumer", url: "#" },
      { label: "FAQ – Enterprise", url: "#" },
      { label: "xAI Brand Guidelines", url: "#" },
      { label: "Risk Management Framework Draft", url: "#" },
    ],
  },
];

const ExternalIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="inline ml-2 align-middle opacity-60">
    <path d="M10.5 3.5H4.75A1.25 1.25 0 0 0 3.5 4.75v6.5A1.25 1.25 0 0 0 4.75 12.5h6.5A1.25 1.25 0 0 0 12.5 11.25V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 9.5 12.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 3.5h3v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Legal() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <HeaderWhite />
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
          Legal policies
        </h1>
        <div className="space-y-16">
          {legalSections.map((section) => (
            <section key={section.title}>
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="uppercase text-xs tracking-widest text-gray-500 font-mono font-bold mb-2 md:mb-0 md:mt-2">{section.title}</div>
                </div>
                <div className="flex-1">
                  <ul className="divide-y divide-zinc-800">
                    {section.items.map((item) => (
                      <li key={item.label} className="flex items-center justify-between py-4 group">
                        <a
                          href={item.url}
                          className="text-0.875rem text-white group-hover:text-[#c8843f] transition-colors duration-200 flex-1 text-justify"
                          target={item.url.startsWith('http') ? '_blank' : undefined}
                          rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.label}
                        </a>
                        <span className="ml-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalIcon />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 