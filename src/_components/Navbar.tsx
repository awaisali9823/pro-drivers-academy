"use client";
import * as React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import CustomButton from "./CustomButton";
import { localFontSize } from "@/utils/themes";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

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
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1536px",
            margin: "auto",
          }}
        >
          {/* logo box  */}
          <Box sx={{ maxWidth: { xs: "112px ", xl: "140px" }, width: "100%" }}>
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
                "&:hover": {
                  color: "#FF191F",
                },
              },
            }}
          >
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Areas</Typography>
            <Typography>Plans</Typography>
            <Typography>Story</Typography>
            <Typography>Gallery</Typography>
            <Typography>Review</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <CustomButton />
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
          overflow: "hidden",
          transition: "all .5s ease",
          zIndex: "10",
          textWrap: "nowrap",
          padding: isDrawerOpen ? "40px 20px" : "0",
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
          <Typography>Home</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Typography>About</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Typography>Areas</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Typography>Plans</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Typography>Story</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Typography>Gallery</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Typography>Review</Typography>
          <Divider sx={{ border: ".4px solid #fff", width: "100%" }} />
          <Box
            sx={{ margin: "auto", width: "fit-content", paddingTop: "10px" }}
          >
            <CustomButton />
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
