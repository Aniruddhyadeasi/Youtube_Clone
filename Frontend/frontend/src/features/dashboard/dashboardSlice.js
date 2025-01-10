import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChannelStats = createAsyncThunk('dashboard/stats', async () => {
  const response = await axios.get('/api/v1/dashboard/stats');
  return response.data.data;
});

export const fetchChannelVideos = createAsyncThunk('dashboard/videos', async () => {
  const response = await axios.get('/api/v1/dashboard/videos');
  return response.data.data;
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { stats: null, videos: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelStats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChannelStats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stats = action.payload;
      })
      .addCase(fetchChannelVideos.fulfilled, (state, action) => {
        state.videos = action.payload;
      });
  },
});

export default dashboardSlice.reducer;

