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
            style={{ height: "100%", width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38031.31253190809!2d-1.4084517456955838!3d53.43347651241581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790a41d8154027%3A0x5d4fabde0673d601!2sRotherham%2C%20UK!5e0!3m2!1sen!2s!4v1744275051720!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
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
