import React, { useContext } from "react";
import { MovieDataType } from "../../types/types";
import { MovieContext } from "../../context/MovieContext";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

type MovieTrendCard = {
  movie: MovieDataType;
};

export default function MovieTrendCard({ movie }: MovieTrendCard) {
  const { dispatch } = useContext(MovieContext);
  function handleToggleBookmark(id: string) {
    dispatch({ type: "TOGGLED_BOOKMARK", id });
  }
  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          bgcolor="rgba(0,0,0, 0.4)"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius="8px"
        />
        <Stack mt={6} spacing={0} bottom={0} left={0} p={4} position="absolute">
          <Grid container spacing={2}>
            <Grid item>
              <Typography
                fontSize={14}
                color="#e0e0e0"
                aria-label="Year of the movie"
              >
                {movie.year}
              </Typography>
            </Grid>

            <Grid item>
              {movie.category === "Movie" ? (
                <RiMovie2Line color="#fff" />
              ) : (
                <BiCameraMovie color="#fff" />
              )}
            </Grid>
            <Grid item>
              <Typography
                fontSize={14}
                color="#e0e0e0"
                aria-label="Movie category"
              >
                {movie.category}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography fontSize={18} color="#e0e0e0" aria-label="Movie title">
              {movie.title}
            </Typography>
          </Grid>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            padding: "1.6rem",
          }}
        >
          <Box
            sx={{
              //   padding: "1.6rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              backgroundColor: "#000",
              borderRadius: "100%",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? (
              <FaBookmark color="#fff" width={16} height={16} />
            ) : (
              <FaRegBookmark width={16} height={16} color="#fff" />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
