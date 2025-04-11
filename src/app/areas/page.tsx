import Navbar from "@/_components/Navbar";
import Hero from "../../_components/Hero";
import Footer from "@/_components/Footer";
import AreasSection from "./section/areasSeaction";

export default function Areas() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="bgAreas.png"
        heading="Find Us Near You"
        description="Pro Drive Academy is proudly based in Sheffield, offering lessons across surrounding areas. Check out our location and get started with lessons close to home."
      />

      <AreasSection />
      <Footer />
    </>
  );
}
