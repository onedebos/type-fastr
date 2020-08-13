import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../index";

export interface GameState {
  wordToMatch: string;
  loading: boolean;
  errors: string;
  currentChar: string;
  wordCount: number;
  charCount: number;
  gameStarted: boolean;
  gameOver: boolean;
}

const initialState: GameState = {
  wordToMatch: "",
  currentChar: "",
  loading: false,
  errors: "",
  wordCount: 0,
  charCount: 0,
  gameStarted: false,
  gameOver: false,
};

const gameSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setWordToMatch: (state, { payload }: PayloadAction<string>) => {
      state.wordToMatch = payload;
    },

    setCurrentChar: (state, { payload }: PayloadAction<string>) => {
      state.currentChar = payload;
    },
    setWordCount: (state) => {
      state.wordCount += 1;
    },
    setCharCount: (state, { payload }: PayloadAction<string>) => {
      const word = payload;
      state.charCount += word.length;
    },
    setGameStarted: (state, { payload }: PayloadAction<boolean>) => {
      state.gameStarted = payload;
    },
    setGameOver: (state, { payload }: PayloadAction<boolean>) => {
      state.gameOver = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setWordToMatch,
  setCurrentChar,
  setWordCount,
  setCharCount,
  setGameStarted,
  setGameOver,
} = gameSlice.actions;

export default gameSlice.reducer;

export const gameSelector = (state: { gameStore: GameState }) =>
  state.gameStore;

export const getWords = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "https://api.nasa.gov/planetary/apod";
      // your apiKey should ideally be in a .env file
      const apiKey = "DE8fsud7knGnE2BZLsKkookQDDZlaIz9YXY6wwpO";
      const res = await axios.get(
        `${baseURL}?api_key=${apiKey}&start_date=2020-05-07&end_date=2020-05-09`
      );
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setErrors(error.message));
      dispatch(setLoading(false));
    }
  };
};
