import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  player,
  setCoin,
  coin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      toast.error("Not not enough Coin to purchase this player");
      return;
    }

    toast.success(`${player.name} is selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={player.playerImg} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          <FaUser /> {player.name}
        </h2>
        <div className="flex justify-between">
          <div
            className="flex gap-2 items-center
            "
          >
            <FaFlag />
            <p>{player.country}</p>
          </div>

          <button className="btn">{player.type}</button>
        </div>

        <div className="divider"></div>

        <h2 className="font-bold">{player.rating}</h2>

        <div className="flex justify-between gap-4 font-bold">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold ">Price: {player.price}</p>
          <button
            className="btn"
            onClick={handleChoosePlayer}
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
