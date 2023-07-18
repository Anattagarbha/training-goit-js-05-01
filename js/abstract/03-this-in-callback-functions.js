/* при передаче методов объекта как колбэк-функций, контекст не сохраняется */

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  console.log(`Обрабатываем заявку от ${callback}`);
}

makeMessage(customer.getFullName);
