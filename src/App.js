import "./App.css";
import PlayButton from "./components/PlayButton";
import Logo from "./components/Logo";
import HtpButton from "./components/HtpButton";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-900 to-gray-800 w-full h-screen text-center flex flex-col justify-center gap-40">
      <Logo/>
      <div className="flex justify-center gap-14">
        <PlayButton />
        <HtpButton/>
      </div>
    </div>
  );
}

export default App;
