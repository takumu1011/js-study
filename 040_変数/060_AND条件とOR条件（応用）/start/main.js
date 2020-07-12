function hello(name) {
  // if (!name) {
  //   name = 'Tom';
  // }
  name = name || 'Tom';
  console.log('hello ' + name);
}
hello();
hello(0);
hello('Bob');

let name = 'Bob';
// if (name) {
//   hello(name);
// }
name && hello(name);
