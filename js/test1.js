const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};

/*------------------------------------------------------------------- */

const findBestEmployee = function (employees) {
  // Write code under this line
  const objectMaxValues = Math.max(...Object.values(employees));
  const indexOfMaxValue = Object.values(employees).indexOf(objectMaxValues);
  return Object.keys(employees)[indexOfMaxValue];
};

console.log(findBestEmployee(developers));

/*-------------------------------------------------------------------------- */
/*
const findAllBestEmployee = function (employees) {
  // Write code under this line
  const totalEmployee = [];
  const objectMaxValues = Math.max(...Object.values(employees));
  const objectValues = Object.values(employees);
  const objectNames = Object.keys(employees);

  for (let i = 0; i < objectValues.length; i += 1) {
    if (objectValues[i] === objectMaxValues) {
      totalEmployee.push(objectNames[i]);
    }
  }
  return totalEmployee;
};

console.log(findAllBestEmployee(developers));
*/
