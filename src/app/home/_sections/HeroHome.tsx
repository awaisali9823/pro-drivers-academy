"use client";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import { localFontSize } from "@/utils/themes";
import CustomButton from "@/_components/CustomButton";
import svgs from "@/_assets/svgs";

export default function HomePage() {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 20px 40px 20px",
          sm: "0 60px 60px 0",
          lg: " 0 100px 80px 0",
          xl: "0 100px 80px 100px",
        },
      }}
    >
      <Grid
        sx={{
          maxWidth: "1536px",
          margin: "auto",
          alignItems: "flex-start",
          rowGap: "30px",
        }}
        container
      >
        <Grid
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{ justifyContent: { xs: "center", sm: "unset" } }}
          size={{ xs: 12, md: 6 }}
        >
          {/* desktop or tab image  */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              maxWidth: { xs: "480px", md: "680px" },
              width: "100%",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={pngs.heroHome}
              alt="heroHome"
            />
          </Box>
          {/* mobile image */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              position: "relative",
              maxWidth: { xs: "480px", md: "680px" },
              width: "100%",
              margin: "auto",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={pngs.heroHomeMobile}
              alt="heroHome"
            />
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-duration="500"
          sx={{
            padding: {
              xs: "0px 0 0 0px",
              sm: "0px 0",
              md: "20px 0",
              lg: "20px 0",
              xl: "20px 0px",
            },
            width: "100%",
          }}
          size={{ xs: 12, md: 6 }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "right" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-end" },
              maxWidth: {
                xs: "320px",
                sm: "400px",
                lg: "535px",
              },
              float: { sm: "right" },
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h1,
                fontWeight: "700",
                color: "#192227",
              }}
            >
              Drive with Confidence - Start Learning Today!
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                color: "#19222780",
              }}
            >
              Join Pro Drive Academy, the UK’s trusted driving school, and gain
              the skills you need to drive safely and pass your test with ease.
              With expert instructors, flexible lessons, and modern vehicles, we
              make learning to drive simple and stress-free.
            </Typography>
            <Box
              sx={{
                padding: {
                  xs: "20px 0 32px 0",
                  sm: "30px 0 45px 0",
                  xl: "45px 0 70px 0",
                },
              }}
            >
              <CustomButton btnText="Get Started" />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                "& :nth-child(2)": {
                  display: { xs: "none", sm: "block" },
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Image style={{ width: "25px" }} src={svgs.star} alt="star" />
                <Image style={{ width: "25px" }} src={svgs.star} alt="star" />
                <Image style={{ width: "25px" }} src={svgs.star} alt="star" />
                <Image style={{ width: "25px" }} src={svgs.star} alt="star" />
                <Image
                  style={{ width: "25px" }}
                  src={svgs.halfStar}
                  alt="star"
                />
              </Box>
              <hr
                style={{
                  width: "4px",
                  height: "12px",
                  border: "2px solid #19222780",
                }}
              />
              <Typography
                sx={{
                  fontSize: localFontSize.p1,
                  color: "#19222780",
                  textWrap: "nowrap",
                }}
              >
                Google Review Rating
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
