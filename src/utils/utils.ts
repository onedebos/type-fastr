import { store } from "../index";
import {
  setGameOver,
  setGameStarted,
  setTimer,
} from "../features/game/gameSlice";

const seconds = 60;
let time = 0;
let interval: any;

export const startTimer = () => {
  time = 0;
  store.dispatch(setGameStarted(true));
  interval = setInterval(isTimeUp, 1000);
};

export const isTimeUp = () => {
  increaseTimer();

  if (time < seconds) {
    store.dispatch(setTimer(time));
  } else {
    clearInterval(interval);

    store.dispatch(setGameOver(true));
    store.dispatch(setGameStarted(false));
    return true;
  }
};

const increaseTimer = () => {
  time += 1;
};

export const capitalize = (str: string) => {
  const splitStr = str.split("");
  return splitStr[0].toString().toUpperCase() + str.slice(1);
};
