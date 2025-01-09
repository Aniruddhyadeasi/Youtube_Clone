import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import VideoCard from './VideoCard';
import { fetchVideos } from '@/features/videos/videoSlice';

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, hasMore, loading } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos({ page: 1, limit: 10 }));
  }, [dispatch]);

  const loadMoreVideos = () => {
    dispatch(fetchVideos({ page: Math.ceil(videos.length / 10) + 1, limit: 10 }));
  };

  if (loading && videos.length === 0) return <p>Loading videos...</p>;

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={loadMoreVideos}
      hasMore={hasMore}
      loader={<p>Loading more videos...</p>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default VideoGrid;


