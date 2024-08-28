// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
  return a + b;
}

sum1(10, 20); // 추론이 돌아가서 반환값도 number로 뜨긴함

// 함수의 반환 값에 타입을 정의하는 방식
function sum2(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum3(a: number, b: number): number {
  return a + b;
}

sum3(10, 20 /*, 30 */); // 함수에 정의한 파라미터의 타입이나 개수에 맞게 제한

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log("hello world!");
log("hello world!", "abc");
