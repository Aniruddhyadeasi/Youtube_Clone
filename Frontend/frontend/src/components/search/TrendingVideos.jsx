import React, { useEffect, useState } from 'react';

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const response = await fetch('/api/v1/videos?sortBy=views&sortType=desc');
      const data = await response.json();
      setVideos(data.data);
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold">Trending Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {videos.map((video) => (
          <div key={video._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingVideos;
