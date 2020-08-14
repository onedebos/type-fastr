import { db } from "./firebase";

export interface RankingObj {
  playerName: string;
  wpm: number;
  cpm: number;
}

export const getFromFireStore = async () => {
  return db.collection("typingRanking").get();
};

export const sendToFireStore = async (player: RankingObj) => {
  return db.collection("typingRanking").doc().set(player);
};
