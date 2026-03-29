import React from "react";
import SelectedCard from "../../../../ui/selectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  console.log("selectedPlayers", selectedPlayers);

  const handleDeleteSelectedPlayer = (player) => {
    console.log(selectedPlayers, "selectedPlayers");

    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name !== player.name,
    );

    console.log(filteredPlayers, "filteredPlayers");
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="h-100 flex items-center justify-center flex-col gap-4 border-2 border-cyan-600 rounded-xl">
            <h2 className="font-semibold text-3xl">
              No player is selected yet
            </h2>
            <p> Go to available tab to select player </p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard
                key={index}
                player={player}
                handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
