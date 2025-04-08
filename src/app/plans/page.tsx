import { Box } from "@mui/material";
import Tab from "./component/Tab";

export default function Plans() {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "1536px",
          height: "auto",
          width: "100%",
          fontFamily: "Poppins",
          padding: {
            xs: "20px",
            sm: "20px 40px",
            md: "20px 60px",
            lg: "20px 100px",
          },
        }}>
        <Box
          sx={{
            maxwidth: { xs: 361, sm: 600, md: 1240 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#ccc",
          }}>
          <Tab />
        </Box>
      </Box>
    </>
  );
}
