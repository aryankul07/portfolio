"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Plus, ArrowRight } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const projects = [
  {
    title: "Project Alpha",
    description: "Your flagship project. Replace with real description — what problem does it solve? Who does it help?",
    tags: ["Business", "Finance", "Strategy"],
    color: "#3b82f6",
    status: "Live",
    emoji: "🚀",
  },
  {
    title: "Community Platform",
    description: "A platform or initiative built for the community you co-founded. Add details here.",
    tags: ["Community", "Leadership", "EdTech"],
    color: "#8b5cf6",
    status: "In Progress",
    emoji: "🤝",
  },
  {
    title: "Content Series",
    description: "A content series or newsletter about entrepreneurship, finance, or business strategy.",
    tags: ["Content", "Finance", "Marketing"],
    color: "#06b6d4",
    status: "Ongoing",
    emoji: "✍️",
  },
  {
    title: "Research Project",
    description: "Academic or self-driven research on a market, industry, or business phenomenon.",
    tags: ["Research", "Analysis", "Finance"],
    color: "#f59e0b",
    status: "Upcoming",
    emoji: "📊",
  },
  {
    title: "Startup Concept",
    description: "An early-stage startup idea you're exploring — market, model, and opportunity.",
    tags: ["Startup", "Entrepreneurship", "Innovation"],
    color: "#10b981",
    status: "Ideation",
    emoji: "💡",
  },
  {
    title: "Your Next Project",
    description: "Something big is always in the works. Stay tuned.",
    tags: ["TBD"],
    color: "#ec4899",
    status: "Coming Soon",
    emoji: "⚡",
  },
];

const statusColors: Record<string, string> = {
  "Live": "#10b981",
  "In Progress": "#3b82f6",
  "Ongoing": "#8b5cf6",
  "Upcoming": "#f59e0b",
  "Ideation": "#06b6d4",
  "Coming Soon": "#ec4899",
};

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="Portfolio"
        title="Projects"
        subtitle="Ideas in motion — from early concepts to real-world initiatives."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl overflow-hidden group cursor-default border border-white/5 flex flex-col"
            whileHover={{ y: -6, borderColor: `${project.color}40` }}
          >
            {/* Image placeholder */}
            <div
              className="h-44 relative flex items-center justify-center overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {project.emoji}
              </span>
              <div className="absolute inset-0"
                style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}10, transparent 70%)` }} />
              {/* Status badge */}
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-mono font-semibold"
                style={{
                  background: `${statusColors[project.status]}15`,
                  border: `1px solid ${statusColors[project.status]}40`,
                  color: statusColors[project.status],
                }}>
                {project.status}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono border border-white/10 text-slate-500"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-white/5">
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <ExternalLink size={12} />
                  Live Demo
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Github size={12} />
                  GitHub
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming soon note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group"
        >
          Have a project idea? Let's collaborate
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
