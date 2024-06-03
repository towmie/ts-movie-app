import { Box } from "@mui/material";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "TV-series",
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    link: "/bookmark",
  },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        color: "#fff",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          xs: "100%",
          lg: 200,
        },
      }}
    >
      Sidebar
    </Box>
  );
}
