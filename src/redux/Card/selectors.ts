import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "../store";

export const selectCard = (state: rootState) => state.cards;

export const getCardsByCollumnsId = (collumnId: number) =>
  createSelector(selectCard, (state) =>
    state.filter((item) => item.columnId === collumnId)
  );
