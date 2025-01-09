import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.REACT_APP_API_URL}/api/v1`,
  withCredentials: true,
});

// Fetch all videos (with pagination and query support)
export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/videos?page=${page}&limit=${limit}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch videos');
    }
  }
);

// Fetch a single video by ID
export const fetchVideoById = createAsyncThunk(
  'videos/fetchVideoById',
  async (videoId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/videos/${videoId}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch video');
    }
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
    video: null,
    loading: false,
    error: null,
    hasMore: true,
  },
  reducers: {
    clearVideo: (state) => {
      state.video = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = [...state.videos, ...action.payload];
        state.hasMore = action.payload.length > 0; // Check if more videos are available
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchVideoById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideoById.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearVideo } = videoSlice.actions;
export default videoSlice.reducer;
