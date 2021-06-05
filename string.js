//examples
let nyName = "sabyasachi";
console.log(nyName);

let ytName = new String("thapa thechnical"); //it gives an aray
console.log(ytName);

//how to find the length of a string
//String.prototype.length

console.log(nyName.length);

//escape character
//when we want to use quote in quote
let sentence = "we are the so-cold 'vikings' from the north";
console.log(sentence);

//finding a string in a string
//we using indexof() method
//the indexof() method returns the index of (the position of) the first
//occurrence of a specified text in a string
const myBioData = "I am the thapa technical";
console.log(myBioData.indexOf("t"));
console.log(myBioData.indexOf("t", 9));

//lastIndexOf()
//returns the index within the calling string object of the
//last occurrence of searchvalue ,or -1 if not found

console.log(myBioData.lastIndexOf("t"));

//searching for a string in a string
//search(regexp)
//search method searches a string for a specified value and returns the position of the match
//it cannot take second argument for searching
//it return -1 when specified value not found
const mydata = "i am sabyasachi young younger";
console.log(mydata.search("younger", 17));

//extracting string parts
//there are 3 methods for extracting a part of a string
//slice(start,end)
//substring(start,end);
//substr(start,length);

//1) slice() method
//.slice extract a part of a string and returns the extracted part
//in a new string.

//.the method takes 2 parameters : the start position,
//and the end position (end not included).
//.it select the element starting any from the given start argument,and ends at,but does not include,
//the given end argument
//.the original array will not be changed
const str = "apple, bananaa, kiwi";
let res = str.slice(0, 4);
let res1 = str.slice(7, -9);
console.log(res);
console.log(res1);

//challenge
//Q)display only 280 characters of a string like the one used in twitter?
let mytweet =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let res3 = mytweet.slice(0, 280);
console.log(res3);

//2)substring() method
//.substring is similar to slice()
//.the difference is that substring() cannot accept
//nagative index
//.if we give negative value  then the characters are counted from the 0th pos

let str1 = "apple, bananaa, kiwi";
let res4 = str1.substring(4, 3);
console.log(res4);

//3)substr()
//substr is similar to slice()

//replacing string content
//replace(secrh for,replacewith)
//.the replace method replaces a specified value with another value in a string
//points to remember
//1.the rplace method does not change the string
//it is called on. It returns a new string
//2.by default ,the replace method is case sensitive
//only the first match

let mybio = "i am vinod bahadur thapa vinod";
let rplcdata = mybio.replace("vinod", "rekha");
console.log(rplcdata);

//extracting string characters
//there are 3 methods for extractinng string charaters

//charAt()
//charcodeAt(pos)
//property acess[]

//1)the charAt()
//.the charAt method returns the character at a specified
//index(pos) in a string
let str5 = "Hello world";
let char = str5.charAt(2);
console.log(char);

//2)charcodeAt()
//it returns the unicode of the character at a specified position of a string
//the method returns a UTF-16 code
let str7 = "hello world!";
let unico = str7.charCodeAt(0);
console.log(unico);

//challenge
//Q)return the unicode of the last character in a string
let str6 = "oye lucky lucky oye";
let chlg = str6.charCodeAt(str6.length - 1);
console.log(chlg);

//3)property Access
//ecma5 allows property access[] on strings
var str8 = "hello worlds";
console.log(str8[0]);

//useful method
//trim()
//trim method removes whitespace from both sides of a string
var str9 = "  hello     wolrd";
console.log(str9.trim());

//converting a string to an array
//a string can be converted to an array
//with the split() method
var str10 = "1 am  a super man";
var spl = str10.split(" ");
console.log(spl);
