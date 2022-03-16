import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const authSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    setAuthor(state, { payload }: PayloadAction<string>) {
      if (payload) {
        state = payload;
      }
      return state;
    },
  },
});

const actions = { ...authSlice.actions };
const reducer = authSlice.reducer;

export { actions, reducer };
