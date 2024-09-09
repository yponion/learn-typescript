// 타입 추론 기본 1
var a; // any
var b = 10; // number
var c = 'abc'; // string
function getValue(value = 10) {
    var d = 'hi';
    return value + d;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}
var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// Best Common Type
var arr = [1, 2, true, 'a'];