const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    this.potions.splice(this.potions.indexOf(oldName), 1, newName);
    // Пиши код выше этой строки
  },
};
