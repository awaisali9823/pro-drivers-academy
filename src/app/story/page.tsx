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
          width: "100%",
          margin: "auto",
          padding: {
            xs: "20px 20px",
            sm: "20px 40px",
            md: "20px 60px",
            lg: "30px 100px",
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
              maxwidth: { xs: 361, sm: 600, md: "1536px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}>
            <Box
              sx={{
                maxWidth: { xs: 361, sm: 600, md: "808px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins",
                gap: 5,
              }}>
              <Typography
                sx={{
                  maxWidth: { xs: 361, md: "526px" },

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
                  fontSize: localFontSize.p1,
                  lineHeight: "25px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#19222780",
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
                maxWidth: "1536px",
                fontFamily: "Poppins",
                display: "flex",
                flexWrap: { xs: "wrap", lg: "nowrap" },
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  lg: "space-between",
                },
                alignItems: "start",
                gap: 4,
              }}>
              {CardData.map((items, index) => {
                return (
                  <div key={index}>
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: {
                          xs: "361px",
                          sm: "400px",
                          md: "350px",
                          lg: "390px",
                        },

                        fontFamily: "Poppins",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        gap: 3,
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
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: {
                            xs: "310px",
                            sm: "350px",
                            md: "320px",
                            lg: "350px",
                          },

                          fontFamily: "Poppins",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: {
                            xs: "start",

                            md: "start",
                          },
                          gap: 3,
                        }}>
                        {" "}
                        <Typography
                          sx={{
                            fontSize: localFontSize.h5,
                            fontWeight: "600",
                            lineHeight: "35px",
                            wordSpacing: "2px",

                            color: "#192227",
                          }}>
                          {items.heading}
                        </Typography>
                        <Typography
                          sx={{
                            width: "100%",
                            maxWidth: { xs: "361px", sm: 600, md: 381 },
                            fontWeight: "400",
                            fontSize: localFontSize.p1,
                            lineHeight: "25px",
                            letterSpacing: "0%",

                            color: "#19222780",
                          }}>
                          ANOTHER 1st TIME PASS!!! 2nd PASS OF THE WEEK!!!
                          MASSIVE Congrats And Well Done to Afsah in passing
                          your Driving Test today with Instructor Ryla!
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
