import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoById, clearVideo } from '../features/videos/videoSlice';
import VideoPlayer from '../components/dashboard/VideoPlayer';
import Sidebar from '../components/dashboard/sidebar';
import CommentsSection from '../components/dashboard/CommentSection';

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, loading } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideoById(videoId));
    return () => dispatch(clearVideo());
  }, [dispatch, videoId]);

  if (loading) return <p>Loading video...</p>;
  if (!video) return <p>Video not found</p>;

  return (
    <div className="flex">
      <div className="flex-1">
        <VideoPlayer video={video} />
        <CommentsSection comments={video.comments || []} />
      </div>
      <Sidebar channelId={video.owner._id} />
    </div>
  );
};

export default VideoPlayerPage;

