import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer } from "./ducks";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  StatereConciler: autoMergeLevel2, // Посмотреть конкретную ситуацию «процесса слияния»
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(
  persistedReducer,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
export type rootState = ReturnType<typeof store.getState>;
