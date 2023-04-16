const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [...arr];
  newArr.forEach((item, index, arr) => {
    if (item == commands[0] && arr[index + 1]) {
      arr.splice(index + 1, 1);
    } else if (item == commands[1] && index !== 0) {
      arr.splice(index - 1, 1);
    } else if (item == commands[2] && arr[index + 1]) {
      arr[index] = arr[index + 1];
    } else if (item == commands[3] && index !== 0 && typeof arr[index - 1] == 'number') {
      arr[index] = arr[index - 1];
    }
  });
  let filterArr = newArr.filter(item => !commands.includes(item));
  return filterArr;

}

module.exports = {
  transform
};
