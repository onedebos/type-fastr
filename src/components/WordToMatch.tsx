import React from "react";
import Timer from "./Timer";

interface WordToMatchProps {
  wordToMatch: string;
  timer: number;
}

const WordToMatch: React.FC<WordToMatchProps> = ({ wordToMatch, timer }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-md max-w-screen-sm md:max-w-md py-4 w-3/4 md:w-full">
        <Timer timer={timer} />

        <h2 className="text-center p-4 font-bold text-2xl text-main-color">
          {wordToMatch}
        </h2>
      </div>
    </div>
  );
};

export default WordToMatch;
