import React from "react";

interface WordToMatchProps {
  wordToMatch: string;
}

const WordToMatch: React.FC<WordToMatchProps> = ({ wordToMatch }) => {
  return <div className="text-center">{wordToMatch}</div>;
};

export default WordToMatch;
