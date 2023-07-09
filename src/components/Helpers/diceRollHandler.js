import farmDifference from "./FarmDifference";

const diceRollHandler = (leftRoll, rightRoll, farm) => {
  const oldFarm = farm;
  let finalFarm = farm;
  if (leftRoll === rightRoll) {
    const howMany = Math.floor(
      (2 + farm.filter((animal) => animal === leftRoll).length) / 2
    );
    for (let i = 0; i < howMany; i++) {
      if (finalFarm.filter((x) => x === leftRoll).length < 10) {
        finalFarm.push(leftRoll);
      }
    }
    return finalFarm;
  } else {
    const goodAnimals = ["r", "s", "c", "p", "h"];
    for (const goodAnimal of goodAnimals) {
      if (leftRoll === goodAnimal) {
        const howMany = Math.floor(
          (1 + farm.filter((animal) => animal === goodAnimal).length) / 2
        );
        for (let i = 0; i < howMany; i++) {
          if (finalFarm.filter((x) => x === goodAnimal).length < 10) {
            finalFarm.push(goodAnimal);
          }
        }
      }

      if (rightRoll === goodAnimal) {
        const howMany = Math.floor(
          (1 + farm.filter((animal) => animal === goodAnimal).length) / 2
        );
        for (let i = 0; i < howMany; i++) {
          if (finalFarm.filter((x) => x === goodAnimal).length < 10) {
            finalFarm.push(goodAnimal);
          }
        }
      }
    }
    if (leftRoll === "w") {
      if (!farm.includes("bd")) {
        const noSheeps = finalFarm.filter((animal) => animal !== "s");
        const noCows = noSheeps.filter((animal) => animal !== "c");
        finalFarm = noCows.filter((animal) => animal !== "p");
      } else {
        finalFarm = finalFarm.filter((animal) => animal !== "bd");
      }
    }
    if (rightRoll === "f") {
      if (!farm.includes("sd")) {
        if (farm.includes("r")) {
          finalFarm = finalFarm.filter((animal) => animal !== "r");
          finalFarm.push("r");
        }
      } else {
        finalFarm = finalFarm.filter((animal) => animal !== "sd");
      }
    }

    return finalFarm;
  }
};
export default diceRollHandler;
