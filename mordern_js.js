//var
var name1 = "sabya";
name1 = "sachi";
console.log(name1); //it gives output the updated value bcz we know the variable name with var keyword are always mutable

//let
let name2 = "rahul";
name2 = "gandhi";
console.log(name2); //it also gives updated value bcz it similar to var

//const
const name3 = "narendra";
//name3 = "modi";
console.log(name3); //it gives error bcz when we intialize the const variable then it would be never reassigned

//function scope in var
function biodata() {
  var frstname = "sabya";
  console.log(frstname);
  if (true) {
    var lastname = "sachi";
    console.log(lastname);
    console.log(frstname);
  }
  console.log(lastname); //it gives internal block scope value
}
biodata();

//block scope in let and cost
let biodata1 = function () {
  let firstname = "sabya";
  console.log(firstname);
  if (true) {
    let lastname = "sachi";
    console.log(lastname);
    console.log(firstname);
  }
  //console.log(lastname);//it gives error
};

biodata1();

//template literals
var memo = 23;
console.log(`there are tottal number of ${memo} momo`); //here without using sting concatenation we write long sentence by using template literals

//arrow function
// const fun=()=>{
//     let a=45;
//     let b=99;
//     let tot=a+b;
//     console.log(tot);
// }

// fun();

//or;

const fun = (a, b) => `the sum is ${a + b}`;

console.log(fun(4, 5));
