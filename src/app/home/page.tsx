import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import StatsBanner from "./_sections/StatsBanner";
import PopularCourses from "./_sections/PopularCourses";
import NewLocation from "./_sections/NewLocation";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import Tab from "@/_components/Tab";
import Manualtab from "../plans/_components/ManualTab";
import AutomaticTab from "../plans/_components/AutomaticTab";
import OurProudGraduates from "./_sections/OurProudGraduates";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <StatsBanner />
      <PopularCourses />
      <NewLocation />
      <OurProudGraduates />
      <ContactUs />
      <Footer />
    </>
  );
}
