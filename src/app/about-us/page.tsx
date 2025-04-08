import Navbar from "@/_components/Navbar";
import Hero from "./_sections/Hero";
import Journey from "./_sections/Journey";
import Instructor from "../../_assets/pngs/instructor.png";
import City from "../../_assets/pngs/city.png";
import Connect from "./_sections/Connect";
import FAQ from "./_sections/FAQ";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="road.png"
        heading="Your Journey Starts Here"
        description="Join Pro Drive Academy, the UK's trusted driving school, and gain the skills you need to drive safely and pass your test with ease."
      />
      <Journey
        heading="The Journey Behind Pro Drive Academy"
        description="At Pro Drive Academy, our journey began with a simple mission – to empower learners with the skills and confidence to drive safely on UK roads. With years of experience, we have helped countless drivers achieve their goals."
        direction="row"
        imgPath={Instructor}
        align="right"
        alt="Instructor"
      />
      <Journey
        heading="Our Commitment to Your Driving Success"
        description="our goal is more than just helping you pass your driving test—we are committed to shaping confident, responsible, and skilled drivers for life. We ensure that every student gains the knowledge and confidence needed to navigate the roads safely."
        direction="row-reverse"
        imgPath={City}
        align="left"
        alt="City"
      />
      <FAQ />
      <Connect />
    </>
  );
}
