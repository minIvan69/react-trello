import { ICommentsStorage } from "../../interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICommentsStorage[] = [];

const commentSlice = createSlice({
  name: "commnets",
  initialState,
  reducers: {
    addComments(
      state,
      { payload }: PayloadAction<{ newComment: ICommentsStorage }>
    ) {
      const { newComment } = payload;

      state.push(newComment);
    },

    changeComments(
      state,
      { payload }: PayloadAction<{ commnetsId: number; newComment: string }>
    ) {
      const { commnetsId, newComment } = payload;
      const editComment = state.find((item) => item.id === commnetsId);

      if (editComment) {
        editComment.comment = newComment;
      }

      return state;
    },

    deleteComments(state, { payload }: PayloadAction<number>) {
      const deleteComment = state.findIndex((item) => item.id === payload);

      state.splice(deleteComment, 1);

      return state;
    },
  },
});

const actions = { ...commentSlice.actions };
const reducer = commentSlice.reducer;

export { actions, reducer };
