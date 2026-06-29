"use client";

import { motion } from "framer-motion";
import {
  Rocket, TrendingUp, BarChart2, Briefcase, Crown,
  Network, PenTool, Cpu, Star, Building2
} from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const interests = [
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Building from zero — the process of turning ideas into sustainable ventures excites me most.",
    color: "#3b82f6",
    emoji: "🚀",
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description: "How capital flows, how value is created, how markets price in the future.",
    color: "#f59e0b",
    emoji: "💰",
  },
  {
    icon: BarChart2,
    title: "Stock Market",
    description: "Reading the market as a lens on business cycles, human psychology, and global trends.",
    color: "#10b981",
    emoji: "📈",
  },
  {
    icon: Briefcase,
    title: "Business Strategy",
    description: "Competitive advantage, positioning, and what separates good businesses from great ones.",
    color: "#8b5cf6",
    emoji: "♟️",
  },
  {
    icon: Crown,
    title: "Leadership",
    description: "The art and science of bringing people together toward a shared, ambitious goal.",
    color: "#ec4899",
    emoji: "👑",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Every great collaboration starts with a real conversation. I invest in relationships first.",
    color: "#06b6d4",
    emoji: "🤝",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Sharing ideas that matter — through writing, video, or conversation — to build in public.",
    color: "#f97316",
    emoji: "✍️",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "How technology reshapes industries, creates winners, and opens doors for new entrants.",
    color: "#6366f1",
    emoji: "⚡",
  },
  {
    icon: Star,
    title: "Personal Dev",
    description: "Books, frameworks, habits — building the version of myself equal to the goals I set.",
    color: "#14b8a6",
    emoji: "🌟",
  },
  {
    icon: Building2,
    title: "Startups",
    description: "The early-stage chaos, the product-market fit hunt, the 0-to-1 journey.",
    color: "#a855f7",
    emoji: "🏗️",
  },
];

export default function InterestsSection() {
  return (
    <SectionWrapper id="interests">
      <SectionTitle
        label="What Drives Me"
        title="Interests"
        subtitle="The topics I read, think, and talk about — morning to night."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {interests.map((interest, i) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-5 group cursor-default text-center transition-all duration-300"
            whileHover={{ y: -6, scale: 1.02 }}
          >
            {/* Emoji */}
            <motion.div
              className="text-3xl mb-3"
              whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.3 }}
            >
              {interest.emoji}
            </motion.div>

            {/* Icon glow on hover */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: `${interest.color}15`, border: `1px solid ${interest.color}30` }}
            >
              <interest.icon size={16} style={{ color: interest.color }} />
            </div>

            <h3 className="font-semibold text-white text-sm mb-2 group-hover:gradient-text transition-colors">
              {interest.title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">{interest.description}</p>

            {/* Bottom accent line */}
            <div
              className="mt-4 h-0.5 rounded-full mx-auto w-0 group-hover:w-full transition-all duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${interest.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
