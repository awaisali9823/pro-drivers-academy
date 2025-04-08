import { localFontSize } from "@/utils/themes";
import { Box, Typography } from "@mui/material";

const statsData = [
  { highlight: "22+", line1: "Test", line2: "Passers" },
  { highlight: "40+", line1: "Experienced", line2: "Instructors" },
  { highlight: "2.5k+", line1: "Driving", line2: "Learners" },
  { highlight: "15+", line1: "Years", line2: "Experience" },
];

export default function StatsBanner() {
  return (
    <Box
      sx={{
        padding: {
          xs: "30px",
          sm: "40px 40px",
          md: "40px 60px",
          lg: "60px 100px",
        },
        backgroundColor: "#192227",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          rowGap: "50px",
          columnGap: "30px",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          maxWidth: "1536px",
          margin: "auto",
        }}
      >
        {statsData.map((stat, index) => (
          <StatItem
            key={index}
            highlight={stat.highlight}
            line1={stat.line1}
            line2={stat.line2}
          />
        ))}
      </Box>
    </Box>
  );
}

type StatItemProps = {
  highlight: string;
  line1: string;
  line2: string;
};

function StatItem({ highlight, line1, line2 }: StatItemProps) {
  return (
    <Box sx={{ display: "flex", gap: { xs: "20px", sm: "15px", md: "22px" } }}>
      <Typography
        sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: localFontSize.h3 }}
      >
        {highlight}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          "& > *": {
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: localFontSize.p1,
          },
        }}
      >
        <Typography>{line1}</Typography>
        <Typography>{line2}</Typography>
      </Box>
    </Box>
  );
}
