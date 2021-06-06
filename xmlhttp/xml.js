const main_div = document.getElementById("main_div");

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.eu/rest/v2/name/india?fullText=true");

req.send();

//to get the response
req.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data.capital);
});
