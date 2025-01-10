import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistManager = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch('/api/v1/playlist');
      const data = await response.json();
      setPlaylists(data.data);
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold">Your Playlists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistManager;
