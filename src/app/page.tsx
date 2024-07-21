import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/button/Button";

export default function Home() {
  return (
    <main className="mesh-gradient">
      <Header />
      <HeroSection />
      <section className="mx-auto bg-white">
        <div className="container mx-auto py-32 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-8 items-start align-middle justify-start">
            <h2 className="text-6xl font-semibold">
              Create a beautiful website
            </h2>
            <p className="font-light text-lg tracking-wide w-2/3">
              Use rush/ui components to easily create any page you want. You can
              customize, extend and create your own components with ease using
              rush/ui components.
            </p>
            <Button size="lg">Explore components</Button>
          </div>
          {/* <Image src="#" width={500} height={500} alt={"rush/ui"} /> */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
