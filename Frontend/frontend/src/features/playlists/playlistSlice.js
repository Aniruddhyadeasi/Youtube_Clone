import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaylists = createAsyncThunk('playlists/fetch', async () => {
  const response = await axios.get('/api/v1/playlist');
  return response.data.data;
});

export const createPlaylist = createAsyncThunk('playlists/create', async (name) => {
  const response = await axios.post('/api/v1/playlist', { name });
  return response.data.data;
});

const playlistSlice = createSlice({
  name: 'playlists',
  initialState: { playlists: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.playlists = action.payload;
      })
      .addCase(createPlaylist.fulfilled, (state, action) => {
        state.playlists.push(action.payload);
      });
  },
});

export default playlistSlice.reducer;
