import React, { useState, CSSProperties, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import PuffLoader from "react-spinners/PuffLoader";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [tabLoading, setTabLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    setTabLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setTabLoading(false);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "white", paddingX: '20px' }}>
        Search results for:
        <span style={{ color: "#F31503" }}> {searchTerm}</span>
      </Typography>
      {tabLoading ? (
        <Box
          display="flex"
          sx={{ justifyContent: "center", alignItems: "center" }}
          height="100%"
        >
          <PuffLoader color="#F31503" />
        </Box>
      ) : (
        <Videos videos={videos} />
      )}
    </Box>
  );
};

export default SearchFeed;
