import React from "react";

interface WordProps {
  currentChar: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  startGame: () => void;
  gameStarted: boolean;
  gameOver: boolean;
}

const TypingInput: React.FC<WordProps> = ({
  currentChar,
  handleChange,
  startGame,
  gameStarted,
  gameOver,
}) => {
  return (
    <div className="text-center">
      <input
        type="text"
        disabled={gameStarted ? undefined : true}
        value={currentChar}
        onChange={handleChange}
        className="border-2 border-black w-3/4 md:w-1/2 mt-4 px-2 py-2 md:py-4 rounded-md focus:outline-none"
      />
      <div>
        <button
          className={`w-3/4 p-3 text-white font-bold mt-3 rounded-md focus:outline-none md:w-2/6 lg:w-1/6 md:text-lg ${
            gameStarted ? "bg-red-600" : "bg-indigo-600"
          }`}
          onClick={startGame}
        >
          {!gameStarted || gameOver ? "Start Typing" : "Playing..."}
        </button>
      </div>
    </div>
  );
};

export default TypingInput;
