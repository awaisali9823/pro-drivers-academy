"use client";
import React, { useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import CustomButton from "./CustomButton";
import { localFontSize } from "@/utils/themes";
import { useRouter, usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const getColor = (route: string) =>
    pathname === route ? "#FF191F" : "#19222780";

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const navLinks = [
    { text: "home", route: "/" },
    { text: "about", route: "/about-us" },
    { text: "areas", route: "/areas" },
    { text: "plans", route: "/plans" },
    { text: "story", route: "/story" },
    { text: "gallery", route: "/gallery" },
    { text: "review", route: "/reviews" },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: {
            xs: "20px",
            sm: "20px 40px",
            md: "20px 60px",
            lg: "20px 100px",
          },
        }}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1536px",
            width: "100%",
            margin: "auto",
          }}
        >
          {/* logo box  */}
          <Box
            onClick={() => router.push("/")}
            sx={{
              maxWidth: { xs: "130px ", md: "150px", xl: "200px" },
              width: "100%",
              cursor: "pointer",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={svgs.logoWhite}
              alt="lologoWhitego"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: "20px", md: "25px" },
              "& > *": {
                color: "#19222780",
                fontSize: localFontSize.p1,
                transition: "all 0.4s ease-in-out",
                cursor: "pointer",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#FF191F",
                },
              },
            }}
          >
            {navLinks.map((link, index) => (
              <Typography
                key={index}
                onClick={() => router.push(link.route)}
                style={{ cursor: "pointer", color: getColor(link.route) }}
              >
                {link.text}
              </Typography>
            ))}
          </Box>
          <Box
            onClick={() => router.push("/contact-us")}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <CustomButton btnText="Contact Us" />
          </Box>
          <Box
            onClick={() => toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" },
              "& > *": {
                width: {
                  xs: "30px",
                  sm: "34px",
                },
              },
            }}
          >
            <Image
              style={{ height: "100%", objectFit: "contain" }}
              src={svgs.hamburger}
              alt="hamburger"
            />
          </Box>
        </Box>
      </Box>
      {/* Drawer Navigation */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: isDrawerOpen ? { xs: "200px", sm: "300px" } : "0",
          backgroundColor: "#0D0D0D",
          color: "white",
          transition: "all .5s ease",
          zIndex: "10",
          textWrap: "nowrap",
          padding: "40px 20px",
          transform: isDrawerOpen ? "translateX(0)" : "translateX(200px)",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <Image
            onClick={() => toggleDrawer(false)}
            style={{
              height: "auto",
              width: "25px",
              cursor: "pointer",
            }}
            src={svgs.cross}
            alt="hamburger"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingTop: "30px",
            gap: { xs: "10px", md: "12px" },
            "& > Typography": {
              color: "#fff",
              fontSize: localFontSize.p1,
              cursor: "pointer",
              "&:hover": {
                color: "#FF191F",
              },
            },
          }}
        >
          {navLinks.map((link, i) => (
            <React.Fragment key={i}>
              <Typography
                onClick={() => {
                  toggleDrawer(false);
                  router.push(link.route);
                }}
                sx={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                  color: pathname === link.route ? "#FF191F" : "#ffffff",
                }}
              >
                {link.text}
              </Typography>
              <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
            </React.Fragment>
          ))}
          <Box
            onClick={() => router.push("/contact-us")}
            sx={{ margin: "auto", width: "fit-content", paddingTop: "10px" }}
          >
            <CustomButton btnText="Contact Us" />
          </Box>
        </Box>
      </Box>
      {/* Backdrop */}
      {isDrawerOpen && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
}
