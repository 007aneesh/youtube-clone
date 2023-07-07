import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import PuffLoader from "react-spinners/PuffLoader";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelData = await fetchFromAPI(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(channelData?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setVideos(videosData?.items);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(118,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" p="2" justifyContent="center">
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <PuffLoader color="#F31503" />
          </Box>
        ) : (
          <Box sx={{ paddingX: "30px" }}>
            <Videos videos={videos} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
