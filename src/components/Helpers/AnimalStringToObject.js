import { ReactComponent as Cow } from "../../images/cow.svg";
import { ReactComponent as Fox } from "../../images/fox.svg";
import { ReactComponent as Horse } from "../../images/horse.svg";
import { ReactComponent as Pig } from "../../images/pig.svg";
import { ReactComponent as Rabbit } from "../../images/rabbit.svg";
import { ReactComponent as Sheep } from "../../images/sheep.svg";
import { ReactComponent as Wolf } from "../../images/wolf.svg";
import { ReactComponent as SmallDog } from "../../images/smallDog.svg";
import { ReactComponent as BigDog } from "../../images/bigDog.svg";
const stringToAnimal = (string, height) => {
  switch (string) {
    case "r":
          return <Rabbit className={`h-[${height}px] w-[${height}px]`} />;
    case "s":
      return <Sheep className={`h-[${height}px] w-[${height}px]`}/>;
    case "p":
      return <Pig className={`h-[${height}px] w-[${height}px]`}/>;
    case "h":
      return <Horse className={`h-[${height}px] w-[${height}px]`}/>;
    case "w":
      return <Wolf className={`h-[${height}px] w-[${height}px]`}/>;
    case "c":
      return <Cow className={`h-[${height}px] w-[${height}px]`}/>;
    case "f":
      return <Fox className={`h-[${height}px] w-[${height}px]`} />;
    case "sd":
      return <SmallDog className={`h-[${height}px] w-[${height}px]`} />;
    case "bd":
      return <BigDog className={`h-[${height}px] w-[${height}px]`} />;
    default:
      return;
  }
};

export default stringToAnimal;
