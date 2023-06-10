import { ReactComponent as Cow } from "../../images/cow.svg";
import { ReactComponent as Fox } from "../../images/fox.svg";
import { ReactComponent as Horse } from "../../images/horse.svg";
import { ReactComponent as Pig } from "../../images/pig.svg";
import { ReactComponent as Rabbit } from "../../images/rabbit.svg";
import { ReactComponent as Sheep } from "../../images/sheep.svg";
import { ReactComponent as Wolf } from "../../images/wolf.svg";
const stringToAnimal = (string, height) => {
  switch (string) {
    case "r":
          return <Rabbit className={`h-[${height}px] w-[${height}px]`} />;
    case "s":
      return <Sheep />;
    case "p":
      return <Pig />;
    case "h":
      return <Horse />;
    case "w":
      return <Wolf />;
    case "c":
      return <Cow />;
    case "f":
      return <Fox />;
    default:
      return;
  }
};

export default stringToAnimal;
