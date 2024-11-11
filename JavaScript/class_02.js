/** 원시형 데이터 타입 */

/** 문자열, String */
const str1 = "Hello, World!"; // 큰 따옴표, 짝은 따옴표 둘 중 아무거나 사용 가능
const str2 = "World!";
const str3 = `Hello, ${str2}`; // 백틱
console.log(str3);

/** 숫자, Number */
/** 주의할 점
 * 숫자 데이터와 다른 타입의 값을 연산할 경우 -> 2-1
 */
const num1 = 123;
const num2 = -123;
const num3 = 123.5678;
const pi = 3.14;

console.log(num3 + undefined); // 2-1: 출력: NaN
console.log(typeof (num3 + undefined)); // number
console.log(typeof pi); // number

/** NaN이라는 Not a Numver라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 떄문에 NaN으로 표시하여 반황한다.
 * 그래서 NaN 값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 있다는 것을 의미한다.
 */

const a = 0.1;
const b = 0.2;

console.log(a + b); // 0.30000000000000004
console.log(typeof (a + b).toFixed(1)); // string
console.log(typeof Number((a + b).toFixed(1))); // number -> 타입 형변환
console.log(Number((a + b).toFixed(1))); // 0.3

/** Boolean(불린, 불리언)
 * true, false라는 두 가지 값만 사용하는 논리 데이터
 * true : 긍정의 의미
 * false : 부정의 의미
 */
const truthy = true;
const falsy = false;

if (falsy) {
    console.log("조건식이 참입니다.");
} else {
    console.log("조건식이 거짓입니다.");
}

/** null고 undefined
 * null : 종재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적으로 표현한 것이다.
 * 의도적으로 변수를 비우거나, 특정 상황에서 값이 없을 나타내기 위해 사용한다.
 *
 * undefined: 변수가 선언되었지만 값이 할당되지 않았음을 나타냅니다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 때도 undefined가 반환됩니다.
 */
let value1 = null; // 개발자의 의도가 보인다라는 코드
console.log(value1); // 30
console.log(typeof value1); // object

setTimeout(() => {
    value1 = 30;
    console.log(value1); // 30
}, 1000);

let value2;
console.log(value2); // undefined

/** ---------------------------------------------------------------------------------------------------- */

const user = {
    name: "hyeji", // key-value
    age: 26,
}

console.log(user.name);
console.log(user.age);
console.log(user.email); // undefined