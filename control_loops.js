var tomr = "sunny";
if (tomr == "rain") {
  console.log("take a umbrella");
} else {
  console.log("no need to take a umbrella");
}

//challenge
//write a program that works out whether a given year is leap year or not
var year = 2020;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(`this year ${year} is a leap year`);
    } else {
      console.log(`this year ${year} is not a leap year`);
    }
  } else {
    console.log(`this year ${year} is a leap year`);
  }
} else {
  console.log(`this year ${year} is not a leap year`);
}

//what is truthy and falsy values in javascript?
//we have total 5 falsy values in javascript
//0,"",undefined,null,nan,false is a false anyway
if ((score = 0)) {
  console.log("we won the game 😃");
} else {
  console.log("we loss the game 😥");
}

//conditional (ternary) operator
//variablename=(condition)?vaue1:value2.
var age = 19;
console.log(
  age > 18 ? "u are eligible 😀 for vote" : "u are not eligible 🤔 for vote"
);

//switch statement
//find the area of circle,triangle and rectangle?
var area = "rectangl";
var pi = 3.142;
var l = 5,
  b = 4,
  r = 3;

switch (area) {
  case "circle":
    var ar = pi * r ** 2;
    console.log(`area of circle is ${ar}`);
    break;
  case "triangle":
    var ar = (1 / 2) * (l * b);
    console.log(`area of triangle is ${ar}`);
    break;
  case "rectangle":
    var ar = l * b;
    console.log(`area of rectangle is ${ar}`);
    break;
  default:
    console.log("you typed wrong input");
}

//while loop
var num = 10;
var nu = 1;
while (nu <= num) {
  console.log(nu);
  nu++;
}

//do while loop
var num1 = 20;
var nu1 = 10;
do {
  console.log("it execute");
  nu1++;
} while (nu1 < num1);

// for loop
var num2 = 20;
for (var k = 0; k < num2; k++) {
  console.log(`k value ${k}`);
}

//challenge
//a program to print table for given number
var table = 8;
for (var k = 1; k <= 10; k++) {
  console.log(`${table} * ${k} = ${table * k}`);
}
