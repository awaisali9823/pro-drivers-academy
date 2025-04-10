import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import StatsBanner from "./_sections/StatsBanner";
import LetsGetStarted from "./_sections/LetsGetStarted";
import PopularCourses from "./_sections/PopularCourses";
import NewLocation from "./_sections/NewLocation";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <StatsBanner />
      <LetsGetStarted />
      <PopularCourses />
      <NewLocation />
      <ContactUs />
      <Footer />
    </>
  );
}
