//arrays
//   index:   0       1           2        3
//           ⬆️      ⬆️          ⬆️      ⬆️
var names = ["vinode", "thapa", "thapa", "technical"];
// ⬆️                 ⬇️
//lower index        //upper index
//lower boundary     //upper boundary

//traversing in an array
console.log(names[1]); //(it gives thapa bcz thapa at 1 index) if we want a particular element from array the we write this way

//if we want to check the length of array
console.log(names.length);

//if we want last element from array;
console.log(names[names.length - 1]);

//we use for loop to navigate
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//after ES6 we have for..in and for..of loop
//for..in
for (let ele in names) {
  console.log(ele); //it gives only index of that element
}

//for..of
for (let ele of names) {
  console.log(ele); //it gives element
}

//arrays.prototype.foreach()
//calls a function for each element in the array
//but here we can't use break statement
names.forEach(function (ele, index, array) {
  console.log(`${ele} : ${index}`);
});

//for each with fat arrow function
names.forEach((ele) => {
  console.log(ele);
});

//searching and filter
//1 indexof() ✋
console.log(names.indexOf("vinode"));

//2 lastindexOf() ✋
console.log(names.lastIndexOf("thapa"));

//3 includes()
console.log(names.includes("thapa")); //it gives true bcz thapa  is present on an array at index 1
console.log(names.includes("thapa", 2)); //it also gives true bcz it search thapa from 2nd index and thapa is present at 2nd index if thapa didn't present then it gives false

//4 arr.find(callback())
//if it does satisfy the cond then it gives undefined
const prices = [300, 200, 400, 350, 500, 600];
const fin = prices.find((cuurval) => cuurval < 400);
console.log(fin);

//5 arr.findindex()
//if it doesn't satisfy the cond. then it fives -1
const fin2 = prices.findIndex((crrvalue) => crrvalue < 400);
console.log(fin2);

// 6 filter()
const fil = prices.filter((ele, index) => {
  return ele < 400;
});
console.log(fil);

//7 sort();
const array = [300, 200, 400, 350, 600, 500];
console.log(`sorting string array: - ${names.sort()}`);
console.log(`sorting integer array :- ${array.sort()}`);

//perform CRUD
//1 push()
const animal = ["pigs", "goats", "sheep"];
animal.push("chicken"); //it return the new length of the array
//we add also multiple data
console.log(animal);

//2 unshift()
animal.unshift("moto");
console.log(animal); //it added the element to the beginning

const my_num = [1, 2, 3, 4, 5];
my_num.unshift(4, 6);
console.log(my_num);

//3 pop()
const veg = ["vendhi", "cobi", "parwal", "kadu"];
console.log(veg.pop());
console.log(veg);

//4 shift()
//it remove element from the beginning
const fruit = ["apple", "mango", "gauva"];
console.log(fruit.shift);
console.log(fruit);

//challenge time
//Q)add dec at the end of an array
//Q)what is the return value of splice method
//Q)update march to March(updated)
//Q)delete june from an array

const moths = ["jan", "march", "april", "june", "july"];
// we using splice method for this challenge bcz splice perfome fully crud
//sol1
const nemoth = moths.splice(moths.length, 0, "dec"); //we are adding to the last
console.log(moths);

//sol2
console.log(nemoth); //it gives empty array

//sol3
const indexmoth = moths.indexOf("march");
if (indexmoth != -1) {
  moths.splice(indexmoth, 1, "March");
  console.log(moths);
} else {
  console.log("data not found");
}

//sol 4
const indexmth = moths.indexOf("june");
if (indexmth != -1) {
  moths.splice(indexmth, 1);
  console.log(moths);
} else {
  console.log("data not found");
}

// Map()
//it return the boolean value

const array1 = [1, 2, 4, 9, 16, 34];
let newarr = array1.map((ele) => {
  return ele > 9;
});

console.log(array1);
console.log(newarr);

//2nd exapmle
let newarr1 = array1.map((ele, index, arr) => {
  return `index no. =${index} and the value=${ele} from the array ${arr}`;
});

console.log(newarr1);

//challenge time
//find the square root of each element in an array?
let arr = [25, 36, 49, 64, 81];

//sol
let nearr1 = arr.map((ele) => {
  return Math.sqrt(ele);
});

console.log(nearr1);

//multiply each element by 2 and return only those
//elements which are greater than 10?

//sol
let arr2 = [2, 3, 4, 6, 8];
let newarray2 = arr2
  .map((ele) => {
    return ele * 2;
  })
  .filter((ele) => {
    return ele > 10;
  });

console.log(newarray2);
