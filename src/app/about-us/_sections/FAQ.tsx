"use client";
import { localFontSize } from "@/utils/themes";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

const accordionData = [
  {
    title: "Are weekend lessons available?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "Would you help me with my theory test?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "What if I need to cancel my lesson?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "Do I need experience before my first lesson?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "When I go for a driving lesson, are all insurances covered?",
    content: "Data which we want to enter in the field",
  },
  {
    title:
      "What is pass plus and how can I benefit from it? Also when can I do it?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "How do I pay for lessons?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "How can I book earlier date for car practical driving test?",
    content: "Data which we want to enter in the field",
  },
  {
    title: "What will I need to bring to my first lesson?",
    content: "Data which we want to enter in the field",
  },
];

interface AccordionItem {
  title: string;
  content: string;
}

interface ImmigrationSupportProps {
  data?: AccordionItem[];
}

export default function FAQ({ data }: ImmigrationSupportProps) {
  const accordionsToRender = data && data.length > 0 ? data : accordionData;
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleAccordionChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "40px 40px",
          md: "50px 60px",
          lg: "80px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            maxWidth: "614px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: localFontSize.h2,
              textAlign: "center",
              color: "#192227",
            }}
          >
            Pro Drive Academy FAQs
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: localFontSize.p1,
              color: "rgba(25, 34, 39, 0.5)",
              textAlign: "center",
              marginTop: { xs: "15px", md: "30px" },
            }}
          >
            Get clear answers to your questions about lessons, tests, pricing,
            and more. We&apos;re here to help you every step of the way!
          </Typography>
        </Box>
        <Grid
          sx={{
            // paddingRight: { xl: "50px" },
            marginTop: { xs: "40px", md: "80px" },
          }}
          size={{
            xs: 12,
            md: 6,
            xl: 7,
          }}
          //   item
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: { xs: "1150px", xl: "1536px" },
              width: "100%",
              rowGap: "15px",
              margin: "auto",
            }}
          >
            {accordionsToRender.map((item, index) => (
              <Accordion
                data-aos="zoom-in"
                data-aos-duration="500"
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleAccordionChange(`panel${index}`)}
                sx={{
                  background: "rgba(25, 34, 39, 0.05)",
                  boxShadow: "none",
                  borderRadius: "20px !important",
                  padding: { xs: "10px", md: "20px" },
                  "&::before": {
                    display: "none",
                    content: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === `panel${index}` ? (
                      <Typography
                        sx={{
                          background: "#ff191f",
                          height: { xs: "17px", md: "34px" },
                          width: { xs: "17px", md: "34px" },
                          borderRadius: "50%",
                          fontSize: { xs: "17px", md: "34px" },
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        -
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          background: "red",
                          height: { xs: "17px", md: "34px" },
                          width: { xs: "17px", md: "34px" },
                          borderRadius: "50%",
                          fontSize: { xs: "17px", md: "34px" },
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        +
                      </Typography>
                    )
                  }
                  sx={{
                    color: "rgba(25, 34, 39, 1)",
                    fontWeight: "600",
                    fontSize: localFontSize.p1,
                    // lineHeight: localFontSize.h4,
                    paddingX: "0",
                    borderRadius: "0",
                  }}
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails sx={{ paddingX: "0" }}>
                  <Typography
                    sx={{ color: "#00000080", fontSize: localFontSize.p2 }}
                  >
                    {item.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
