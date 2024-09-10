// 타입 단언 (type assertion)
var a;
a = 10;
a = 'a';
var b = a as string;

// // DOM API 조작
// // <div id='app'>'hi'</div>
// var div = document.querySelector('div')

const div1 = document.querySelector('div');
div1?.innerHTML; // div1.innerHTML; // div는 null 일 수 있습니다
const div2 = document.querySelector('div') as HTMLDivElement; // 타입 단언
div2.innerHTML;