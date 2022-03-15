import { combineReducers } from "redux";

import * as collumns from "./Collumns";
import * as card from "./Card";
import * as authorName from "./Auth";

export const reducer = combineReducers({
  collumns: collumns.reducer,
  cards: card.reducer,
  authorNames: authorName.reducer,
});

export const actions = {
  collumns: collumns.actions,
  cards: card.actions,
  authorNames: authorName.actions,
};

export const selectors = {
  collumns: collumns.selectors,
  cards: card.selectors,
  authorNames: authorName.selectors,
};
