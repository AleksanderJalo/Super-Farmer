import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="bg-slate-500 w-full h-screen text-center flex flex-col justify-center gap-20">
      <div>
        <div className="text-4xl text-yellow-400">SUPER</div>
        <div className="text-8xl text-white">FARMER</div>
      </div>
      <div className="flex justify-center gap-14">
        <Button/>
        <div>PLAY</div>
        <div>HOW TO PLAY</div>
      </div>
    </div>
  );
}

export default App;
