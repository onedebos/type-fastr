import React from "react";

interface TimerProps {
  timer: number;
}
const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <div className={`text-center ${timer !== 0 ? "text-red-600" : ""} `}>
      {timer < 10 ? `00:0${timer}` : `00:${timer}`}
    </div>
  );
};

export default Timer;
