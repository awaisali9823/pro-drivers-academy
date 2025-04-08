import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";

type HeroProps = {
  backgroundImage: string;
  heading: string;
  description: string;
};

export default function Hero({
  backgroundImage,
  heading,
  description,
}: HeroProps) {
  return (
    <Box
      sx={{
        backgroundImage: `url(./${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: {
          xs: "20px",
          sm: "20px 40px",
          md: "20px 60px",
          lg: "20px 100px",
        },
        height: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          // margin: "40px auto",
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
            display: "-webkit-box",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {heading}
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
            display: "-webkit-box",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
