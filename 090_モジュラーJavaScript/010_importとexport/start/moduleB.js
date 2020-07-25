// import defaultVal, { publicVal as val, publicFn as Fn } from './moduleA.js';
import defaultVal, * as moduleA from './moduleA.js';

console.log(moduleA);
console.log(moduleA.publicVal);
console.log(defaultVal);
console.log(val);
Fn();
