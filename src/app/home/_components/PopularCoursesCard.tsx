import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import CustomButton from "@/_components/CustomButton";
import { localFontSize } from "@/utils/themes";

interface PopularCoursesCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

const PopularCoursesCard: React.FC<PopularCoursesCardProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "650px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "auto",
          maxWidth: "650px",
          width: "100%",
          aspectRatio: "605 / 466",
          borderRadius: "35px",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={image}
          alt={title}
        />
      </Box>
      <Box sx={{ paddingTop: { xs: "30px", md: "40px", xl: "60px" } }}>
        <Box>
          <Typography
            sx={{
              fontSize: localFontSize.h4,
              lineHeight: localFontSize.h4,
              color: "#192227",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              lineHeight: localFontSize.p1,
              color: "#19222780",
              paddingTop: { xs: "12px", md: "15px", xl: "20px" },
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <CustomButton
          btnText="Learn More"
          arrow={true}
          sx={{ marginTop: { xs: "20px", md: "30px", xl: "40px" } }}
        />
      </Box>
    </Box>
  );
};
export default PopularCoursesCard;
