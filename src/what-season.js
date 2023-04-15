const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let season = ['winter',
    'spring',
    'summer',
    'autumn',];
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  } else if (date == Date.prototype.toString.call(new Date()) || (Object.getOwnPropertyNames(date).length) > 0) {
    throw new Error("Invalid date!");
  }

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date.getUTCMonth() <= 1 && date.getUTCMonth() >= 0 || date.getUTCMonth() == 11) {
    return season[0];
  } else if (date.getMonth() <= 4 && date.getMonth() >= 2) {
    return season[1];
  } else if (date.getMonth() <= 7 && date.getMonth() >= 5) {
    return season[2];
  } else {
    return season[3];
  }
}
console.log(getSeason());
module.exports = {
  getSeason
};
