"use client";
import { localFontSize } from "@/utils/themes";
import { Button } from "@mui/material";

type CustomButtonProps = {
  onClick?: () => void;
};

function CustomButton({ onClick = () => {} }: CustomButtonProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        border: "1.13px solid #FF191F",
        color: "#FF191F",
        borderRadius: "50px",
        textTransform: "none",
        fontWeight: 400,
        padding: "8px 24px",
        fontSize: localFontSize.p1,
        "&:hover": {
          borderColor: "#FF0000",
          backgroundColor: "rgba(255, 0, 0, 0.04)",
        },
      }}
    >
      Contact Us
    </Button>
  );
}

export default CustomButton;
