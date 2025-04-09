import { localFontSize } from "@/utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../_components/Card";
import pngs from "@/_assets/pngs";

const reviewData = [
  {
    id: 1,
    name: "Lexi James",
    imgSrc: pngs.lexi,
    description:
      "Amazing! I had Naz from beginning to end she was very supportive and patient and passed first time, I 100% highly recommend! Thankyou so much x",
  },
  {
    id: 2,
    name: "Monica Baldwin",
    imgSrc: pngs.monica,
    description:
      "Amazing! I was blessed to have Naz and how She managed to get me to pass first time I'll never know! Honestly the most patient & calmest lady ever, definately the best instructor around. Thanks so much Naz! ",
  },
  {
    id: 3,
    name: "Jordie Stokes",
    imgSrc: pngs.jordie,
    description:
      "Highly recommend pro drive academy! I can’t thank haji enough for helping me get through my lessons and passing first time. He’s a fab instructor and from the start of me being so nervous to now shows he taught me well. He made me feel so comfortable and at ease. Thank you so much! ",
  },
  {
    id: 4,
    name: "Millie Bamforth",
    imgSrc: pngs.millie,
    description:
      "I would 100% recommend Pro Drive Academy! My instructor Naz was so patient and supportive, making learning to drive such an enjoyable experience. She guided me through both my theory and practical test ensuring I was fully prepared. Can’t thank Naz enough for helping me to achieve a first time pass in both!! ",
  },
  {
    id: 5,
    name: "Chloe Armstrong",
    imgSrc: pngs.chloe,
    description:
      "I had Naz as my instructor and I honestly could not have done it without her. Honestly would recommend Pro Drive to anyone wanting to pass both their theory and practical!! We always had a laugh each lesson, I never felt awkward with her, even on my first lesson! Thank you so much again Naz for putting up with me and my worries xx ",
  },
  {
    id: 6,
    name: "Jai Barber",
    imgSrc: pngs.jai,
    description:
      "I found out about Pro Drive Academy through a friend who passed, I got Naz as my instructor and I can say without a doubt she was the best instructor ever! So patient and so thorough in teaching me every aspect of driving and preparing me me for both my theory and practical driving tests. She helped me pass both first time and I know I couldn’t have done it without her, 100% would recommend Naz to anyone wanting to learn to drive!! ",
  },
];

export default function ReviewSection() {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "60px 40px",
          md: "80px 60px",
          lg: "100px 100px",
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
            maxWidth: "700px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: localFontSize.p1,
              color: "rgba(25,34,39,0.5)",
              textAlign: "center",
            }}
          >
            See why learners trust Pro Drive Academy to help them pass their
            driving test with confidence. Read real reviews from our successful
            students
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: "20px", md: "30px", xl: "40px" }}
          sx={{ marginTop: { xs: "30px", md: "80px" } }}
        >
          {reviewData.map((data) => (
            <Grid
              key={data.id}
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                key={data.id}
                imgSrc={data.imgSrc}
                desc={data.description}
                name={data.name}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
