const farmDifference = (oldFarm, newFarm) => {
    const finalObject = []
    const animals = ["r", "s", "p", "c", "h", "sd", "bd"];
    const animalsDifference = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < animals.length; i++) {
    animalsDifference[i] =
      oldFarm.filter((animal) => animal === animals[i]).length -
      newFarm.filter((animal) => animal === animals[i]).length;
    }
    for (let i = 0; i < animalsDifference.length; i++){
        if (animalsDifference[i] !== 0) {
            const array = []
            array.push(animals[i]);
            array.push((-1) * animalsDifference[i]);
            finalObject.push(array);
        }
    }
    return finalObject;
};

export default farmDifference;
