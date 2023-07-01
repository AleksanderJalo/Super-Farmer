import React, { useState } from "react";
import NextPageButton from "../components/NextPageButton";
import TutorialContent from "./TutorialContent";

const HowToPlayPage = () => {
  const [whichPage, setWhichPage] = useState(1);
  const nextPageHandler = () => {
    setWhichPage(prevPage => prevPage + 1);
  }
  return (
    <div className="flex w-full h-full items-center justify-center ">
      <div className="wood w-[90%] h-[90%] border-8 border-black rounded-lg relative">
        <TutorialContent page={whichPage} />
        <NextPageButton onClick={ nextPageHandler } />
      </div>
      
    </div>
  );
};

export default HowToPlayPage;
