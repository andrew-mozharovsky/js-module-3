// Пиши код ниже этой строки
function findMatches(testArg, ...args) {
  const matches = []; // Не изменяй эту строку
  for (const arg of args) {
    if (testArg.includes(arg)) {
      matches.push(arg);
    }
  }
  // Пиши код выше этой строки
  return matches;
}
