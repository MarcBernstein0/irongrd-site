import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import NewsSection from "../components/NewsSection/NewsSection";
import Partners from "../components/Partners/Partners";
import QuickLinks from "../components/QuickLinks/QuickLinks";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <QuickLinks />
      <NewsSection />
      <Partners />
    </main>
  );
}
