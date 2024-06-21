// Задание 6

function simpleNumber(number) {
  if (number === 0 || number === 1) {
    console.log('Не причисляется ни к простым, ни к составным числам');
  } else if (number > 1000) {
    console.log('Данные не верны');
  } else if (
    (number.toString().length === 1 && number % 2 !== 0)
    || number === 2
  ) {
    console.log('Простое');
  } else {
    let isSimple = true;
    for (let i = 2; i < 10; i + 1) {
      if (number % i === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple === true) {
      console.log(`Число: ${number} - Простое число`);
    } else {
      console.log(`Число: ${number} - Составное число`);
    }
  }
}
module.exports = simpleNumber();
