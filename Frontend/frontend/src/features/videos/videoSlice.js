import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVideos = createAsyncThunk('videos/fetch', async () => {
  const response = await axios.get('/api/v1/videos');
  return response.data.data;
});

const videoSlice = createSlice({
  name: 'videos',
  initialState: { videos: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default videoSlice.reducer;

