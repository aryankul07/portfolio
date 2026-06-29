"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase, Users, MessageSquare, PenTool, Mic2,
  TrendingUp, Megaphone, Network, Brain, UserCheck
} from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const skills = [
  { name: "Business & Management", icon: Briefcase, level: 78, color: "#3b82f6", desc: "Strategic thinking, business fundamentals, organizational dynamics." },
  { name: "Leadership", icon: UserCheck, level: 85, color: "#8b5cf6", desc: "Vision setting, team motivation, leading by example." },
  { name: "Community Building", icon: Users, level: 90, color: "#06b6d4", desc: "Growing and nurturing communities from scratch." },
  { name: "Content Creation", icon: PenTool, level: 80, color: "#f59e0b", desc: "Writing, visual storytelling, digital content strategy." },
  { name: "Public Speaking", icon: Mic2, level: 75, color: "#ec4899", desc: "Confident presentations, pitching, audience engagement." },
  { name: "Finance & Investing", icon: TrendingUp, level: 70, color: "#10b981", desc: "Markets, valuation, personal and corporate finance." },
  { name: "Digital Marketing", icon: Megaphone, level: 72, color: "#f97316", desc: "Social media, growth hacking, brand building online." },
  { name: "Networking", icon: Network, level: 88, color: "#6366f1", desc: "Building authentic professional relationships that last." },
  { name: "Problem Solving", icon: Brain, level: 82, color: "#14b8a6", desc: "First-principles thinking, creative solutions, analysis." },
  { name: "Team Management", icon: MessageSquare, level: 76, color: "#a855f7", desc: "Coordination, delegation, fostering collaboration." },
];

function SkillBar({ skill, i }: { skill: typeof skills[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="glass glass-hover rounded-2xl p-6 group cursor-default transition-all duration-300"
      whileHover={{ y: -4, borderColor: `${skill.color}40` }}
    >
      {/* Icon + name */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
        >
          <skill.icon size={18} style={{ color: skill.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="font-semibold text-white text-sm truncate">{skill.name}</h3>
            <span className="text-xs font-mono ml-2 flex-shrink-0" style={{ color: skill.color }}>
              {skill.level}%
            </span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">{skill.desc}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: i * 0.05 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        label="Capabilities"
        title="Skills"
        subtitle="A growing stack of skills spanning business, leadership, and digital domains."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} i={i} />
        ))}
      </div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-600 text-xs font-mono mt-8"
      >
        * Levels reflect current proficiency and grow with every project, course, and experience.
      </motion.p>
    </SectionWrapper>
  );
}
