import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import PageLayout from "../layout/PageLayout";
import RecommendedList from "../features/movieLists/RecommendedList";
import { SetStateAction, useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { IoMdSearch } from "react-icons/io";

export default function Bookmarks() {
  const [searchQuery, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const bookmarked = movies.filter((item) => item.isBookmarked === true);

  function handleSearch(e: { target: { value: SetStateAction<string> } }) {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchList(newList);
  }
  return (
    <PageLayout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            backgroundColor: "#10141f",
            border: 1,
          }}
        >
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{
              color: "#fff",
              marginLeft: 1,
              fontSize: "16px",
              width: "100%",
            }}
            startAdornment={
              <InputAdornment position="start">
                <IoMdSearch
                  style={{ color: "#fff", width: "20px", height: "20px" }}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {searchQuery === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography
                variant="h5"
                component="h1"
                my={6}
                fontWeight={400}
                fontSize={24}
              >
                Bookmarked movies
              </Typography>
              <RecommendedList recommendedList={bookmarked} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList?.length} results for "{searchQuery}"
            </Typography>
            <RecommendedList recommendedList={searchList} />
          </Box>
        )}
      </Box>
    </PageLayout>
  );
}
