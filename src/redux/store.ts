import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import keywordReducer from "./keywordSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  modal: modalReducer,
  keyword: keywordReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
