import React from "react";

const ExitButton = (props) => {
  return (
      <div
          onClick={props.onClick}
          className="absolute -top-6 -right-6 p-3 bg-yellow-600 rounded-full h-[100px] w-[100px] border-black cursor-pointer hover:bg-yellow-500 border-8 flex justify-center items-center text-6xl font-skranji">
      X
    </div>
  );
};

export default ExitButton;
