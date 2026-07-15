"use client";

import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, Heart, Globe } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const traits = [
  {
    icon: Target,
    title: "Goal-Driven",
    description: "Every action is intentional. I define targets, reverse-engineer the path, and execute with discipline.",
    color: "#3b82f6",
  },
  {
    icon: Users,
    title: "Community-First",
    description: "I believe collective growth compounds faster than individual progress. Building together is my ethos.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "High-Energy Learner",
    description: "Finance, strategy, entrepreneurship — I absorb knowledge from every source and turn it into action.",
    color: "#06b6d4",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Setbacks are data. Every failure refines the model. I iterate fast and scale what works.",
    color: "#f59e0b",
  },
  {
    icon: Globe,
    title: "Big Picture Thinker",
    description: "I see systems, not silos. Business, culture, technology — I connect dots others miss.",
    color: "#ec4899",
  },
  {
    icon: Heart,
    title: "Impact-Oriented",
    description: "Profit and purpose aren't opposites. I'm building ventures that create real value for real people.",
    color: "#10b981",
  },
];

const storyBeats = [
  {
    emoji: "🌱",
    phase: "The Spark",
    text: "Curiosity about how businesses work — why some thrive, why others fail. That question set everything in motion.",
  },
  {
    emoji: "📚",
    phase: "The Foundation",
    text: "Committed to mastering business fundamentals at TAPMI Bengaluru, one of India's most respected management institutions.",
  },
  {
    emoji: "🤝",
    phase: "The Community",
    text: "Co-founded a youth-led community that brings ambitious minds together to learn, collaborate, and grow.",
  },
  {
    emoji: "🚀",
    phase: "The Mission",
    text: "To build ventures that matter — creating jobs, opportunities, and impact at every stage of the journey.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        label="Who I Am"
        title="About Me"
        subtitle="More than a student. A builder, a connector, and a relentless learner on the path to meaningful impact."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Story column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg leading-relaxed mb-8"
          >
            I am Aryan Kulshreshtha — a BBA(Hons.) student at{" "}
            <span className="text-blue-400 font-semibold">TAPMI Bengaluru</span>, driven by a
            deep conviction that business done right can change the world. My interests span
            finance, entrepreneurship, leadership, and community building.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 leading-relaxed mb-12"
          >
            I don't wait for opportunities — I build the table and invite others to sit. Whether
            it's co-founding communities, diving into market research, or crafting content that
            educates and inspires, I bring full energy to everything I do.
          </motion.p>

          {/* Story beats */}
          <div className="space-y-6">
            {storyBeats.map((beat, i) => (
              <motion.div
                key={beat.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-2xl glass-hover transition-all">
                  {beat.emoji}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {beat.phase}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{beat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traits grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-5 group cursor-default transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}
              >
                <trait.icon size={20} style={{ color: trait.color }} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{trait.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
