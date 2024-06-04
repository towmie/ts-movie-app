import { MovieDataType } from "../../types/types";
import { MovieContext } from "../../context/MovieContext";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

type MovieCardProps = {
  movie: MovieDataType;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const { dispatch } = useContext(MovieContext);
  function handleToggleBookmark(id: string) {
    dispatch({ type: "TOGGLED_BOOKMARK", id });
  }
  return (
    <Card
      sx={{
        bgcolor: "transparent",
        color: "#e0e0e0",
        my: 3,
        border: "none",
      }}
    >
      <CardContent sx={{ padding: "10px", position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              style={{ width: "100%", borderRadius: "8px" }}
            />
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
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
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
              <Typography
                fontSize={18}
                color="#e0e0e0"
                aria-label="Movie title"
              >
                {movie.title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
