import React from "react";
import { ReactComponent as QuestionMark } from "./question-mark.svg";

const HtpButton = () => {
  return (
    <div className="font-plaguard flex shadow-2xl border-4 transition ease-in-out duration-400  border-black text-white group z-20">
      <div className="bg-green-800 border-r-4 border-black group-hover:bg-green-900 p-1 px-2">
        <QuestionMark />
      </div>

      <div className="text-5xl pt-2.5 px-6 grow bg-green-700 group-hover:bg-green-800">HOW TO PLAY</div>
    </div>
  );
};

export default HtpButton;
