import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import darkReducer from "../features/dark/darkSlice";
import searchReducer from "../features/search/searchSlice";

// redux persist configuration
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["dark", "search"],
  stateReconciler: autoMergeLevel2,
};

// redux store configuration
const rootReducer = combineReducers({
  dark: darkReducer,
  search: searchReducer,
});

// redux persist configuration
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// redux store configuration
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// redux persist configuration
export const persistor = persistStore(store);
