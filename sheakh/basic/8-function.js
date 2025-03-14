//> named function
function function1() {
  console.log("function1 function called", Date.now());
}
// function1();

//--------------------------------------------

//> variable function
const now = function () {
  console.log("now function called", Date.now());
};
// now();

//> arrow function]
const arrowFunction = () => {
  console.log("arrowFunction function called", Date.now());
};
// arrowFunction();

//> inline arrow function
const calculation = (number, fn) => {
  let result = 0;
  for (let i = 0; i < number; i++) {
    const temp = fn(i);
    result += temp;
  }
  return result;
};

const sum = calculation(10, (x) => {
  return x + x;
});
// console.log("sum of inline arrow function ::", sum);

//> Minimal function
const minimalFunction = (a, b) => a + b;
// console.log("minimalFunction ::", minimalFunction(10, 20));

const square = (x) => {
  const fn = function () {
    return x * x;
  };
  return fn;
};

square(10)();

//> executive function
(() => {
  return new Date();
})();

//> outer function , inner function

function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

// console.log("outer function ::", outer(10)(20));

let temp = outer(10);
console.log("temp from outer function::", temp(20));

// > Context ..
var n = 10;
function change() {
  var n = 20;
}

change();
console.log("outside context, n ::", n);

var m = { x: 10 };
function change() {
  var m = { x: 20 };
}

change();

console.log("outside context, m ::", m);

function change(n) {
  n.x = 20;
}

console.log("outside context, m ::", m);
