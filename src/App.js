import "./App.css";
import PlayButton from "./components/PlayButton";
import OptionsButton from "./components/OptionsButton";
import logo from "./images/logo.png";
import HtpButton from "./components/HtpButton";
import { useState } from "react";
import PlayerModal from "./components/PlayerModal";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
  };

  return (
    <div>
      <div className="farm w-full h-screen text-center flex flex-col justify-between items-center gap-14">
        <div className="absolute object-cover bg-gradient-to-t from-green-700 via-orange-800 to-blue-900 mix-blend-overlay w-full h-full"></div>
        {/* <img src={logo} alt="logo" className="z-20 h-[700px] mt-12" />
        {!playClick && (
          <div className="flex justify-center">
            <div className="flex flex-col  border-[7px] gap-3 border-black p-8 wood rounded-xl mb-14 ">
              <PlayButton onClick={playHandler} />
              <OptionsButton />
              <HtpButton />
            </div>
          </div>
        )}
        {playClick && <PlayButton />} */}

        {/* After play click */}
        <div className="flex w-full h-full items-center justify-center static">
          {/* <img
            className="absolute z-30 left-28 top-20 h-[200px] opacity-90"
            src={logo}
          /> */}

          <div className="flex justify-between  items-center h-[90%] w-[90%] bg-white wood border-8 border-black z-20 font-skranji">
            <PlayerModal playerNr="Player 2" extraStyles="ml-5" />
            <div className="flex flex-col justify-between h-[100%]">
              <PlayerModal playerNr="Player 3" extraStyles="mt-5" />
              <PlayerModal playerNr="Player 1" extraStyles="mb-5" />
            </div>
            <PlayerModal playerNr="Player 4" extraStyles="mr-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
