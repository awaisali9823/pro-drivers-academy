import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { localFontSize } from "@/utils/themes";

type ContactProps = {
  imgPath: StaticImageData | string;
  alt: string;
  heading: string;
  timing: string;
  contact: string;
};

export default function ContactBox({
  imgPath,
  alt,
  heading,
  timing,
  contact,
}: ContactProps) {
  return (
    <Box
      sx={{
        maxWidth: { xs: "600px", xl: "700px" },
        width: "100%",
        padding: "30px",
        borderRadius: "22.5px",
        background: "rgba(25,34,39,1)",
      }}
    >
      <Image src={imgPath} alt={alt} height={56} width={56} />
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: localFontSize.h5,
          color: "#fff",
          marginTop: { xs: "20px", md: "30px" },
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: localFontSize.p1,
          color: "#fff",
        }}
      >
        {timing}
      </Typography>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: localFontSize.p1,
          color: "#fff",
          textDecoration: "underline",
          marginTop: { xs: "20px", md: "30px" },
        }}
      >
        {contact}
      </Typography>
    </Box>
  );
}
