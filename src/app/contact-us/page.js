import Navbar from "@/_components/Navbar";
import Hero from "../../_components/Hero";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="road.png"
        heading="Your Journey Starts Here"
        description="Join Pro Drive Academy, the UK's trusted driving school, and gain the skills you need to drive safely and pass your test with ease."
      />
      <ContactUs />
      <Footer />
    </>
  );
}
