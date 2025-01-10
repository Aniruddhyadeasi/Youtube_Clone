import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const toggleLike = createAsyncThunk('likes/toggle', async ({ videoId, isLiked }) => {
  const response = await axios.post(`/api/v1/likes/toggle/v/${videoId}`, { isLiked });
  return response.data.data;
});

const likeSlice = createSlice({
  name: 'likes',
  initialState: { likedVideos: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleLike.fulfilled, (state, action) => {
        const video = action.payload;
        const existingVideoIndex = state.likedVideos.findIndex((v) => v._id === video._id);

        if (existingVideoIndex >= 0) {
          state.likedVideos.splice(existingVideoIndex, 1); // Remove if already liked
        } else {
          state.likedVideos.push(video); // Add if newly liked
        }
      });
  },
});

export default likeSlice.reducer;
