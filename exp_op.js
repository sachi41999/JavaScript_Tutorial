//assignment operator
var x = 5;
var y = 5;
console.log("is both x and y are equal: " + x == y); //this gives wrong value
console.log(`is both x and y are equal: ${x == y}`); //this gives right value

//arithmetic operator

console.log(3 + 3);
console.log(10 - 5);
console.log(20 / 5);
console.log(5 * 6);
console.log(81 % 8);

//increment and decrement

//postfix increment
var num = 15;
var newnum = num++;
console.log(num);
console.log(newnum);

//prefix increment
var num1 = 15;
var newnum1 = ++num1;
console.log(num1);
console.log(newnum1);

//comparison operator

//equal (==)
var a = 30;
var b = "30";
console.log(a == b); //it compares the value of variable
//and === checks the datatype of the variable also
//not equal(!=)
console.log(a !== b);

//greater than equal
console.log(a >= b);

//smaller than equal
console.log(a <= b);

//logical operator
var a = 30;
var b = -20;

//and operator
console.log(a > b && b > 0);

//or operator
console.log(a > b || b > 0);

//not operator
console.log(!(a > b || b > 0));

//string operator

console.log("hello world");
console.log("hello" + "world");
var mynam = "sabya";
console.log(mynam + "sachi");

//challenge time
console.log(3 ** 3); //it gives power **(exponentiation operator)
//swap
var a1 = 5;
var b1 = 6;
console.log("before swap " + a1 + " " + b1);
var c = a1;
a1 = b1;
b1 = c;
console.log("after swap 1: " + a1 + " " + b1);

//swap without using third variable
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log("after swap 2: " + a1 + " " + b1);
