import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import videoReducer from '../features/videos/videoSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videoReducer,
    dashboard: dashboardReducer,
  },
});

export default store;