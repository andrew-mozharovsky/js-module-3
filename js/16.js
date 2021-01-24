function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const salariesValue = Object.values(salaries);
  for (const value of salariesValue) {
    totalSalary += value;
  }
  // Пиши код выше этой строки
  return totalSalary;
}
