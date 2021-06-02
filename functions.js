//this is general here we adding two numbers and printing the result
var a = 10;
var b = 20;
var sum = a + b;
console.log(sum);

//now we using function to do this
//here in paranthesis we using parameters and also we set value bcz we don't want to any fuction call without argument gives NaN
function sum1(a = 20, b = 30) {
  //this function definition ,declaration

  var total = a + b;
  return total;
}

sum1(); //calling function this way,this function call using no argument then it gives NaN but when we don't want NaN then we have set default parameter value in function paranthesis
sum1(30, 40); //these are argument passed in function call
sum1(40, 50);

//function expression
var funcexp = sum1(15, 25);
console.log(`the total is ${funcexp}`);

//anonymous function
var sam = function (a = 30, b = 23) {
  return a + b;
};
var sam1 = sam(99, 88);
console.log(sam1);
console.log(`this is second total ${sam()}`);
