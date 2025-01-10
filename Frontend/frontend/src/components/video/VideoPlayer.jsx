import React, { useEffect, useState } from 'react';
import LikeDislike from '../interaction/LikeDislike';
import ShareButton from '../interaction/ShareButton';

const VideoPlayer = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(`/api/v1/videos/${videoId}`);
      const data = await response.json();
      setVideoData(data.data);
    };

    fetchVideo();
  }, [videoId]);

  if (!videoData) return <p>Loading video...</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <video
        controls
        className="w-full rounded"
        src={videoData.videoFile}
      ></video>
      <h1 className="text-xl font-semibold mt-4">{videoData.title}</h1>
      <p className="text-gray-600">{videoData.description}</p>
      <div className="flex items-center justify-between mt-4">
        <LikeDislike videoId={videoId} />
        <ShareButton videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPlayer;


