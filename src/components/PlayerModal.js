import React from "react";
import PlayerFarm from "./PlayerFarm";
const PlayerModal = (props) => {
  return (
    <div
      className={`text-6xl  bg-white pb-3 border-4 border-black ${props.extraStyles}`}
    >
      <div className="w-full py-2 px-10 bg-[#e2525c] text-3xl text-white border-black border-b-4">
        Player {props.playerNr}
      </div>
      <div className="px-5 py-3 text-xl">Animals:</div>

      <PlayerFarm playerNr={props.playerNr} />
    </div>
  );
};

export default PlayerModal;
