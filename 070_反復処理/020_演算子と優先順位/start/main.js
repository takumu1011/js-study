let a = 1 + 2 * 3;
console.log(a);

let b = (1 + 2) * 3;
console.log(b);

let c = a++;
console.log(c);

let d = ++a;
console.log(d);

let e = 0;
let f;
e = f = 1;
console.log(e);

function fn() {
  let a = 0;
  return a++;
}
console.log(fn());
