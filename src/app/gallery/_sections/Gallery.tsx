import pngs from "@/_assets/pngs";
import { localFontSize } from "@/utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const imgData = [
  pngs.image1,
  pngs.image2,
  pngs.image3,
  pngs.image4,
  pngs.image5,
  pngs.image6,
  pngs.image7,
  pngs.image8,
  pngs.image9,
  pngs.image10,
  pngs.image11,
  pngs.image12,
];

export default function Gallery() {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "60px 40px",
          md: "80px 60px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Box>
          <Typography
            sx={{
              maxWidth: "706px",
              width: "100%",
              margin: "auto",
              fontSize: localFontSize.p1,
              fontWeight: "400",
              textAlign: "center",
              color: "rgba(25, 34, 39, 0.5)",
            }}
          >
            Explore moments from our driving lessons, success stories, and road
            adventures. See how our students master the road with expert
            guidance
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: { xs: "30px", sm: "50px" },
          }}
        >
          {imgData.map((item, i) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ maxWidth: "280px", width: "100%", height: "280px" }}>
                <Image
                  src={item}
                  alt="image"
                  objectFit="contain"
                  style={{ width: "inherit", height: "inherit" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
