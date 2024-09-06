function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("캡틴", 100);
// 위 코드와 아래 코드는 같은 코드 문법만 바뀜
// 클래스 ES2015 (ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성 되었습니다.
console.log(seho);

//prototype
var user = { name: "capt", age: 100 };
var admin = {};
admin.__proto__ = user;
console.log(admin.name);

var obj = { a: 10 };
obj; // chrome console에서 찍어보면 prototype에 뭐 여러가지 들어가있음 그래서 그 메서드 다 사용가능

// Built-in Javascript API or Javascript Native API
