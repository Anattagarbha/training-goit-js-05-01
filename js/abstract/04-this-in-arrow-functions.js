/* стрелочные функции не имеют своего this */

const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // window

const user = {
  userName: "Mango",
};

user.showContext = showThis;

user.showContext(); // window
