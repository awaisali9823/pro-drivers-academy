import { localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import React from "react";
import ContactBox from "../_components/ContactBox";
import Call from "../../../_assets/svgs/call.svg";
import Mail from "../../../_assets/svgs/mail.svg";

export default function Connect() {
  return (
    <Box
      sx={{
        padding: {
          xs: "20px",
          sm: "20px 40px",
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
        }}
      >
        <Box
          sx={{
            maxWidth: "618px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: localFontSize.h2,
              textAlign: "center",
              color: "#192227",
              maxWidth: "496px",
              width: "100%",
              margin: "auto",
            }}
          >
            Let&apos;s Connect – We&apos;re Here to Help!
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: localFontSize.p1,
              color: "rgba(25, 34, 39, 0.5)",
              textAlign: "center",
              marginTop: { xs: "15px", md: "30px" },
            }}
          >
            Whether you have questions or want to start your driving journey,
            our team is ready to assist. Contact us today and take the first
            step!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "40px" },
            justifyContent: { xs: "center", xl: "space-between" },
            marginTop: { xs: "40px", md: "80px" },
          }}
        >
          <ContactBox
            imgPath={Call}
            heading="Call Us"
            contact="+447790366705"
            alt="call-us"
            timing="Monday to Friday 10am - 4pm"
          />
          <ContactBox
            imgPath={Mail}
            heading="Email Us"
            contact="info@prodriveacademy.com"
            alt="email-us"
            timing="Have a question? We can help you."
          />
        </Box>
      </Box>
    </Box>
  );
}
