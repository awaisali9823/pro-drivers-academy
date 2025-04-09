import Hero from "@/_components/Hero";
import Navbar from "@/_components/Navbar";
import React from "react";
import Gallery from "./_sections/Gallery";
import Footer from "@/_components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="gallerybg.png"
        heading="On the Road with Pro Drive"
        description="Explore moments from our driving lessons, happy students, and success stories. See what learning with Pro Drive Academy looks like, behind the wheel and beyond"
      />
      <Gallery />
      <Footer />
    </>
  );
}
