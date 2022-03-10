import { combineReducers } from "redux";

import * as collumns from "./Collumns";
import * as card from "./Card";

export const reducer = combineReducers({
  collumns: collumns.reducer,
  cards: card.reducer,
});

export const actions = {
  collumns: collumns.actions,
  cards: card.actions,
};

export const selectors = {
  collumns: collumns.selectors,
  cards: card.selectors,
};
