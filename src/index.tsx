import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import gameSliceReducer from "./features/game/gameSlice";
import { ThunkAction } from "redux-thunk";
import { GameState } from "./features/game/gameSlice";

export type AppThunk = ThunkAction<void, GameState, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    gameStore: gameSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "development" ? false : true,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
