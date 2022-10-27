"use strict";
// let arr: 'asd' = 'asd';
// let arr: string[] = [];
// let arr: [string, boolean?, number?] = ['hi', false];
// arr.push('adads'); // ошибка нарушение картежа
var Feature;
(function (Feature) {
    Feature[Feature["baner"] = 0] = "baner";
    Feature[Feature["adminka"] = 1] = "adminka";
    Feature[Feature["premium"] = 2] = "premium";
})(Feature || (Feature = {}));
const a = Feature.adminka;
let b = Feature.premium;
b = 0;
console.log(a);
// let arr: Array<string> = [];
// let arr2: string[] = [];
// const person: {
//     name: string;
//     age: number;
//     city?: string;
// } = {
//     name: "John",
//     age: 23,
// };
// person.age = 44;
// person.city = 'asd';
