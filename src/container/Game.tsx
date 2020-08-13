import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentChar,
  setGameOver,
  setWordToMatch,
  gameSelector,
  setWordCount,
  setCharCount,
  setGameStarted,
} from "../features/game/gameSlice";
import TypingInput from "../components/TypingInput";
import WordToMatch from "../components/WordToMatch";
import randomWords from "random-words";
import { startTimer } from "../utils/utils";
import AlertResult from "../components/AlertResult";

const Game = () => {
  const dispatch = useDispatch();
  const {
    currentChar,
    wordToMatch,
    wordCount,
    charCount,
    gameStarted,
    gameOver,
  } = useSelector(gameSelector);

  const startGame = () => {
    const word = getNewWordToMatch();
    dispatch(setGameStarted(true));
    dispatch(setGameOver(false));
    startTimer();
    if (currentChar === word) {
      dispatch(setWordCount());
      dispatch(setCharCount(word));
    }
  };

  const getNewWordToMatch = () => {
    const word = randomWords();
    dispatch(setWordToMatch(word));
    return word;
  };

  const handleChange = (userWord: string) => {
    dispatch(setCurrentChar(userWord));
    if (userWord === wordToMatch) {
      dispatch(setCurrentChar(""));
      dispatch(setWordCount());
      dispatch(setCharCount(userWord));
      getNewWordToMatch();
    }
    console.log("CharCount", charCount);
  };

  return (
    <div>
      <WordToMatch wordToMatch={wordToMatch} />
      <TypingInput
        handleChange={(e: React.FormEvent<HTMLInputElement>) =>
          handleChange(e.currentTarget.value)
        }
        currentChar={currentChar}
        startGame={startGame}
        gameStarted={gameStarted}
        gameOver={gameOver}
      />

      {gameOver ? <AlertResult wpm={wordCount} cpm={charCount} /> : ""}
    </div>
  );
};

export default Game;
