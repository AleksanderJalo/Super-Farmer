import { create } from "zustand";

export const usePlayer1Store = create((set) => ({
    turn: 0
    ,
  farm: [["r","r"], [], [], []],
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
      leftSpin[state.turn]=animal;
      return {
        ...state,
        leftSpin,
      };
    }),
  setRightSpin: (animal) =>
    set((state) => {
      const { rightSpin } = state;
      rightSpin[state.turn]=animal;
      return {
        ...state,
        rightSpin,
      };
    }),
    nextTurn: () => set((state) => {
        const newTurn = state.turn + 1;
        return {
            turn: newTurn > 4 ? 1 : newTurn
        }
  })
}));
