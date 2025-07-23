// import { Button } from "@/components/ui/button";
// import iconSrcW from "../assets/icon-w.png";
// import iconSrcB from "../assets/icon-b.png";

// export default function Header({ white = false }: { white?: boolean }) {
//   const iconSrc = white ? iconSrcW : iconSrcB;

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         white ? "backdrop-blur-md" : "bg-transparent"
//       } animate-fade-in`}
//     >
//       <div className="max-w-6xl mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//         <a href="http://192.168.1.25:5010/"  rel="noopener noreferrer">
//           <img src={iconSrc} alt="Logo" className="h-8 w-auto mr-10" />
// </a>
//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-10">
//             <a href="http://192.168.1.25:5010/fusionsuite"  rel="noopener noreferrer" className={`transition-colors text-xs font-medium tracking-wider uppercase ${white ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"}`}>
//               FUSION SUITE
//             </a>
//             <a href="http://192.168.1.25:5010/pricing"  rel="noopener noreferrer" className={`transition-colors text-xs font-medium tracking-wider uppercase ${white ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"}`}>
//               PRICING
//             </a>
//             <a href="http://192.168.1.25:5010/about" rel="noopener noreferrer" className={`transition-colors text-xs font-medium tracking-wider uppercase ${white ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"}`}>
//               ABOUT
//             </a>
//             <a href="http://192.168.1.25:5010/career"  rel="noopener noreferrer" className={`transition-colors text-xs font-medium tracking-wider uppercase ${white ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"}`}>
//               CAREERS
//             </a>
//             <a href="http://192.168.1.25:5010/updates"  rel="noopener noreferrer" className={`transition-colors text-xs font-medium tracking-wider uppercase ${white ? "text-white hover:text-gray-300" : "text-black hover:text-gray-500"}`}>
//               UPDATES
//             </a>
//           </nav>

//           {/* CTA Button */}
//           <Button 
//             variant="outline" 
//             className={`bg-black border ${white ? "border-white/50 text-white hover:bg-white/20 hover:text-white" : "border-black/50 text-black hover:bg-black/20 hover:text-black"} transition-all duration-300 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full`}
//           >
//             <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] to-[#00bbff] font-bold bg-clip-text text-transparent">Early Access</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }





// my header code is here
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import iconSrcW from "../assets/icon-w.png";
import iconSrcB from "../assets/icon-b.png";

export default function Header({ white = false }: { white?: boolean }) {
  const iconSrc = white ? iconSrcW : iconSrcB;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${white ? "backdrop-blur-md" : "bg-transparent"
        } animate-fade-in`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="http://192.168.1.25:5010/" rel="noopener noreferrer">
            <img src={iconSrc} alt="Logo" className="h-8 w-auto mr-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["fusionsuite", "pricing", "about", "career", "updates"].map((route) => (
              <a
                key={route}
                href={`http://192.168.1.25:5010/${route}`}
                rel="noopener noreferrer"
                className={`transition-colors text-xs font-medium tracking-wider uppercase ${white
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-500"
                  }`}
              >
                {route.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className={`bg-black border ${white
                  ? "border-white/50 text-white hover:bg-white/20 hover:text-white"
                  : "border-black/50 text-black hover:bg-black/20 hover:text-black"
                } transition-all duration-300 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full`}
            >
              <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] to-[#00bbff] font-bold bg-clip-text text-transparent">
                Early Access
              </span>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden px-4 pb-4 transition-all duration-300 ${white ? "bg-white/10 backdrop-blur-md" : "bg-black/80"}`}>
          <nav className="flex flex-col items-start space-y-3">
            {["fusionsuite", "pricing", "about", "career", "updates"].map((route) => (
              <a
                key={route}
                href={`http://192.168.1.25:5010/${route}`}
                rel="noopener noreferrer"
                className={`block text-xs font-medium tracking-wider uppercase ${white
                    ? "text-white hover:text-gray-300"
                    : "text-white hover:text-gray-400"
                  }`}
              >
                {route.toUpperCase()}
              </a>
            ))}

            <Button
              variant="outline"
              className={`mt-2 bg-black border ${white
                  ? "border-white/50 text-white hover:bg-white/20 hover:text-white"
                  : "border-white/50 text-white hover:bg-white/20 hover:text-white"
                } transition-all duration-300 px-5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full w-full text-center`}
            >
              <span className="bg-gradient-to-r from-[#ffa184] via-[#ff96dd] to-[#00bbff] font-bold bg-clip-text text-transparent">
                Early Access
              </span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
