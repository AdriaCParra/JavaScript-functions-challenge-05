//import isTypeOf' and execute

import isTypeOf from "./isTypeOf.js";

console.log(isTypeOf("hello", "boolean")); // false
console.log(isTypeOf(123, "boolean")); // false
console.log(isTypeOf(true, "boolean")); // true
