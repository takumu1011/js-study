const arry = [1, 2, 3, 4, 5];
const arry2 = arry.concat([6, 7, 8]);
arry.push(6);
// const result = arry.pop();
// const result = arry.splice(0, 3);
const result = arry.splice(0, 3, 1, 2);
console.log(arry2);
console.log(arry, result);
