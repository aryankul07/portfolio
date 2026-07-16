"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Award, Search, X, Upload, Trophy, Star, BookOpen, Zap } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Certifications", icon: Award, color: "#3b82f6" },
  { value: "3+", label: "Competitions", icon: Trophy, color: "#f59e0b" },
  { value: "10+", label: "Workshops", icon: BookOpen, color: "#8b5cf6" },
  { value: "∞", label: "In Progress", icon: Zap, color: "#06b6d4" },
];

const placeholderCerts = [
  { id: 1, title: "Certificate Name", issuer: "Issuing Organization", date: "2025", category: "Finance", color: "#3b82f6" },
  { id: 2, title: "Certificate Name", issuer: "Issuing Organization", date: "2025", category: "Leadership", color: "#8b5cf6" },
  { id: 3, title: "Omnichannel Marketing Virtual Experience Program", issuer: "Forage", date: "2023", category: "Marketing", color: "#06b6d4", image: "/certificates/forage-marketing.jpg" },
  { id: 4, title: "Certificate Name", issuer: "Issuing Organization", date: "2024", category: "Finance", color: "#f59e0b" },
  { id: 5, title: "Certificate Name", issuer: "Issuing Organization", date: "2024", category: "Technology", color: "#10b981" },
  { id: 6, title: "Certificate Name", issuer: "Issuing Organization", date: "2024", category: "Leadership", color: "#ec4899" },
];

const categories = ["All", "Finance", "Leadership", "Marketing", "Technology"];

export default function AchievementsSection() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof placeholderCerts[0] | null>(null);

  const filtered = placeholderCerts.filter((c) => {
    const matchQuery = c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.issuer.toLowerCase().includes(query.toLowerCase());
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    return matchQuery && matchCat;
  });

  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        label="Recognition"
        title="Achievements"
        subtitle="Certifications, awards, and milestones earned on the journey."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center border border-white/5"
            whileHover={{ borderColor: `${stat.color}40`, y: -4 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
              style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}>
              <stat.icon size={18} style={{ color: stat.color }} />
            </div>
            <div className="text-3xl font-display font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-3 rounded-xl border border-white/10 text-slate-300 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                activeCategory === cat
                  ? "text-white border-blue-500/50"
                  : "text-slate-400 border-white/10 hover:border-white/20"
              }`}
              style={activeCategory === cat ? { background: "rgba(59,130,246,0.15)" } : { background: "rgba(255,255,255,0.03)" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filtered.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelectedCert(cert)}
            className="glass glass-hover rounded-2xl p-6 border border-white/5 cursor-pointer group transition-all"
            whileHover={{ y: -4, borderColor: `${cert.color}40` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                <Award size={22} style={{ color: cert.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono px-2 py-0.5 rounded-md border mb-2 inline-block"
                  style={{ color: cert.color, borderColor: `${cert.color}30`, background: `${cert.color}10` }}>
                  {cert.category}
                </span>
                <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-xs">{cert.issuer}</p>
                <p className="text-slate-600 text-xs mt-1 font-mono">{cert.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass rounded-3xl p-8 max-w-md w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${selectedCert.color}15`, border: `1px solid ${selectedCert.color}30` }}>
                  <Award size={28} style={{ color: selectedCert.color }} />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <X size={16} />
                </button>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded-md border mb-3 inline-block"
                style={{ color: selectedCert.color, borderColor: `${selectedCert.color}30`, background: `${selectedCert.color}10` }}>
                {selectedCert.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-slate-400 text-sm mb-1">{selectedCert.issuer}</p>
              <p className="text-slate-600 text-sm font-mono mb-6">{selectedCert.date}</p>
              {/* Certificate image placeholder */}
              {selectedCert.image ? (
  <Image
    src={selectedCert.image}
    alt={selectedCert.title}
    width={900}
    height={650}
    className="w-full rounded-xl border border-white/10 object-contain"
  />
) : (
  <div
    className="rounded-xl border border-white/10 h-48 flex items-center justify-center"
    style={{ background: "rgba(255,255,255,0.02)" }}
  >
    No certificate image
  </div>
)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
