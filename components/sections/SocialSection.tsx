"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const socials = [
  {
    name: "LinkedIn",
    handle: "@aryankulshreshtha",
    description: "Professional updates, articles, and industry insights.",
    icon: Linkedin,
    color: "#0a66c2",
    href: "https://linkedin.com/in/aryankulshreshtha",
    bg: "rgba(10,102,194,0.08)",
    border: "rgba(10,102,194,0.3)",
  },
  {
    name: "Instagram",
    handle: "@aryan.kulsh",
    description: "Behind-the-scenes, events, and daily life.",
    icon: Instagram,
    color: "#e1306c",
    href: "https://instagram.com/aryan.kulsh",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.3)",
  },
  {
    name: "YouTube",
    handle: "@AryanKulshreshtha",
    description: "Video essays on business, finance, and entrepreneurship.",
    icon: Youtube,
    color: "#ff0000",
    href: "https://youtube.com/@AryanKulshreshtha",
    bg: "rgba(255,0,0,0.08)",
    border: "rgba(255,0,0,0.3)",
  },
  {
    name: "GitHub",
    handle: "@aryankulsh",
    description: "Projects, experiments, and side ventures.",
    icon: Github,
    color: "#f0f6fc",
    href: "https://github.com/aryankulsh",
    bg: "rgba(240,246,252,0.05)",
    border: "rgba(240,246,252,0.15)",
  },
  {
    name: "X (Twitter)",
    handle: "@aryankulsh",
    description: "Hot takes on markets, startups, and ideas.",
    icon: Twitter,
    color: "#1da1f2",
    href: "https://twitter.com/aryankulsh",
    bg: "rgba(29,161,242,0.08)",
    border: "rgba(29,161,242,0.3)",
  },
  {
    name: "Email",
    handle: "aryan@email.com",
    description: "Collaboration, opportunities, and conversations.",
    icon: Mail,
    color: "#06b6d4",
    href: "mailto:aryan@email.com",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.3)",
  },
];

export default function SocialSection() {
  return (
    <SectionWrapper id="social">
      <SectionTitle
        label="Connect"
        title="Social Hub"
        subtitle="Find me on the platforms where I share, connect, and build in public."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 border border-white/5 group flex items-start gap-4 transition-all duration-300"
            whileHover={{
              y: -6,
              borderColor: social.border,
              boxShadow: `0 0 30px ${social.color}20`,
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
              style={{ background: social.bg, border: `1px solid ${social.border}` }}
            >
              <social.icon size={22} style={{ color: social.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-white text-sm">{social.name}</h3>
                <ExternalLink
                  size={14}
                  className="text-slate-600 group-hover:text-slate-400 transition-colors opacity-0 group-hover:opacity-100"
                />
              </div>
              <p className="text-xs font-mono mb-2 truncate" style={{ color: social.color }}>
                {social.handle}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">{social.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <p className="text-slate-500 text-sm">
          Always open to thoughtful conversations. 
          <a href="mailto:aryan@email.com" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
            Drop me a line anytime →
          </a>
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
