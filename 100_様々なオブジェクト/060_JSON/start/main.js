const obj = { a: 0, b: 1, c: 2 };

function replacer(prop, value) {
  if (value < 1) {
    return;
  } else {
    return value;
  }
}

const json = JSON.stringify(obj, replacer);
console.log(json);
console.log(typeof json);

const obj2 = JSON.parse(json);
console.log(obj2);
