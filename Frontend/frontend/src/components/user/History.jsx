import React, { useEffect, useState } from 'react';

const History = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch('/api/v1/users/history', {
        credentials: 'include',
      });
      const data = await response.json();
      setVideos(data.data);
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Watch History</h2>
      <div className="mt-4">
        {videos.map((video) => (
          <div key={video._id} className="mb-4">
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-gray-500">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
