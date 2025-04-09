import { Box } from "@mui/material";
import Tab from "./component/Tab";
import Navbar from "@/_components/Navbar";

export default function Plans() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: "auto",
          maxWidth: "1536px",
          height: "auto",
          width: "100%",
          fontFamily: "Poppins",
          padding: {
            xs: "30px 20px",
            sm: "30px 40px",
            md: "30px 60px",
            lg: "30px 100px",
            xl: "0",
          },
        }}>
        <Box
          sx={{
            width: "100%",
            maxwidth: { xs: 300, sm: 600, lg: 1536 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // bgcolor: "#ccc",
          }}>
          <Tab />
        </Box>
      </Box>
    </>
  );
}
