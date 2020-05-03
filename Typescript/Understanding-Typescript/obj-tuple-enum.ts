// const person: {
//   name: string;
//   age: number;
// } = {

// Tuples
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[],
//   role: [number, string]; // Tuples
// } = {
//   name: 'Prateek',
//   age: 31,
//   hobbies: [ 'Sports', 'Cooking' ],
//   role: [2, 'author']
// }

// Enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 1 , AUTHOR = 'AUTHOR' };

const person = {
  name: 'Prateek',
  age: 31,
  hobbies: [ 'Sports', 'Cooking' ],
  role: Role.ADMIN 
}

// person.role.push('admin'); // It allows in Tuples
// person.role[1] = 10; !!! ERROR !!!

// person.role = [0, 'author', 'user'];

let favoriteActvity: string[];
favoriteActvity = ['Sports'];

console.log(person.name);

for( const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! ERROR !!!
  
}

if(person.role === Role.ADMIN) {
  console.log('Is ADMIN');
}


if(person.role === Role.AUTHOR) {
  console.log('Is AUTHOR');
}