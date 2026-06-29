"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Github, Twitter, Mail, Heart, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Community", href: "#community" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/aryankulshreshtha", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/aryan.kulsh", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@AryanKulshreshtha", label: "YouTube" },
  { icon: Github, href: "https://github.com/aryankulsh", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/aryankulsh", label: "Twitter" },
  { icon: Mail, href: "mailto:aryan@email.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl border border-blue-500/30 flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.08)" }}>
                <span className="font-display text-sm font-bold gradient-text">AK</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">Aryan Kulshreshtha</div>
                <div className="text-xs text-slate-500">Future Business Leader</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Incoming BBA student at TAPMI Bengaluru. Building businesses, communities, and 
              a future worth being proud of.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/40 transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Let's Connect
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Whether it's an opportunity, a collaboration, or just a great conversation — I'm here.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Aryan Kulshreshtha. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Built with <Heart size={10} className="text-red-400" fill="currentColor" /> and ambition
          </p>
        </div>
      </div>
    </footer>
  );
}
