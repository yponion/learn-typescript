// function logMessage(value: any) {
//     console.log(value)
// }
// logMessage('hello')
// logMessage(100)

var seho: string | number | boolean
function logMessage(value: string | number) { // | Union Type
    if (typeof value === 'number') {
        value.toLocaleString() // 마우스 올려보면 number 뜸
    }
    if (typeof value === 'string') {
        value.toString() // 마우스 올려보면 string 뜸
    }
    throw new TypeError('value must be string or number')
}
logMessage('hello')
logMessage(100)


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     // someone.name // 공통된(보장된) name 만 제공
//     // // 아래 속성들 사용하려면 위에처럼 타입 가드 사용하면 된다는데 강의 후반에 알려준다함
//     // // someone.skill
//     // // someone.age
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' })
// askSomeone({ name: '캡틴', age: 100 })

function askSomeone(someone: Developer & Person) { // intersection, 상대적으로 union이 더 많이 쓰임
    someone.name
    someone.skill
    someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 })


// var seho: string | number | boolean
// var capt: string & number & boolean // never