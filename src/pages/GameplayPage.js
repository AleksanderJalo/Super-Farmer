import React from "react";
import logo from "../images/logo.png";
import PlayerModal from "../components/PlayerModal";
import SpinWheel from "../components/SpinWheel";
import TradingSheet from "../components/TradingSheet";
const GameplayPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center static">
      <img
        className="absolute z-30 left-36 top-20 h-[200px] opacity-90 hidden lg:block"
        src={logo}
        alt="logo"
      />

      <div className="flex justify-between  items-center h-[90%] w-[90%] bg-white wood border-8 border-black z-20 font-skranji rounded">
        <PlayerModal playerNr="Player 2" extraStyles="ml-5 w-1/6" />
        <div className="flex flex-col justify-between h-[100%] relative">
          <div className="mt-5"><PlayerModal playerNr="Player 3"/></div>
          <TradingSheet />
          <div className="text-black border-4 border-black bg-white text-6xl ml-4">
            <div className="w-full bg-green-600 px-4 py-3 text-white border-b-4 border-black">Player 1 Turn</div>
            <div className="flex justify-center gap-10 mt-4 mb-4 p-4">
              <SpinWheel isLeft={ true } />
              <SpinWheel isLeft={ false }/>
            </div>
            
          </div>

          <PlayerModal playerNr="Player 1" extraStyles="mb-5" />
        </div>
        <PlayerModal playerNr="Player 4" extraStyles="mr-5 w-1/6" />
      </div>
    </div>
  );
};

export default GameplayPage;
