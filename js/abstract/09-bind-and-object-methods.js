/* при передаче методов объекта как колбэк-функций, 
контекст не сохраняется. Колбэк это ссылка на метод, 
которая присваивается как значение параметра, 
вызываемого без объекта */

/* метод bind используется для привязки контекста 
при передаче методов объекта как колбэк-функций */

"use strict";

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  console.log(`Обрабатываем заявку от ${callback()}.`);
}

makeMessage(customer.getFullName.bind(customer));
