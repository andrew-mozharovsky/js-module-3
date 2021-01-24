const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки

    this.potions.splice(this.potions.indexOf(potionName), 1);
    return this.potions;
    // Пиши код выше этой строки
  },
};
console.log(atTheOldToad.removePotion('Дыхание дракона'));
