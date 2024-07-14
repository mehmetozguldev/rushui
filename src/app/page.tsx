import { GlassCard } from "@/components/glass/GlassCard";
import { Header } from "@/components/header/Header";
import { GlassShowcase } from "@/components/hero/GlassShowcase";
import { HeroSection } from "@/components/hero/HeroSection";
import Image from "next/image";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <main className="mesh-gradient">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}
