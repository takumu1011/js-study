function a() {
  console.log('called');
}
a();

(function () {
  console.log('called');
})();

// (a)();

let b = (1 + 2) * 3;

let c = (function () {
  let privateVal = 0;
  let publicVal = 10;
  console.log('called');

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called');
  }

  return {
    // publicVal: publicVal;
    publicVal,
    publicFn,
  };
})();

c.publicFn();
