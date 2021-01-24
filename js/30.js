function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  return {
    completed,
    category,
    priority,
    ...data,
  };
  // Пиши код выше этой строки
}
console.log(makeTask());
