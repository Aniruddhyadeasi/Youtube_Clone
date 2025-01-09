import React from 'react';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/sidebar';
import VideoGrid from '../components/dashboard/VideoGrid';
import Footer from '../components/dashboard/Footer';

const DashboardPage = () => (
  <div className="flex flex-col h-screen">
    {/* Header */}
    <Header />

    <div className="flex flex-1">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <VideoGrid />
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default DashboardPage;