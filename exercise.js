//  Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);

console.log(0.3 + 0);
console.log(0.3);

console.log(typeof Number(23));
console.log(typeof +'23');
console.log(0.1 + 0.2 === 0.3);

console.log(Number.parseInt('30fr'));
console.log(Number.parseInt('e30'));
console.log(Number.parseFloat('2.3rem'));

console.log(Number.isNaN('2'));

// Checking if value is a number
// There is 2 isFinite method , one is just isFinite() and another is Number.isFinite() the global isFinite method does type coercion then compare the value, but the Number.isFinite() method does not have type coercion

console.log(Number.isFinite(45));
console.log(Number.isFinite('22'));

// to checking is value is number or not , in this case the Number.inFinite() good to check
console.log(Number.isFinite());

// Math and rounding
console.log(Math.sqrt(25));

// maximum number
// math.max has type coercion mean it will convert the string to number
console.log(Math.max(23, 23, 2, 323, 34, '23'));

// minium number Math.min() method
// min() method has type coercion
console.log(Math.min(23, 23, 2, 345, 99, '99'));

//
console.log(Math.PI * Number.parseFloat('10') ** 2);

// math.random() give decimal number under 1 without arguments
// to get random number use math random
console.log(Math.trunc(Math.random() * 10) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(12, 15));
// console.log(randomInt(5, 10));

// to remove decimal part is used Math.trunc() that ignore all decimal part
console.log(Math.trunc(12.33));

console.log('-------Math.round()------');
console.log(Math.round(2.8));
console.log(Math.round(2.3));

console.log('-------Math.ceil()------');
console.log(Math.ceil(2.8));
console.log(Math.ceil(2.3));

console.log('-------Math.floor()------');
console.log(Math.floor(2.8));
console.log(Math.floor(2.3));

// toFixed always return string
console.log((23.902).toFixed());
console.log(+(23.902).toFixed());
