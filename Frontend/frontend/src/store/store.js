import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import videoReducer from '../features/videos/videoSlice';
import commentReducer from '../features/comments/commentSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import likeReducer from '../features/likes/likeSlice';
import playlistReducer from '../features/playlists/playlistSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videoReducer,
    comments: commentReducer,
    dashboard: dashboardReducer,
    likes: likeReducer,
    playlists: playlistReducer,
  },
});

export default store;
