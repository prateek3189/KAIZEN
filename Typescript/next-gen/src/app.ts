// Var, let, const 
// const username = "Prateek";
// let age = 31;
// age = 29;
// var result;
// function add(n1: number, n2: number) {
//   result = n1 + n2;
//   return result;
// }

// if(age > 20) {
//   let isOld = true;
// }

// console.log(isOld);
// console.log(result);

// Arrow Function
// const add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// const add = (n1: number, n2: number = 1) => n1 + n2;

// console.log(add(5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector("button");

// if(button) {
//   button.addEventListener("click", event => console.log(event));
// }

// // Array
// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking", ...hobbies];

// // Spread operators
// activeHobbies.push(...hobbies);

const person = {
  username: "Prateek",
  age: 31
};

// const copiedPerson = {...person, city: "Pune"};
// console.log(copiedPerson);

// REST Parameteers
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currValue) => {
    return currentResult + currValue;
  }, 0);
};

const sum = add(5, 10,15);
console.log(sum);

// Array and Object Destructuring
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);

const {username: firstUsername, age} = person;
console.log(firstUsername, age);
