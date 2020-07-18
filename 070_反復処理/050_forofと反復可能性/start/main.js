const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};
Object.prototype.method = function () { };
Object.defineProperty(obj, 'prop4', {
	enumerable: false
};
const s = Symbol();
obj[s] = 'symbol';

const items = Object.entries(obj);
// const items = Object.keys(obj);
// const items = Object.values(obj);

console.log(items);

for (let [k, v] of items) {
  console.log(k, v);
}
