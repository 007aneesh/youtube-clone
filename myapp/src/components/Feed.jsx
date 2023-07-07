import React, { useState, CSSProperties, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import PuffLoader from "react-spinners/PuffLoader";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [tabLoading, setTabLoading] = useState(false);
  const [videos, setVideos] = useState([]);

    useEffect(() => {
      setTabLoading(true);
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
        setVideos(data.items);
        setTabLoading(false);
      });
    }, [selectedCategory]);

  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        {tabLoading ? (
          <Box
            display="flex"
            sx={{justifyContent: 'center', alignItems: 'center'}}
            height="100%"
          >
            <PuffLoader color="#F31503" />
          </Box>
        ) : (
          <Videos videos={videos} />
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
