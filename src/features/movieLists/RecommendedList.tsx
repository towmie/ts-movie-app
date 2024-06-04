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
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {recommendedList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
}
