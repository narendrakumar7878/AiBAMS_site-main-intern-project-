import React from 'react';
import { MessageCircle, ScanEye, SquareStack, Image, Zap, Search } from 'lucide-react';
import logoWebx from "../assets/icon-webx-n.svg";
import logoChat from "../assets/icon-chat-n.svg";
import logoDoc from "../assets/icon-doc-n.svg";
import logoMail from "../assets/icon-mail-n.svg";
import logoSheet from "../assets/icon-sheet-n.svg";
import logoDrive from "../assets/icon-drive-n.svg";
import { Link } from 'react-router-dom';

const PricingFeatures = () => {
  return (
    <section className="w-full bg-black py-24 px-4 border-t-[1px] ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="text-xs tracking-widest text-gray-500 mb-2"># CAPABILITIES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">AI tools that will help your buisness grow exponetially</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Reasoning Card */}
          <div className="group relative border-[0.5px] border-zinc-800 p-8 flex flex-col min-h-[220px] shadow transition-all duration-300 hover:z-20">
          <img src={logoWebx} className="w-7 h-7 mb-4" alt="webX" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(2000%) hue-rotate(60deg) brightness(1.2) contrast(1)' }}/>
          <h3 className="text-lg font-semibold text-white mb-2">WebX</h3>
          <p className="text-gray-400 text-sm">
            Create stunning AI-powered websites with built-in hosting, SEO, SSL, and contact forms.<br/><br/>
            <span style={{ color: 'rgb(206, 154, 102)', fontWeight: 400, fontSize: '0.75rem' }}>⚡ No coding. No templates. Just launch.</span>
          </p>
          <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300" />
          </div>

          {/* Vision Card */}
          <div className="group relative border-[0.5px] border-zinc-800 p-8 flex flex-col min-h-[220px] shadow transition-all duration-300 hover:z-20">
            <img src={logoDrive} className="w-7 h-7 mb-4" alt="fusionDrive" style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(100%) saturate(1500%) hue-rotate(210deg) brightness(1) contrast(1)' }}/>
            <h3 className="text-lg font-semibold text-white mb-2">Fusion Drive</h3>
            <p className="text-gray-400 text-sm">
              Securely store your business files and media with built-in AI search and smart file tagging.<br/><br/>
              <span style={{ color: 'rgb(206, 154, 102)', fontWeight: 400, fontSize: '0.75rem' }}>⚡Connects seamlessly with all Fusion apps.</span>
            </p>
            <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300" />
          </div>

          {/* Tool Calling Card */}
          <div className="group relative border-[0.5px] border-zinc-800 p-8 flex flex-col min-h-[220px] shadow transition-all duration-300 hover:z-20">
            <img src={logoDoc} className="w-7 h-7 mb-4" alt="fusionDoc" style={{ filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(260deg) brightness(1.1) contrast(1)' }}/>
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              Fusion Doc
            </h3>
            <p className="text-gray-400 text-sm">
              Write contracts, SOPs, letters, and policies with real-time AI assistance.<br/><br/>
              <span style={{ color: 'rgb(206, 154, 102)', fontWeight: 400, fontSize: '0.75rem' }}>⚡ Format, edit, and finalize faster than ever.</span>
            </p>
            <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300" />
          </div>

          {/* Structured Outputs Card */}
          <div className="group relative border-[0.5px] border-zinc-800 p-8 flex flex-col min-h-[220px] shadow transition-all duration-300 hover:z-20">
            <img src={logoSheet} className="w-7 h-7 mb-4" alt="fusionSheet" style={{ filter: 'brightness(0) saturate(100%) invert(65%) sepia(100%) saturate(1500%) hue-rotate(140deg) brightness(1) contrast(1)' }}/>
            <h3 className="text-lg font-semibold text-white mb-2">Fusion Sheet</h3>
            <p className="text-gray-400 text-sm">
              Budget, plan, and forecast like a pro with AI-augmented spreadsheets and business templates.<br/><br/>
              <span style={{ color: 'rgb(206, 154, 102)', fontWeight: 400, fontSize: '0.75rem' }}>⚡From inventory to expense tracking in minutes.</span>
            </p>
            <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300" />
          </div>

          {/* Image Generation Card */}
          <div className="group relative border-[0.5px] border-zinc-800 p-8 flex flex-col min-h-[220px] shadow transition-all duration-300 hover:z-20">
            <img src={logoMail} className="w-7 h-7 mb-4" alt="fusionMail" style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(100%) saturate(2000%) hue-rotate(15deg) brightness(1.1) contrast(1)' }}/>
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              Fusion Mail
            </h3>
            <p className="text-gray-400 text-sm">
              Send smart emails and automate follow-ups using intelligent sequences.<br/><br/>
              <span style={{ color: 'rgb(206, 154, 102)', fontWeight: 400, fontSize: '0.75rem' }}>⚡ Comes with 5 professional emails and 1GB each.</span>
            </p>
            <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300" />
          </div>

          {/* Search Card */}
          <div className="group relative border-[0.5px] border-zinc-800 p-8 flex flex-col min-h-[220px] shadow transition-all duration-300 hover:z-20">
            <img src={logoChat} className="w-7 h-7 mb-4" alt="fusionChat" style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(2000%) hue-rotate(345deg) brightness(1.2) contrast(1)' }}/>
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              Fusion Chat
            </h3>
            <p className="text-gray-400 text-sm">
              Like ChatGPT, but for your business. Get replies, proposals, content, and planning—instantly.<br/><br/>
              <span style={{ color: 'rgb(206, 154, 102)', fontWeight: 400, fontSize: '0.75rem' }}>⚡ Trained on your docs and drives.</span>
            </p>
            <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;