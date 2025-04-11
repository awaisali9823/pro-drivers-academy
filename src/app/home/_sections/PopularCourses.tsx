import { localFontSize } from "@/utils/themes";
import { Box, Typography, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/pngs";
import CustomButton from "@/_components/CustomButton";

export default function PopularCourses() {
  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "60px 40px",
          md: "80px 60px",
          lg: "100px",
        },
      }}
    >
      <Box sx={{ maxWidth: "1536px", margin: "auto" }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "auto",
            paddingBottom: { xs: "40px", md: "80px" },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              color: "#192227",
              fontWeight: 700,
            }}
          >
            popular courses
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#19222780",
            }}
          >
            Our driving courses are designed for learners of all levels, from
            beginners to experienced drivers looking to refine their skills.
          </Typography>
        </Box>
        <Grid
          spacing={3}
          sx={{ justifyContent: "space-between", rowGap: "50px" }}
          container
        >
          <Grid
            sx={{ maxWidth: "650px", margin: { xs: "auto", md: "unset" } }}
            size={{ xs: 12, md: 6 }}
          >
            <LessonCard
              title="Auto & Manual Lessons"
              subtitle="PopularCourses"
              image={pngs.autoAndManual}
            />
          </Grid>
          <Grid
            sx={{ maxWidth: "650px", margin: { xs: "auto", md: "unset" } }}
            size={{ xs: 12, md: 6 }}
          >
            <LessonCard
              title="Auto & Manual Lessons"
              subtitle="PopularCourses"
              image={pngs.autoAndManual}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

interface LessonCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "650px",
      }}
    >
      <Box
        sx={{
          height: "auto",
          maxWidth: "650px",
          width: "100%",
          aspectRatio: "605 / 466",
          borderRadius: "35px",
          overflow: "hidden",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={image}
          alt={title}
        />
      </Box>
      <Box sx={{ paddingTop: { xs: "30px", md: "40px", xl: "60px" } }}>
        <Box>
          <Typography
            sx={{
              fontSize: localFontSize.h4,
              lineHeight: localFontSize.h4,
              color: "#192227",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              lineHeight: localFontSize.p1,
              color: "#19222780",
              paddingTop: { xs: "12px", md: "15px", xl: "20px" },
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <CustomButton
          btnText="Learn More"
          arrow={true}
          sx={{ marginTop: { xs: "20px", md: "30px", xl: "40px" } }}
        />
      </Box>
    </Box>
  );
};
