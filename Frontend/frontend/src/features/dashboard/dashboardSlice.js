import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.REACT_APP_API_URL}/api/v1/dashboard`,
  withCredentials: true,
});

// Fetch channel stats
export const fetchChannelStats = createAsyncThunk(
  'dashboard/fetchChannelStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/stats');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch stats');
    }
  }
);

// Fetch channel videos
export const fetchChannelVideos = createAsyncThunk(
  'dashboard/fetchChannelVideos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/videos');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch channel videos');
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    stats: null,
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChannelStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchChannelStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchChannelVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChannelVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchChannelVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
