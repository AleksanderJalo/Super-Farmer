import React from "react";
import logo from "../images/logo.png";
import PlayButton from "../components/PlayButton";
import OptionsButton from "../components/OptionsButton";
import HtpButton from "../components/HtpButton";

const StartingMenuPage = (props) => {
  return (
    <React.Fragment>
      <img src={logo} alt="logo" className="z-20 h-[700px] mt-12" />
      <div className="flex justify-center">
        <div className="flex flex-col  border-[7px] gap-3 border-black p-8 wood rounded-xl mb-14 ">
          <PlayButton onClick={props.onClick} />
          <OptionsButton />
          <HtpButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StartingMenuPage;
