// import { Button } from "@/components/ui/button";
// import iconSrcW from "../assets/icon-w.png";
// import iconSrcB from "../assets/icon-b.png";

// export default function HeaderWhite({ white = true }: { white?: boolean }) {
//   const iconSrc = iconSrcW;
  
//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md animate-fade-in"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <a href="http://192.168.1.25:5010/"  rel="noopener noreferrer">
//             <img src={iconSrc} alt="Logo" className="h-8 w-auto mr-10" />
//           </a>
          
//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-10">
//             <a href="http://192.168.1.25:5010/fusionsuite" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
//               FUSION SUITE
//             </a>
//             <a href="http://192.168.1.25:5010/pricing" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
//               PRICING
//             </a>
//             <a href="http://192.168.1.25:5010/about" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
//               ABOUT
//             </a>
//             <a href="http://192.168.1.25:5010/career" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
//               CAREERS
//             </a>
//             <a href="http://192.168.1.25:5010/updates" className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300">
//               UPDATES
//             </a>
//           </nav>
          
//           {/* CTA Button */}
//           <Button 
//             variant="outline"
//             className="bg-black border border-white/50 text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full"
//           >
//             <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] font-bold bg-clip-text text-transparent">Early Access</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }










// my code is starting to look like this:

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import iconSrcW from "../assets/icon-w.png";

export default function HeaderWhite({ white = true }: { white?: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle icon color
  const iconColor = isMobileMenuOpen ? "text-white" : "text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="http://192.168.1.25:5010/" rel="noopener noreferrer">
            <img src={iconSrcW} alt="Logo" className="h-8 w-auto mr-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["fusionsuite", "pricing", "about", "career", "updates"].map((item) => (
              <a
                key={item}
                href={`http://192.168.1.25:5010/${item}`}
                className="transition-colors text-xs font-medium tracking-wider uppercase text-white hover:text-gray-300"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop Only) */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="bg-black border border-white/50 text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full"
            >
              <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] font-bold bg-clip-text text-transparent">
                Early Access
              </span>
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={iconColor} />
            ) : (
              <Menu size={24} className={iconColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-6 pt-6 bg-black/90">
          <nav className="flex flex-col items-start space-y-4">
            {["fusionsuite", "pricing", "about", "career", "updates"].map((item) => (
              <a
                key={item}
                href={`http://192.168.1.25:5010/${item}`}
                className="text-white text-xs font-medium tracking-wider uppercase hover:text-gray-300"
              >
                {item.toUpperCase()}
              </a>
            ))}

            {/* CTA Button (Mobile) */}
            <Button
              variant="outline"
              className="mt-4 bg-black border border-white/50 text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-5 py-2 text-xs font-medium tracking-wider uppercase rounded-full w-full text-center"
            >
              <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] font-bold bg-clip-text text-transparent">
                Early Access
              </span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}


