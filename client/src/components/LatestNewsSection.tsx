import { Newspaper, Flame, TrendingUp, ArrowRight, Calendar, Tag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LatestNewsSection() {
  const news = [
    {
      date: "December 15, 2024",
      title: "AIBAMS Launches Fusion Suite",
      description: "Our next-gen AI business suite is live, offering 6 powerful tools and 45+ more on the way.",
      category: "Product Launch",
      icon: Flame,
      color: "red"
    },
    {
      date: "December 10, 2024",
      title: "Major Update: Image Generation",
      description: "Bring your ideas to life with our new image generation tool, now available to all users.",
      category: "Feature Update",
      icon: TrendingUp,
      color: "green"
    },
    {
      date: "December 5, 2024",
      title: "Growth & Community",
      description: "Join our growing community and stay tuned for upcoming features, events, and more updates.",
      category: "Community",
      icon: Newspaper,
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-400";
      case "green":
        return "text-green-400";
      case "blue":
        return "text-blue-400";
      default:
        return "text-gray-200";
    }
  };

  return (
    <section className="w-full bg-black py-24 px-4  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Radial gradient overlay */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with glass effect */}
        <div className="mb-16 text-center">
          <div className="text-xs tracking-widest text-gray-400 mb-2 font-medium"># UPDATES</div>
          <h2 className="text-4xl md:text-[3rem] font-bold text-white mb-4">What's New</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest features, announcements, and community highlights
          </p>
        </div>

        {/* News grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={index}
              className="group relative border-[0.5px] border-zinc-800 p-6 bg-transparent transition-colors duration-300 flex flex-col h-full"
            >
              <div className="text-xs text-gray-500 tracking-widest mb-2">{item.date}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm text-justify mb-4 flex-1">{item.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <a href="#" className="text-xs text-slate-600 hover:underline font-medium">Read</a>
                <span className="text-[10px] tracking-widest font-thin uppercase text-gray-400">CATEGORY</span>
              </div>
              <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_4px_32px_0_rgba(255,200,0,0.15)] transition-all duration-300"></span>
            </div>
          ))}
        </div> */}

        {/* News grid my code starts upadte section for new by me  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8">
          {news.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative border border-zinc-800 p-6 bg-zinc-900/10 hover:bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 flex flex-col h-full rounded-xl hover:scale-[1.02] hover:border-yellow-400/20 shadow-sm hover:shadow-yellow-500/10"
              >
                {/* Date + Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-500 tracking-widest">{item.date}</div>
                  <Icon className={`w-4 h-4 ${getColorClasses(item.color)}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-gray-100 text-sm text-justify mb-6 transition-colors duration-300 flex-1">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="#"
                    className="text-xs font-medium text-slate-600 hover:text-yellow-400 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-yellow-400 after:transition-all after:duration-300"
                  >
                    Read
                  </a>
                  <span className="text-[10px] tracking-widest font-thin uppercase text-gray-400">
                    {item.category}
                  </span>
                </div>

                {/* Hover outline effect */}
                <span className="pointer-events-none absolute inset-0 border-transparent group-hover:shadow-[0_0_40px_4px_rgba(255,200,0,0.1)] transition-all duration-300 rounded-xl"></span>
              </motion.div>
            );
          })}
        </div>

      </div>
      
    </section>
  );
} 