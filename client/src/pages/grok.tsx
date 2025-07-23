import React, { useState, useEffect } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";

const NAV_ITEMS = [
  { id: "next-gen", label: "Next-Generation..." },
  { id: "thinking-harder", label: "Thinking Harder: Test-time..." },
  { id: "pretraining", label: "Pretraining on a Massive..." },
  { id: "agents", label: "Grok Agents: Combining..." },
  { id: "api", label: "Grok 3 API Coming Soon" },
  { id: "whats-next", label: "What's Next for Grok 3?" },
  { id: "journey", label: "Join the Journey" },
];

const Dash: React.FC<{ active: boolean }> = ({ active }) => (
  <svg
    width="6"
    height="2"
    viewBox="0 0 6 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`flex-shrink-0 transition-all duration-200 ${active ? "opacity-100" : "opacity-70"}`}
  >
    <rect width="6" height="2" rx="1" fill={active ? "#FFFFFF" : "#B0B0B0"} />
  </svg>
);

const sectionContent: { [key: string]: React.ReactNode } = {
  "next-gen": (
    <section id="next-gen" className="scroll-mt-24 pt-16">
      <a className="block mb-6 text-white hover:text-white" href="http://localhost:5010/updates">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6"><path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd"></path></svg>
      </a>
      <div className="text-xs text-gray-400 tracking-widest mb-4">FEBRUARY 19, 2025</div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Grok 3 Beta — The Age of Reasoning Agents</h1>
      <p className="text-gray-300 text-base mb-8 text-justify">
        We are thrilled to unveil an early preview of Grok 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.
      </p>
      <hr className="border-zinc-800 mb-8" />
      <h2 className="text-lg md:text-xl font-bold text-white mb-2">Next-Generation Intelligence from xAI</h2>
      <p className="text-gray-300 text-base mb-8 text-justify">
        We are pleased to introduce Grok 3, our most advanced model yet, blending strong reasoning with advanced pretraining knowledge. Thanks to our Orion compute, proprietary search & the community, Grok 3 achieves world records on a diverse set of open benchmarks. With 3x the reasoning evaluation, 50%+ more factual recall, Grok 3 displays higher robustness via massive math, code, certified safety, logic and instruction-following tasks. Grok 3's test-time reasoning enables emerging superalignment and reliability, while allowing secure on-the-fly corrections. Grok 3 sets records on the OpenAI Arena, AlpacaEval, and various math datasets, bringing sharper focus and richer benchmarks across all domains and modalities. Grok 3 will soon be available for research and select customers. Alongside, we'll continue to make rapid, safe updates as we learn from the field. Our mission: rapidly build safe, useful reasoning models, with agility and a path for advancing AI capabilities.
      </p>
    </section>
  ),
  "thinking-harder": (
    <section id="thinking-harder" className="scroll-mt-24 mb-16">
      <h2 className="text-lg md:text-xl font-bold text-white mb-2">Thinking Harder: Test-time Computed and Reasoning</h2>
      <p className="text-gray-300 text-base mb-8 text-justify">
        Today, we are introducing test-time reasoning models. Grok 3 (Hybrid) can do 5s+ trials (think time). They were enabled by advanced hardware (H100s), plus the compositional tools to refine the chain-of-thought process, making enhanced reliability & factual effectiveness. With Grok 3, chains amplify success and then dynamically adapt and optimize learning. As the system learns, it sharply prunes paths for reliability. Grok 3's hybrid engine enables new advances in math, code, chain-oriented computation, approachability, safety for open studies, and evaluating how to physically master the requirements of the problem.
      </p>
      <div className="bg-[#181818] border border-zinc-700 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-2">
          <span className="text-green-500 mr-2">●</span>
          <span className="text-white font-semibold">Thought for 5 seconds</span>
        </div>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2 text-justify">
          <li>Test-time reasoning: Model can think for 5s+ on hard tasks and adjust instructions/facts for reliability. This enables new levels of factual accuracy and robust alignment.</li>
          <li>A league of Reasonables: Grok 3's hybrid engine displays new synergy, compositional reasoning, and reliability.</li>
        </ul>
      </div>
      <p className="text-gray-300 text-base mb-8 text-justify">
        Both models are still in testing, but already show demonstrable performance increases in range and reliability. Grok 3 will be available for research and select customers soon. For more details, see our technical report and benchmarks. Grok 3 sets world records on open evaluations, including the OpenAI Arena, AlpacaEval, and various math/coding/logic/robustness competitions. See the full results and analysis at <a href="#" className="text-blue-400 underline">x.ai/blog/grok-3-benchmarks</a> and with world-leading reasoning, Grok 3 sets new standards for multi-task studies. Grok 3's chain work includes test-time reasoning, which was top-3 on AIME 2024 and #1 on LLaCodeBench.
      </p>
    </section>
  ),
  "pretraining": (
    <section id="pretraining" className="scroll-mt-24 mb-16">
      <h2 className="text-2xl font-bold text-white mb-4">Pretraining on a Massive Scale</h2>
      <p className="text-gray-300 text-base mb-8 text-justify">
        With reasoning turned off, Grok 3 gives instant, high quality responses. Grok 3 delivers state-of-the-art results across diverse academic benchmarks among non reasoning models, including: graduate-level science knowledge (GPQA), general knowledge (MMLU-Pro), math competition problems (AIME). Grok 3 also excels in image understanding (MMMU) and video understanding (EgoSchema) tasks.
      </p>
      <p className="text-gray-300 text-base mb-4 text-justify">
        With a context window of 1 million tokens — 8 times larger than our previous models — Grok 3 can process extensive documents and handle complex prompts while maintaining instruction-following accuracy. On the LOFT (128k) benchmark, which targets long-context RAG use cases, Grok 3 achieved state-of-the-art accuracy (averaged across 12 diverse tasks), showcasing its powerful information retrieval capabilities.
      </p>
      <p className="text-gray-300 text-base mb-8 text-justify">
        Grok 3 also demonstrates improved factual accuracy and enhanced stylistic control. Under the codename <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">chocolate</span>, an early version of Grok 3 topped the LMArena Chatbot Arena leaderboard, outperforming all competitors in Elo scores across all categories. As we continue to scale, we are preparing to train even larger models on our 200,000 GPU cluster.
      </p>
    </section>
  ),
  "agents": (
    <section id="agents" className="scroll-mt-24 mb-16">
      <h2 className="text-2xl font-bold text-white mb-4 mt-16">Grok Agents: Combining Reasoning and Tool Use</h2>
      <p className="text-gray-300 text-base mb-6 text-justify">
        To understand the universe, we must interface Grok with the world. Equipped with code interpreters and internet access, Grok 3 models learn to query for missing context, dynamically adjust their approach, and improve their reasoning based on feedback.
      </p>
      <p className="text-gray-300 text-base mb-8 text-justify">
        As a first step towards this vision, we are rolling out <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">DeepSearch</span>—our first agent. It's a lightning-fast AI agent built to relentlessly seek the truth across the entire corpus of human knowledge. <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">DeepSearch</span> is designed to synthesize key information, reason about conflicting facts and opinions, and distill clarity from complexity. Whether you need to access the latest real-time news, seek advice about your social woes, or conduct in-depth scientific research, <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">DeepSearch</span> will take you far beyond a browser search. Its final summary trace results in a concise and comprehensive report, to help you keep up with a world that never slows down.
      </p>
    </section>
  ),
  "api": (
    <section id="api" className="scroll-mt-24 mb-16">
      <h2 className="text-xl font-bold text-white mb-4 mt-16">Grok 3 API Coming Soon</h2>
      <p className="text-gray-300 text-base mb-8 text-justify">
        In the coming weeks, we will release Grok 3 and Grok 3 mini via our API platform, offering access to both the standard and reasoning models. <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">DeepSearch</span> will also be released to Enterprise partners via our API.
      </p>
    </section>
  ),
  "whats-next": (
    <section id="whats-next" className="scroll-mt-24 mb-16">
      <h2 className="text-xl font-bold text-white mb-4 mt-16">What's Next for Grok 3?</h2>
      <p className="text-gray-300 text-base mb-4 text-justify">
        Grok 3's training is ongoing, with frequent updates planned over the next few months. We are excited to roll out new features in the <span className="bg-[#181818] text-blue-300 px-2 py-0.5 rounded font-mono text-sm align-middle">Enterprise API</span>, including tool use, code execution, and advanced agent capabilities. Following our <span className="bg-[#181818] text-blue-300 px-2 py-0.5 rounded font-mono text-sm align-middle">RMF</span> (Risk Management Framework) release last week, we are particularly interested in accelerating progress in scalable oversight and adversarial robustness during training.
      </p>
      <p className="text-gray-300 text-base mb-8 text-justify">
        Grok 3 is now available to 𝕏 Premium and Premium+ users on 𝕏 and <a href="https://grok.com" className="text-blue-400 underline">Grok.com</a>. 𝕏 Premium+ users will also immediately gain access to <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">Think</span> and <span className="bg-[#181818] text-orange-400 px-2 py-0.5 rounded font-mono text-sm align-middle">DeepSearch</span>. In addition, Grok 3 capabilities are being rolled out to all Grok users with usage limits. 𝕏 Premium+ users will have higher limits and access to advanced capabilities.
      </p>
    </section>
  ),
  "journey": (
    <section id="journey" className="scroll-mt-24 mb-16">
      <h2 className="text-xl font-bold text-white mb-4 mt-16">Join the Journey</h2>
      <p className="text-gray-300 text-base mb-8 text-justify">
        Since launching Grok 1 in November 2023, xAI's small, talent-dense team has driven historic progress, positioning us at the forefront of AI innovation. With Grok 3, we are advancing core reasoning capabilities using our expanded Colossus supercluster, with exciting developments to come. If you are passionate about building AI for humanity's future, apply to join our team at <a href="https://x.ai/careers" className="text-blue-400 underline">x.ai/careers</a>.
      </p>
    </section>
  ),
};

export default function Grok() {
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
      <div className="flex flex-row max-w-6xl mx-auto w-full justify-center ">
        <main className="flex-1 max-w-2xl pt-8 px-4 pb-[100px] text-white">
          {NAV_ITEMS.map((item) => sectionContent[item.id])}
        </main>
        {!footerVisible && (
          <nav
            className="w-10 flex flex-col items-center fixed left-[70rem] top-[32rem] self-start z-20 ml-4 pb-[162px] "
            aria-label="Section Navigation"
          >
            <ul className="flex flex-col gap-2 w-full items-center">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredIdx === idx;
                return (
                  <li key={item.id} className="relative flex flex-col items-center w-full">
                    {/* Label appears left of line on hover/focus with slide/scale effect */}
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