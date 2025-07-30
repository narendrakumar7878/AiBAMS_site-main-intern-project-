// import { useEffect, useRef, useState } from "react";
// import logoSrc from "../assets/logo-white.svg";
// import * as THREE from "three";
// import vertexShader from "../assets/nebula.vert?raw";
// import fragmentShader from "../assets/nebula.frag?raw";
// import { ChevronDown } from "lucide-react";

// export default function HeroSection() {
//     return (
//         <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
//             {/* Blue glow at top */}
//             <div
//                 className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-40 z-0 pointer-events-none"
//                 style={{
//                     background: "radial-gradient(ellipse at center, rgba(0, 122, 255, 0.15) 0%, transparent 80%)",
//                     filter: "blur(16px)",
//                 }}
//             />

//             {/* Logo at top center */}
//             <div className="relative z-10 mt-20 mb-12 pt-28">
//                 <img
//                     src={logoSrc}
//                     alt="AIBAMS Logo"
//                     className="w-56 md:w-72 h-auto mx-auto" 
//                 />
//             </div>

//             {/* Main heading with enhanced shadow */}
//             <h1
//                 className="text-[32px] md:text-4xl font-medium text-white mb-12 relative"
//                 style={{
//                     textShadow: `
//                         0 0 10px rgba(0, 122, 255, 0.8),
//                         0 0 20px rgba(0, 122, 255, 0.6),
//                         0 0 30px rgba(0, 122, 255, 0.4)
//                     `,
//                     letterSpacing: '1px'
//                 }}
//             >
//                 Simplify, Scale, and Succeed
//                 {/* Additional glow effect */}
//                 <span
//                     className="absolute inset-0 -z-10 opacity-80"
//                     style={{
//                         textShadow: `
//                             0 0 15px rgba(0, 122, 255, 0.9),
//                             0 0 30px rgba(0, 122, 255, 0.7),
//                             0 0 45px rgba(0, 122, 255, 0.5)
//                         `,
//                         filter: 'blur(5px)'
//                     }}
//                     aria-hidden="true"
//                 >
//                     Simplify, Scale, and Succeed
//                 </span>
//             </h1>

//             {/* Description text at bottom */}
//             <div className="relative z-10 mt-auto mb-20 text-center px-6 max-w-2xl mx-auto">
//                 <p className="text-sm md:text-base text-gray-300/90 mb-6 leading-relaxed">
//                     Introducing AIBAMS — our next-gen AI business suite.<br />
//                     Launching with 6 powerful tools & 45+ on the way,<br />
//                     this is just the beginning
//                 </p>
//                 <ChevronDown className="mx-auto text-gray-400/80 animate-bounce" size={20} />
//             </div>
//         </section>
//     );
// }




import { useEffect, useRef, useState } from "react";
import logoSrc from "../assets/logo-white.svg";
import * as THREE from "three";
import vertexShader from "../assets/nebula.vert?raw";
import fragmentShader from "../assets/nebula.frag?raw";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Enhanced golden glow at top - wider spread */}
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-20 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 1) 0%, transparent 50%)",
                    filter: "blur(20px)",
                    boxShadow: "0 0 40px 20px rgba(212, 175, 55, 0.1)"
                }}
            />

            {/* Logo at top center */}
            <div className="relative z-10 mt-20 mb-12 pt-28">
                <img
                    src={logoSrc}
                    alt="AIBAMS Logo"
                    className="w-56 md:w-72 h-auto mx-auto"
                />
            </div>

            {/* Main heading with golden shadow */}
            <h1
                className="text-[32px] md:text-4xl font-medium text-white mb-12 relative"
                style={{
                    textShadow: `
                        0 0 12px rgba(212, 175, 55, 0.8),
                        0 0 24px rgba(212, 175, 55, 0.5),
                        0 0 36px rgba(212, 175, 55, 0.3)
                    `,
                    letterSpacing: '1px'
                }}
            >
                Simplify, Scale, and Succeed
                <span
                    className="absolute inset-0 -z-10 opacity-80"
                    style={{
                        textShadow: `
                            0 0 18px rgba(212, 175, 55, 0.9),
                            0 0 36px rgba(212, 175, 55, 0.6)
                        `,
                        filter: 'blur(6px)'
                    }}
                    aria-hidden="true"
                >
                    Simplify, Scale, and Succeed
                </span>
            </h1>

            {/* Description text at bottom */}
            <div className="relative z-10 mt-auto mb-20 text-center px-6 max-w-2xl mx-auto">
                <p className="text-sm md:text-base text-gray-300/90 mb-6 leading-relaxed">
                    Introducing AIBAMS — our next-gen AI business suite.<br />
                    Launching with 6 powerful tools & 45+ on the way,<br />
                    this is just the beginning
                </p>
                <ChevronDown className="mx-auto text-gray-400/80 animate-bounce" size={20} />
            </div>
        </section>
    );
}