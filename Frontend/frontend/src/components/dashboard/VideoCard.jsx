import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow rounded-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`/videos/${video._id}`)}
    >
      <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold truncate">{video.title}</h4>
        <p className="text-sm text-gray-600 truncate">{video.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          {video.views} views • {new Date(video.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
