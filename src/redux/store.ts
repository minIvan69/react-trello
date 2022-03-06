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
// @ts-ignore
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export type rootState = ReturnType<typeof store.getState>;
