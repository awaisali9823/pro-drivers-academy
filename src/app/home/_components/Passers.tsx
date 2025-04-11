"use client";
import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import Image from "next/image";
import pngs from "@/_assets/pngs/index";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Passers() {
  const imageData = [
    {
      image: pngs.ourProundGimg1,
    },
    {
      image: pngs.ourProundGimg1,
    },
    {
      image: pngs.ourProundGimg1,
    },
    {
      image: pngs.ourProundGimg1,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1560px",
          margin: "auto",
          pt: { xs: 4, sm: 6, md: 9 },
        }}>
        <Box
          sx={{
            margin: "auto",
            maxWidth: "1560px",
            height: "auto",
            width: "100%",
            fontFamily: "Poppins",
          }}>
          <Box
            sx={{
              maxwidth: { xs: 361, sm: 600, md: "1560px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 4, sm: 6, md: 8 },
            }}>
            <Box
              sx={{
                maxWidth: { xs: 361, sm: 600, md: "808px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins",
                gap: { xs: 2, md: 5 },
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
                Our Proud Graduates{" "}
              </Typography>
              <Typography
                sx={{
                  maxWidth: { xs: 361, sm: 500, md: "628px" },

                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  lineHeight: "25px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#19222780",
                }}>
                Meet the learners who have successfully earned their driving
                licenses with Pro Drive Academy. You could be next on the road
                to success!
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "1560px",
                fontFamily: "Poppins",
                display: "flex",
                flexWrap: { xs: "wrap", lg: "nowrap" },
                justifyContent: {
                  xs: "space-between",
                },
                alignItems: "start",
                gap: 3,
              }}>
              <Box sx={{ width: "100%" }}>
                <Slider {...settings}>
                  {imageData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: { sm: 1.5 }, // horizontal space between slides (e.g. 12px)
                        boxSizing: "border-box",
                      }}>
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: {
                            xs: "750px",
                          },
                        }}>
                        <Image
                          src={item.image}
                          alt={`Graduate ${index + 1}`}
                          style={{
                            borderRadius: "30px",
                            // maxWidth: "650px",
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
