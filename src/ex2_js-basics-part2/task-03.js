// Задание 3

function sumElements(array) {
  const resultArray = [0, 0, 0];
  for (let i = 0; i < array.length; i + 1) {
    if (array[i] === 0) {
      resultArray[2] += 1;
    } else if (array[i] % 2 === 0 && array[i] !== null) {
      resultArray[0] += 1;
    } else if (array[i] % 2 !== 0 && !isNaN(array[i])) {
      resultArray[1] += 1;
    }
  }
  console.log(resultArray);
}

module.exports = sumElements();
