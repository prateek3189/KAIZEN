// Function Type Interface
// type AddFn = (n1: number, n2: number) => Number;
interface AddFn {
  (n1: number, n2: number): number
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return +n1 + +n2;
}

// Inheritence of Interface
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Aged {
  age: number;
}

interface Greetable extends Named, Aged {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 31;

  // constructor(n: string = "Prateek") {
  constructor(n?: string) {
    if(n) {
      this.name = n;
    }
  }
  
  greet(phrase: string): void {
    console.log(phrase + " " + (this.name || ''));
  }
}

// let user1: Greetable;
let user1: Person;
user1 = new Person();

// user1 = {
//   name: "Prateek",
//   age: 31,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }

console.log(user1);
user1.greet("Hello");

// type Person  = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// You can use interface with a class but not the type
// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// user1.greet("Hi There!! I am")