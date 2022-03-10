import { ICard } from "../../interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICard[] = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, { payload }: PayloadAction<{ newCard: ICard }>) {
      const { newCard } = payload;

      state.push(newCard);
    },
  },
});

const actions = { ...cardSlice.actions };
const reducer = cardSlice.reducer;

export { actions, reducer };
