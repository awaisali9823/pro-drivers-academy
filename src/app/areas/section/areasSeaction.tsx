import { Box, Typography } from "@mui/material";

import { localFontSize } from "@/utils/themes";

export default function AreasSection() {
  const AreasdataOflocation = [
    {
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53382.493371610566!2d-1.4084517456955838!3d53.43347651241581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790a41d8154027%3A0x5d4fabde0673d601!2sRotherham%2C%20UK!5e1!3m2!1sen!2s!4v1744105596561!5m2!1sen!2s",
      text: "Rotherham",
    },
    {
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213721.6821786791!2d-1.8112425815985083!3d53.39531057021047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C%20UK!5e1!3m2!1sen!2s!4v1744105708905!5m2!1sen!2s",
      text: "Sheffield",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          padding: {
            xs: " 20px",
            sm: " 40px",
            md: " 60px",
            lg: " 100px",
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
              gap: 8,
            }}>
            {" "}
            <Typography
              sx={{
                maxWidth: { xs: 361, sm: 500, md: "638px" },

                fontWeight: "400",
                fontSize: localFontSize.p1,
                lineHeight: "30px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#19222780",
              }}>
              We provide expert driving lessons across Rotherham and Sheffield,
              helping learners gain confidence and pass their test with ease.
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: 1536,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "space-between" },

                alignItems: "center",
              }}>
              {AreasdataOflocation.map((items, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "column",
                      maxWidth: {
                        xs: "440px",
                        md: "390px",
                        lg: "500px",
                        xl: "605px",
                      },
                      borderRadius: "30px",
                      gap: 5,

                      boxShadow: "0px 6px 20px rgba(0,0,0,0.05)",
                    }}>
                    <Box
                      sx={{
                        height: { xs: "360px", lg: "466px" },
                        maxWidth: {
                          xs: "440px",
                          md: "500px",
                          lg: "550px",
                          xl: "605px",
                        },
                        width: "100%",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "30px",
                        overflow: "hidden",
                      }}>
                      <iframe
                        src={items.location}
                        style={{
                          border: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "transparent",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: localFontSize.h4,
                          color: "#192227",
                          // py: 3,
                        }}>
                        {items.text}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
