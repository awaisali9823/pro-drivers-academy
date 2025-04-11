"use client";
import React, { useEffect } from "react";
import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import StatsBanner from "./_sections/StatsBanner";
import LetsGetStarted from "./_sections/LetsGetStarted";
import PopularCourses from "./_sections/PopularCourses";
import NewLocation from "./_sections/NewLocation";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import OurProudGraduates from "./_sections/OurProudGraduates";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <HeroHome />
      <StatsBanner />
      <LetsGetStarted />
      <PopularCourses />
      <NewLocation />
      <OurProudGraduates />
      <ContactUs />
      <Footer />
    </>
  );
}
