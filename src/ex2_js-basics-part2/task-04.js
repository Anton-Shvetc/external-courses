// Задание 4

function isSame(array) {
  let isTrue = true;
  for (let i = 1; i < array.length; i + 1) {
    if (array[i] !== array[i - 1]) {
      isTrue = false;
    }
  }
  console.log(isTrue);
}
module.exports = isSame();
