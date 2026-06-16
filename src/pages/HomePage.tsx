import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Partners from "../components/Partners/Partners";
import AboutSection from "../components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <Partners />
    </main>
  );
}
