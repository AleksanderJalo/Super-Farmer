const farmDifference = (oldFarm, newFarm) => {
    const animals = ["r", "s", "p", "c", "h", "sd", "bd"];
    console.log(oldFarm);
    console.log(newFarm);
    const animalsDifference = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < animals.length; i++) {
    animalsDifference[i] =
      oldFarm.filter((animal) => animal === animals[i]).length -
      newFarm.filter((animal) => animal === animals[i]).length;
    }
};

export default farmDifference;
