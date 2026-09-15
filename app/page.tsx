import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import About from "@/components/home/About";
import Work from "@/components/home/Work";
import Skills from "@/components/home/Skills";
import Approach from "@/components/home/Approach";
import Journey from "@/components/home/Journey";
import Currently from "@/components/home/Currently";
import Philosophy from "@/components/home/Philosophy";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Work />
      <Skills />
      <Approach />
      <Journey />
      <Currently />
      <Philosophy />
      <Contact />
    </>
  );
}
