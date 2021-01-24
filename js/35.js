const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    this.books.splice(this.books.indexOf(oldName), 1, newName);
    return this.books;
    // Пиши код выше этой строки
  },
};
console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
