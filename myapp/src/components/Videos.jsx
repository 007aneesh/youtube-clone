import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './index';
const Videos = ({videos}) => {
  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={5}>
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