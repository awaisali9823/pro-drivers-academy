"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { localFontSize } from "@/utils/themes";

const pricingPlans = [
  {
    duration: "1 Hour Driving Lesson",
    price: "£37",
    features: [
      "DVSA Approved Instructors",
      "No Hidden Charges",
      "High Pass Rate",
      "Friendly Environment",
      "Affordable Price",
    ],
  },
  {
    duration: "1.5 Hours Driving Lesson",
    price: "£55.5",
    features: [
      "DVSA Approved Instructors",
      "No Hidden Charges",
      "High Pass Rate",
      "Friendly Environment",
      "Affordable Price",
    ],
  },
  {
    duration: "2 Hours Driving Lesson",
    price: "£74",
    features: [
      "DVSA Approved Instructors",
      "No Hidden Charges",
      "High Pass Rate",
      "Friendly Environment",
      "Affordable Price",
    ],
  },
];

export default function Manualtab() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        py: 9,
        // px: { xs: 1, md: 2 },
        // border: "1px solid black",
        maxWidth: "1536px",
        width: "100%",
        margin: "auto",
      }}>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "space-evenly",
            lg: "space-around",
          },
          alignItems: "center",
        }}>
        {pricingPlans.map((plan, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{
                width: { lg: "100%" },
                maxWidth: { xs: 300, sm: 380, md: 400, xl: "440px" },
              }}>
              <Card
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  backgroundColor: isHovered ? "#192227" : "#fff",
                  color: isHovered ? "#fff" : "#192227",
                  borderRadius: "20px",
                  height: "100%",
                  boxShadow: "1px 4px 20px 1px rgba(0,0,0,0.11)",
                  border: "1px solid #eee",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  ".MuiCardContent-root": {
                    // padding: "30px",
                  },
                }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      padding: "20px 0",
                      fontWeight: "700",
                      fontSize: localFontSize.h5,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      textTransform: "capitalize",
                      color: isHovered ? "#fff" : "#192227",
                    }}>
                    {plan.duration}
                  </Typography>
                  <ul
                    style={{
                      listStyle: "disc",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",

                      // paddingLeft: "1rem",
                    }}>
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        style={{
                          listStyle: "none",
                        }}>
                        <Box
                          sx={{
                            width: "241px",
                            height: "50px",
                            // padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontFamily: "Poppins",
                            gap: "6px",
                          }}>
                          <Box
                            sx={{
                              width: "8px",
                              height: "8px",
                              marginTop: "-6px",
                              bgcolor: isHovered ? "#fff" : "#192227",
                              borderRadius: "50%",
                              transition: "background-color 0.4s ease",
                            }}></Box>
                          <Typography
                            gutterBottom
                            sx={{
                              padding: "10px 2px",
                              fontSize: localFontSize.p1,
                              fontWeight: "400",

                              lineHeight: "100%",
                              letterSpacing: "0%",
                              textTransform: "capitalize",
                              color: isHovered ? "#fff" : "#192227",
                            }}>
                            {feature}
                          </Typography>
                        </Box>
                      </li>
                    ))}
                  </ul>
                  <Typography
                    padding="20px"
                    variant="h4"
                    fontWeight="bold"
                    color={isHovered ? "#FF191F" : "#FF191F"}
                    sx={{
                      my: 2,
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      fontSize: localFontSize.h1,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}>
                    {plan.price}
                  </Typography>
                  <Button
                    // fullWidth

                    variant="outlined"
                    sx={{
                      maxWidth: "219px",
                      borderColor: isHovered ? "#fff" : "#FF191F",
                      color: isHovered ? "#fff" : "#FF191F",
                      borderRadius: "40px",
                      textTransform: "none",
                      fontSize: localFontSize.p1,
                      fontWeight: "400",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      transition: "all 0.3s ease",
                      padding: "14px 25px ",
                      "&:hover": {
                        backgroundColor: "#192227",
                        color: "#fff",
                        borderColor: "#FF191F",
                      },
                    }}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
