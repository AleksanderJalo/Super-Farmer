import { create } from "zustand";

export const usePlayer1Store = create((set) => ({
  turn: 0,
  farm: [
    ["r", "r", "r", "r", "r", "r", "r"],
    ["r", "r", "r"],
    ["r", "r"],
    ["r", "r", "r", "r"],
  ],
  isHuman: [true, false, false, false],
  traded: [false, false, false, false],
  setTraded: () => {
    set((state) => {
      const newTraded = state.traded;
      newTraded[state.turn] = !newTraded[state.turn];
      return { traded: newTraded };
    });
  },
  canTrade: [
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  ],
  leftSpin: [null, null, null, null],
  rightSpin: [null, null, null, null],
  addAnimal: (animal) =>
    set((state) => {
      const { farm } = state;
      farm[state.turn].push(animal);
      return {
        ...state,
        farm,
      };
    }),
  setLeftSpin: (animal) =>
    set((state) => {
      const { leftSpin } = state;
      leftSpin[state.turn] = animal;
      return {
        ...state,
        leftSpin,
      };
    }),
  setRightSpin: (animal) =>
    set((state) => {
      const { rightSpin } = state;
      rightSpin[state.turn] = animal;
      return {
        ...state,
        rightSpin,
      };
    }),
  nextTurn: () =>
    set((state) => {
      const newTurn = state.turn + 1 > 3 ? 0 : state.turn + 1;
      return {
        turn: newTurn,
        leftSpin: [null, null, null, null],
        rightSpin: [null, null, null, null],
      };
    }),
  checkTrades: () =>
    set((state) => {
      const animals = state.farm[state.turn];
      const trades = state.canTrade[state.turn];
      const rabbits = animals.filter((animal) => animal === "r").length;
      const sheeps = animals.filter((animal) => animal === "s").length;
      const pigs = animals.filter((animal) => animal === "p").length;
      const cows = animals.filter((animal) => animal === "c").length;
      const horses = animals.filter((animal) => animal === "h").length;
      const smallDog = animals.filter((animal) => animal === "sd").length;
      const bigDog = animals.filter((animal) => animal === "bd").length;
      if (rabbits > 5) {
        trades[0] = true;
      }
      if (sheeps > 0) {
        trades[1] = true;
        trades[9] = true;
        if (sheeps > 1) {
          trades[3] = true;
        }
      }
      if (pigs > 0) {
        trades[2] = true;
        if (pigs > 2) {
          trades[5] = true;
        }
      }
      if (cows > 0) {
        trades[4] = true;
        trades[11] = true;
        if (cows > 1) {
          trades[7] = true;
        }
      }
      if (horses > 0) {
        trades[6] = true;
      }
      if (smallDog > 0) {
        trades[8] = true;
      }
      if (bigDog > 0) {
        trades[10] = true;
      }

      const newCanTrade = state.canTrade;
      newCanTrade[state.turn] = trades;
      return {
        canTrade: newCanTrade,
      };
    }),
  deleteAnimal: (animal, count) => {
    set((state) => {
      const newArray = [...state.farm[state.turn]];
      let remainingCount = count;
      for (let i = newArray.length - 1; i >= 0; i--) {
        if (newArray[i] === animal) {
          newArray.splice(i, 1);
          remainingCount--;
        }
        if (remainingCount === 0) {
          break;
        }
      }
      const newFarm = state.farm;
      newFarm[state.turn] = newArray;
      return { farm: newFarm };
    });
  },
  addMultipleAnimals: (animal, count) => {
    set((state) => {
      const newArray = state.farm[state.turn];
      for (let i = 0; i < count; i++) {
        newArray.push(animal);
      }
      const newFarm = state.farm;
      newFarm[state.turn] = newArray;
      return { farm: newFarm };
    });
  },
}));
