"use client";
import { localFontSize } from "@/utils/themes";
import { Button, SxProps, Theme } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

type CustomButtonProps = {
  onClick?: () => void;
  btnText: string;
  sx?: SxProps<Theme>;
  arrow?: boolean;
};

function CustomButton({
  onClick = () => {},
  btnText,
  sx,
  arrow = false,
}: CustomButtonProps) {
  return (
    <Button
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
      {btnText}{" "}
      {arrow && (
        <Image style={{ width: "15px" }} src={svgs.arrow} alt="arrow" />
      )}
    </Button>
  );
}

export default CustomButton;
