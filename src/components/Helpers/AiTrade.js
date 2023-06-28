import stringToAnimal from "./AnimalStringToObject";
export const whatTrade = (botFarm) => {
  const smallDogCount = botFarm.filter((animal) => animal === "sd").length;
  const bigDogCount = botFarm.filter((animal) => animal === "bd").length;
  const horsesCount = botFarm.filter((animal) => animal === "h").length;
  const cowCount = botFarm.filter((animal) => animal === "c").length;
  const pigCount = botFarm.filter((animal) => animal === "p").length;
  const sheepCount = botFarm.filter((animal) => animal === "s").length;
  const rabbitCount = botFarm.filter((animal) => animal === "r").length;
  if (bigDogCount === 0 && cowCount > 0) {
    return ["c", "bd", 1, 1];
  }
  if (smallDogCount === 0 && sheepCount > 0) {
    return ["s", "sd", 1, 1];
  }
  if (horsesCount === 0 && cowCount > 1) {
    return ["c", "h", 2, 1];
  }
  if (cowCount === 0 && pigCount > 2) {
    return ["p", "c", 3, 1];
  }
  if (pigCount === 0 && sheepCount > 1) {
    return ["s", "p", 2, 1];
  }
  if (sheepCount === 0 && rabbitCount > 5) {
    return ["r", "s", 6, 1];
  }
  if (rabbitCount > 6) {
    return ["r", "s", 6, 1];
  }
  if (sheepCount > 2) {
    return ["s", "p", 2, 1];
  }
  if (pigCount > 3) {
    return ["p", "c", 3, 1];
  }
  if (cowCount > 2) {
    return ["c", "h", 2, 1];
  }
};

export const changeText = (
    firstAnimal,
    secondAnimal,
    firstAnimalCount,
    secondAnimalCount,
    turn
  ) => {
    const firstAnimalText = stringToAnimal(firstAnimal, 60);
    const secondAnimalText = stringToAnimal(secondAnimal, 60);
    return(
      <div className="flex flex-col items-center justify-center gap-2">
        <div> Player {turn + 1} traded</div>
        <div className="flex gap-2 justify-center">
          <span className="mt-2">{firstAnimalCount} x </span>

          {firstAnimalText}
          <span className="mt-2 mx-1">for {secondAnimalCount} x </span>

          <div>{secondAnimalText}</div>
        </div>
      </div>
    );
  };
