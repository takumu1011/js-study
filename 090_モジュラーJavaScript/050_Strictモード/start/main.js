// 'use strict';

function fn() {
  'use strict';
  // a = 0;
  return this;
}
console.log(fn());
fn();
console.log(a);
