// let num = 0;

// increment();
// increment();
// increment();
// // let num = 0;

// function increment() {
//   // let num = 0;
//   num = num + 1;
//   console.log(num);
// }

// num = 1;
// increment();

function incrementFactory() {
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }
  return increment;
}

const increment = incrementFactory();
console.log(increment);
increment();
increment();
increment();
