import React from 'react';

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold">{playlist.name}</h3>
      <p className="text-sm text-gray-600">{playlist.videos.length} videos</p>
    </div>
  );
};

export default PlaylistCard;
