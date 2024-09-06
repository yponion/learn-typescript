interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user)
}

getUser({ age: 10, name: 'yp' })


//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

var sum: SumFunction
sum = function (a: number, b: number): number {
    return a + b
}

// 인덱싱
interface StringArray {
    [index: number]: string
}

var arr = ['a', 'b', 'c']
// arr[0] = 10 // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a'

Object.keys(obj).forEach(function (value) { })

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴'
}