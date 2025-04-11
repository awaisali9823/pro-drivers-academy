import { localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/pngs";

export default function LetsGetStarted() {
  return (
    <Box>
      <Box sx={{ maxWidth: "1536px", margin: "auto" }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: { xs: "450px", sm: "550px", md: "800px" },
            margin: "auto",
            padding: {
              xs: "40px 20px",
              sm: "60px 40px",
              md: "80px 60px",
              lg: "100px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              color: "#192227",
              fontWeight: 700,
            }}
          >
            lets get started
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#19222780",
            }}
          >
            Follow our step-by-step guide to book lessons, pass your test, and
            hit the road with confidence.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#1922270D" }}>
        <Box
          sx={{
            maxWidth: "1000px",
            margin: "auto",
            padding: {
              xs: "40px 20px",
              sm: "60px 40px",
              md: "80px 60px",
              lg: "100px",
            },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", md: "40px", lg: "60px" },
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <InfoCard
              image={pngs.applyForLicense}
              title="1. Apply For License"
              description="Start your journey by applying for your UK driving license with ease."
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <InfoCard
              image={pngs.applyForLicense}
              title="1. Apply For License"
              description="Start your journey by applying for your UK driving license with ease."
              reverseOrder={true}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <InfoCard
              image={pngs.applyForLicense}
              title="1. Apply For License"
              description="Start your journey by applying for your UK driving license with ease."
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <InfoCard
              image={pngs.applyForLicense}
              title="1. Apply For License"
              description="Start your journey by applying for your UK driving license with ease."
              reverseOrder={true}
            />
          </Box>
          {/* bg section by positioned  */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
              maxHeight: "900px",
              zIndex: "-1",
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={pngs.bgLetsGetStarted}
              alt="bgLetsGetStarted"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface InfoCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  reverseOrder?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  image,
  title,
  description,
  reverseOrder = false,
}) => {
  return (
    <>
      <Box
        data-aos={reverseOrder ? "fade-right" : "fade-left"}
        data-aos-duration="500"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "15px", md: "30px" },
          backgroundColor: "#192227",
          // borderRadius: "150px 20px 20px 150px",
          borderRadius: reverseOrder
            ? "30px 150px 150px 30px"
            : "150px 30px 30px 150px",
          width: "100%",
          maxWidth: "620px",
          padding: { xs: "15px", lg: "30px" },
          flexDirection: reverseOrder ? "row-reverse" : "row",
        }}
      >
        <Box sx={{ maxWidth: "190px", maxHeight: "190px", width: "100%" }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={image}
            alt="info-card-image"
          />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: localFontSize.h5,
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: localFontSize.p1,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
