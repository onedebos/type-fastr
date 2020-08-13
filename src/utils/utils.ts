import { store } from "../index";
import { setGameOver, setGameStarted } from "../features/game/gameSlice";

const seconds = 10;
let time = 0;
let interval: any;

export const startTimer = () => {
  interval = setInterval(isTimeUp, 1000);
};

export const isTimeUp = () => {
  increaseTimer();
  store.dispatch(setGameStarted(true));

  if (time < seconds) {
    console.log("time", time);
  } else {
    clearInterval(interval);
    console.log("time up");
    store.dispatch(setGameOver(true));
    store.dispatch(setGameStarted(false));
    return true;
  }
};

const increaseTimer = () => {
  time += 1;
};
