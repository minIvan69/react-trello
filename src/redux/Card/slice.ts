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

    changeTitle(
      state,
      { payload }: PayloadAction<{ cardId: number; newTitle: string }>
    ) {
      const { cardId, newTitle } = payload;
      const editCard = state.find((item) => item.id === cardId);

      if (editCard) {
        editCard.title = newTitle;
      }

      return state;
    },

    changeDescription(
      state,
      { payload }: PayloadAction<{ cardId: number; newDesc: string }>
    ) {
      const { cardId, newDesc } = payload;

      const editCard = state.find((item) => item.id === cardId);

      if (editCard) {
        editCard.content = newDesc;
      }

      return state;
    },

    deleteCard(state, { payload }: PayloadAction<number>) {
      const deleteCard = state.findIndex((item) => item.id === payload);

      if (deleteCard !== -1) {
        state.splice(deleteCard, 1);
      }

      return state;
    },
  },
});

const actions = { ...cardSlice.actions };
const reducer = cardSlice.reducer;

export { actions, reducer };
