"use client";
import React from "react";
import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import svgs from "@/_assets/svgs";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const getColor = (route: string) =>
    pathname === route ? "#FF191F" : "#FFFFFF80";

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
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: { xs: "40px", md: "0px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            onClick={() => router.push("/")}
            sx={{
              maxWidth: "405px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: "100%",
                "& :first-child": {
                  display: { xs: "block", sm: "inline" },
                  margin: { xs: "auto", sm: "unset" },
                },
              }}
            >
              <Image src={svgs.logoblack} alt="logo" height={78} width={208} />
            </Box>
            <Typography
              sx={{
                fontSize: localFontSize.p1,
                fontWeight: "400",
                color: "rgba(255,255,255,0.5)",
                marginTop: "20px",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              When you choose “Pro Drive Academy” you can be sure you’re in safe
              hands. We provide top quality driving tuition
            </Typography>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "flex-start" },
              maxWidth: "152px",
              width: "100%",
              gap: { xs: "20px", sm: "40px" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column" },
                gap: "15px",
                "& > *": {
                  cursor: "pointer",
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  // color: "rgba(255,255,255,0.5)",
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    color: "#fff",
                  },
                },
              }}
            >
              <Typography
                sx={{ color: getColor("/") }}
                onClick={() => router.push("/")}
              >
                Home
              </Typography>
              <Typography
                sx={{ color: getColor("/about-us") }}
                onClick={() => router.push("/about-us")}
              >
                About
              </Typography>
              <Typography
                sx={{ color: getColor("/areas") }}
                onClick={() => router.push("/areas")}
              >
                Area
              </Typography>
              <Typography
                sx={{ color: getColor("/plans") }}
                onClick={() => router.push("/plans")}
              >
                plans
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column" },
                gap: "15px",
                "& > *": {
                  cursor: "pointer",
                  fontWeight: "400",
                  fontSize: localFontSize.p1,
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    color: "#fff",
                  },
                },
              }}
            >
              <Typography
                sx={{ color: getColor("/story") }}
                onClick={() => router.push("/story")}
              >
                Story
              </Typography>
              <Typography
                sx={{ color: getColor("/gallery") }}
                onClick={() => router.push("/gallery")}
              >
                Gallery
              </Typography>
              <Typography
                sx={{ color: getColor("/reviews") }}
                onClick={() => router.push("/reviews")}
              >
                Review
              </Typography>
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
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
                justifyContent: { xs: "center", sm: "unset" },
                gap: "30px",
                marginTop: { xs: "20px", md: "40px" },
                "& > *": {
                  cursor: "pointer",
                },
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
          "& a": {
            fontSize: "inherit",
            fontWeight: "400",
            color: "#fff",
            textDecoration: "none",
            transition: "all 0.4s ease-in-out",
            "&:hover": {
              color: "#FF191F",
            },
          },
        }}
      >
        Copyright © 2024 Pro Drive Academy. All Rights Reserved.{" "}
        <Link
          href="https://www.qashnova.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By Qashnova
        </Link>
      </Typography>
    </Box>
  );
}
