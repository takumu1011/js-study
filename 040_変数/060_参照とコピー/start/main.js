let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

let c = {
  prop: 'hello',
};
let d = c;
console.log(c, d);
d.prop = 'bye';
console.log(c, d);
