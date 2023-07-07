import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './index';
import PuffLoader from "react-spinners/PuffLoader";

const Videos = ({videos, direction, alignItems}) => {
  if(!videos?.length) return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="95vh"
    >
      <PuffLoader color="#F31503" />
    </Box>
  ); 
  return (
    <Stack direction={direction|| 'row'} justifyContent="center" alignItems={alignItems} flexWrap="wrap" gap={5}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos