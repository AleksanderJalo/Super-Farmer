import React from "react";
import TutorialPage1 from "./tutorialPages/TutorialPage1";
import TutorialPage2 from "./tutorialPages/TutorialPage2";
import TutorialPage3 from "./tutorialPages/TutorialPage3";
import TutorialPage4 from "./tutorialPages/TutorialPage4";
import TutorialPage5 from "./tutorialPages/TutorialPage5";
const TutorialContent = (props) => {
  return (
    <div className="text-4xl w-full flex flex-col items-center">
      <div className="w-[90%]  border-black border-8 mt-12 font-carrotfarm relative wood ">
        {props.page === 1 && <TutorialPage1 />}
        {props.page === 2 && <TutorialPage2 />}
        {props.page === 3 && <TutorialPage3 />}
        {props.page === 4 && <TutorialPage4 />}
      </div>
    </div>
  );
};

export default TutorialContent;
