import { localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import React from "react";
import Call from "../_assets/svgs/call.svg";
import Mail from "../_assets/svgs/mail.svg";
import Image, { StaticImageData } from "next/image";
import ContactUsFrom from "./ContactUsFrom";

export default function ContactUs() {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "40px 20px 0 20px",
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
              Let&apos;s Connect – <br /> We&apos;re Here to Help!
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
              alignItems: { xs: "center", md: "initial" },
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

      <Box>
        <ContactUsFrom />
      </Box>
    </>
  );
}

type ContactProps = {
  imgPath: StaticImageData | string;
  alt: string;
  heading: string;
  timing: string;
  contact: string;
};

export function ContactBox({
  imgPath,
  alt,
  heading,
  timing,
  contact,
}: ContactProps) {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        maxWidth: { xs: "600px", xl: "700px" },
        width: "100%",
        padding: "30px",
        borderRadius: "22.5px",
        background: "rgba(25,34,39,1)",
      }}
    >
      <Image src={imgPath} alt={alt} height={56} width={56} />
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: localFontSize.h5,
          color: "#fff",
          marginTop: { xs: "20px", md: "30px" },
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: localFontSize.p1,
          color: "#fff",
        }}
      >
        {timing}
      </Typography>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: localFontSize.p1,
          color: "#fff",
          textDecoration: "underline",
          marginTop: { xs: "20px", md: "30px" },
        }}
      >
        {contact}
      </Typography>
    </Box>
  );
}
