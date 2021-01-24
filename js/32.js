// Пиши код ниже этой строки
function addOverNum(maxNum, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > maxNum) {
      total += arg;
    }
  }

  return total;
  // Пиши код выше этой строки
}
console.log(addOverNum(50, 15, 27));
