import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { localFontSize } from "@/utils/themes";

type JourneyProps = {
  heading: string;
  description: string;
  direction: string;
  imgPath: StaticImageData | string;
  align: string;
  alt: string;
};

export default function Journey({
  heading,
  description,
  direction,
  imgPath,
  align,
  alt,
}: JourneyProps) {
  return (
    <Box
      sx={{
        padding: {
          xs: align == "right" ? "40px 20px" : "0px 20px",
          sm: align == "right" ? "60px 40px" : "0px 40px",
          md: align == "right" ? "80px 60px" : "0px 60px",
          lg: align == "right" ? "100px 100px" : "0px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: direction },
          alignItems: {
            xs: align == "right" ? "flex-end" : "flex-start",
            md: "center",
          },
          justifyContent: "space-between",
          gap: { xs: "20px", md: "10px" },
        }}
      >
        <Box
          data-aos={align === "right" ? "fade-right" : "fade-left"}
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "650px", xl: "800px" },
            width: "100%",
            height: "auto",
          }}
        >
          <Image
            src={imgPath}
            alt={alt}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box
          data-aos={align === "right" ? "fade-left" : "fade-right"}
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "492px", xl: "600px" },
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: localFontSize.h2,
              color: "#192227",
              textAlign: align,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              float: align,
              fontWeight: "400",
              fontSize: localFontSize.p1,
              color: "rgba(25, 34, 39, 0.5)",
              textAlign: align,
              maxWidth: { xs: "446px", xl: "520px" },
              width: "100%",
              marginTop: "20px",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
