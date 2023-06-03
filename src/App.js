import "./App.css";
import PlayButton from "./components/PlayButton";
import OptionsButton from "./components/OptionsButton";
import logo from "./images/logo.png";
import HtpButton from "./components/HtpButton";
import { useState } from "react";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
  };

  return (
    <div>
      <div className="farm w-full h-screen text-center flex flex-col justify-center items-center gap-14">
        <div className="absolute object-cover bg-gradient-to-t from-green-700 via-orange-800 to-blue-900 mix-blend-overlay w-full h-full"></div>
        <img src={logo} alt="logo" className="z-20 h-[500px]" />
        {!playClick && (
          <div className="flex justify-center">
            <div className="flex flex-col  border-[7px] gap-3 border-black p-8 wood z-20 rounded-xl">
              <PlayButton onClick={playHandler} />
              <OptionsButton />
              <HtpButton />
            </div>
          </div>
        )}
        {playClick && <PlayButton />}
      </div>
    </div>
  );
}

export default App;
