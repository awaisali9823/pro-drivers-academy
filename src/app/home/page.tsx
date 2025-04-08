import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import StatsBanner from "./_sections/StatsBanner";
import PopularCourses from "./_sections/PopularCourses";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <StatsBanner />
      <PopularCourses />
    </>
  );
}
