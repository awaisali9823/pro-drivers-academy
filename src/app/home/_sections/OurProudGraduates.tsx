import { Box } from "@mui/material";
import Tab from "@/_components/Tab";
// import AutomaticTab from "../_components/AutomaticTab";
import Passers from "../_components/Passers";
import Stories from "../_components/Stories";

export default function OurProudGraduates() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          padding: {
            xs: "20px 20px ",
            sm: "40px 40px ",
            md: "60px 60px 0",
            lg: "100px 100px 0",
          },
        }}>
        <Box
          sx={{
            margin: "auto",
            maxWidth: "1536px",
            height: "auto",
            width: "100%",
            fontFamily: "Poppins",
          }}>
          <Box
            sx={{
              width: "100%",
              maxwidth: { xs: 300, sm: 600, lg: 1536 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}>
            <Tab
              txt1="Passers"
              txt2="Stories"
              Component1={<Passers />}
              Component2={<Stories />}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
