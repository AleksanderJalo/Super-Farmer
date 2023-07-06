import { usePlayer1Store } from "../../stores/player1";

const diceRollHandler = (leftRoll, rightRoll, farm) => {
  if (leftRoll === rightRoll) {
    if (farm.includes(leftRoll)) {
      const howMany = Math.floor(
        (farm.filter((animal) => animal === leftRoll).length + 2) / 2
      );
      return { get: Array(howMany).fill(leftRoll) };
    } else {
      return { get: [leftRoll], loose: [] };
    }
  } else {
    const finalObject = { get: [], loose: [] };
    const goodAnimals = ["r", "s", "p", "c", "h"];
    for (const goodAnimal of goodAnimals) {
      if (leftRoll === goodAnimal) {
        const howMany = Math.floor(
          (farm.filter((animal) => animal === leftRoll).length + 1) / 2
        );

        if (howMany > 0) {
          for (let i = 0; (i = 0 < howMany); i++) {
            finalObject.get.push(leftRoll);
          }
        }
      }
      if (rightRoll === goodAnimal) {
        const howMany = Math.floor(
          (farm.filter((animal) => animal === rightRoll).length + 1) / 2
        );
        if (howMany > 0) {
          for (let i = 0; i < howMany; i++) {
            finalObject.get.push(rightRoll);
          }
        }
      }
    }
    if (leftRoll === "w") {
      if (!farm.includes("bd")) {
        const sheep =
          farm.filter((animal) => animal === "s").length +
          finalObject.get.filter((animal) => animal === "s").length;
        const pig =
          farm.filter((animal) => animal === "p").length +
          finalObject.get.filter((animal) => animal === "p").length;
        const cow =
          farm.filter((animal) => animal === "c").length +
          finalObject.get.filter((animal) => animal === "c").length;

        if (sheep > 0) {
          finalObject.loose.push(Array(sheep).fill("s"));
        }
        if (pig > 0) {
          finalObject.loose.push(Array(sheep).fill("p"));
        }
        if (cow > 0) {
          finalObject.loose.push(Array(sheep).fill("c"));
        }
      } else {
        finalObject.loose.push("bd");
      }
    }

    if (rightRoll === "f") {
      if (!farm.includes("sd")) {
        const rabbits =
          farm.filter((animal) => animal === "r").length +
          finalObject.get.filter((animal) => animal === "r").length -
          1;
        if (rabbits > 0) {
          finalObject.loose.push(Array(rabbits).fill("r"));
        }
      } else {
        finalObject.loose.push("sd");
      }
    }
    return finalObject;
  }
};
export default diceRollHandler;
