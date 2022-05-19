import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    playing: null,
  },
  reducers: {
    toggle: (state) => {
      state.playing = !state.playing;
    },
    end: (state) => {
      state.playing = null;
    },
  },
});

export const { toggle, end } = musicSlice.actions;
export default musicSlice.reducer;
