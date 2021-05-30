var my_var = "sabyasachi";
console.log(my_var);

// var 1myAge=78 this gives error

var myAge = 78; // if u write variable in camel case it shows standardtize
// var _myAge,$myAge this not gives error
// var _my Age (this gives you an error)
console.log(myAge);

//data type in javascript

//string
var myName = "sbayaschi";
console.log(myName);
//typeof operator using
console.log(typeof myName);

//number
var myNum = 34;
console.log(myNum);
console.log(typeof myNum);

//boolean
var myBol = true;
console.log(myBol);
console.log(typeof myBol);

//challenge
console.log("10" + 20); //when number concat with string it gives string
console.log("10" - 20); // but here we not concating here we doing subtracting
// and here js gives bug
console.log("java" + "Script"); //this also gives string bcz here string conat with string

console.log("java" - "Script"); //this gives not error it gives NaN(not a number)
console.log(true + true); //this gives 2 bcz in js true=1,false=0
console.log(false - true);

//difference between Null vs undefined?

var isnull = null;
console.log(isnull); //it gives null
console.log(typeof isnull); //this is 2nd js bug it gives object but we know
//there is no any object type datatype
var isdefined;
console.log(isdefined); //it gives undefined bcz we don't initialize the variable
console.log(typeof isdefined); //it gives also undefined

//challenge
console.log(NaN === NaN);
