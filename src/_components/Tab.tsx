"use client";
import React, { useState, memo } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { localFontSize } from "@/utils/themes";
type TabProps = {
  txt1: string;
  txt2: string;

  Component1: React.ReactNode; // ✅ was React.FC
  Component2: React.ReactNode;
};

function LegalServicesTabs({ txt1, txt2, Component1, Component2 }: TabProps) {
  const [selectedTab, setSelectedTab] = useState("Manual");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { lg: "1320px", xl: "1536px" },
        width: "100%",
        margin: "auto",

        background: "#ffffff",
      }}>
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",

          textAlign: "center",
        }}>
        {/* tab */}
        <ToggleButtonGroup
          data-aos="zoom-in"
          data-aos-duration="500"
          value={selectedTab}
          exclusive
          onChange={handleChange}
          sx={{
            boxShadow: "5px 5px 5px 1px #00000026",
            backgroundColor: "#ffffff",
            borderRadius: "40px",
            padding: "10px",
            display: "inline-flex",
            gap: "20px",
          }}>
          <ToggleButton
            value="Manual"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              fontSize: localFontSize.p1,
              fontWeight: "500",
              fontFamily: "Poppins",
              padding: "10px 20px",
              border: "none",
              borderRadius: "40px !important",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#FF191F !important",
                color: "#ffffff !important",
              },
              "&:hover": {
                backgroundColor: "#FF191F !important",
                color: "#ffffff !important",
              },
            }}>
            {txt1}
          </ToggleButton>

          <ToggleButton
            value="Automatic"
            sx={{
              backgroundColor: "#ffffff",
              color: "#192227",
              fontSize: localFontSize.p1,
              fontFamily: "Poppins",
              fontWeight: "500",
              padding: "10px 20px",
              border: "none",
              borderRadius: "40px !important",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#FF191F !important",
                color: "#ffffff !important",
              },
              "&:hover": {
                backgroundColor: "#FF191F !important",
                color: "#ffffff !important",
              },
            }}>
            {txt2}
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Tab Content */}
        <Box
          sx={{
            marginTop: "30px",
            margin: "auto",
          }}>
          {selectedTab === "Manual" ? (
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Poppins",
                color: "#192227",
                fontWeight: 500,
                width: "100%",
              }}>
              {Component1}
            </Typography>
          ) : (
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Poppins",
                // color: "#074592",
                fontWeight: 500,
              }}>
              {Component2}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(LegalServicesTabs);
