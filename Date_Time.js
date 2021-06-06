//date and time
//javascript date objects represent a single moment in time in a
//platform independent format.date objects conatin a number
//that represents milisecond since 1 january 1970 UTC.

//creating date objects
//there are 4 types ways to create a new date objets:

//1)new Date()
//2) new Date(year,month,day,hours,minutes,seconds,miliseconds)
//it takes 7 arguments

//3)new Date(milieconds)
//we cannot avoid month section
//4)new Date(date string)

//.) new Date()
//Date objects are created with new date() constructor

let cuurdate = new Date(); //this not give proper date and time
console.log(cuurdate);

//when we want to print proper date and time
//so use one function "toLocaleString()";
console.log(new Date().toLocaleString()); //if we want only date time seperately

//one more fucntion "toString()";
console.log(new Date().toString()); //this gives exact time

//Date.now()
//returns the numeric value corresponding to the current
//time the number of milisecond elapsed since january 1,1970 00:00:00 UTC
console.log(Date.now());

//.)new Date(7 arguments);
//7 arguments specify year,month,day,hour,minute,sec,and milisecond(in that order)
//javascript counts months from 0 to 11.
//jan is 0 and dec is 11
//u have to pass moth always if u pass atleast one argument

const d = new Date(2021, 5, 6, 23, 22, 30, 0);
console.log(d.toLocaleString());

//.)new Date(dateString)
const d1 = new Date("june-6, 2021 11:30:00 AM");
console.log(d1.toLocaleString());

//.)new Date(milisecond)
//create a new date object as zero time plus milisecond

let dat1 = new Date(0);
let dat2 = new Date(1000000000000);
let dat4 = new Date(1622873330827);
let dat3 = new Date(86400000 * 2);
console.log(dat4.toLocaleString());

//Date Methods

//how we get the individual date
const cuurr = new Date();
console.log(cuurr.toLocaleString());
console.log(cuurr.toTimeString());
console.log(cuurr.getFullYear());
console.log(cuurr.getMonth().toString());
console.log(cuurr.getDate());
console.log(cuurr.getDay());

//how to set the individual date

console.log(cuurr.setFullYear(2023));
//the setfullyear() method can optionally set mont and date
console.log(cuurr.setFullYear(2023, 10, 5));
console.log(cuurr.setMonth(10)); //0-11 jan to dec
console.log(cuurr.setDate(5));
console.log(cuurr.toLocaleString());

//Time methods(same as Date Methos)

//challenge time
//1 if we want only date
console.log(new Date().toLocaleDateString());
//2 if we want only time
console.log(new Date().toLocaleTimeString());
//3 when both
console.log(new Date().toLocaleString());
