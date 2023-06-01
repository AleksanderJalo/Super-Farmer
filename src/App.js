import "./App.css";
import PlayButton from "./components/PlayButton";
import Logo from "./components/Logo";
function App() {
  return (
    <div className="bg-slate-500 w-full h-screen text-center flex flex-col justify-center gap-20">
      <Logo/>
      <div className="flex justify-center gap-14">
        <PlayButton/>
        <div>PLAY</div>
        <div>HOW TO PLAY</div>
      </div>
    </div>
  );
}

export default App;
