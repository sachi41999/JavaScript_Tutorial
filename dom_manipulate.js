//widows vs document
//DOM vs BOM
//DOM Navigate
//searching and getting elements reference

//1) windows vs document
//windows:-
//💠window is the main conatainer or we can say the global object and any operations related to entire
//   browser window can be a part of window object
//💠all the members like objects,methods or properties,if they are the part of window
//   object then we do not refer the window object
//💠window has methods properties and object ex. setTimout() or setInterval() are
//   where as Document is the object of the Window and it also has a screen object with properties
//   describing the physical display

//document:-
//💠where as the Dom is the child of window object
//💠where in the Dom we need to refer the document if we want to use documnet object
//   methods or properties
//💠document is just the object of the global object that is window which deals with the doument,the HTML elements themselves

//2)DOM vs BOM
//👉the dom is the document object modal,which deals with the document
//   the html elements themeselves e.g. document and all traversal you
//   would do in it ,events,etc.

//for example:
//change the background color to red
// document.body.style.background="red";

//👉the Bom is the browser object modal ,which deals with browser componenets
//   aside from the document ,like history,location.navigator and screen
//   (as well as some others that very by browser). or
//   In simple meaning all the window operations which comes under Bom performed
//   using Bom

//lets some more practical on history object

//function alert/confirm/prompt are also a part of BOM:
//they are directly not related to the document,
//nut represent pure browser methods of communicating with the user

alert(location.href);
if (confirm("want to visit youtube?")) {
  location.href = "https://www.youtube.com";
}

//3) Dom navigation (this area we include html page also name with dom_navigate)
//1 : document.documentElement
//return the element that is the root element of the document.

//2: document.head
//3: document.body
//4: document.body.childNodes(include tab,enter and whitespace)
//list of the direct children only
//5: document.children(without text nodes,only regular elements)
//6: document.childNodes.length

//👉practice time
//how to check any element have childNode or not
//we will use hasChildNodes()

//👉practice time
//how to find the child in dom tree?

//how to find the parent Nodes?
//document.body.parentNode
//document.body.parentElement

//how to find or access the siblings?
//document.body.nextsibling
//document.body.nextelementsibling
//document.body.previoussibling
//document.body.previouselementsibling

//👉how to search the elements and the references
//we will see the new file

//Q) difference between document.getelementbyid vs queryselector
//A)👉document.getelementbyid
//    it returns a reference to the element by its Id
//    if the element with the specified Id is not in the document,
//     it will return null
//  👉queryselector
//     returns the first element within the document
//     that matches the specified group of selectors,
//      or null if no matches are found
