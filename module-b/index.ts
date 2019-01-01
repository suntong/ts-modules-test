import { add, multiply, divide } from "module-a";

export const myfunc = (a: number, b: number) =>
       divide(multiply(add(a, b), 2), 2);

const result = myfunc(1, 2);
console.log(result);
