import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SettingManager } from "../../services/settingManager";
import { getTopAlbums, getTopArtists, getTopTracks } from "../../api";

export const fetchTopArtists = createAsyncThunk(
  "lastfm/fetchTopArtists",
  async (page) => {
    const response = await getTopArtists(page);
    return response.artists.artist;
  }
);

export const fetchArtistDetail = createAsyncThunk(
  "lastfm/fetchArtistDetail",
  async (artistName) => {
    const data = await Promise.all([
      getTopTracks(artistName),
      getTopAlbums(artistName),
    ]);
    return {
      [artistName]: {
        tracks: data[0].toptracks.track,
        albums: data[1].topalbums.album,
      },
    };
  }
);

const initialState = {
  topArtists: {
    data: SettingManager.getTopArtists(),
    loading: false,
    message: "",
  },
  artistDetailList: {
    data: SettingManager.getArtistList(),
    loading: false,
    message: "",
  },
};

export const lasfmSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopArtists.pending, (state) => {
        state.topArtists.loading = true;
      })
      .addCase(fetchTopArtists.rejected, (state, action) => {
        state.topArtists.loading = false;
        if (action.error.message) {
          state.topArtists.message = action.error.message;
        }
      })
      .addCase(fetchTopArtists.fulfilled, (state, action) => {
        state.topArtists.loading = false;
        state.topArtists.message = "";
        state.topArtists.data = [...state.topArtists.data, ...action.payload];
        SettingManager.setTopArtists(action.payload);
      })
      .addCase(fetchArtistDetail.pending, (state) => {
        state.artistDetailList.loading = true;
      })
      .addCase(fetchArtistDetail.rejected, (state, action) => {
        state.artistDetailList.loading = false;
        if (action.error.message) {
          state.artistDetailList.message = action.error.message;
        }
      })
      .addCase(fetchArtistDetail.fulfilled, (state, action) => {
        state.artistDetailList.loading = false;
        state.artistDetailList.message = "";
        const artistName = Object.keys(action.payload)[0];
        state.artistDetailList.data[artistName] = action.payload[artistName];
        SettingManager.setArtistList(action.payload);
      });
  },
});

export const { setTopArtists, setArtistDetailList } = lasfmSlice.actions;

export const selectTopArtists = (state) => state.lastfm.topArtists;
export const selectArtistDetailList = (state) => state.lastfm.artistDetailList;

export default lasfmSlice.reducer;
