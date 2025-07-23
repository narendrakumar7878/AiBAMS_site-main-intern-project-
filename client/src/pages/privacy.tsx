import React, { useState, useEffect } from "react";
import HeaderWhite from "@/components/HeaderWhite";
import Footer from "@/components/Footer";

const NAV_ITEMS = [
  { id: "intro", label: "Introduction" },
  { id: "about-xai", label: "About xAI and Grok" },
  { id: "personal-info", label: "Personal Information We Collect" },
  { id: "how-we-use", label: "How We May Use Personal Information" },
  { id: "how-we-disclose", label: "How We May Disclose" },
  { id: "retention", label: "Retention" },
  { id: "security", label: "Security" },
];

const BackButton = () => (
  <a className="block mb-6 text-white hover:text-white" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6"><path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd"></path></svg>
  </a>
);

const sectionContent: { [key: string]: React.ReactNode } = {
  "intro": (
    <section id="intro" className="scroll-mt-24 pt-16">
      <BackButton />
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
        <span className="text-sm text-gray-300">Privacy Policy</span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
        xAI Privacy Policy
      </h1>
      <div className="text-xs text-gray-400 tracking-widest mb-4">Effective: April 24, 2025</div>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        At X.AI LLC ("xAI", "our", "us" or "we"), we value your privacy and are committed to being fair, accountable, and transparent in how we handle your personal information. Our Privacy Policy outlines how we collect, use, and disclose your personal information when you use our websites and applications (the Grok mobile app (iOS or Android) or the Grok.com website), and other xAI services (our "Service"). It also describes your privacy rights.
      </p>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        This Privacy Policy does not apply to data that we process on behalf of customers of our business offerings, such as the xAI API, or to any employment-related personal information processed in consideration of employment with xAI. This Privacy Policy also does not apply if you access our Service through a third-party's service. In that case, the third-party's privacy policy would apply. For example, your use of X (previously Twitter), including use of Grok on the X platform, is governed by the X Privacy Policy and X Terms, not this xAI Privacy Policy.
      </p>
      <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed text-justify">
        For individuals in the European Economic Area, United Kingdom, and Switzerland (collectively, "Europe"), for Europe-specific additional information not already discussed on this page, please see xAI's Europe Privacy Policy Addendum.
      </p>
    </section>
  ),
  "about-xai": (
    <section id="about-xai" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># ABOUT XAI AND GROK</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. About xAI and Grok</h2>
        <p className="text-gray-300 text-base mb-0 text-justify">
          xAI is a US-based company working on building artificial intelligence tools to accelerate human scientific discovery. We are guided by our mission to advance our collective understanding of the universe. As part of our mission, we have developed "Grok," a conversational generative AI powered by xAI's large language models. More information about xAI's development and training of Grok and data controls is available in our Consumer FAQs, Enterprise FAQs, and xAI website. Please note that xAI is a separate company from X Corp. ("X", previously Twitter).
        </p>
      </div>
    </section>
  ),
  "personal-info": (
    <section id="personal-info" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># PERSONAL INFORMATION</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. Personal information we collect (Notice at collection)</h2>
        <p className="text-gray-300 text-base mb-4 text-justify">
          We ask that you do NOT include personal information in your prompts and inputs into our Service; however, we cannot control what you provide to us.
        </p>
        <p className="text-gray-300 text-base mb-4 text-justify">
          We may collect personal information from you and about you. Some examples of the information we may collect, how we may collect it, how we may use it, and how we may disclose it are described below.
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2 space-y-2 text-justify">
          <li><b>Account Data:</b> If you create an account with us, we collect your name, contact information, account credentials, and date of birth. ...</li>
          <li><b>Payment Data:</b> Where payment is required to access the Service (ex., if you are paying for a subscription), we may have a third-party process payment information, such as payment card information, and details regarding your transactions for us. ...</li>
          <li><b>Communication Data:</b> If you communicate with us, such as by email, by our webpages, or on social media sites, we may collect personal information that you submit to us including your name, user name, email address, any other information you voluntarily choose to provide us, and the contents of messages you send. ...</li>
          <li><b>User Content:</b> You may provide personal information in prompts and other content you input, such as files, images, audio, voice, video, and other material ("Input"). ...</li>
          <li><b>Feedback Data:</b> Where applicable, we will collect your Feedback (as defined in our Terms of Service). ...</li>
          <li><b>Social Media Information:</b> We have pages on social media sites like Instagram, Facebook, Medium, X, YouTube, and LinkedIn. ...</li>
          <li><b>Technical Data:</b> Technical data includes information such as your IP address, device type, country from which you access, analytics information, browser type and version, browser plug-in types and versions, and operating system. ...</li>
          <li><b>Location data:</b> We may determine the general area from which your device accesses our Services based on information like its IP address. ...</li>
          <li><b>Publicly Available Data:</b> We use information that is publicly available on the internet to train our models and provide resulting Output. ...</li>
          <li><b>Public X Posts and Internet Search Data:</b> The Service uses public posts shared on X, engagement data such as number of followers, and number of views, likes, reposts, shares, and replies and internet search results. ...</li>
        </ul>
        <p className="text-gray-300 text-base mt-4 text-justify">
          We do not aim to collect sensitive personal information ... and ask that you do not provide us with any such information. ...
        </p>
      </div>
    </section>
  ),
  "how-we-use": (
    <section id="how-we-use" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># USE OF INFORMATION</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. How we may use personal information</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2 space-y-2 mb-4 text-justify">
          <li>To provide, analyze, and maintain our Service: For example, to respond to your Inputs ...</li>
          <li>To provide support and assistance in relation to our Service: For example, to troubleshoot problems and to provide customer support.</li>
          <li>To develop and improve our Service and to conduct research: For example to develop new product features, to train our models, to identify usage trends, to operate and expand our business activities, to identify new customers, and for data analysis.</li>
          <li>To communicate with you: For example, to send you information about our Service, events, or changes to the Service. ...</li>
          <li>To ensure the security and integrity of our Service: For example, to protect the security of our Services and to detect and prevent fraud, unauthorized use, unlawful activity, and other misuses of our Service.</li>
          <li>For legal purposes: For example, to comply with our legal obligations and to protect the rights, privacy, safety, or property of our users, xAI, or third-parties. ...</li>
        </ul>
        <p className="text-gray-300 text-base mb-4 text-justify">We may aggregate, pseudoanonymize, or de-identify your information so that it no longer identifies you and use this information for the purposes described above ...</p>
        <p className="text-gray-300 text-base mb-4 text-justify">We do not sell your personal information or use it for marketing: We do not sell personal information or share personal information for targeted or cross-contextual advertising purposes. ...</p>
      </div>
    </section>
  ),
  "how-we-disclose": (
    <section id="how-we-disclose" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># DISCLOSURE OF INFORMATION</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. How we may disclose personal information</h2>
        <p className="text-gray-300 text-base mb-4 text-justify">
          We may disclose your personal information to others. Below, you will find examples and additional information regarding how we may disclose your personal information.
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2 space-y-2 text-justify mb-4">
          <li><b>To our contracted service providers:</b> To assist in providing the Service to you or performing business operations, we provide your personal information to service providers including providers of hosting, cloud, analytics, content delivery, support and safety monitoring, payment and transaction, and other technology services, for the purposes described above.</li>
          <li><b>In connection with business transfers:</b> In connection with or during negotiation of any merger, financing, acquisition, bankruptcy, dissolution, transaction, or proceeding involving sale, transfer, divestiture, or disclosure of all or a portion of our business or assets to another company. If required by applicable laws, we will use reasonable efforts to notify you of any transfer of personal information to an unaffiliated third-party.</li>
          <li><b>For legal purposes:</b> To (i) comply with laws or to respond to lawful requests and legal process, (ii) protect the rights and property of xAI and our agents, customers, and others, including to enforce our agreements, policies, and terms of service, (iii) to protect against legal liability, or (iv) to protect the personal safety of xAI, its customers, or any person.</li>
          <li><b>To our related companies:</b> To our related companies to the extent such sharing is necessary to fulfill a request you have submitted via our Service or for customer management, customer support, technical operations, or the purposes described above.</li>
          <li><b>To third-parties with which you interact or share information:</b> Certain features may allow you to share information with third-parties, such as through the X platform. Information you share with third-parties is governed by that third-party's terms and policies.</li>
        </ul>
      </div>
    </section>
  ),
  "retention": (
    <section id="retention" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># RETENTION OF INFORMATION</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Retention of personal information</h2>
        <p className="text-gray-300 text-base mb-4 text-justify">
          We retain your personal information where we have an ongoing legitimate business need to do so. In certain circumstances, we will retain your information for legal reasons after our contractual relationship has ended. The specific retention periods depend on the nature of the information and why it is collected and processed and the nature of the legal requirement. For example, we may retain your personal information:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm pl-2 space-y-2 text-justify mb-4">
          <li>When we have a legal obligation to do so (e.g., if we receive a court order, we would retain your information for longer than our usual retention periods);</li>
          <li>To address and resolve requests and complaints (e.g., if there is an ongoing complaint about you);</li>
          <li>To protect the safety, security, and integrity of our business and the Service, as well as to protect our rights and property and those of others (e.g., if we detect misuse of our Service or otherwise detect unusual activity on your account or in your interactions with us); and</li>
          <li>For litigation, regulatory or other legal matters (e.g., we would retain your information if there was an ongoing legal claim and the information was relevant to the claim).</li>
        </ul>
        <p className="text-gray-300 text-base mb-4 text-justify">
          The length of time we retain data may depend on the features or settings you use. For example, when Private Chat is turned on, conversations will not appear in your conversation history and your conversations will be deleted from xAI systems within 30 days unless it is necessary that they be kept longer for legal, compliance, or safety purposes. Further, if you choose to delete any or all of your conversations or if you choose to delete your account, we will delete the data within 30 days unless it is necessary to retain the data for legal, compliance, or safety purposes.
        </p>
      </div>
    </section>
  ),
  "security": (
    <section id="security" className="scroll-mt-24 mb-16">
      <div className="bg-black rounded-2xl shadow border border-zinc-800 p-8">
        <div className="text-xs tracking-widest text-gray-500 mb-2"># SECURITY OF INFORMATION</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Security of personal information</h2>
        <p className="text-gray-300 text-base mb-4 text-justify">
          xAI implements commercially reasonable technical, administrative, and organizational measures designed to protect personal information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no security measure or method of data transmission over the internet is 100% secure. In addition, you are solely responsible for protecting your log-in and password, limiting access to your devices, and signing out of websites and accounts after your sessions.
        </p>
      </div>
    </section>
  ),
};

export default function Privacy() {
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
        <main className="flex-1 max-w-2xl pt-8 px-4 pb-[100px] text-white ">
          {NAV_ITEMS.map((item) => sectionContent[item.id])}
        </main>
        {!footerVisible && (
          <nav
            className="w-10 flex flex-col items-center fixed  left-[70rem] top-[32rem] self-start z-20 ml-4 pb-[162px] "
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