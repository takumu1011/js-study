function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Person.prototype.gender = 12;
Object.prototype.hello = function () {
  console.log('Object: hello ' + this.name);
};

const bob = new Person('Bob', 18);
console.log(bob);
const result = bob.hasOwnProperty('hello');
console.log(result);
console.log('hello' in bob);
