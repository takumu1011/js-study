import './moduleA.js';
console.log(this);

function fn() {
  console.log(this);
  this.name = 'sumikawa';
}
// fn();

const obj = {
  name: 'tkm',
  fn,
};
obj.fn();
console.log(obj.name);
console.log(window.d);
