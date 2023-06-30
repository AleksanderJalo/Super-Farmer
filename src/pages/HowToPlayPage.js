import React, { useState } from "react";
import NextPageButton from "../components/NextPageButton";
import TutorialContent from "./TutorialContent";

const HowToPlayPage = () => {
  const [whichPage, setWhichPage] = useState(1);
  return (
    <div className="flex w-full h-full items-center justify-center relative">
      <div className="wood w-[90%] h-[90%] border-8 border-black rounded-lg">
        <TutorialContent page={whichPage} />
      </div>
      <NextPageButton />
    </div>
  );
};

export default HowToPlayPage;
