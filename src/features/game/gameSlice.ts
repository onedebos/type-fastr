import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getFromFireStore,
  sendToFireStore,
} from "../../utils/services/service";
import { RankingObj } from "../../utils/services/service";

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
  timer: number;
  playerName: string;
  ranking: boolean;
  playersRanking: object[];
  openModal: boolean;
  showRanking: boolean;
}

const initialState: GameState = {
  wordToMatch: "____",
  currentChar: "",
  loading: false,
  errors: "",
  wordCount: 0,
  charCount: 0,
  gameStarted: false,
  gameOver: false,
  timer: 0,
  playerName: "",
  ranking: false,
  showRanking: false,
  playersRanking: [],
  openModal: false,
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
    setWordCount: (state, { payload }: PayloadAction<number>) => {
      state.wordCount = payload / 5;
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
    setTimer: (state, { payload }: PayloadAction<number>) => {
      state.timer = payload;
    },
    setPlayerName: (state, { payload }: PayloadAction<string>) => {
      state.playerName = payload;
    },
    setRanking: (state, { payload }: PayloadAction<boolean>) => {
      state.ranking = payload;
    },
    setPlayersRanking: (state, { payload }: PayloadAction<object[]>) => {
      state.playersRanking = payload;
    },
    setOpenModal: (state, { payload }: PayloadAction<boolean>) => {
      state.openModal = payload;
    },
    setShowRanking: (state, { payload }: PayloadAction<boolean>) => {
      state.showRanking = payload;
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
  setTimer,
  setPlayerName,
  setRanking,
  setPlayersRanking,
  setOpenModal,
  setShowRanking,
} = gameSlice.actions;

export default gameSlice.reducer;

export const gameSelector = (state: { gameStore: GameState }) =>
  state.gameStore;

export const sendRankingToFirestore = (player: RankingObj): AppThunk => {
  return async (dispatch) => {
    dispatch(setRanking(true));
    try {
      await sendToFireStore(player);
      const res = await getFromFireStore();
      const arr: any = [];
      res.forEach((doc) => arr.push(doc.data()));
      const sortedArr = arr.sort((a: any, b: any) => b.cpm - a.cpm);
      dispatch(setPlayersRanking(sortedArr));

      dispatch(setRanking(false));
      dispatch(setGameOver(false));
      dispatch(setOpenModal(false));
      dispatch(setShowRanking(true));
    } catch (error) {
      dispatch(setErrors(error.message));
      dispatch(setRanking(false));
    }
  };
};
