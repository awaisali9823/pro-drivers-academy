"use client";
import { Box, Grid, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import pngs from "@/_assets/pngs/index";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/app/reviews/_components/Card";
import Image from "next/image";

export default function Stories() {
  const reviewData = [
    {
      id: 1,
      name: "James Carter",
      imgSrc: pngs.james,
      text:"University Student",
      description:
        "Pro Drive Academy made learning to drive so easy! My instructor was patient and supportive, and I passed my test on the first try. Highly recommend!",
    },
    {
      id: 2,
      name: "Jordie Stokes",
      imgSrc: pngs.sophie,
        text:"University Student",
      description:
        "I was nervous about driving, but the structured lessons and expert guidance gave me confidence. Now, I feel safe and in control on the road!",
    },
    {
      id: 3,
      name: "Monica Baldwin",
      imgSrc: pngs.james,
        text:"University Student",
      description:
        "Pro Drive Academy made learning to drive so easy! My instructor was patient and supportive, and I passed my test on the first try. Highly recommend!",
    },
    {
      id: 3,
      name: "Jordie Stokes",
      imgSrc: pngs.sophie,
        text:"University Student",
      description:
        "I was nervous about driving, but the structured lessons and expert guidance gave me confidence. Now, I feel safe and in control on the road!",
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
          slidesToShow:1, // Show 1 slide at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
         rows:2,
        // vertical: true, // makes slider vertical
        verticalSwiping: true, 
        
        },
      },
    ],
  };

  return (
    <>
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          width: "100%",
          maxWidth: "1560px",
          margin: "auto",
          pt: { xs: 4, sm: 6, md: 9 },
        }}
      >
        <Box
          sx={{
            margin: "auto",
            maxWidth: "1560px",
            height: "auto",
            width: "100%",
            fontFamily: "Poppins",
          }}
        >
          <Box
            sx={{
              maxwidth: "1560px",
              width: "100%",
              display: "flex",
              flexWrap: { xs: "wrap", lg: "nowrap" },
              flexDirection: "row",
              justifyContent: { sm: "center", lg: "space-between" },
              alignItems: { xs: "start", sm: "center", lg: "start" },
              gap: { xs: 4, sm: 6, md: 3 },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "395px", sm: "900", lg: "395" },
                width: "100%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: { xs: "center", lg: "start" },
                fontFamily: "Poppins",
                gap: { xs: 2, md: 3 },
              }}
            >
              <Typography
                sx={{
                  // maxWidth: { xs: 361, sm: "800", lg: "392px" },
                  width: "100%",
                  fontWeight: "700",
                  fontSize: localFontSize.h2,
                  lineHeight: { xs: "40px", md: "60px" },
                  letterSpacing: "0%",
                  textAlign: { xs: "center", lg: "start" },
                  textTransform: "capitalize",
                  color: "#192227",
                }}
              >
                Clients success stories
              </Typography>
              <Typography
                sx={{
                  // maxWidth: { xs: 361, sm: "800", lg: "392px" },

                  width: "100%",
                  fontWeight: "400",
                  fontSize: localFontSize.p2,
                  lineHeight: "25px",
                  letterSpacing: "0%",
                  textAlign: { xs: "center", lg: "start" },

                  color: "#19222780",
                }}
              >
                Hear from our students who mastered the road with Pro Drive Academy. Real stories, real success – your journey starts here!
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: { lg: 700, xl: "808px" },
                fontFamily: "Poppins",
                display: "flex",
                flexWrap: { xs: "wrap", lg: "nowrap" },
                justifyContent: {
                  xs: "space-between",
                },

                alignItems: "start",
                gap: 3,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Slider {...settings}>
                  {reviewData.map((data, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: { xs: 1.5 }, // horizontal space between slides (e.g. 12px)
                        // boxSizing: "border-box",
                      }}
                    >
                      <Box
                        key={data.id}
                        sx={{
                          maxWidth: {
                            xs: "100%",
                            sm: "400px",
                            md: 500,
                            lg: "395px",
                          },
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          textAlign:"left"
                        }}
                      >

                        <Box>
                                            <Box
                                              sx={{
                                                background: "rgba(25,34,39,1)",
                                                maxWidth: { xs: "600px", xl: "745px" },
                                                width: "100%",
                                                borderRadius: "22px",
                                                padding: "30px",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  gap: "10px",
                                                }}
                                              >
                                                <Image src={data.imgSrc} alt={data.name} height={49} width={49} />
                                                <Box>
                                                  <Typography
                                                    sx={{
                                                      fontWeight: "600",
                                                      fontSize: localFontSize.p1,
                                                      color: "#fff",
                                                    }}
                                                  >
                                                    {data.name}
                                                  </Typography>
                                                  <Box
                                                    sx={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                    }}
                                              >
                                                    <Typography
                                                    sx={{
                                                      fontWeight: "400",
                                                      fontSize:"11px",
                                                      color: "#fff",
                                                    }}
                                                  >
                                                    {data.text}
                                                  </Typography>

                                                  </Box>
                                                </Box>
                                              </Box>
                                              <Typography
                                                sx={{
                                                  fontWeight: "400",
                                                  fontSize: localFontSize.p1,
                                                  color: "rgba(255,255,255,0.5)",
                                                  marginTop: "15px",
                                                }}
                                              >     
                                                {data.description}
                                              </Typography>
                                            </Box>
                                          </Box>
                       
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
