// import React from 'react';

// const Footer = () => {
//   return (
//     <footer
//       className="w-full min-h-[80vh] flex flex-col justify-between text-white relative overflow-hidden"
//       style={{
//         background: `
//           radial-gradient(ellipse 300vh 120vh at 50% 130%, 
//             rgba(255, 255, 255, 0.18) 0%,
//             rgba(255, 205, 110, 0.14) 12%,
//             rgba(255, 155, 60, 0.09) 25%,
//             rgba(255, 125, 45, 0.055) 35%,
//             rgba(9, 9, 9, 0.04) 45%,
//             rgba(155, 85, 25, 0.022) 55%,
//             rgba(105, 55, 15, 0.013) 65%,
//             rgba(55, 30, 8, 0.007) 75%,
//             transparent 85%
//           ),
//           radial-gradient(ellipse 90% 70% at 50% 110%, 
//             rgba(255, 255, 255, 0.28) 0%,
//             rgba(255, 225, 155, 0.19) 18%,
//             rgba(255, 185, 85, 0.115) 35%,
//             rgba(255, 145, 65, 0.062) 50%,
//             rgba(205, 105, 45, 0.027) 65%,
//             transparent 80%
//           ),
//           radial-gradient(ellipse 55% 45% at 50% 102%, 
//             rgba(255, 255, 255, 0.55) 0%,
//             rgba(255, 245, 205, 0.38) 25%,
//             rgba(255, 205, 125, 0.19) 45%,
//             rgba(255, 165, 85, 0.088) 65%,
//             rgba(225, 125, 55, 0.035) 80%,
//             transparent 95%
//           ),
//           linear-gradient(180deg,
//             #000000 0%,
//             #000000 40%,
//             #020202 50%,
//             #050505 60%,
//             #0a0a0a 68%,
//             #111111 74%,
//             #1a1a1a 80%,
//             #2a1f17 84%,
//             #3d2a1d 88%,
//             #533625 91%,
//             #6b432a 94%,
//             #8b5530 96%,
//             #a66b35 98%,
//             #c8843f 100%
//           )
//         `,
//       }}
//     >


//       {/* Bright white center core */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(ellipse 20% 15% at 50% 98%, 
//               rgba(255, 255, 255, 0.75) 0%,
//               rgba(255, 255, 255, 0.58) 25%,
//               rgba(255, 250, 225, 0.35) 50%,
//               rgba(255, 225, 165, 0.20) 70%,
//               rgba(255, 185, 105, 0.10) 85%,
//               transparent 100%
//             )
//           `
//         }}
//       />

//       {/* Natural blending layers following pyramid shape */}


//       {/* Soft atmospheric pyramid fade */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(ellipse 90% 70% at 50% 110%, 
//               rgba(255, 235, 175, 0.04) 0%,
//               rgba(255, 205, 135, 0.03) 35%,
//               rgba(255, 175, 105, 0.02) 55%,
//               rgba(215, 135, 75, 0.015) 75%,
//               rgba(175, 105, 55, 0.008) 90%,
//               transparent 100%
//             )
//           `
//         }}
//       />

//       {/* Final pyramid contour haze */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `

//             radial-gradient(ellipse 120% 90% at 50% 115%, 
//               rgba(255, 220, 160, 0.02) 0%,
//               rgba(255, 190, 130, 0.015) 40%,
//               rgba(225, 155, 95, 0.01) 65%,
//               rgba(185, 115, 65, 0.005) 85%,
//               transparent 100%
//             )
//           `
//         }}
//       />

//       {/* Footer Content */}
//       <div className="w-full pt-12 md:pt-20 pb-12 md:pb-16 relative z-10 px-5 sm:px-8 lg:px-12">
//                <div className="max-w-7xl mx-auto">

//           {/* <div className="w-full flex flex-col sm:flex-col md:flex-row gap-6 md:gap-10 justify-between px-4 sm:px-10 md:px-16 lg:px-20"> */}


//           {/* Mobile: 2 columns, Tablet: 4 columns, Desktop: 4 columns */}
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-10">

//             {/* Column 1 - Social */}
//             <div>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Social</h4>
//               <ul className="space-y-2.5 md:space-y-3 text-sm">
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Instagram</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">LinkedIN</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">YouTube</a></li>
//               </ul>
//             </div>

//             {/* Column 2 - Fusion Suite */}
//             <div>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Fusion Suite</h4>
//               <ul className="space-y-2.5 md:space-y-3 text-sm">
//                 <li><a href="/webx" className="hover:text-white text-gray-400 transition-colors duration-300">WebX</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Drive</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Docs</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Sheet</a></li>
//                 <li><a href="/fusionmail" className="hover:text-white text-gray-400 transition-colors duration-300">Mail</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Chat</a></li>
//               </ul>
//             </div>

//             {/* Column 3 - Company */}
//             <div>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Company</h4>
//               <ul className="space-y-2.5 md:space-y-3 text-sm">
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">About Us</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Careers</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Contact</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Updates</a></li>
//               </ul>
//             </div>

//             {/* Column 4 - Resources */}
//             <div>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Resources</h4>
//               <ul className="space-y-2.5 md:space-y-3 text-sm">
//                 <li><a href="/privacy" className="hover:text-white text-gray-400 transition-colors duration-300">Privacy policy</a></li>
//                 <li><a href="/security" className="hover:text-white text-gray-400 transition-colors duration-300">Security</a></li>
//                 <li><a href="/legal" className="hover:text-white text-gray-400 transition-colors duration-300">Legal</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Status</a></li>
//                 <li><a href="/sitemapfusion" className="hover:text-white text-gray-400 transition-colors duration-300">Sitemap</a></li>
//                 <li><a href="/blog" className="hover:text-white text-gray-400 transition-colors duration-300">Blog</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full text-center text-xs text-black pb-4 z-20 relative mb-[30px]">
//         <div>© 2025 All Rights Reserved by AIBAMS.</div>
//         <div className="mt-3 tracking-widest flex flex-col items-center justify-center">
//           <span className="flex items-center justify-center gap-2">
//             <span className="uppercase">MADE WITH</span>
//             <span style={{ color: '#b90101', fontSize: '1rem', margin: '0 0.25rem' }}>❤</span>
//             <span className="uppercase">BY</span>
//             <span className="font-bold tracking-widest ml-1 underline decoration-dotted">SHDPIXEL</span>
//             <span className="uppercase ml-1">IN</span>
//             <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png" style={{ display: 'inline', width: '20px', height: 'auto', marginLeft: '0.25rem', verticalAlign: 'middle' }} alt="Bharat / India" />
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer
      className="w-full min-h-[80vh] px-6 flex flex-col justify-between text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 300vh 120vh at 50% 130%, 
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 205, 110, 0.14) 12%,
            rgba(255, 155, 60, 0.09) 25%,
            rgba(255, 125, 45, 0.055) 35%,
            rgba(9, 9, 9, 0.04) 45%,
            rgba(155, 85, 25, 0.022) 55%,
            rgba(105, 55, 15, 0.013) 65%,
            rgba(55, 30, 8, 0.007) 75%,
            transparent 85%
          ),
          radial-gradient(ellipse 90% 70% at 50% 110%, 
            rgba(255, 255, 255, 0.28) 0%,
            rgba(255, 225, 155, 0.19) 18%,
            rgba(255, 185, 85, 0.115) 35%,
            rgba(255, 145, 65, 0.062) 50%,
            rgba(205, 105, 45, 0.027) 65%,
            transparent 80%
          ),
          radial-gradient(ellipse 55% 45% at 50% 102%, 
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 245, 205, 0.38) 25%,
            rgba(255, 205, 125, 0.19) 45%,
            rgba(255, 165, 85, 0.088) 65%,
            rgba(225, 125, 55, 0.035) 80%,
            transparent 95%
          ),
          linear-gradient(180deg,
            #000000 0%,
            #000000 40%,
            #020202 50%,
            #050505 60%,
            #0a0a0a 68%,
            #111111 74%,
            #1a1a1a 80%,
            #2a1f17 84%,
            #3d2a1d 88%,
            #533625 91%,
            #6b432a 94%,
            #8b5530 96%,
            #a66b35 98%,
            #c8843f 100%
          )
        `,
      }}
    >

      {/* Desktop lighting layers (completely unchanged) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 20% 15% at 50% 98%, 
              rgba(255, 255, 255, 0.75) 0%,
              rgba(255, 255, 255, 0.58) 25%,
              rgba(255, 250, 225, 0.35) 50%,
              rgba(255, 225, 165, 0.20) 70%,
              rgba(255, 185, 105, 0.10) 85%,
              transparent 100%
            )
          `
        }}
      />

      {/* Mobile-optimized lighting (only affects mobile) */}
      <div className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          background: `
            /* Stronger top dark gradient to ensure text contrast */
            linear-gradient(to bottom, 
              rgba(0,0,0,0.9) 0%,
              rgba(0,0,0,0.7) 30%,
              rgba(0,0,0,0.4) 70%,
              transparent 100%
            ),
            /* Bottom lighting - more compact and focused */
            radial-gradient(ellipse 100% 30% at 50% 110%, 
              rgba(255, 255, 255, 0.4) 0%,
              rgba(255, 225, 165, 0.25) 20%,
              rgba(255, 185, 105, 0.15) 40%,
              rgba(225, 145, 75, 0.08) 60%,
              transparent 80%
            )
          `
        }}
      />

      {/* Footer Content - unchanged */}
      <div className="w-full pt-12 md:pt-20 pb-12 md:pb-16 relative z-10 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-10">

            {/* Column 1 - Social */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Social</h4>
              <ul className="space-y-2.5 md:space-y-3 text-sm">
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">LinkedIN</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">YouTube</a></li>
              </ul>
            </div>

            {/* Column 2 - Fusion Suite */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Fusion Suite</h4>
              <ul className="space-y-2.5 md:space-y-3 text-sm">
                <li><a href="/webx" className="hover:text-white text-gray-400 transition-colors duration-300">WebX</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Drive</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Docs</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Sheet</a></li>
                <li><a href="/fusionmail" className="hover:text-white text-gray-400 transition-colors duration-300">Mail</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Chat</a></li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Company</h4>
              <ul className="space-y-2.5 md:space-y-3 text-sm">
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Updates</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-4 md:mb-5 font-medium">Resources</h4>
              <ul className="space-y-2.5 md:space-y-3 text-sm">
                <li><a href="/privacy" className="hover:text-white text-gray-400 transition-colors duration-300">Privacy policy</a></li>
                <li><a href="/security" className="hover:text-white text-gray-400 transition-colors duration-300">Security</a></li>
                <li><a href="/legal" className="hover:text-white text-gray-400 transition-colors duration-300">Legal</a></li>
                <li><a href="#" className="hover:text-white text-gray-400 transition-colors duration-300">Status</a></li>
                <li><a href="/sitemapfusion" className="hover:text-white text-gray-400 transition-colors duration-300">Sitemap</a></li>
                <li><a href="/blog" className="hover:text-white text-gray-400 transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright section - with mobile text visibility improvements */}
      <div className="w-full text-center text-xs text-white pb-4 z-20 relative mb-[30px]">
        <div className="md:text-black">© 2025 All Rights Reserved by AIBAMS.</div>
        <div className="mt-3 tracking-widest flex flex-col items-center justify-center">
          <span className="flex items-center justify-center gap-2 text-white md:text-black">
            <span className="uppercase">MADE WITH</span>
            <span style={{ color: '#b90101', fontSize: '1rem', margin: '0 0.25rem' }}>❤</span>
            <span className="uppercase">BY</span>
            <span className="font-bold tracking-widest ml-1 underline decoration-dotted">SHDPIXEL</span>
            <span className="uppercase ml-1">IN</span>
            <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png"
              style={{ display: 'inline', width: '20px', height: 'auto', marginLeft: '0.25rem', verticalAlign: 'middle', filter: 'invert(1) brightness(2) md:filter-none' }}
              alt="Bharat / India" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




















// here is the footer code by me 

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer
//       className="w-full min-h-[80vh] flex flex-col justify-between text-white relative overflow-hidden"
//       style={{
//         background: `
//           radial-gradient(ellipse 300vh 120vh at 50% 130%, 
//             rgba(255, 255, 255, 0.18) 0%,
//             rgba(255, 205, 110, 0.14) 12%,
//             rgba(255, 155, 60, 0.09) 25%,
//             rgba(255, 125, 45, 0.055) 35%,
//             rgba(9, 9, 9, 0.04) 45%,
//             rgba(155, 85, 25, 0.022) 55%,
//             rgba(105, 55, 15, 0.013) 65%,
//             rgba(55, 30, 8, 0.007) 75%,
//             transparent 85%
//           ),
//           linear-gradient(180deg,
//             #000000 0%,
//             #000000 40%,
//             #020202 50%,
//             #050505 60%,
//             #0a0a0a 68%,
//             #111111 74%,
//             #1a1a1a 80%,
//             #2a1f17 84%,
//             #3d2a1d 88%,
//             #533625 91%,
//             #6b432a 94%,
//             #8b5530 96%,
//             #a66b35 98%,
//             #c8843f 100%
//           )
//         `,
//       }}
//     >

//       {/* Main lighting effect - responsive */}
//       <div className="absolute inset-0 pointer-events-none" style={{
//         background: `
//           radial-gradient(ellipse clamp(20%, 200px, 30%) clamp(15%, 150px, 25%) at 50% 98%, 
//             rgba(255, 255, 255, 0.75) 0%,
//             rgba(255, 255, 255, 0.58) 25%,
//             rgba(255, 250, 225, 0.35) 50%,
//             rgba(255, 225, 165, 0.20) 70%,
//             rgba(255, 185, 105, 0.10) 85%,
//             transparent 100%
//           )
//         `
//       }} />

//       {/* Secondary glow - responsive */}
//       <div className="absolute inset-0 pointer-events-none" style={{
//         background: `
//           radial-gradient(ellipse clamp(80%, 400px, 120%) clamp(60%, 300px, 90%) at 50% 110%, 
//             rgba(255, 235, 175, 0.04) 0%,
//             rgba(255, 205, 135, 0.03) 35%,
//             rgba(255, 175, 105, 0.02) 55%,
//             rgba(215, 135, 75, 0.015) 75%,
//             rgba(175, 105, 55, 0.008) 90%,
//             transparent 100%
//         )`
//       }} />

//       {/* Tertiary glow - responsive */}
//       <div className="absolute inset-0 pointer-events-none" style={{
//         background: `
//           radial-gradient(ellipse clamp(100%, 500px, 150%) clamp(80%, 400px, 120%) at 50% 115%, 
//             rgba(255, 220, 160, 0.02) 0%,
//             rgba(255, 190, 130, 0.015) 40%,
//             rgba(225, 155, 95, 0.01) 65%,
//             rgba(185, 115, 65, 0.005) 85%,
//             transparent 100%
//         )`
//       }} />

//       {/* Footer Content */}
//       <div className="w-full pt-24 pb-20 relative z-10">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//             {/* Column 1 */}
//             <div className='p-2'>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-6 font-medium">Social</h4>
//               <ul className="space-y-3 text-sm">
//                 <li><a href="#" className="hover:text-white text-gray-400">Instagram</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">LinkedIn</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">YouTube</a></li>
//               </ul>
//             </div>

//             {/* Column 2 */}
//             <div className='p-2'>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-6 font-medium">Fusion Suite</h4>
//               <ul className="space-y-3 text-sm">
//                 <li><a href="/webx" className="hover:text-white text-gray-400">WebX</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Drive</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Docs</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Sheet</a></li>
//                 <li><a href="/fusionmail" className="hover:text-white text-gray-400">Mail</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Chat</a></li>
//               </ul>
//             </div>

//             {/* Column 3 */}
//             <div className='p-2'>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-6 font-medium">Company</h4>
//               <ul className="space-y-3 text-sm">
//                 <li><a href="#" className="hover:text-white text-gray-400">About Us</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Careers</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Contact</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Updates</a></li>
//               </ul>
//             </div>

//             {/* Column 4 */}
//             <div className='p-2'>
//               <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-6 font-medium">Resources</h4>
//               <ul className="space-y-3 text-sm">
//                 <li><a href="/privacy" className="hover:text-white text-gray-400">Privacy policy</a></li>
//                 <li><a href="/security" className="hover:text-white text-gray-400">Security</a></li>
//                 <li><a href="/legal" className="hover:text-white text-gray-400">Legal</a></li>
//                 <li><a href="#" className="hover:text-white text-gray-400">Status</a></li>
//                 <li><a href="/sitemapfusion" className="hover:text-white text-gray-400">Sitemap</a></li>
//                 <li><a href="/blog" className="hover:text-white text-gray-400">Blog</a></li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Improved for mobile */}
//       <div className="w-full text-center text-xs text-white pb-6 z-20 relative px-4">
//         <div className="mb-2">© 2025 All Rights Reserved by AIBAMS.</div>
//         <div className="tracking-widest flex flex-col items-center justify-center">
//           <span className="flex flex-wrap items-center justify-center gap-1 text-xs">
//             <span className="uppercase">Made with</span>
//             <span className="inline-block animate-pulse" style={{ color: '#b90101', fontSize: '1rem' }}>❤</span>
//             <span className="uppercase">by</span>
//             <span className="font-bold tracking-widest underline decoration-dotted">SHDPIXEL</span>
//             <span className="uppercase">in</span>
//             <img
//               src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png"
//               className="inline-block w-5 h-auto ml-1"
//               alt="India"
//             />
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;