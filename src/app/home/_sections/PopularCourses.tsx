import { localFontSize } from "@/utils/themes";
import { Box, Typography, Grid } from "@mui/material";
import pngs from "@/_assets/pngs";
import PopularCoursesCard from "../_components/PopularCoursesCard";
import React from "react";
import Slider from "react-slick";

export default function PopularCourses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
        }}
      />
    ),
  };
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 10px 60px 10px",
          sm: "60px 40px",
          md: "80px 60px",
          lg: "100px",
        },
      }}
    >
      <Box sx={{ maxWidth: "1536px", margin: "auto" }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "auto",
            paddingBottom: { xs: "40px", md: "80px" },
            paddingX: { xs: "10px", sm: "unset" },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              color: "#192227",
              fontWeight: 700,
            }}
          >
            popular courses
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#19222780",
            }}
          >
            Our driving courses are designed for learners of all levels, from
            beginners to experienced drivers looking to refine their skills.
          </Typography>
        </Box>
        {/* cards not for moble but for the rest of other screens */}
        <Box sx={{ display: { xs: "none", sm: "block" }, width: "100%" }}>
          <Grid
            spacing={3}
            sx={{
              justifyContent: "space-between",
              rowGap: "50px",
            }}
            container
          >
            <Grid
              sx={{ maxWidth: "650px", margin: { xs: "auto", md: "unset" } }}
              size={{ xs: 12, md: 6 }}
            >
              <PopularCoursesCard
                title="Auto & Manual Lessons"
                subtitle="PopularCourses"
                image={pngs.autoAndManual}
              />
            </Grid>
            <Grid
              sx={{ maxWidth: "650px", margin: { xs: "auto", md: "unset" } }}
              size={{ xs: 12, md: 6 }}
            >
              <PopularCoursesCard
                title="Auto & Manual Lessons"
                subtitle="PopularCourses"
                image={pngs.autoAndManual}
              />
            </Grid>
          </Grid>
        </Box>
        {/* slider for mobile screens */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Slider {...settings}>
            <Box
              sx={{
                paddingX: { xs: "10px", sm: "0" },
                width: "100%",
                paddingBottom: { xs: "40px", sm: "0" },
              }}
            >
              <PopularCoursesCard
                title="Auto & Manual Lessons"
                subtitle="We offer automatic and manual lessons at affordable prices."
                image={pngs.autoAndManual}
              />
            </Box>
            <Box
              sx={{
                paddingX: { xs: "10px", sm: "0" },
                width: "100%",
                paddingBottom: { xs: "40px", sm: "0" },
              }}
            >
              <PopularCoursesCard
                title="Theory Test Pro"
                subtitle="Sign-up theory test pro for Free!"
                image={pngs.theoryTest}
              />
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
