

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const quoteLeftRef = useRef(null);
  const quoteRightRef = useRef(null);
  const controls = useAnimation();

  // Get scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress into animation values
  const leftQuoteX = useTransform(scrollYProgress, [0, 0.5, 1], [100, -20, -50]);
  const leftQuoteY = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 10, -20]);
  const leftQuoteScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const leftQuoteOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  
  const rightQuoteX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 20, 50]);
  const rightQuoteY = useTransform(scrollYProgress, [0, 0.5, 1], [50, -10, 20]);
  const rightQuoteScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const rightQuoteOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  // Floating animation that runs continuously
  useEffect(() => {
    const floatAnimation = async () => {
      while (true) {
        await controls.start({
          y: [0, -10, 0, 10, 0],
          transition: { duration: 5, ease: "easeInOut", repeat: 0 }
        });
      }
    };
    
    floatAnimation();
  }, [controls]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black text-white pt-20 pb-16 px-6 md:px-12 relative overflow-hidden min-h-[80vh]"
    >
      {/* Decorative floating elements */}
      <motion.div 
        ref={quoteLeftRef}
        className="absolute text-[120px] text-zinc-50 opacity-30 font-serif"
        style={{ 
          x: leftQuoteX, 
          y: leftQuoteY, 
          scale: leftQuoteScale,
          opacity: leftQuoteOpacity,
          left: '5%',
          top: '15%'
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        whileInView={{ opacity: 0.3, x: -20, transition: { duration: 1 } }}
      >
        "
      </motion.div>

      <motion.div 
        ref={quoteRightRef}
        className="absolute text-[120px] text-zinc-50 opacity-30 font-serif"
        style={{ 
          x: rightQuoteX, 
          y: rightQuoteY, 
          scale: rightQuoteScale,
          opacity: rightQuoteOpacity,
          right: '5%',
          bottom: '15%'
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        whileInView={{ opacity: 0.3, x: 20, transition: { duration: 1 } }}
      >
        "
      </motion.div>

      {/* Floating circles in background */}
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-violet-500 to-orange-500"
        style={{
          top: '30%',
          left: '15%',
        }}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-yellow-500 to-red-500"
        style={{
          bottom: '18%',
          right: '20%',
        }}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Content with appear animations */}
      <div className="max-w-5xl mx-auto  text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👨‍💻 About Me
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm <span className="text-white font-semibold">Manjot Singh</span>, a
          dedicated front-end developer with a strong interest in creating
          intuitive, responsive, and visually engaging digital experiences.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I've gained practical experience working on real-world projects.
          I've also completed industrial training at{" "}
          <span className="text-white font-semibold">Make My Designs</span>, where I developed a responsive
          e-learning website using modern front-end technologies.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          My approach to development focuses on clean code, smooth user
          interactions, and cross-device compatibility. I enjoy turning complex
          problems into simple, elegant solutions and continuously seek
          opportunities to grow and contribute to impactful digital products.
        </motion.p>
      </div>
    </section>
  );
};

export default About;