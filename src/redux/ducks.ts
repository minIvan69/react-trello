import { combineReducers } from "redux";

import * as columns from "./Collumns";

export const reducer = combineReducers({
  columns: columns.reducer,
});

export const actions = {
  columns: columns.actions,
};

export const selectors = {
  columns: columns.selectors,
};
