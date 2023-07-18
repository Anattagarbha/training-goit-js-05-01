/* метод apply это аналог метода call за исключением того, 
что синтаксис передачи аргументов требует не перечисление, 
а массив, даже если аргумент всего один */

// foo.apply(obj, [arg1, arg2, ...])

"use strict";

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.userName}.`);
}

const mango = {
  userName: "Манго",
};

const poly = {
  userName: "Поли",
};

greetGuest.apply(mango, ["Welcome"]);

greetGuest.apply(poly, ["Hello"]);
