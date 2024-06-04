import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import PageLayout from "../layout/PageLayout";
import { useState, SetStateAction } from "react";
import { IoMdSearch } from "react-icons/io";
import TrendingList from "../features/movieLists/TrendingList";

export default function Home() {
  const [searchQuery, setSearch] = useState("");
  function handleSearch(e: { target: { value: SetStateAction<string> } }) {
    setSearch(e.target.value);
  }
  return (
    <PageLayout>
      <div>
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
              sx={{ color: "#fff", marginLeft: 1, fontSize: "16px" }}
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
          {searchQuery ? (
            <Box width="100%">
              <Box width="100%">
                <Typography
                  variant="h5"
                  component="h1"
                  my={6}
                  fontWeight={400}
                  fontSize={24}
                >
                  Trending
                </Typography>
                <TrendingList trendingList={trendingList} />
              </Box>
              <Box width="100%">
                <Typography
                  variant="h5"
                  component="h1"
                  my={6}
                  fontWeight={400}
                  fontSize={24}
                >
                  Recommended for you
                </Typography>
                <RecommendedList recommendedList={recommendedList} />
              </Box>
            </Box>
          ) : (
            <Box width="100%">
              <Typography>Found</Typography>
            </Box>
          )}
        </Box>
      </div>
    </PageLayout>
  );
}
