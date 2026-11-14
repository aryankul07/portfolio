"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import ParticleBackground from "@/components/ui/ParticleBackground";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const EducationSection = dynamic(() => import("@/components/sections/EducationSection"));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"));
const AchievementsSection = dynamic(() => import("@/components/sections/AchievementsSection"));
const CommunitySection = dynamic(() => import("@/components/sections/CommunitySection"));
const InterestsSection = dynamic(() => import("@/components/sections/InterestsSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const SocialSection = dynamic(() => import("@/components/sections/SocialSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative min-h-screen bg-[#020817] overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <CommunitySection />
      <InterestsSection />
      <ProjectsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
