/** this
 * 일반 함수의 this는 호출 위치에서 정의
 * 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
 * 렉시컬: 함수가 동작할 수 있는 유효한 범위를 의미
 */
const user = {
    firstName: "hyeji",
    lastName: "yang",
    age: 26,
    getFullName: function () {
        // return `${user.firstName} ${user.lastName}`;
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(user.getFullName());

const user2 = {
    firstName: "hyeji",
    lastName: "yang",
    age: 26,
    getFullName: () => {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(user2.getFullName());

function user3() {
    this.firstName = "길동";
    this.lastName = "홍";

    return {
        firstName: "hyeji",
        lastName: "yang",
        age: 26,
        getFullName: () => {
            return `${this.firstName} ${this.lastName}`;
        },
    };
}
console.log(user3().getFullName());
