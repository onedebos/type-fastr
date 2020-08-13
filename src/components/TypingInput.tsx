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
        className="border-2 border-black w-1/2 mt-4 p-2 rounded-md"
      />
      <div>
        <button
          className={`p-3 text-white font-bold mt-3 rounded-md focus:outline-none ${
            gameStarted ? "bg-red-600" : "bg-blue-600"
          }`}
          onClick={startGame}
        >
          {!gameStarted || gameOver ? "Start Game" : "Playing..."}
        </button>
      </div>
    </div>
  );
};

export default TypingInput;
