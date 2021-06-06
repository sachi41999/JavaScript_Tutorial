//math object in javascript

console.log(Math.PI); //it gives pi value

//math.round()
//it rounded to its nearest integer
let num = 2.456;
console.log(Math.round(num));

//math.pow()
//Math.pow(x,y) returns the value of x to the power of y

console.log(Math.pow(3, 2));
console.log(3 ** 2);

//math.sqrt()
let num = 36;
console.log(Math.sqrt(36));

//Math.abs()
//returns the absolute +ve value of x
let num1 = -39;
console.log(Math.abs(num1));

//math.ceil() and floor()
//it return the up to its nearest integer
//it returns the down to its nearest integer

console.log(Math.ceil(4.59));
console.log(Math.floor(4.59));

//math.min() and max()
console.log(Math.min(23, 19, 44));
console.log(Math.max(23, 19, 44));

//math.random()
//returns a random number between 0(inclusive) and 1(exclusive)
console.log(Math.random());

//when we want to set own range
console.log(Math.random() * 10); //it gives decimal number between 0 to 10

//now we want floor value of random
console.log(Math.floor(Math.random() * 10));
