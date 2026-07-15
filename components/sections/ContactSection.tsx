"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiErrorResponse {
  ok: false;
  error: string;
  fields?: Record<string, string>;
}

interface ApiSuccessResponse {
  ok: true;
  emailId: string;
}

type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

// ─── Static data ──────────────────────────────────────────────────────────────

const info = [
  { icon: Mail, label: "Email", value: "aryankulshreshtha9@gmail.com", href: "mailto:aryankulshreshtha9@gmail.com", color: "#3b82f6" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX", color: "#8b5cf6" },
  { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India", href: "#", color: "#06b6d4" },
];

const EMPTY_FORM: FormData = { name: "", email: "", subject: "", message: "" };

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  // ── Client-side validation (mirrors backend rules) ──────────────────────────

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};

    if (!formData.name.trim()) {
      e.name = "Name is required.";
    } else if (formData.name.trim().length > 100) {
      e.name = "Name must be under 100 characters.";
    }

    if (!formData.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter a valid email.";
    }

    if (formData.subject.trim().length > 200) {
      e.subject = "Subject must be under 200 characters.";
    }

    if (!formData.message.trim()) {
      e.message = "Message is required.";
    } else if (formData.message.trim().length > 5000) {
      e.message = "Message must be under 5000 characters.";
    }

    return e;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous server error
    setServerError("");

    // Run client-side validation first
    const clientErrors = validate();
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json: ApiResponse = await res.json();

      if (!res.ok || !json.ok) {
        const errJson = json as ApiErrorResponse;

        // If the API returned field-level errors, surface them
        if (errJson.fields && Object.keys(errJson.fields).length > 0) {
          setErrors(errJson.fields);
        }

        // Always show the server's human-readable error message
        setServerError(
          errJson.error ||
            "Something went wrong. Please try again or email me directly."
        );

        setStatus("error");
        return;
      }

      // Success
      setStatus("success");
      setFormData(EMPTY_FORM);
      setErrors({});
      setServerError("");
    } catch (err) {
      // Network failure or JSON parse error
      console.error("[ContactSection] Fetch failed:", err);
      setServerError(
        "Unable to reach the server. Check your connection and try again, or email me directly at aryankulshreshtha9@gmail.com."
      );
      setStatus("error");
    }
  };

  // ── Field helper ────────────────────────────────────────────────────────────

  const setField = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear individual field error as the user types
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    // Clear server error when user starts correcting
    if (serverError) setServerError("");
    // Reset status from error so the form doesn't stay locked
    if (status === "error") setStatus("idle");
  };

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        label="Get In Touch"
        title="Contact Me"
        subtitle="Have an opportunity, idea, or just want to connect? My inbox is always open."
      />

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

        {/* ── Info column ──────────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-4">
          {info.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 group transition-all"
              whileHover={{ borderColor: `${item.color}40`, y: -2 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 border border-blue-500/20"
          >
            <h3 className="font-semibold text-white mb-2 text-sm">Open To</h3>
            <div className="space-y-2">
              {[
                "Internship opportunities",
                "Collaborative projects",
                "Mentorship conversations",
                "Speaking engagements",
                "Community partnerships",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-400 text-xs"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Form ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            {/* Decorative background glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
              }}
            />

            <AnimatePresence mode="wait">
              {/* ── Success state ──────────────────────────────────────────── */}
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.3)",
                    }}
                  >
                    <CheckCircle size={32} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                /* ── Form state ──────────────────────────────────────────── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                  noValidate
                >
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(
                      [
                        {
                          key: "name" as const,
                          label: "Your Name",
                          placeholder: "Aryan Kulshreshtha",
                          type: "text",
                          autoComplete: "name",
                        },
                        {
                          key: "email" as const,
                          label: "Email Address",
                          placeholder: "you@example.com",
                          type: "email",
                          autoComplete: "email",
                        },
                      ] as const
                    ).map((field) => (
                      <div key={field.key}>
                        <label className="text-xs text-slate-500 mb-1.5 block font-mono">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          autoComplete={field.autoComplete}
                          value={formData[field.key]}
                          onChange={(e) => setField(field.key, e.target.value)}
                          disabled={status === "loading"}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-300 placeholder-slate-600 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            errors[field.key]
                              ? "border-red-500/50 focus:border-red-400"
                              : "border-white/10 focus:border-blue-500/50"
                          }`}
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            backdropFilter: "blur(10px)",
                          }}
                        />
                        {errors[field.key] && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={10} />
                            {errors[field.key]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs text-slate-500 mb-1.5 block font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={(e) => setField("subject", e.target.value)}
                      disabled={status === "loading"}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-300 placeholder-slate-600 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.subject
                          ? "border-red-500/50 focus:border-red-400"
                          : "border-white/10 focus:border-blue-500/50"
                      }`}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(10px)",
                      }}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={10} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-slate-500 mb-1.5 block font-mono">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or idea..."
                      value={formData.message}
                      onChange={(e) => setField("message", e.target.value)}
                      disabled={status === "loading"}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-300 placeholder-slate-600 focus:outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.message
                          ? "border-red-500/50"
                          : "border-white/10 focus:border-blue-500/50"
                      }`}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(10px)",
                      }}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={10} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Server-level error banner */}
                  <AnimatePresence>
                    {serverError && (
                      <motion.div
                        key="server-error"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-2.5 px-4 py-3 rounded-xl border border-red-500/30 text-red-400 text-sm"
                        style={{ background: "rgba(239,68,68,0.06)" }}
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle
                          size={15}
                          className="flex-shrink-0 mt-0.5"
                        />
                        <span>{serverError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button — unchanged animations */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    }}
                    whileHover={
                      status !== "loading"
                        ? { scale: 1.01, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }
                        : {}
                    }
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  >
                    {status === "loading" ? (
                      <>
                        <motion.div
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
