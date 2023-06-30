import "./App.css";
import { useState } from "react";
import StartingMenuPage from "./pages/StartingMenuPage";
import GameplayPage from "./pages/GameplayPage";
import HowToPlayPage from "./pages/HowToPlayPage";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const [howToPlay, setHowToPlay] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
  };
  const htpHandler = () => {
    setHowToPlay(true);
    console.log("a");
  };
  return (
    <div>
      {
        <div className="farm w-full h-screen text-center flex flex-col justify-between items-center gap-14">
          <div className="absolute object-cover bg-gradient-to-t from-green-700 via-orange-800 to-blue-900 mix-blend-overlay w-full h-full"></div>
          {!playClick && !howToPlay && (
            <StartingMenuPage
              onPlayClick={playHandler}
              onHtpClick={htpHandler}
            />
          )}
          {playClick && <GameplayPage />}
          {howToPlay && <HowToPlayPage />}
        </div>
      }
    </div>
  );
}

export default App;
