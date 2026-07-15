"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, BarChart3, Globe, Rocket, Heart, Handshake } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const impactStats = [
  { value: "30+", label: "Members", icon: Users, color: "#3b82f6" },
  { value: "0", label: "Events Hosted", icon: Globe, color: "#8b5cf6" },
  { value: "5+", label: "Cities Reached", icon: BarChart3, color: "#06b6d4" },
  { value: "2026", label: "Founded", icon: Rocket, color: "#f59e0b" },
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Learn",
    description: "Curated workshops, talks, and knowledge-sharing sessions led by peers and industry experts.",
    color: "#3b82f6",
  },
  {
    icon: Handshake,
    title: "Connect",
    description: "Networking events, collaboration spaces, and communities where ambition meets opportunity.",
    color: "#8b5cf6",
  },
  {
    icon: Rocket,
    title: "Build",
    description: "Hackathons, startup sprints, and project showcases that turn ideas into reality.",
    color: "#06b6d4",
  },
  {
    icon: Heart,
    title: "Give Back",
    description: "Mentorship programs and initiatives that uplift the broader youth community.",
    color: "#10b981",
  },
];

export default function CommunitySection() {
  return (
    <SectionWrapper id="community">
      <SectionTitle
        label="Leadership"
        title="Community Impact"
        subtitle="Co-founding a youth-led movement built on learning, collaboration, and shared ambition."
      />

      {/* Featured org card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 border border-white/10 mb-8 relative overflow-hidden"
      >
        {/* BG accent */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl border border-blue-500/30 flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(59,130,246,0.08)" }}>
              <Users size={36} className="text-blue-400" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="px-3 py-1 text-xs font-mono rounded-md border border-green-500/30 text-green-400"
                  style={{ background: "rgba(16,185,129,0.08)" }}>
                  Co-Founder
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md border border-blue-500/30 text-blue-400"
                  style={{ background: "rgba(59,130,246,0.08)" }}>
                  Youth Organization
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md border border-purple-500/30 text-purple-400"
                  style={{ background: "rgba(139,92,246,0.08)" }}>
                  Active
                </span>
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-2">
                Indian Youth Circle
              </h3>
              <p className="text-blue-400 font-semibold mb-4">
                Formerly Truthed For Young
              </p>

              <p className="text-slate-400 leading-relaxed max-w-2xl">
                A youth-based community co-founded by Aryan Kulshreshtha dedicated to empowering 
                young minds through knowledge, networks, and opportunities. We believe the next 
                generation of leaders isn't waiting to be discovered — we're building them right now.
              </p>
            </div>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/5">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}>
                  <stat.icon size={18} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-display font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-blue-500/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target size={20} className="text-blue-400" />
            <h3 className="font-display font-bold text-white">Mission</h3>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm">
            To create an ecosystem where ambitious youth can access learning, mentorship, and 
            collaboration — regardless of background — and emerge as confident, skilled leaders 
            ready to shape the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-purple-500/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb size={20} className="text-purple-400" />
            <h3 className="font-display font-bold text-white">Vision</h3>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm">
            A world where every young person has the community, tools, and opportunities they 
            need to build something meaningful — and the confidence to believe they can do it.
          </p>
        </motion.div>
      </div>

      {/* Community pillars */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-6 text-center group cursor-default"
            whileHover={{ y: -4 }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
              style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}>
              <pillar.icon size={22} style={{ color: pillar.color }} />
            </div>
            <h3 className="font-display font-semibold text-white mb-2">{pillar.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
