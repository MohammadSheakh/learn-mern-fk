//> file name : 10-array_nd_array_function.js
/**
 * Lenght
 * isArray
 * From
 * Filter
 * Find
 * Map
 * Reduce
 */

let arr = [1, 2, 3, 4, 5];
console.log("arr.lenght :: ", arr.lenght);

//> make an array
console.log("Array.from :: ", Array.from("sheakh"));

//> array er instance kina .. sheta check korbo
console.log("array er instance kina ", arr instanceof Array);

// > inline function
const isGreater = (x) => x > 2;
console.log("greater than 2 with filter :: ", arr.filter(isGreater));

//> filter amader ke array return korleo .. find er kaj hocche
//> prothom jeta pabe .. sheta return korbe ..

console.log("with find :: ", arr.find(isGreater));

//> map prottek ta element er upor kaj kore ..
console.log("with map :: ", arr.map(isGreater));

const initValue = 0;
const sumWithInit = arr.reduce((prev, curr) => prev + curr, initValue);
console.log("sum with reduce :: ", sumWithInit);
