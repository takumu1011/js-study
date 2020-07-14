function fn(a, b) {
  console.log(a, b);
}
function fn(a) {
  console.log(2);
}
fn(1);

function fn() {
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
}
fn(1, undefined);
