import "./App.css";
import { useState } from "react";
import StartingMenuPage from "./pages/StartingMenuPage";
import GameplayPage from "./pages/GameplayPage";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
  };
  return (
    <div>
      {
        <div className="farm w-full h-screen text-center flex flex-col justify-between items-center gap-14">
          <div className="absolute object-cover bg-gradient-to-t from-green-700 via-orange-800 to-blue-900 mix-blend-overlay w-full h-full"></div>
          {!playClick && <StartingMenuPage onClick={playHandler} />}
          {playClick && <GameplayPage />}
        </div>
      }
    </div>
  );
}

export default App;
