/* значение контекста this внутри функции (не стрелочной) 
определятся не в момент ее создания, а в момент вызова */

// this в глобальной области видимости

/* в глобальной области видимости, если скрипт выполняется 
не в строгом режиме, this ссылается на объект window */

/* в строгом режиме значение this, в глобальной области видимости, будет undefined */

function foo() {
  console.log(this);
}

// this в методе объекта

/* если функция была вызвана как метод объекта, то контекст 
будет ссылаться на объект, частью которого является метод */

const petya = {
  userName: "Petya",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.userName);
  },
};

petya.showThis();
petya.showName();

//  сложный пример для лучшего понимания

function showThis() {
  console.log("this is in showThis: ", this); //window
}

const user = {
  userName: "Mango",
};

user.showContext = showThis;

user.showContext();
