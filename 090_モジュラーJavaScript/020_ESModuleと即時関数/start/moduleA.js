const moduleA = (function () {
  console.log('ESmodule called');

  let privateVal = 1;
  export let publicVal = 10;

  export function publicFn() {
    console.log('publicFn called: ' + publicVal);
  }

  function privateFn() {}

  return {
    publicFn,
    publicVal,
  };
})();

const moduleB = (function ({ publicFn, publicVal }) {
  publicFn();
  publicFn();
  publicFn();
  console.log(publicVal++);
  console.log(publicVal++);
})(moduleA);
