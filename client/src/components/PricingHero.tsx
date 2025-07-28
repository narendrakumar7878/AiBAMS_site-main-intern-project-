// import React, { useRef, useEffect } from 'react';

// const PricingHero = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.25;
//     }
//   }, []);

//   return (
//     <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
//       {/* Hero content */}
//       <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-28">
//         <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
//           <span className="text-sm text-gray-300">Simple, transparent pricing</span>
//         </div>
//         <h1
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent whitespace-nowrap"
//           style={{ fontSize: '3rem', lineHeight: '2.5rem' }}
//         >
//           Choose Your Perfect Plan
//         </h1>
//         <p
//           className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
//         >
//           Scale your business with a smart AI suite built for every size and stage. Our single, affordable plan gives you access to everything—no hidden fees, no upgrades, no confusion.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default PricingHero;




// here is my pricing hero component

import React, { useRef, useEffect } from 'react';

const PricingHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Hero content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm text-gray-300">Simple, transparent pricing</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#ffa184] via-[#ff96dd] via-[#ffa184] via-[#ffff55] via-[#71f800] via-[#00bbff] to-[#00bbff] bg-clip-text text-transparent">
          Choose Your Perfect Plan
        </h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          Scale your business with a smart AI suite built for every size and stage. Our single, affordable plan gives you access to everything—no hidden fees, no upgrades, no confusion.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;

