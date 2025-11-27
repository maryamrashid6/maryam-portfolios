import HeroSection from "../HeroSection/heroSection";
import Experience from "../Experience/experience";
import AboutMe from "../AboutMe/aboutMe";
export default function LandingPage() {
  return (
    <div className="flex flex-col gap-10 p-4">
      <HeroSection />
      <Experience />
      <AboutMe/>
    </div>
  );
}
