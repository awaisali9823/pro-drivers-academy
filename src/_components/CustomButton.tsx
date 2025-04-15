"use client";
import React from "react";
import { Button, SxProps, Theme, CircularProgress } from "@mui/material";
import { localFontSize } from "@/utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";

type CustomButtonProps = {
  onClick?: () => void;
  btnText: string;
  sx?: SxProps<Theme>;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  arrow?: boolean;
};

function CustomButton({
  onClick = () => {},
  btnText,
  sx,
  loading = false,
  type = "button",
  arrow = false,
}: CustomButtonProps) {
  return (
    <Button
      type={type}
      variant="outlined"
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: "1.13px solid #FF191F",
        color: "#FF191F",
        borderRadius: "50px",
        textTransform: "none",
        fontWeight: 400,
        padding: { xs: "8px 15px", md: "10px 20px" },
        fontSize: localFontSize.p1,
        "&:hover": {
          borderColor: "#FF0000",
          backgroundColor: "rgba(255, 0, 0, 0.04)",
        },
        ...sx,
      }}
    >
      {loading ? (
        <CircularProgress
          size={24}
          color="inherit"
          sx={{ marginRight: "8px" }}
        />
      ) : (
        btnText
      )}
      {arrow && (
        <Image style={{ width: "15px" }} src={svgs.arrow} alt="arrow" />
      )}
    </Button>
  );
}

export default CustomButton;
