import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/video/VideoPlayer';
import CommentsSection from '../components/video/CommentSection';
import Sidebar from '../components/dashboard/Sidebar';

const VideoPlayerPage = () => {
  const { videoId } = useParams();

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <VideoPlayer videoId={videoId} />
        <CommentsSection videoId={videoId} />
      </div>
      <Sidebar />
    </div>
  );
};

export default VideoPlayerPage;


