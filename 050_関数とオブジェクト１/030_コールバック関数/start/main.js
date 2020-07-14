function hello() {
  console.log('hello');
}

function bye() {
  console.log('bye');
}
function fn(cb) {
  cb();
}
fn(hello);
fn(bye);
