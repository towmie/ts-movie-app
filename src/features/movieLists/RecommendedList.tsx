import { Box, Grid, Paper } from "@mui/material";

import { MovieDataType } from "../../types/types";
import MovieCard from "./MovieCard";

type TrendingListProps = {
  recommendedList: MovieDataType[];
};

export default function RecommendedList({
  recommendedList,
}: TrendingListProps) {
  return (
    <Box sx={{ display: "flex", overflowX: "scroll", flexWrap: "wrap" }}>
      {recommendedList.map((movie) => (
        <Grid
          item
          key={movie.id}
          sx={{ width: { xs: "100%", md: "50%", lg: "33%" } }}
        >
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
}
