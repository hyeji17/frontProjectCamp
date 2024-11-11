/** 참조형 데이터 타입 */

/** 배열 */
const fruits = new Array("사과", "바나나", "수박", "딸기", "귤");
console.log(fruits); // ['사과', '바나나', '수박', '딸기', '귤']

/** 배열 리터럴 
 * 배열을 만드는 방식으로 [](대괄호)라는 기호를 통해 만들었는데
 * 이것을 리터럴 방식으로 만들었다고 한다.
*/
const animals = ["호랑이", "사자", "코끼리", "원숭이", "악어", "뱀"];
console.log(animals); // ["호랑이", "사자", "코끼리", "원숭이", "악어"];
console.log(animals[1]); // 사자 -> 배열 데이터를 인덱싱한다 라고 한다. 그리고 각각의 데이터 하나하나를 배열의 아이템, 배열의 요소, element라고도 부른다.
console.log(animals.length); // 6
console.log(animals[animals.length - 1]); // 해당 배열의 가장 마지막 요소 조회 -> "뱀"
console.log(animals[0]); // 해당 배열의 가장 첫 번째 요소 조회 -> "호랑이"

/** ---------------------------------------------------------------------------------------------------- */

/** 객체 */
const user = new Object();
user.name = "hyeji";
user.age = 26;
user.job = "programmer";

console.log(user); // key-value 형태로 조회가 된다. key는 속성 혹은 프로퍼티(property)라고도 하며, value는 값이라고 부르기도 한다.

/** 객체리터럴
 * 객테를 만드는 방식으로 {}(중괄호)라는 기호를 통해 만들었는데,
 * 이것을 리터럴 방식으로 만들었다고 한다.
 * 
 * 객체 데이터에서의 key는 고유하며, 순서는 중요하지 않다.
 * 단, 동일한 키 값일 경우, 나중에 작성한 값으로 덮어써진다.
 */
const member = {
    name: "hyeji",
    age: 26,
    job: "programmer",
};
console.log(member);
console.log(member.name); // 객체에서는 . 점표기법으로 접근한다.
console.log(member["job"]); // 대괄호 표기법이라고 한다.

const userA = {
    name: "유저 A",
    age: 17,
    job: "student",
};
const userB = {
    name: "유저 B",
    age: 10,
    brother: userA,
};

console.log(userB.brother);
console.log(userB.brother.name);
console.log(userB.brother["job"]);

const family = [userA, userB];
console.log(family);
console.log(family[0].name); // 유저 A
console.log(family[1]["name"]); // 유저 B