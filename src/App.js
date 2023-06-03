import "./App.css";
import PlayButton from "./components/PlayButton";
import OptionsButton from './components/OptionsButton'
import Logo from "./components/Logo";
import HtpButton from "./components/HtpButton";
import { useState } from "react";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
  };

  return (
    <div>
      <div className="farm w-full h-screen text-center flex flex-col justify-center items-center gap-28">
        <div className="absolute object-cover bg-gradient-to-t from-green-700 via-orange-800 to-blue-900 mix-blend-overlay w-full h-full"></div>
        <div className="h-1/2 z-20">
          <Logo />
        </div>

        {!playClick && (
          <div className="flex justify-center">
            <div className="flex flex-col  border-[7px] gap-3 border-black p-8 wood z-20 rounded-xl">
              <PlayButton onClick={playHandler} />
              <OptionsButton/>
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
