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

// The reminder operator
console.log(3 / 2);
console.log(3 % 2);
console.log(9 / 3);
console.log(9 % 3);

const isEven = n => n % 2 === 0;
console.log(isEven(5));

// Numeric separators
// Numeric separators can not be used in Number() method to make any string number to number
// and also to store number and while using underscore should be between number, not at the first of the sentence or at the last

const diameter = 245_343_989;
console.log(diameter);
console.log(Number('232_3'));

// In parseInt() method can be used a underscore it does not effect the value
console.log(parseInt('232_232'));

// Working with Bigint
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// BigInt()
console.log(BigInt(1212121085));
console.log(940349043090439409395n);

//  to calculate the bigint number should be both bigint
console.log(11n / 3n);

// Creating dates
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());

// date has method to set time

const future = new Date(2037, 10, 19, 15, 23);
const num = 23323890498;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping:
};
console.log('Num', new Intl.NumberFormat('en-GB').format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num),
);
