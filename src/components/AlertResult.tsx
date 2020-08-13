import React from "react";

interface AlertResultProps {
  wpm: number;
  cpm: number;
}

const AlertResult: React.FC<AlertResultProps> = ({ wpm, cpm }) => {
  return (
    <div>
      <h1>Game over!</h1>
      <p>
        You typed {wpm} per minute and {cpm} per minute.
      </p>
    </div>
  );
};

export default AlertResult;
