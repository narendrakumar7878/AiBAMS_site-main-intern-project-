import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const SITEMAP_SECTIONS = [
  {
    heading: "Main",
    links: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/career", label: "Career" },
      { path: "/updates", label: "Updates" },
    ],
  },
  {
    heading: "Fusion Suite",
    links: [
      { path: "/fusionsuite", label: "FusionSuite" },
      { path: "/fusionmail", label: "FusioMail" },
    ],
  },
  {
    heading: "Pricing & Plans",
    links: [
      { path: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { path: "/privacy", label: "Privacy Policy" },
      { path: "/security", label: "Security" },
      { path: "/legal", label: "Legal" },
    ],
  },
  {
    heading: "Blog",
    links: [
      { path: "/blog", label: "Blog" },
      { path: "/grok", label: "Grok" },
    ],
  },
];

export default function SitemapFusion() {
  return (
    <div className="min-h-screen bg-black flex flex-col pt-24 font-['Inter',sans-serif]">
      <HeaderWhite />
      <main className="flex-1 max-w-6xl mx-auto w-full pt-12 px-4 pb-24 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"> Sitemap</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {SITEMAP_SECTIONS.map((section) => (
            <div key={section.heading} className="flex flex-col min-w-[180px]">
              <h2 className="text-lg font-semibold mb-4 text-blue-300 text-center">{section.heading}</h2>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item.path} className="text-base text-center">
                    <Link href={item.path} className="text-blue-400 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 