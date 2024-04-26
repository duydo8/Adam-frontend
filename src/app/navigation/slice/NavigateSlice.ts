import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Image {
  id: number;
  url: number;
  user_id: string;
  status: number;
}

const initialState = {
  path: "",
};

export const incrementAsyncHome = createAsyncThunk(
  "changeNavigate",
  async () => {
    return true;
  }
);

export const homeSlice = createSlice({
  name: "changeNavigate",
  initialState,
  reducers: {
    changeRoute: (state, action) => {
      state.path = action.payload;
    },
  },
});

export default homeSlice.reducer;
