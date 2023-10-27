// const square = (number) => {
//     return number * number
// }

const square = (number) => {
  if (number === 1) {
    return number;
  }

  return Math.pow(number, 2);
};

module.exports = square;
