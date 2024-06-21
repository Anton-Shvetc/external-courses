// Задание 1

function showType(argument) {
  switch (typeof argument) {
    case 'string':
      return 'string';
    case 'number':
      return isNaN(argument) ? 'undeined' : 'number';
    default:
      return 'undefined';
  }
}
module.exports = showType();
