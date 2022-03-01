// Задание 1

function showType(argument) {
  switch (typeof argument) {
    case "string":
      return "string";
    case "number":
      return isNaN(argument) ? "undeined" : "number";
    default:
      return "undefined";
  }
}
showType();

// Задание 2

function showElement(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log("Общее число элементов: " + array.length);
  return;
}
showElement(array);

// Задание 3

let array = [1, 2, 3, 0];
let resultArray = [0, 0, 0];
function sumElements(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      resultArray[2]++;
    } else if (array[i] % 2 === 0 && array[i] != null) {
      resultArray[0]++;
    } else if (array[i] % 2 != 0 && !isNaN(array[i])) {
      console.log(array[i] % 2);
      resultArray[1]++;
    }
  }
}

sumElements(array);
console.log(resultArray);

// Задание 4

const array = [1, 1, 1, 1, 1, 1];
function isSame(array) {
  let isTrue = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] != array[i - 1]) {
      isTrue = false;
    }
  }
  console.log(isTrue);
}
isSame(array);

// Задание 5

const array = [13, 111, 1, 1, 2, 121];
function showMaxNumber(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  console.log(maxNumber);
}
showMaxNumber(array);

// Задание 6

function simpleNumber(number) {
  if (number === 0 || number === 1) {
    console.log("Не причисляется ни к простым, ни к составным числам");
  } else if (number > 1000) {
    console.log("Данные не верны");
  } else if (
    (number.toString().length === 1 && number % 2 != 0) ||
    number === 2
  ) {
    console.log("Простое");
  } else {
    let isSimple = true;
    for (let i = 2; i < 10; i++) {
      if (number % i === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple === true) {
      console.log("Число: " + number + " - Простое число");
    } else {
      console.log("Число: " + number + " - Составное число");
    }
  }
}
simpleNumber(1002);
