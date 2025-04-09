import Hero from "@/_components/Hero";
import Navbar from "@/_components/Navbar";
import ReviewSection from "./_sections/ReviewSection";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="reviewbg.png"
        heading="Hear From Our Happy Drivers"
        description="Don’t just take our word for it! Explore reviews from our successful learners and see how we’ve helped them achieve their driving goals."
      />
      <ReviewSection />
    </>
  );
}
