import svgs from "@/_assets/svgs";
import { localFontSize } from "@/utils/themes";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#192227",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "60px 40px",
            md: "80px 60px",
            lg: "100px 100px 60px",
            xl: "100px 100px 60px",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "1536px",
            width: "100%",
            margin: "auto",
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "space-between",
            //   alignItems: { xs: "center", md: "flex-start" },
            alignItems: "flex-start",
            gap: { xs: "30px", md: "0px" },
          }}
        >
          <Box
            sx={{
              maxWidth: "405px",
              width: "100%",
            }}
          >
            <Image src={svgs.logoblack} alt="logo" height={78} width={208} />
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                fontWeight: "400",
                color: "rgba(255,255,255,0.5)",
                marginTop: "20px",
              }}
            >
              When you choose “Pro Drive Academy” you can be sure you’re in safe
              hands. We provide top quality driving tuition
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              maxWidth: "152px",
              width: "100%",
              gap: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Area
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Price
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Story
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Gallery
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Review
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "190px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Image src={svgs.callred} alt="call" height={30} width={30} />
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  color: "#fff",
                }}
              >
                +447790366705
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: { xs: "20px", md: "40px" },
              }}
            >
              <Image
                src={svgs.facebook}
                alt="facebook"
                height={50}
                width={50}
              />
              <Image
                src={svgs.instagram}
                alt="instagram"
                height={50}
                width={50}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{ width: "100%", borderTop: "2px solid rgba(255, 255, 255, 0.2)" }}
      />
      <Typography
        sx={{
          maxWidth: "746px",
          width: "100%",
          margin: "auto",
          fontSize: localFontSize.p1,
          fontWeight: "400",
          color: "rgba(255, 255, 255, 0.5)",
          padding: { xs: "30px 20px", md: "30px 0px" },
          textAlign: { xs: "center" },
        }}
      >
        Copyright © 2024 Pro Drive Academy. All Rights Reserved.{" "}
        <span
          style={{
            fontSize: "inherit",
            fontWeight: "400",
            color: "#fff",
          }}
        >
          Powered By Qashnova
        </span>
      </Typography>
    </Box>
  );
}
