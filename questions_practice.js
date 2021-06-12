const obj1 = {
  id: 3,
  name: "sabya",
  age: 23,
};

//access the object item
console.log(`id=${obj1.id} and name=${obj1.name} and age=${obj1.age}`);

//destructing the object
const { id, name, age } = obj1;

console.log(id);

//object in object
const obj2 = {
  stud1: {
    id: 1,
    name: "sachi",
    age: 34,
  },
  stud2: {
    id: 2,
    name: "ssupriya",
    age: 98,
  },
  stud3: {
    id: 3,
    name: "sabya",
    age: 108,
  },
};

//now access this
console.log(obj2.stud2.name);

//now destructing the object in object
const { stud1, stud2, stud3 } = obj2;

//fetch api

const fet = fetch("./api/some.json")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
