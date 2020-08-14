import React, { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentChar,
  setGameOver,
  setWordToMatch,
  gameSelector,
  setWordCount,
  setCharCount,
  setPlayerName,
  sendRankingToFirestore,
  setOpenModal,
  setTimer,
  setShowRanking,
} from "../features/game/gameSlice";
import TypingInput from "../components/TypingInput";
import WordToMatch from "../components/WordToMatch";
import randomWords from "random-words";
import { startTimer, capitalize } from "../utils/utils";
import AlertResult from "../components/AlertResult";
import Layout from "../components/Layout";
import Ranking from "../components/Ranking";

const Game = () => {
  const dispatch = useDispatch();
  const {
    currentChar,
    wordToMatch,
    wordCount,
    charCount,
    gameStarted,
    gameOver,
    timer,
    playerName,
    ranking,
    openModal,
    playersRanking,
    showRanking,
  } = useSelector(gameSelector);

  const startGame = () => {
    const word = getNewWordToMatch();
    dispatch(setGameOver(false));
    dispatch(setShowRanking(false));
    startTimer();
    if (currentChar === word) {
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
      dispatch(setCharCount(userWord));
      getNewWordToMatch();
    }
  };

  const rankUserAndCloseModal = (e: FormEvent) => {
    // send name to firestore
    e.preventDefault();

    if (playerName.length < 1) {
      return;
    }
    const player = {
      playerName: capitalize(playerName),
      wpm: wordCount,
      cpm: charCount,
    };
    dispatch(sendRankingToFirestore(player));
    dispatch(setTimer(0));
    dispatch(setCurrentChar(""));
  };

  const trackPlayerName = (name: string) => {
    dispatch(setPlayerName(name));
  };

  const closeModal = () => {
    dispatch(setGameOver(false));
    dispatch(setOpenModal(false));
    dispatch(setTimer(0));
    dispatch(setCurrentChar(""));
    dispatch(setPlayerName(""));
  };

  if (gameOver) {
    dispatch(setWordCount(charCount));
    dispatch(setOpenModal(true));
  }

  return (
    <div className="min-h-screen relative main-bg-color py-8">
      <Layout>
        <WordToMatch wordToMatch={wordToMatch} timer={timer} />
        <TypingInput
          handleChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleChange(e.currentTarget.value.toLowerCase())
          }
          currentChar={currentChar}
          startGame={startGame}
          gameStarted={gameStarted}
          gameOver={gameOver}
        />

        {openModal ? (
          <AlertResult
            wpm={wordCount}
            cpm={charCount}
            name={playerName}
            handleChange={(e: React.FormEvent<HTMLInputElement>) =>
              trackPlayerName(e.currentTarget.value)
            }
            rankUserAndCloseModal={(e) => rankUserAndCloseModal(e)}
            ranking={ranking}
            closeModal={closeModal}
          />
        ) : null}
        {showRanking ? <Ranking players={playersRanking} /> : null}
      </Layout>
    </div>
  );
};

export default Game;
