const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    return changeArray(members);
  }
}
function changeArray(array) {
  let newArray = array.filter(item => {
    if (typeof item == 'string') {
      return item;
    }
  });
  let trimArray = [];
  newArray.forEach(element => {
    trimArray.push(element.trim());
    return trimArray;
  });
  let changeArr = trimArray.map((item) => {
    return item[0].toUpperCase();
  });
  let sortArr = changeArr.sort();
  console.log(sortArr);
  return sortArr.join('');
}
console.log(createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]));
module.exports = {
  createDreamTeam
};