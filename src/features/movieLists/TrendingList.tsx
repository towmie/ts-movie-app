import { Box, Grid, Paper } from "@mui/material";
import MovieTrendCard from "./MovieTrendCard";
import { MovieDataType } from "../../types/types";

type TrendingListProps = {
  trendingList: MovieDataType[];
};

export default function TrendingList({ trendingList }: TrendingListProps) {
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
}
