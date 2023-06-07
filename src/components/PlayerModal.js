import React from "react";

const PlayerModal = (props) => {
  return (
    <div className={`text-8xl ml-5 bg-white pb-4 border-2 border-black ${props.extraStyles}`}>
      <div className="w-full py-3 px-10 bg-[#e2525c] text-4xl text-white border-black border-b-2">
        {props.playerNr}
      </div>
      <div className="p-5 text-2xl">Animals:</div>
      <div className="border-black border-2 border-dashed mx-5 text-xl py-2">
        Empty
      </div>
    </div>
  );
};

export default PlayerModal;
