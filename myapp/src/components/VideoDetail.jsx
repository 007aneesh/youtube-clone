import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideosDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideosDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Box>
      <Stack marginY={3} direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box px={{xs: 1, md: 5}} py={2} sx={{ width: "100%", position: "sticky", top: "80px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h6" fontWeight="bold" p={2}>
              {videoDetail?.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              px={2}
              py={1}
              sx={{ color: "#fff" }}
            >
              <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h5" }}
                >
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics.viewCount).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics.likeCount).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={3}
          py={{ my: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography color="#fff" variant="h5" mb={3}>
            Recommended videos
          </Typography>
          <Videos videos={videos} direction="column" alignItems='center' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
