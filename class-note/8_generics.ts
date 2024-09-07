// function logText(text) {
//     console.log(text)
//     return text
// } 
// logText(10) // 숫자 10
// logText('하이') // 문자열 하이
// logText(true) // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text)
//     return text
// } 
// logText<string>('하이')


// function logText(text: string) {
//     console.log(text)
//     // text.split('').reverse().join('')
//     return text
// }

// function logNumber(num: number) {
//     console.log(num)
//     // text.split('').reverse().join('')
//     return num
// }
// logText('하이')
// logText(10)
// logNumber(10)
// logText(true)

// function logText(text: string | number) {
//     console.log(text)
//     return text
// }
// const a = logText('a')
// a.split('') // union으로 input에대한 것은 해결 되었지만 반환 값에 대한것은 해결되지 않았음
// logText(10)


function logText<T>(text: T): T {
    console.log(text)
    return text
}
const str = logText<string>('a') // 제네릭을 이용하여 함수를 호출 할 때 타입 정의 가능
str.split('')
const login = logText<boolean>(true)


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = { value: 'a', selected: false };


// 제네릭 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length)
//     text.forEach(function (text) {
//         console.log(text)
//     })
//     return text;
// }
// logTextLength<string>(['hi', 'abc'])


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T { // length 속성이 있는 타입들로만 제한
    text.length
    return text;
}
logTextLength('hi')
logTextLength([1, 2])
logTextLength({ length: 10 })
logTextLength({ leng: 10 })

// 제네릭 타입 제한 3 -  keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {

    return itemOption;
}
// getShoppingItemOption(10)
// getShoppingItemOption('a')
getShoppingItemOption("name")
