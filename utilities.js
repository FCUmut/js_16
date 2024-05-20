// const message = {
//   id: 1,
//   text: "Hello World",
// };

// module.exports = message;

// another way
// module.exports = {
//     id: 1,
//     text: "Hello World",
// };

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

// module.exports = capitalizeWords;

function makeMoney(amount) {
  return `$${amount}`;
}

// if you have multiple functions to export, you can put them in object
module.exports = { capitalizeWords, makeMoney };
