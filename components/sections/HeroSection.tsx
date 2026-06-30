"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";

const ROTATING_WORDS = [
  "BBA Student",
  "Entrepreneur",
  "Community Builder",
  "Content Creator",
  "Finance Enthusiast",
  "Future Business Leader",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];
    let i = typing ? displayed.length : displayed.length - 1;
    
    if (typing && i < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, i + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!typing && i >= 0) {
      const t = setTimeout(() => setDisplayed(word.slice(0, i)), 40);
      return () => clearTimeout(t);
    }
    if (typing && i === word.length) {
      const t = setTimeout(() => setTyping(false), 2000);
      return () => clearTimeout(t);
    }
    if (!typing && i < 0) {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      setTyping(true);
    }
  }, [displayed, typing, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 text-sm font-mono text-blue-400 mb-8"
              style={{ background: "rgba(59,130,246,0.08)" }}
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Incoming BBA • TAPMI Bengaluru</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4"
            >
              <span className="text-white">Aryan</span>
              <br />
              <span className="gradient-text">Kulshreshtha</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="text-xl sm:text-2xl text-slate-300 font-mono">
                {displayed}
                <span className="cursor-blink text-blue-400 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Driven by curiosity and ambition. I am building my foundation in business, 
              finance, and entrepreneurship — one idea, one connection, one community at a time.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-slate-500 text-sm mb-10 justify-center lg:justify-start"
            >
              <MapPin size={14} className="text-blue-400" />
              <span>Bengaluru, India</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                View Portfolio
                <ArrowDown size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-blue-500/50 hover:text-white transition-all"
                style={{ background: "rgba(255,255,255,0.03)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "2025", label: "Batch" },
                { value: "BBA", label: "Program" },
                { value: "∞", label: "Ambition" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="relative flex-shrink-0"
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                borderImage: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4) 1",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Glow rings */}
            <div className="absolute -inset-4 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
            <div className="absolute -inset-8 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />

            {/* Profile container */}
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-blue-500/30"
              style={{ background: "rgba(59,130,246,0.05)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Profile photo placeholder */}
              {/* Profile photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
               <img
                 src="/pfp.jpg"
                 alt="Aryan Kulshreshtha"
                 className="w-24 h-24 rounded-full border-2 border-blue-500/40 object-cover"
               />
              </div>
              {/* Inner gradient overlay */}
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2), transparent 60%)" }} />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-6 top-8 glass rounded-xl px-3 py-2 border border-white/10"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <div>
                  <div className="text-xs font-semibold text-white">TAPMI</div>
                  <div className="text-[10px] text-slate-400">Bengaluru</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-8 bottom-12 glass rounded-xl px-3 py-2 border border-white/10"
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <div>
                  <div className="text-xs font-semibold text-white">Entrepreneur</div>
                  <div className="text-[10px] text-slate-400">In Progress</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-6 glass rounded-xl px-3 py-2 border border-white/10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">💼</span>
                <div>
                  <div className="text-xs font-semibold text-white">Open to</div>
                  <div className="text-[10px] text-slate-400">Opportunities</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-0.5 h-8 rounded-full"
            style={{ background: "linear-gradient(180deg, #3b82f6, transparent)" }}
            animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
