/* метод bind создаёт и возвращает копию функции foo 
с привязанным контекстом obj и аргументами arg1, arg2. 
Получается копия функции, которую можно передать, 
куда угодно, и вызвать, когда угодно. */

"use strict";

function greet(clientName) {
  return `${clientName}, добро пожаловать в ${this.service}.`;
}

const steam = {
  service: "Steam",
};

const steamGreeter = greet.bind(steam);

steamGreeter("Mango");
