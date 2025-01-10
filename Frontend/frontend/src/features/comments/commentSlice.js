import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk('comments/fetch', async (videoId) => {
  const response = await axios.get(`/api/v1/comments/${videoId}`);
  return response.data.data;
});

export const addComment = createAsyncThunk('comments/add', async ({ videoId, text }) => {
  const response = await axios.post(`/api/v1/comments/${videoId}`, { text });
  return response.data.data;
});

const commentSlice = createSlice({
  name: 'comments',
  initialState: { comments: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentSlice.reducer;
