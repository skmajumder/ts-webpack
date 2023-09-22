// const userName: string = "Shuvo";
// console.log(userName);

// const arrFun = () => {
//     console.log('Arrow Function');

// }

// let playerName: string = "Messi";
// console.log(playerName);

// let str;

// str = "Bangldesh";
// str = 53;

// let names = ['Jonas', 'Margaret', 'Ariana']
// let names: string[] = ['Jonas', 'Margaret', 'Ariana']

// let numbers: number[] = [1, 2, 3, 4, 5]
// numbers.push(6, 7, 8)

// console.log(numbers);

// // tuple
// let ourTuple: [number, boolean, string] = [5, true, 'Bangladesh'];

// // Named Tuples
// const graph: [x: number, y: number] = [55.2, 41.3];

// let sportsMan: { name: string, age: number, isCaptain: boolean } = {
//     name: 'Sakib',
//     age: 35,
//     isCaptain: true,
// }

// let sportsMan2 = {
//     name: 'Sakib',
//     age: 35,
//     isCaptain: true,
// }

// const car: { type: string, mileage?: number } = {
//     type: "Toyota"
// };
// car.mileage = 2000;

// Index Signatures
// const nameAgeMap: { [index: string]: string } = {}
// nameAgeMap['name'] = 'Jonas Smith';
// nameAgeMap['city'] = 'New York';

// const nameAgeMap2: { [index: string]: string | number } = {}
// nameAgeMap2['name'] = 'Jonas Smith';
// nameAgeMap2['age'] = 30;
// nameAgeMap2['city'] = 'New York';

// function prinToConsole (str: unknown): void {
//   console.log(str)
// }
// prinToConsole(10)

// const printString = (str: unknown): void => {
//     console.log(str)
// }

// printString('Hello, TypeScript')

// const myFun = (a: string, b: string, c: string = 'c') => {
//     console.log(c);
//     console.log(`Print: ${a} ${b}`);
// }

// myFun('3', '4');

// function multiply(a: number, b: number): number {
//   return a * b
// }

// console.log(multiply(5, 4))

// // Type Aliases

// type stringOrNumber = string | number
// type userType = { name: string; age: number }

// const userDetails = (
//   id: stringOrNumber,
//   user: userType
// ): void => {
//   console.log(`User ID: ${id}, Name is: ${user.name}, Age: ${user.age}`);
// }

// userDetails(20, { name: 'John', age: 30 })

// // Function Signatures
// let printString: (a: string) => string;

// printString = (text: string) => {
//   return text;
// };
// console.log(printString("Function Signatures"));

// type stringOrNumber = string | number;
// type userType = { name: string; age: number };

// let userDetails: (id: stringOrNumber, userInfo: userType) => string;

// userDetails = (id: stringOrNumber, userInfo: userType) => {
//   return `${userInfo.name} ID: ${id}, Age: ${userInfo.age}`;
// };
// console.log(userDetails("SE23", { name: "John", age: 30 }));

// // Classes

// import { Person } from "./Classes/Person";
// import { IsPerson } from "./Interfaces/IsPerson";

// const person1 = new Person("John", 20, "Luxembourg");
// const person2 = new Person("John", 21, "Portugal");
// const person3 = new Person("Jonas", 20, "Denmark");
// let person4 = new Person("Jonas", 20, "Belgium");

// const persons: Person[] = [person1, person2, person3, person4];

// console.log(persons);

// const person: any = {};
// console.log(person.speak());

// Interfaces

// interface areaOfRectangle {
//   width: number;
//   length: number;
// }

// interface colorOfRectangle extends areaOfRectangle {
//   color: string;
// }

// function drawRectangle(rectangle: colorOfRectangle): object {
//   const area = rectangle.width * rectangle.length;
//   const color = rectangle.color;

//   return { area, color };
// }

// const rec: any = drawRectangle({
//   color: "#2c3e50",
//   width: 100,
//   length: 80,
// });

// const { area, color } = rec;

// console.log(`The area of the rectangle is ${area}.`);
// console.log(`The color of the rectangle is ${color}.`);

// const colorRectangle: colorOfRectangle = {
//   width: 100,
//   length: 80,
//   color: "#2c3e50",
// };

// console.log(colorRectangle);

// function drawRectangle(option: areaOfRectangle): number {
//   const width = option.width;
//   const length = option.length;

//   return width * length;
// }

// const threeDRectangle = { width: 20, length: 10, height: 10 };

// console.log(drawRectangle(threeDRectangle));

// Generics

// const addID = <
//   T extends {
//     name: string;
//     age: number;
//     country: string;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addID({
//   name: "Jonas",
//   age: 20,
//   country: "Luxembourg",
//   city: "Diekirch",
// });

// console.log(user);

// let user = "Jonas";
// addID(user);

// // Enum Types

// enum APIResponseType {
//   SUCCESS,
//   FAILED,
//   UNAUTHORIZED,
//   FORBIDDEN,
// }

// export interface APIResponse<T> {
//   status: number;
//   type: APIResponseType;
//   data: T;
// }

// const response1: APIResponse<object> = {
//   status: 200,
//   type: APIResponseType.SUCCESS,
//   data: {
//     name: "Jonas",
//     age: 20,
//     country: "Luxembourg",
//     city: "Diekirch",
//   },
// };

// console.log(response1);

// Tuples
let ourTuple: [number, boolean, string];

ourTuple = [5, false, "Coding God was here"];
