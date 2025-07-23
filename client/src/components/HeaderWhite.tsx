import { Button } from "@/components/ui/button";
import iconSrcW from "../assets/icon-w.png";
import iconSrcB from "../assets/icon-b.png";

export default function HeaderWhite({ white = true }: { white?: boolean }) {
  const iconSrc = iconSrcW;
  
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md animate-fade-in"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="http://192.168.1.25:5010/"  rel="noopener noreferrer">
            <img src={iconSrc} alt="Logo" className="h-8 w-auto mr-10" />
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="http://192.168.1.25:5010/fusionsuite" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
              FUSION SUITE
            </a>
            <a href="http://192.168.1.25:5010/pricing" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
              PRICING
            </a>
            <a href="http://192.168.1.25:5010/about" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
              ABOUT
            </a>
            <a href="http://192.168.1.25:5010/career" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
              CAREERS
            </a>
            <a href="http://192.168.1.25:5010/updates" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
              UPDATES
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant="outline"
            className="bg-black border border-white/50 text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full"
          >
            <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] font-bold bg-clip-text text-transparent">Early Access</span>
          </Button>
        </div>
      </div>
    </header>
  );
}