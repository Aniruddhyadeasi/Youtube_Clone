import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video }) => (
  <div className="w-full flex flex-col items-center">
    <div className="w-full max-w-5xl">
      <ReactPlayer
        url={video.videoFile}
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <p className="text-gray-600">{video.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          {video.views} views • {new Date(video.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
);

export default VideoPlayer;

