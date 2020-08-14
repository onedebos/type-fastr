import React from "react";

interface RankingProps {
  players: object[];
}

const Ranking: React.FC<RankingProps> = ({ players }) => {
  return (
    <div className="mx-8 md:max-w-screen-md md:m-auto">
      <h1 className="text-center text-2xl md:text-5xl font-semibold text-main-color mt-10">
        Rankings
      </h1>
      <div className="bg-indigo-700 rounded-md pb-3">
        <div className="flex justify-evenly text-white font-bold pt-3">
          <h2 className="text-lg">Name</h2>
          <h2 className="text-lg">WPM</h2>
          <h2 className="text-lg">CPM</h2>
        </div>
        {players.map((player: any) => {
          return (
            <div className="flex justify-evenly text-white m-auto items-center flex-wrap">
              <p>{player.playerName}</p>
              <p>{player.wpm}</p>
              <p>{player.cpm}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
