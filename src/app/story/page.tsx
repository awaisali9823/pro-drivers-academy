import Navbar from "@/_components/Navbar";
import Hero from "../../_components/Hero";
import Footer from "@/_components/Footer";
import StorySection from "./section/story";

export default function Story() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="bgStory.png"
        heading="Driving Lessons That Fit Your Life"
        description="Explore our flexible plans designed for new drivers, busy schedules, and fast-track learners. Start when you're ready, learn at your speed."
      />
      <StorySection />
      <Footer />
    </>
  );
}
