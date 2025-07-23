import { Brain, Target, Zap, Users, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

export default function AboutAIBAMSSection() {
  return (
    <motion.section
      className="w-full bg-black py-24 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            className="text-xs tracking-widest text-gray-400 mb-2 font-medium"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            # ABOUT AIBAMS
          </motion.div>

          <motion.h2
            className="text-4xl md:text-[3rem] font-bold text-white mb-2 hover:drop-shadow-[0_0_15px_rgba(200,132,63,0.6)] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            Welcome to AIBAMS
          </motion.h2>

          <div className="h-[2px] w-24 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mx-auto mt-2 animate-pulse" />

          <motion.div
            className="text-[1.125rem] text-gray-300 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            AI For Business Applications & Management System
          </motion.div>
        </div>


        {/* Mission, Future, Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[{
            title: "Our Mission",
            icon: <Users className="w-8 h-8 transition-all group-hover:drop-shadow-golden" style={{ color: 'rgb(200,132,63)' }} strokeWidth={1.2} />,
            text: "To empower businesses of all sizes with accessible AI tools that simplify workflows, drive smart decisions, and unlock limitless growth potential—no code, no complexity."
          }, {
            title: "The Future is Now",
            icon: <Brain className="w-8 h-8 transition-all group-hover:drop-shadow-golden" style={{ color: 'rgb(200,132,63)' }} strokeWidth={1.2} />,
            text: "AIBAMS is leading the AI revolution for business systems. We're building a world where automation, insights, and innovation converge—helping entrepreneurs and enterprises turn ambition into action, faster than ever."
          }, {
            title: "Our Vision",
            icon: <Target className="w-8 h-8 transition-all group-hover:drop-shadow-golden" style={{ color: 'rgb(200,132,63)' }} strokeWidth={1.2} />,
            text: "To democratize advanced technologies by blending AI with intuitive design, giving every business the power to scale intelligently, act decisively, and grow sustainably."
          }].map((item, index) => (
            // <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all" key={index}>
              
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="white"
              glarePosition="all"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              transitionSpeed={1000}
              key={index}
            >

              
              <motion.div
                className="p-8 bg-black group"
                style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-[0.875rem] text-gray-300 leading-relaxed mb-6">{item.text}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "Instant AI Power",
            icon: Zap,
            text: "Launch AI-driven operations with zero setup delays. Real-time actions, real-world results."
          }, {
            title: "Business-Grade Security",
            icon: Shield,
            text: "Your data stays yours. End-to-end encrypted systems with built-in compliance protocols."
          }, {
            title: "Smart Scalability",
            icon: TrendingUp,
            text: "Designed to grow with your business—from your first sale to your thousandth customer."
          }].map((item, index) => (
            <motion.div
              className="p-6 bg-black text-center group hover:scale-105 transition-all duration-300"
              style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform drop-shadow-golden" style={{ color: 'rgb(200,132,63)' }} strokeWidth={1.2} />
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-[0.875rem] text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
