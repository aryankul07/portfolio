"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const highlights = [
  { icon: BookOpen, label: "BBA(Hons) Program", value: "Business Administration" },
  { icon: Calendar, label: "Expected Graduation", value: "2028" },
  { icon: MapPin, label: "Campus", value: "Bengaluru, Karnataka" },
  { icon: Star, label: "Focus Area", value: "Finance & Entrepreneurship" },
];

const coursework = [
  "Business Management", "Financial Accounting", "Marketing Management",
  "Organizational Behaviour", "Business Economics", "Entrepreneurship",
  "Corporate Finance", "Strategic Management", "Leadership Development",
];

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionTitle
        label="Academic Journey"
        title="Education"
        subtitle="Building the intellectual foundation for a career in business and entrepreneurship."
      />

      <div className="max-w-4xl mx-auto">
        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group"
          whileHover={{ borderColor: "rgba(59,130,246,0.3)" }}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-2xl border border-blue-500/30 flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(59,130,246,0.08)" }}>
                <GraduationCap size={36} className="text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 text-xs rounded-md font-mono text-blue-400 border border-blue-500/30"
                    style={{ background: "rgba(59,130,246,0.08)" }}>
                    Current
                  </span>
                  <span className="text-slate-500 text-xs font-mono">2026 — 2030</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-1">
                  Bachelor of Business Administration (Hons.)
                </h3>
                <p className="text-xl gradient-text font-semibold">
                  T.A. Pai Management Institute (TAPMI) · Bengaluru
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 border border-white/5 text-center"
                >
                  <h.icon size={18} className="text-blue-400 mx-auto mb-2" />
                  <div className="text-xs text-slate-500 mb-1">{h.label}</div>
                  <div className="text-sm font-semibold text-white">{h.value}</div>
                </motion.div>
              ))}
            </div>

            {/* About TAPMI */}
            <div className="mb-10">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">About TAPMI</h4>
              <p className="text-slate-400 leading-relaxed">
                T.A. Pai Management Institute is one of India's premier management institutions, 
                ranked consistently among the top business schools. Known for its rigorous academic 
                curriculum and industry-oriented approach, TAPMI cultivates the next generation of 
                business leaders and entrepreneurs.
              </p>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Key Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-xs rounded-lg border border-white/10 text-slate-400 font-mono hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ambitions quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm italic">
            "Education is not just what you learn — it's who you become in the process."
          </p>
          <span className="text-slate-600 text-xs mt-1 block">— My Philosophy</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
