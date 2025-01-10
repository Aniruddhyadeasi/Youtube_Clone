import React, { useState } from 'react';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import VideoGrid from '../components/dashboard/VideoGrid';
import TrendingVideos from '../components/search/TrendingVideos';

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header onSearch={(query) => setSearchQuery(query)} />
        <div className="p-4">
          {searchQuery ? (
            <h2 className="text-xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
          ) : (
            <TrendingVideos />
          )}
          <VideoGrid />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
