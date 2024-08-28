// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk" /*, 10*/]; // ESLint 설치해야 밑줄 그어짐
let items: number[] = [1, 2, 3];

// TS 튜플
let adress: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "cap",
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// TS 진위값
let show: boolean = true;
