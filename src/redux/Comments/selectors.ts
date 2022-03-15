import { createSelector } from "reselect";
import { rootState } from "../store";

export const selectComments = (state: rootState) => state.comments;

export const getCommentsById = (cardId: number) =>
  createSelector(selectComments, (state) =>
    state.filter((item) => item.cardId === cardId)
  );
