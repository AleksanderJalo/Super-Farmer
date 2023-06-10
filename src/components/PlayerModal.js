import React from "react";
import PlayerFarm from "./PlayerFarm";
const PlayerModal = (props) => {
  return (
    <div
      className={`text-8xl ml-5 bg-white pb-4 border-4 border-black ${props.extraStyles}`}
    >
      <div className="w-full py-3 px-10 bg-[#e2525c] text-4xl text-white border-black border-b-4">
        Player {props.playerNr}
      </div>
      <div className="p-5 text-2xl">Animals:</div>

      <PlayerFarm playerNr={props.playerNr} />
    </div>
  );
};

export default PlayerModal;
