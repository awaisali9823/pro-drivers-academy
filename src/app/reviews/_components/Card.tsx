import svgs from "@/_assets/svgs";
import { localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ReviewProps = {
  imgSrc: string | StaticImageData;
  name: string;
  desc: string;
};

export default function Card({ imgSrc, name, desc }: ReviewProps) {
  return (
    <Box>
      <Box
        sx={{
          background: "rgba(25,34,39,1)",
          maxWidth: { xs: "600px", xl: "700px" },
          width: "100%",
          borderRadius: "22px",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image src={imgSrc} alt={name} height={49} width={49} />
          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: localFontSize.p1,
                color: "#fff",
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={svgs.rstar} alt="rstar" height={20} width={20} />
              <Image src={svgs.rstar} alt="rstar" height={20} width={20} />
              <Image src={svgs.rstar} alt="rstar" height={20} width={20} />
              <Image src={svgs.rstar} alt="rstar" height={20} width={20} />
              <Image src={svgs.wstar} alt="wstar" height={20} width={20} />
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: localFontSize.p1,
            color: "rgba(255,255,255,0.5)",
            marginTop: "15px",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
