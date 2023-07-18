"use strict";

// foo.call(obj, arg1, arg2,...);

/* метод call вызовет функцию foo так, что в this будет ссылка 
на объект obj, а также передаст аргументы arg1, arg2 и т. д. */

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.userName}.`);
}

const mango = {
  userName: "Манго",
};
const poly = {
  userName: "Поли",
};

greetGuest.call(mango, "Welcome");

greetGuest.call(poly, "Hello");
