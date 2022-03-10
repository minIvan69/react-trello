import { ICollumnStorage } from "../../interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICollumnStorage[] = [
  {
    title: "TODO",
    id: 0,
  },
  {
    title: "InProgress",
    id: 1,
  },
  {
    title: "Testing",
    id: 2,
  },
  {
    title: "Done",
    id: 3,
  },
];

const collumnSlice = createSlice({
  name: "collumn",
  initialState,
  reducers: {
    changeTitle(
      state,
      action: PayloadAction<{ collumnId: number; title: string }>
    ) {
      const { payload } = action;
      const { collumnId, title } = payload;

      const collumnEdit = state.find((item) => item.id === collumnId);

      if (collumnEdit) {
        collumnEdit.title = title;
      }

      return state;
    },
  },
});

const actions = { ...collumnSlice.actions };
const reducer = collumnSlice.reducer;

export { actions, reducer };
