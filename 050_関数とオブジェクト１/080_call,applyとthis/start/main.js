function a(name, name1) {
  console.log('hello ' + name + name1);
}

const tim = { name: 'Tim' };

const b = a.bind(null, 'Tim');

b();

a.apply(tim, ['Tim', 'Bob']);
a.call(tim, 'Tim');

const arry = [1, 2, 3, 4, 5];
// Math.max(1, 2);
const result = Math.max.apply(null, arry);
const result1 = Math.max(...ary);
