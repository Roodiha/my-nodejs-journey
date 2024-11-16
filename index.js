const { createServer } = require('node:http');

const PORT = 3000;

const server = createServer((req, res) => {
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at PORT ${PORT}`);
});

// CONSTANTS AND VARIABLES

var port = 3000.1 // number
port = 3001
port = "3002" // string

var result = port + port;
console.log(result)

const portal = "unilorin"

let school = "gvic"
school = "opss"
console.log(school)

function square(number) {
    return number * number;
}

const new_result = square(4)

console.log(new_result)

function myFunc(theObject) {
    theObject.make = "Toyota";
}
  
const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};
  
console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"
  

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
  
console.log(factorial(3)); // 6

const x = 2
const y = "2"

x == y ? console.log(true) : console.log(false)

var a = 2
var b = 3
console.log(a += b)