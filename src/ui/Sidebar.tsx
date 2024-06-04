import { Box, Typography } from "@mui/material";
import { FaRegBookmark } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    link: "/",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Box sx={{ display: { md: "none", lg: "block" } }}>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            Movie App
          </Typography>
        </Box>
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              style={{ fontSize: "16px", textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ width: "20px", height: "20px" }}>
                  {link.name === "Home" && <PiSquaresFour />}
                  {link.name === "Bookmarks" && <FaRegBookmark />}
                </Box>
                <Box
                  sx={{
                    display: { md: "none", lg: "block", fontSize: "16px" },
                  }}
                >
                  <Typography fontSize={16}>{link.name}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
