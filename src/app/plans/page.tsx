import { Box } from "@mui/material";
import Hero from "../../_components/Hero";
import Tab from "./component/Tab";
import Navbar from "@/_components/Navbar";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";

export default function Plans() {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="bgPlans.png"
        heading="Driving Lessons That Fit Your Life"
        description="Explore our flexible plans designed for new drivers, busy schedules, and fast-track learners. Start when you're ready, learn at your speed."
      />
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          padding: { xl: "20px 100px" },
        }}
      >
        <Box
          sx={{
            margin: "auto",
            maxWidth: "1536px",
            height: "auto",
            width: "100%",
            fontFamily: "Poppins",
            padding: {
              xs: "20px 20px",
              sm: "20px 40px",
              md: "20px 60px",
              lg: "20px 100px",
              xl: "30px 0px ",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxwidth: { xs: 300, sm: 600, lg: 1536 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // bgcolor: "#ccc",
            }}
          >
            <Tab />
          </Box>
        </Box>
      </Box>
      <ContactUs />
      <Footer />
    </>
  );
}
