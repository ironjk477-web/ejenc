import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Stats from "@/components/Stats";
import Logos from "@/components/Logos";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectsCarousel />
      <Stats />
      <Logos />
      <CTA />
    </>
  );
}
