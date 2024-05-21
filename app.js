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

// const Person = require("./Person");

// const person1 = new Person("John", 30);
// person1.greet();

const axios = require("axios");

async function getPost() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // in axios it is different from fetch api, data is already in 'res', so no need to add one more promise
  console.log(res.data);
}

getPost();

// Note:
// npm i -g axios // you can use it globally
// npm i -D nodemon // package that constantly watches application, it is development dependency

// npm start
// 'npm run dev' for nodenmon, ctrl+c to stop watching
