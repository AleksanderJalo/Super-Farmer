import React from "react";
import logo from "../images/logo.png";
import PlayerModal from "../components/PlayerModal";
import ActionWindow from "../components/ActionWindow";
import TradingSheet from "../components/TradingSheet";
import { usePlayer1Store } from "../stores/player1";

const GameplayPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center static">
      <img
        className="absolute z-30 left-36 top-20 h-[200px] opacity-90 hidden lg:block"
        src={logo}
        alt="logo"
      />

      <div className="flex justify-between  items-center h-[90%] w-[90%] bg-white wood border-8 border-black z-20 font-skranji rounded">
        <PlayerModal playerNr={2} extraStyles="ml-5 w-1/6" />
        <div className="flex flex-col justify-between h-[100%] relative">
          <div className="mt-5">
            <PlayerModal playerNr={3} />
          </div>

          <TradingSheet />

          <ActionWindow />

          <PlayerModal playerNr={1} extraStyles="mb-5" />
        </div>
        <PlayerModal playerNr={ 4} extraStyles="mr-5 w-1/6" />
      </div>
    </div>
  );
};

export default GameplayPage;
