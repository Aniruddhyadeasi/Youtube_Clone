import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import ChannelPage from './pages/ChannelPage';
import SearchPage from './pages/SearchPage';
import UserProfilePage from './pages/UserProfilePage';
import PlaylistPage from './pages/PlaylistPage';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/videos/:videoId" element={<VideoPlayerPage />} />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/playlists" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
