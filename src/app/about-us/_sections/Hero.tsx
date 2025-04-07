import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url("/road.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: {
          xs: "20px",
          sm: "20px 60px",
          md: "20px 80px",
          lg: "20px 100px",
        },
        // height: "420px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1060px",
          width: "100%",
          padding: { xs: "30px", sm: "40px 60px", md: "34px 84px" },
          background: "rgba(25, 34, 39, 0.4)",
          backdropFilter: "blur(11.25px)",
          WebkitBackdropFilter: "blur(11.25px)",
          margin: "50px auto",
          borderRadius: "45px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: localFontSize.h1,
            color: "#fff",
            maxWidth: "600px",
            width: "100%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Your Journey Starts Here
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: localFontSize.p2,
            textAlign: "center",
            color: "rgba(255,255,255, 0.5)",
            maxWidth: "900px",
            width: "100%",
            margin: "auto",
          }}
        >
          Join Pro Drive Academy, the UK’s trusted driving school, and gain the
          skills you need to drive safely and pass your test with ease.
        </Typography>
      </Box>
    </Box>
  );
}
