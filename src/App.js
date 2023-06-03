import "./App.css";
import PlayButton from "./components/PlayButton";
import Logo from "./components/Logo";
import HtpButton from "./components/HtpButton";
import { useState } from "react";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
    console.log(playClick);
  };

  return (
    <div className="farm w-full h-screen text-center flex flex-col justify-center items-center gap-28">
      <Logo/>
      {!playClick && (
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 border-[7px] border-black p-8 wood">
            <PlayButton onClick={playHandler} />
            <HtpButton />
          </div>
        </div>
      )}
      {playClick && <PlayButton />}
    </div>
  );
}

export default App;
