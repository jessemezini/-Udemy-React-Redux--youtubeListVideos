import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func,
};

export default VideoList;
