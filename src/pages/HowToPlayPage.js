import React, { useState } from "react";
import NextPageButton from "../components/NextPageButton";
import TutorialContent from "./TutorialContent";
import PreviousPageButton from "../components/PreviousPageButton";
import ExitButton from "../components/ExitButton";
const HowToPlayPage = (props) => {
  const [whichPage, setWhichPage] = useState(1);
  const nextPageHandler = () => {
    setWhichPage((prevPage) => prevPage + 1);
  };
  const previousPageHandler = () => {
    setWhichPage((prevPage) => prevPage - 1);
  };
  return (
    <div className="flex w-full h-full items-center justify-center ">
      <div className="w-[90%] h-[90%]   relative">
        <TutorialContent page={whichPage} />
        <ExitButton onClick={props.onExit} />
        {whichPage < 5 && <NextPageButton onClick={nextPageHandler} />}
        {whichPage > 1 && <PreviousPageButton onClick={previousPageHandler} />}
      </div>
    </div>
  );
};

export default HowToPlayPage;
