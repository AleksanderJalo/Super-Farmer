import React from "react";
import { ReactComponent as Spin } from "../images/spin.svg";

const SpinButton = (props) => {
  return (
    <div className="cursor-pointer py-2 px-4 mt-3 flex border-4 border-black rounded-lg ease-in-out bg-red-600 hover:tranlate-y-1 transition duration-300" onClick={props.onClick}>
      SPIN
    </div>
  );
};

export default SpinButton;
