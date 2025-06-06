import { Box } from "@mui/material";
import Tab from "@/_components/Tab";
import Manualtab from "../_components/ManualTab";
import AutomaticTab from "../_components/AutomaticTab";

export default function PlansSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          padding: {
            xs: " 20px  20px 0",
            sm: " 40px 40px 0",
            md: " 60px 60px 0",
            lg: " 100px 100px 0 ",
          },
        }}
      >
        <Box
          sx={{
            margin: "auto",
            maxWidth: "1536px",
            height: "auto",
            width: "100%",
            fontFamily: "Poppins",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxwidth: { xs: 300, sm: 600, lg: 1536 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tab
              txt1="Manual"
              txt2="Automatic"
              Component1={<Manualtab />}
              Component2={<AutomaticTab />}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
