const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    let resalt = `Зелье '${oldName}' не найдено`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        resalt = `Нашли '${oldName}' меняем на '${newName}' `;
      }
    }
    return console.log(resalt);
  },
  // Пиши код выше этой строки
};
console.table(atTheOldToad.getPotions());
atTheOldToad.updatePotionName('Зелье скорости', 'werd');
console.table(atTheOldToad.getPotions());
