'use strict';

const countTypesInArray = array => {
  const obj = {};
  for (const val of array) {
    const type = typeof val;
    (!obj[type]) ?  Object.assign(obj, { [type]: 1 }) :  obj[type] += 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
