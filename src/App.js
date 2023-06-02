import "./App.css";
import PlayButton from "./components/PlayButton";
import Logo from "./components/Logo";
import HtpButton from "./components/HtpButton";
import { useState } from "react";

function App() {
  const [playClick, setPlayClick] = useState(false);
  const playHandler = () => {
    setPlayClick(true);
    console.log(playClick)
  }

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-900 to-gray-800 w-full h-screen text-center flex flex-col justify-center gap-40">
      <Logo/>
      {!playClick && <div className="flex justify-center gap-10">
        <PlayButton onClick={ playHandler } />
        <HtpButton/>
      </div>}
      {playClick && <PlayButton/>}
    </div>
  );
}

export default App;
