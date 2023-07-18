/* для обращения к свойствам объекта внутри методов 
рекомендуется использовать ключевое слово this */

"use strict";

const petya = {
  userName: "Petya",
  showName() {
    console.log(this.userName);
  },
};

petya.showName();

const bookShelf = {
  authors: ["Бернард Корнуэлл", "Роберт Шекли"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

bookShelf.getAuthors();
