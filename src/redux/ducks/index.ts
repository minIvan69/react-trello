import { combineReducers } from "redux";

import * as collumns from "./Collumns";
import * as card from "./Card";
import * as authorName from "./Auth";
import * as comment from "./Comments";
import * as localCard from "./GetCard";

export const reducer = combineReducers({
  collumns: collumns.reducer,
  cards: card.reducer,
  authorNames: authorName.reducer,
  comments: comment.reducer,
  localCards: localCard.reducer,
});

export const actions = {
  collumns: collumns.actions,
  cards: card.actions,
  authorNames: authorName.actions,
  comments: comment.actions,
  localCards: localCard.actions,
};

export const selectors = {
  collumns: collumns.selectors,
  cards: card.selectors,
  authorNames: authorName.selectors,
  comments: comment.selectors,
  localCards: localCard.selectors,
};
