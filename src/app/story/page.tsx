import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs/index";
import Navbar from "@/_components/Navbar";

export default function Story() {
  const CardData = [
    {
      image: pngs.storycardImage1,
      heading: "MASSIVE Congrats And Well Done to Afsah",
    },
    {
      image: pngs.storycardImage2,
      heading: "Congrats and well done to Kiran",
    },
    {
      image: pngs.storycardImage3,
      heading: "Congrats and Well Done to Ben Gosney",
    },
  ];
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: "auto",
          maxWidth: "1536px",
          height: "auto",
          width: "100%",
          padding: {
            xs: "40px 12px",
            sm: "20px 60px",
            md: "20px 80px",
            lg: "20px 100px",
          },
          fontFamily: "Poppins",
        }}>
        <Box
          sx={{
            maxwidth: { xs: 361, sm: 600, md: "1240px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            sx={{
              maxWidth: { xs: 361, sm: 600, md: "808px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Poppins",
            }}>
            <Typography
              sx={{
                maxWidth: { xs: 361, md: "526px" },
                // maxWidth: "",
                padding: { lg: localFontSize.p2 },
                fontWeight: "700",
                fontSize: localFontSize.h2,
                lineHeight: { xs: "40px", md: "60px" },
                letterSpacing: "0%",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#192227",
              }}>
              Real journey, real success!
            </Typography>
            <Typography
              sx={{
                maxWidth: { xs: 361, sm: 500, md: "750px" },

                fontWeight: "400",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: "25px",
                letterSpacing: "0%",
                textAlign: "center",
                // textTransform: "capitalize",
                color: "#19222780",
                padding: {
                  xs: "18px 0px",
                  sm: "24px",
                },
              }}>
              Take the first step towards driving independence with expert
              guidance and hands-on training. At Pro Drive Academy, we turn
              learners into confident, skilled drivers.
            </Typography>
          </Box>
          {/* ------------------------------------------------------ */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1240px",
              // width: "1240px",
              fontFamily: "Poppins",
              padding: { lg: "25px 0" },
              display: "flex",
              flexWrap: { xs: "wrap", lg: "nowrap" },
              justifyContent: {
                xs: "center",
                sm: "center",
                // md: "space-between",
              },
              alignItems: "center",
              gap: { xs: "20px", md: "40px" },
            }}>
            {CardData.map((items, index) => {
              return (
                <div key={index}>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "361px", sm: "400px", md: "393px" },

                      fontFamily: "Poppins",
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: { xs: "center", sm: "center" },
                      alignItems: { xs: "center", sm: "center" },
                    }}>
                    <Image
                      src={items.image}
                      alt="Story card"
                      style={{
                        borderRadius: "30px",
                        maxWidth: "393px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "23px", md: "19px", lg: "24px" },
                        padding: "20px 10px 10px 0",
                        // maxWidth: { xs: "361px", sm: 600, md: 381 },
                        fontWeight: "600",
                        lineHeight: "35px",
                        wordSpacing: "2px",
                        // letterSpacing: "2",
                        // textTransform: "uppercase",
                        color: "#192227",
                      }}>
                      {items.heading}
                    </Typography>
                    <Typography
                      sx={{
                        padding: {
                          xs: "10px 2px",
                          md: "10px 10px 10px 0",
                        },
                        width: "100%",
                        maxWidth: { xs: "361px", sm: 600, md: 381 },
                        fontWeight: "400",
                        fontSize: { xs: "14px", sm: "16px", md: "17px" },
                        lineHeight: "25px",
                        letterSpacing: "0%",

                        color: "#19222780",
                      }}>
                      ANOTHER 1st TIME PASS!!! 2nd PASS OF THE WEEK!!! MASSIVE
                      Congrats And Well Done to Afsah in passing your Driving
                      Test today with Instructor Ryla!
                    </Typography>
                  </Box>
                </div>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
