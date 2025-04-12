"use client";
import React from "react";
import { Button, SxProps, Theme, CircularProgress } from "@mui/material";
import { localFontSize } from "@/utils/themes";

type CustomButtonProps = {
  onClick?: () => void;
  btnText: string;
  sx?: SxProps<Theme>;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

function CustomButton({
  onClick = () => {},
  btnText,
  sx,
  loading = false,
  type = "button",
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
    </Button>
  );
}

export default CustomButton;
