import React from "react";
import Card from "../../../../ui/Card";

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  // console.log("Players", players);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {players.map((player, index) => {
          return (
            <Card
              key={index}
              player={player}
              setCoin={setCoin}
              coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
