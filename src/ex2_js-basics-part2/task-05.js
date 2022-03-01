// Задание 5

function showMaxNumber(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i + 1) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  console.log(maxNumber);
}
showMaxNumber();
