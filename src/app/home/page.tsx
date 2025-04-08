import Navbar from "@/_components/Navbar";
import HeroHome from "./_sections/HeroHome";
import StatsBanner from "./_sections/StatsBanner";
import PopularCourses from "./_sections/PopularCourses";
import NewLocation from "./_sections/NewLocation";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroHome />
      <StatsBanner />
      <PopularCourses />
      <NewLocation />
    </>
  );
}
