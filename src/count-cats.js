const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let l = 0; l < matrix[i].length; l++) {
      if (matrix[i][l] == '^^') {
        sum++;
      }
    }
  }
  return sum;
}
console.log(countCats([[0, 1, '^^', '^^'], [0, '^^', 2], ['^^', 1, 2]]));

module.exports = {
  countCats
};
