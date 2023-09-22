/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

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
let ourTuple;
ourTuple = [5, false, "Coding God was here"];

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2IsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0QixNQUFNO0FBRU4scUJBQXFCO0FBRXJCLHNCQUFzQjtBQUN0QixlQUFlO0FBRWYsZ0JBQWdCO0FBRWhCLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsSUFBSTtBQUVKLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixJQUFJO0FBRUosMkNBQTJDO0FBQzNDLGlCQUFpQjtBQUNqQixtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4QixPQUFPO0FBQ1AsS0FBSztBQUVMLDBCQUEwQjtBQUUxQixTQUFTO0FBQ1QsSUFBSSxRQUFtQyxDQUFDO0FBRXhDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXdlYnBhY2svLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgdXNlck5hbWU6IHN0cmluZyA9IFwiU2h1dm9cIjtcclxuLy8gY29uc29sZS5sb2codXNlck5hbWUpO1xyXG5cclxuLy8gY29uc3QgYXJyRnVuID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ0Fycm93IEZ1bmN0aW9uJyk7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBsZXQgcGxheWVyTmFtZTogc3RyaW5nID0gXCJNZXNzaVwiO1xyXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lKTtcclxuXHJcbi8vIGxldCBzdHI7XHJcblxyXG4vLyBzdHIgPSBcIkJhbmdsZGVzaFwiO1xyXG4vLyBzdHIgPSA1MztcclxuXHJcbi8vIGxldCBuYW1lcyA9IFsnSm9uYXMnLCAnTWFyZ2FyZXQnLCAnQXJpYW5hJ11cclxuLy8gbGV0IG5hbWVzOiBzdHJpbmdbXSA9IFsnSm9uYXMnLCAnTWFyZ2FyZXQnLCAnQXJpYW5hJ11cclxuXHJcbi8vIGxldCBudW1iZXJzOiBudW1iZXJbXSA9IFsxLCAyLCAzLCA0LCA1XVxyXG4vLyBudW1iZXJzLnB1c2goNiwgNywgOClcclxuXHJcbi8vIGNvbnNvbGUubG9nKG51bWJlcnMpO1xyXG5cclxuLy8gLy8gdHVwbGVcclxuLy8gbGV0IG91clR1cGxlOiBbbnVtYmVyLCBib29sZWFuLCBzdHJpbmddID0gWzUsIHRydWUsICdCYW5nbGFkZXNoJ107XHJcblxyXG4vLyAvLyBOYW1lZCBUdXBsZXNcclxuLy8gY29uc3QgZ3JhcGg6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0gPSBbNTUuMiwgNDEuM107XHJcblxyXG4vLyBsZXQgc3BvcnRzTWFuOiB7IG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIsIGlzQ2FwdGFpbjogYm9vbGVhbiB9ID0ge1xyXG4vLyAgICAgbmFtZTogJ1Nha2liJyxcclxuLy8gICAgIGFnZTogMzUsXHJcbi8vICAgICBpc0NhcHRhaW46IHRydWUsXHJcbi8vIH1cclxuXHJcbi8vIGxldCBzcG9ydHNNYW4yID0ge1xyXG4vLyAgICAgbmFtZTogJ1Nha2liJyxcclxuLy8gICAgIGFnZTogMzUsXHJcbi8vICAgICBpc0NhcHRhaW46IHRydWUsXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNhcjogeyB0eXBlOiBzdHJpbmcsIG1pbGVhZ2U/OiBudW1iZXIgfSA9IHtcclxuLy8gICAgIHR5cGU6IFwiVG95b3RhXCJcclxuLy8gfTtcclxuLy8gY2FyLm1pbGVhZ2UgPSAyMDAwO1xyXG5cclxuLy8gSW5kZXggU2lnbmF0dXJlc1xyXG4vLyBjb25zdCBuYW1lQWdlTWFwOiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxyXG4vLyBuYW1lQWdlTWFwWyduYW1lJ10gPSAnSm9uYXMgU21pdGgnO1xyXG4vLyBuYW1lQWdlTWFwWydjaXR5J10gPSAnTmV3IFlvcmsnO1xyXG5cclxuLy8gY29uc3QgbmFtZUFnZU1hcDI6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSA9IHt9XHJcbi8vIG5hbWVBZ2VNYXAyWyduYW1lJ10gPSAnSm9uYXMgU21pdGgnO1xyXG4vLyBuYW1lQWdlTWFwMlsnYWdlJ10gPSAzMDtcclxuLy8gbmFtZUFnZU1hcDJbJ2NpdHknXSA9ICdOZXcgWW9yayc7XHJcblxyXG4vLyBmdW5jdGlvbiBwcmluVG9Db25zb2xlIChzdHI6IHVua25vd24pOiB2b2lkIHtcclxuLy8gICBjb25zb2xlLmxvZyhzdHIpXHJcbi8vIH1cclxuLy8gcHJpblRvQ29uc29sZSgxMClcclxuXHJcbi8vIGNvbnN0IHByaW50U3RyaW5nID0gKHN0cjogdW5rbm93bik6IHZvaWQgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coc3RyKVxyXG4vLyB9XHJcblxyXG4vLyBwcmludFN0cmluZygnSGVsbG8sIFR5cGVTY3JpcHQnKVxyXG5cclxuLy8gY29uc3QgbXlGdW4gPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcsIGM6IHN0cmluZyA9ICdjJykgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coYyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgUHJpbnQ6ICR7YX0gJHtifWApO1xyXG4vLyB9XHJcblxyXG4vLyBteUZ1bignMycsICc0Jyk7XHJcblxyXG4vLyBmdW5jdGlvbiBtdWx0aXBseShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbi8vICAgcmV0dXJuIGEgKiBiXHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKG11bHRpcGx5KDUsIDQpKVxyXG5cclxuLy8gLy8gVHlwZSBBbGlhc2VzXHJcblxyXG4vLyB0eXBlIHN0cmluZ09yTnVtYmVyID0gc3RyaW5nIHwgbnVtYmVyXHJcbi8vIHR5cGUgdXNlclR5cGUgPSB7IG5hbWU6IHN0cmluZzsgYWdlOiBudW1iZXIgfVxyXG5cclxuLy8gY29uc3QgdXNlckRldGFpbHMgPSAoXHJcbi8vICAgaWQ6IHN0cmluZ09yTnVtYmVyLFxyXG4vLyAgIHVzZXI6IHVzZXJUeXBlXHJcbi8vICk6IHZvaWQgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGBVc2VyIElEOiAke2lkfSwgTmFtZSBpczogJHt1c2VyLm5hbWV9LCBBZ2U6ICR7dXNlci5hZ2V9YCk7XHJcbi8vIH1cclxuXHJcbi8vIHVzZXJEZXRhaWxzKDIwLCB7IG5hbWU6ICdKb2huJywgYWdlOiAzMCB9KVxyXG5cclxuLy8gLy8gRnVuY3Rpb24gU2lnbmF0dXJlc1xyXG4vLyBsZXQgcHJpbnRTdHJpbmc6IChhOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbi8vIHByaW50U3RyaW5nID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4vLyAgIHJldHVybiB0ZXh0O1xyXG4vLyB9O1xyXG4vLyBjb25zb2xlLmxvZyhwcmludFN0cmluZyhcIkZ1bmN0aW9uIFNpZ25hdHVyZXNcIikpO1xyXG5cclxuLy8gdHlwZSBzdHJpbmdPck51bWJlciA9IHN0cmluZyB8IG51bWJlcjtcclxuLy8gdHlwZSB1c2VyVHlwZSA9IHsgbmFtZTogc3RyaW5nOyBhZ2U6IG51bWJlciB9O1xyXG5cclxuLy8gbGV0IHVzZXJEZXRhaWxzOiAoaWQ6IHN0cmluZ09yTnVtYmVyLCB1c2VySW5mbzogdXNlclR5cGUpID0+IHN0cmluZztcclxuXHJcbi8vIHVzZXJEZXRhaWxzID0gKGlkOiBzdHJpbmdPck51bWJlciwgdXNlckluZm86IHVzZXJUeXBlKSA9PiB7XHJcbi8vICAgcmV0dXJuIGAke3VzZXJJbmZvLm5hbWV9IElEOiAke2lkfSwgQWdlOiAke3VzZXJJbmZvLmFnZX1gO1xyXG4vLyB9O1xyXG4vLyBjb25zb2xlLmxvZyh1c2VyRGV0YWlscyhcIlNFMjNcIiwgeyBuYW1lOiBcIkpvaG5cIiwgYWdlOiAzMCB9KSk7XHJcblxyXG4vLyAvLyBDbGFzc2VzXHJcblxyXG4vLyBpbXBvcnQgeyBQZXJzb24gfSBmcm9tIFwiLi9DbGFzc2VzL1BlcnNvblwiO1xyXG4vLyBpbXBvcnQgeyBJc1BlcnNvbiB9IGZyb20gXCIuL0ludGVyZmFjZXMvSXNQZXJzb25cIjtcclxuXHJcbi8vIGNvbnN0IHBlcnNvbjEgPSBuZXcgUGVyc29uKFwiSm9oblwiLCAyMCwgXCJMdXhlbWJvdXJnXCIpO1xyXG4vLyBjb25zdCBwZXJzb24yID0gbmV3IFBlcnNvbihcIkpvaG5cIiwgMjEsIFwiUG9ydHVnYWxcIik7XHJcbi8vIGNvbnN0IHBlcnNvbjMgPSBuZXcgUGVyc29uKFwiSm9uYXNcIiwgMjAsIFwiRGVubWFya1wiKTtcclxuLy8gbGV0IHBlcnNvbjQgPSBuZXcgUGVyc29uKFwiSm9uYXNcIiwgMjAsIFwiQmVsZ2l1bVwiKTtcclxuXHJcbi8vIGNvbnN0IHBlcnNvbnM6IFBlcnNvbltdID0gW3BlcnNvbjEsIHBlcnNvbjIsIHBlcnNvbjMsIHBlcnNvbjRdO1xyXG5cclxuLy8gY29uc29sZS5sb2cocGVyc29ucyk7XHJcblxyXG4vLyBjb25zdCBwZXJzb246IGFueSA9IHt9O1xyXG4vLyBjb25zb2xlLmxvZyhwZXJzb24uc3BlYWsoKSk7XHJcblxyXG4vLyBJbnRlcmZhY2VzXHJcblxyXG4vLyBpbnRlcmZhY2UgYXJlYU9mUmVjdGFuZ2xlIHtcclxuLy8gICB3aWR0aDogbnVtYmVyO1xyXG4vLyAgIGxlbmd0aDogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBpbnRlcmZhY2UgY29sb3JPZlJlY3RhbmdsZSBleHRlbmRzIGFyZWFPZlJlY3RhbmdsZSB7XHJcbi8vICAgY29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZHJhd1JlY3RhbmdsZShyZWN0YW5nbGU6IGNvbG9yT2ZSZWN0YW5nbGUpOiBvYmplY3Qge1xyXG4vLyAgIGNvbnN0IGFyZWEgPSByZWN0YW5nbGUud2lkdGggKiByZWN0YW5nbGUubGVuZ3RoO1xyXG4vLyAgIGNvbnN0IGNvbG9yID0gcmVjdGFuZ2xlLmNvbG9yO1xyXG5cclxuLy8gICByZXR1cm4geyBhcmVhLCBjb2xvciB9O1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCByZWM6IGFueSA9IGRyYXdSZWN0YW5nbGUoe1xyXG4vLyAgIGNvbG9yOiBcIiMyYzNlNTBcIixcclxuLy8gICB3aWR0aDogMTAwLFxyXG4vLyAgIGxlbmd0aDogODAsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgeyBhcmVhLCBjb2xvciB9ID0gcmVjO1xyXG5cclxuLy8gY29uc29sZS5sb2coYFRoZSBhcmVhIG9mIHRoZSByZWN0YW5nbGUgaXMgJHthcmVhfS5gKTtcclxuLy8gY29uc29sZS5sb2coYFRoZSBjb2xvciBvZiB0aGUgcmVjdGFuZ2xlIGlzICR7Y29sb3J9LmApO1xyXG5cclxuLy8gY29uc3QgY29sb3JSZWN0YW5nbGU6IGNvbG9yT2ZSZWN0YW5nbGUgPSB7XHJcbi8vICAgd2lkdGg6IDEwMCxcclxuLy8gICBsZW5ndGg6IDgwLFxyXG4vLyAgIGNvbG9yOiBcIiMyYzNlNTBcIixcclxuLy8gfTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGNvbG9yUmVjdGFuZ2xlKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGUob3B0aW9uOiBhcmVhT2ZSZWN0YW5nbGUpOiBudW1iZXIge1xyXG4vLyAgIGNvbnN0IHdpZHRoID0gb3B0aW9uLndpZHRoO1xyXG4vLyAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGg7XHJcblxyXG4vLyAgIHJldHVybiB3aWR0aCAqIGxlbmd0aDtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgdGhyZWVEUmVjdGFuZ2xlID0geyB3aWR0aDogMjAsIGxlbmd0aDogMTAsIGhlaWdodDogMTAgfTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGRyYXdSZWN0YW5nbGUodGhyZWVEUmVjdGFuZ2xlKSk7XHJcblxyXG4vLyBHZW5lcmljc1xyXG5cclxuLy8gY29uc3QgYWRkSUQgPSA8XHJcbi8vICAgVCBleHRlbmRzIHtcclxuLy8gICAgIG5hbWU6IHN0cmluZztcclxuLy8gICAgIGFnZTogbnVtYmVyO1xyXG4vLyAgICAgY291bnRyeTogc3RyaW5nO1xyXG4vLyAgIH1cclxuLy8gPihcclxuLy8gICBvYmo6IFRcclxuLy8gKSA9PiB7XHJcbi8vICAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuLy8gICByZXR1cm4geyAuLi5vYmosIGlkIH07XHJcbi8vIH07XHJcblxyXG4vLyBsZXQgdXNlciA9IGFkZElEKHtcclxuLy8gICBuYW1lOiBcIkpvbmFzXCIsXHJcbi8vICAgYWdlOiAyMCxcclxuLy8gICBjb3VudHJ5OiBcIkx1eGVtYm91cmdcIixcclxuLy8gICBjaXR5OiBcIkRpZWtpcmNoXCIsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc29sZS5sb2codXNlcik7XHJcblxyXG4vLyBsZXQgdXNlciA9IFwiSm9uYXNcIjtcclxuLy8gYWRkSUQodXNlcik7XHJcblxyXG4vLyAvLyBFbnVtIFR5cGVzXHJcblxyXG4vLyBlbnVtIEFQSVJlc3BvbnNlVHlwZSB7XHJcbi8vICAgU1VDQ0VTUyxcclxuLy8gICBGQUlMRUQsXHJcbi8vICAgVU5BVVRIT1JJWkVELFxyXG4vLyAgIEZPUkJJRERFTixcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBBUElSZXNwb25zZTxUPiB7XHJcbi8vICAgc3RhdHVzOiBudW1iZXI7XHJcbi8vICAgdHlwZTogQVBJUmVzcG9uc2VUeXBlO1xyXG4vLyAgIGRhdGE6IFQ7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlc3BvbnNlMTogQVBJUmVzcG9uc2U8b2JqZWN0PiA9IHtcclxuLy8gICBzdGF0dXM6IDIwMCxcclxuLy8gICB0eXBlOiBBUElSZXNwb25zZVR5cGUuU1VDQ0VTUyxcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBuYW1lOiBcIkpvbmFzXCIsXHJcbi8vICAgICBhZ2U6IDIwLFxyXG4vLyAgICAgY291bnRyeTogXCJMdXhlbWJvdXJnXCIsXHJcbi8vICAgICBjaXR5OiBcIkRpZWtpcmNoXCIsXHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKHJlc3BvbnNlMSk7XHJcblxyXG4vLyBUdXBsZXNcclxubGV0IG91clR1cGxlOiBbbnVtYmVyLCBib29sZWFuLCBzdHJpbmddO1xyXG5cclxub3VyVHVwbGUgPSBbNSwgZmFsc2UsIFwiQ29kaW5nIEdvZCB3YXMgaGVyZVwiXTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9