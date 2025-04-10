"use client";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import StandardInput from "./StandardInput";
import { localFontSize } from "@/utils/themes";
import CustomButton from "./CustomButton";
export default function ContactUsFrom() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{
        padding: {
          xs: " 40px 20px",
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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", sm: "30px", md: "40px", lg: "40px", xl: "80px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "348px", md: "499px", lg: "517px" },
            maxWidth: { md: "400px", lg: "530px", xl: "600px" },
            width: "100%",
          }}
        >
          <iframe
            style={{ height: "100%", width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76130.2389396486!2d-1.5818554603242845!3d53.395688287712964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C%20UK!5e0!3m2!1sen!2s!4v1744275140990!5m2!1sen!2s"
            width="600"
            height="450"
          ></iframe>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "12px", md: "22px" },
            }}
          >
            <StandardInput inputType="text" label="Full Name" />
            <StandardInput inputType="email" label="Email Address" />
            <StandardInput inputType="number" label="Phone Number" />
            <FormControl fullWidth>
              <InputLabel
                id="dropdown-label"
                sx={{
                  left: "8px",
                  color: "#00000080",
                  fontSize: localFontSize.p1,
                  "&.Mui-focused": {
                    color: "#00000080",
                  },
                }}
              >
                select driving lesson package
              </InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{
                  borderRadius: "34px",
                  height: "60px",
                  color: "#00000080",
                  fontSize: localFontSize.p1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00000080",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00000080",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#192227",
                  },
                  "& .MuiSelect-select": {
                    padding: "0 16px",
                  },
                }}
              >
                <MenuItem value={10}>select driving lesson package</MenuItem>
                <MenuItem value={20}>select driving lesson package</MenuItem>
                <MenuItem value={30}>select driving lesson package</MenuItem>
              </Select>
            </FormControl>
            <StandardInput rows={6} inputType="text" label="Message" />
          </Box>
          <CustomButton
            btnText="Send"
            sx={{ width: "140px", marginTop: { xs: "30px", md: "45px" } }}
          />
        </Box>
      </Box>
    </Box>
  );
}
