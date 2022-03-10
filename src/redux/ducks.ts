import { combineReducers } from "redux";

import * as collumns from "./Collumns";

export const reducer = combineReducers({
  collumns: collumns.reducer,
});

export const actions = {
  collumns: collumns.actions,
};

export const selectors = {
  collumns: collumns.selectors,
};
