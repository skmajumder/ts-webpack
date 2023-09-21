// Function Signatures
let printString: (a: string) => string;

printString = (text: string) => {
  return text;
};
console.log(printString("Function Signatures"));

type stringOrNumber = string | number;
type userType = { name: string; age: number };

let userDetails: (id: stringOrNumber, userInfo: userType) => string;

userDetails = (id: stringOrNumber, userInfo: userType) => {
  return `${userInfo.name} ID: ${id}, Age: ${userInfo.age}`;
};
console.log(userDetails("SE23", { name: "John", age: 30 }));

// Classes

import { Person } from "./Classes/Person";

const person1 = new Person("John", 20, "Luxembourg");
const person2 = new Person("John", 21, "Portugal");
const person3 = new Person("Jonas", 20, "Denmark");
const person4 = new Person("Jonas", 20, "Belgium");

const persons: Person[] = [person1, person2, person3, person4];

console.log(persons);

// const person: any = {};
// console.log(person.speak());
