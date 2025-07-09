// let users = [];

// const getData = function () {
//   setTimeout(function () {
//     users = [{ name: "Rick" }, { name: "Morty" }];
//     console.log("Got users");
//   }, 3000);
// };

// const displayData = function () {
//   console.log("Going to display: " + users);
//   for (const user of users) {
//     console.log(user.name);
//   }
// };

// getData();
// displayData();

let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

const displayData = function () {
  console.log("Going to display: " + users);
  for (const user of users) {
    console.log(user.name);
  }
};

getData(displayData);
