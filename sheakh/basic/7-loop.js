/**
 *
 * For In : loop through the properties of an object
 * For Of : loop through the values of an iterable object
 * Iterable : a sequence of elements ..
 */

/* //> while loop with continue .. 
let x = 10;
while (x > 0) {
  x--; // break condition
  if (x % 2 == 0) {
    console.log("--");
    continue;
  }
  console.log("x ::", x);
}
  */

//>  for in
j = { name: "mern", type: "course", lang: "js" };
for (let key in j) {
  console.log(key, j[key]);
}

// > This will not work .. as j is not an iterable object

// for (let key of j) {
//   console.log(key);
// }

//> lets take something which is iterable ..

let arr = [1, 2, 3];
for (let key of arr) {
  console.log(key);
}
