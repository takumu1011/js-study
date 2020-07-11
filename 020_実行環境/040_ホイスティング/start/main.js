a();

function a() {
  let c = 1;
  d();
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
}

console.log(b);
// var b = 0;
let b = 0;
console.log(b);
