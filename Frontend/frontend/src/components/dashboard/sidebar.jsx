import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannelVideos } from '@/features/dashboard/dashboardSlice';
import VideoCard from './VideoCard';

const Sidebar = ({ channelId }) => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchChannelVideos(channelId));
  }, [dispatch, channelId]);

  return (
    <aside className="w-64 p-4 bg-gray-100">
      <h4 className="text-lg font-semibold">More from this channel</h4>
      <div className="mt-4">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

