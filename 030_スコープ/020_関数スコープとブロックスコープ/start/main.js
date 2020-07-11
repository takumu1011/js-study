// function a() {
//   let b = 0;
//   console.log(b);
// }
// console.log(b);
// a();

const hoge = function () {
  console.log('hoge');
  const fuga = function () {
    console.log('fuga');
  };
  // fuga();
};
fuga();
