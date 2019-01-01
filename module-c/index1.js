const { add, multiply, divide } = require('module-a')

const newfunc = (a, b) =>
       divide(multiply(add(a, b), 6), 2);

const result = newfunc(1, 2)
console.log(result);
