// Array.prototype.forEach()
// 반환값은 언제나 undefined
// forEAch(callbackFn, thisArg)
// 매개변수 callbackFn
// element- 배열에서 처리중인 현재 요소
// index - 배열에서 처리 중인 현재 요소의 인덱스
// array - forEach를 호출한 배열

// thisArg - callbackFn을 실행할 때 this 값으로 사용할 값


// 1. 숫자 배열 [1, 2, 3, 4, 5]의 각 요소를 콘솔에 출력하세요.
const arr1 = [1, 2, 3, 4, 5];
const result = arr1.forEach(item=> console.log(item));

// 2. 문자열 배열 ["a", "b", "c"]의 각 문자를 대문자로 출력하세요.
const arr2 = ["a", "b", "c"];
const result2 = arr2.forEach(el=>console.log(el.toUpperCase()));

// 3. 배열 [10, 20, 30]의 각 값에 5를 더한 결과를 새로운 배열에 저장하세요.
const arr3 = [10, 20, 30];
let result3 = [];
arr3.forEach(el=>{
    result3.push(el+5);
})
console.log(result3)
// 4. 배열 ["John", "Jane", "Tom"]의 각 이름 앞에 "Hello, "를 붙여 출력하세요.
const arr4 = ["John", "Jane", "Tom"];
arr4.forEach(item=>console.log(`Hello, ${item}`))

// 5. 숫자 배열 [1, 2, 3, 4]에서 짝수만 출력하세요.
const arr5 = [1, 2, 3, 4];

// 6. 숫자 배열 [3, 6, 9, 12]의 합을 구해서 `sum6` 변수에 저장하세요.
const arr6 = [3, 6, 9, 12];

// 7. 배열 ["apple", "banana", "cherry"]에서 문자열 길이를 각각 출력하세요.
const arr7 = ["apple", "banana", "cherry"];

// 8. 객체 배열에서 모든 사람의 이름을 출력하세요.
const arr8 = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 30 }
];

// 9. 배열 [1, -2, 3, -4, 5]에서 양수만 새로운 배열에 저장하세요.
const arr9 = [1, -2, 3, -4, 5];

// 10. 배열 ["JS", "HTML", "CSS"]를 인덱스와 함께 출력하세요.
const arr10 = ["JS", "HTML", "CSS"];

// 11. 배열 [2, 4, 6, 8]에서 각 요소를 제곱하여 출력하세요.
const arr11 = [2, 4, 6, 8];

// 12. 배열 ["one", "two", "three"]를 모두 이어 붙여서 하나의 문자열로 만드세요.
const arr12 = ["one", "two", "three"];

// 13. 숫자 배열 [5, 10, 15]를 누적곱 형태로 계산하여 결과를 출력하세요.
const arr13 = [5, 10, 15];

// 14. 배열 ["a", "b", "c"]에서 각 요소를 두 번 출력하세요. (반복 x2)
const arr14 = ["a", "b", "c"];

// 15. 배열 ["2024-01", "2024-02", "2024-03"]에서 월(month)만 추출해 출력하세요.
const arr15 = ["2024-01", "2024-02", "2024-03"];

// 16. 배열 ["red", "green", "blue"]를 역순으로 출력하세요. (forEach만 사용)
const arr16 = ["red", "green", "blue"];

// 17. 배열 [100, 200, 300]의 평균을 구해서 출력하세요.
const arr17 = [100, 200, 300];

// 18. 배열 ["a", "", "b", "", "c"]에서 빈 문자열이 몇 개인지 세어서 출력하세요.
const arr18 = ["a", "", "b", "", "c"];

// 19. 객체 배열에서 나이가 25세 이상인 사람 수를 세어서 출력하세요.
const arr19 = [
  { name: "A", age: 24 },
  { name: "B", age: 30 },
  { name: "C", age: 26 }
];

// 20. 이차원 배열 [[1, 2], [3, 4], [5, 6]]의 모든 숫자를 콘솔에 출력하세요.
const arr20 = [[1, 2], [3, 4], [5, 6]];
