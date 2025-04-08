import svgs from "@/_assets/svgs";
import { localFontSize } from "@/utils/themes";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
export default function NewLocation() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(./bgNewLocation.png)",
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        minHeight: "500px",
        padding: {
          xs: "40px 20px",
          sm: "60px 40px",
          md: "80px 60px",
          lg: "100px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: "30px", sm: "40px", lg: "80px" },
          maxWidth: "1536px",
          width: "100%",
          position: "relative",
          zIndex: "10",
          margin: "auto",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box sx={{ maxWidth: { xs: "380px", sm: "600px", md: "800px" } }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "600",
              fontSize: localFontSize.h2,
            }}
          >
            New Location Offer: 10% Off Lessons!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              marginTop: { xs: "15px", md: "40px" },
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1.13px solid #ffffff",
              color: "#ffffff",
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 400,
              padding: { xs: "8px 15px", md: "10px 20px" },
              fontSize: localFontSize.p1,
              "&:hover": {
                borderColor: "#ffffff",
                backgroundColor: "#FF00000A",
              },
            }}
          >
            Learn More{" "}
            <Image
              style={{ width: "15px" }}
              src={svgs.whiteArrow}
              alt="arrow"
            />
          </Button>
        </Box>
        <Box
          sx={{
            height: { xs: "360px", xl: "455px" },
            maxWidth: { md: "440px", xl: "620px" },
            width: "100%",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213721.6821786791!2d-1.8112425815985083!3d53.39531057021047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C%20UK!5e1!3m2!1sen!2s!4v1744105708905!5m2!1sen!2s"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>

      {/* dark overlay  */}
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          bgcolor: "#19222780",
        }}
      ></Box>
    </Box>
  );
}
