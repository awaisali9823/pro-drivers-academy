import Hero from "../../_components/Hero";
import Navbar from "@/_components/Navbar";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import PlansSection from "./section/plans";

export default function Plans() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="bgPlans.png"
        heading="Driving Lessons That Fit Your Life"
        description="Explore our flexible plans designed for new drivers, busy schedules, and fast-track learners. Start when you're ready, learn at your speed."
      />
      <PlansSection />
      <ContactUs />
      <Footer />
    </>
  );
}
