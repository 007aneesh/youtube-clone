import { HashRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  Feed,
  SearchFeed,
} from "./components";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="black"
      >
        <PuffLoader color="#F31503" />
      </Box>
    );
  }

  return (
    <HashRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </HashRouter>
  );
};

export default App;
