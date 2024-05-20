// async function getUser() {
//   const response = await fetch("https://api.github.com/users/FCumut");
//   const data = await response.json();
//   console.log(data);
// }

// getUser();

// const message = require("./utilities");
// console.log(message);

// const capitalizeWords = require("./utilities");

// you also need to change structure of how you call import
// const { capitalizeWords, makeMoney } = require("./utilities");

// console.log(capitalizeWords("hello everyone"));
// console.log(makeMoney(100));

const Person = require("./Person");

const person1 = new Person("John", 30);
person1.greet();
