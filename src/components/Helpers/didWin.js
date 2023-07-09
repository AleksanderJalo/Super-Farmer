const didWin = (farm) => {
  const animals = ["r", "s", "p", "c", "h"];
  for (const animal of animals) {
    if (!farm.includes(animal)) {
      return false;
    }
  }

  return true;
};

export default didWin;
