import { combineReducers } from "redux";

import * as collumns from "./Collumns";
import * as card from "./Card";
import * as authorName from "./Auth";
import * as comment from "./Comments";

export const reducer = combineReducers({
  collumns: collumns.reducer,
  cards: card.reducer,
  authorNames: authorName.reducer,
  comments: comment.reducer,
});

export const actions = {
  collumns: collumns.actions,
  cards: card.actions,
  authorNames: authorName.actions,
  comments: comment.actions,
};

export const selectors = {
  collumns: collumns.selectors,
  cards: card.selectors,
  authorNames: authorName.selectors,
  comments: comment.selectors,
};
