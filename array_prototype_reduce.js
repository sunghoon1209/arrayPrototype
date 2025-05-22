// Array.prototype.reduce
// - 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
// reduce 함수는 네 개의 인자를 가짐
// 1. 누산기 (acc)
// 2. 현재값 (cur)
// 3. 현재 인덱스 (idx)
// 4. 원본 배열 (src)
/*
arr.reduce((accumulator, currentValue, index, array) => {
  return 결과값;
}, 초기값);

*/


// 작동방식
const reduceFunc = [0,1,2,3,4].reduce(
    function(acc,cur,idx,src){
        return acc + cur
    }
)
/* 
    callback    |   acc(누적값)    |   cur     |   idx    | array     | return값
    1번째 호출         0                1           1       [0,1,2,3,4] 1
    2번째 호출         1                
    3번째 호출
    4번째 호출

*/


// reduce 연습문제 20선 - 문제만

// 1. 숫자 배열의 총합을 구하시오.
const arr1 = [1, 2, 3, 4, 5];

const sum1 = arr1.reduce((acc,cur)=>acc + cur)
console.log(sum1)
// 2. 숫자 배열의 모든 값을 곱한 결과를 구하시오.
const mup1 = arr1.reduce((acc,cur)=>acc*cur)
console.log(mup1)
// 3. 숫자 배열에서 가장 큰 값을 구하시오.
const max1 =arr1.reduce((acc,cur)=>acc>cur?acc:cur)
console.log(max1)
// 4. 숫자 배열에서 가장 작은 값을 구하시오.
const min1 = arr1.reduce((acc,cur)=>acc>cur?cur:acc)
console.log(min1)
// 5. 문자열 배열을 하나의 문자열로 합치시오.
const arr2 = ['a', 'b', 'c'];
const sum2 = arr2.reduce((acc,cur)=>acc+cur);
console.log(sum2)
// 6. 객체 배열에서 price 값의 총합을 구하시오.
const items = [
  { name: 'apple', price: 1000 },
  { name: 'banana', price: 2000 },
  { name: 'melon', price: 1500 }
];

// 7. 숫자 배열에서 중복을 제거한 배열을 만드시오.
const arr3 = [1, 2, 2, 3, 3, 3, 4];

// 8. 문자열 배열에서 각 값이 몇 번 나왔는지 세어 객체로 만드시오.
const fruits = ['apple', 'banana', 'apple', 'melon', 'banana'];

// 9. 2차원 배열을 1차원으로 평탄화하시오.
const nested = [[1, 2], [3, 4], [5]];

// 10. 문자열을 뒤집으시오.
const text = 'hello';

// 11. 숫자 배열에서 짝수만 골라 총합을 구하시오.
const arr4 = [1, 2, 3, 4, 5, 6];

// 12. 객체 배열에서 가장 비싼 상품의 이름을 구하시오.
const products = [
  { name: 'pen', price: 500 },
  { name: 'notebook', price: 1500 },
  { name: 'eraser', price: 300 }
];

// 13. 숫자 배열을 이용해 짝수와 홀수의 개수를 객체로 반환하시오.
const arr5 = [1, 2, 3, 4, 5, 6, 7];

// 14. 사람 배열에서 나이의 평균을 구하시오.
const people = [
  { name: 'John', age: 28 },
  { name: 'Jane', age: 32 },
  { name: 'Tom', age: 40 }
];

// 15. 문자열 배열을 구분자 `-`로 연결된 문자열로 만드시오.
const letters = ['R', 'E', 'D'];

// 16. 숫자 배열을 이용해 누적합 배열을 만드시오. (예: [1,2,3] → [1,3,6])
const arr6 = [1, 2, 3, 4];

// 17. 문자열 배열에서 가장 긴 문자열을 찾으시오.
const words = ['hello', 'world', 'javascript', 'hi'];

// 18. 객체 배열에서 특정 key의 값만 모은 배열을 만드시오.
const data = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' }
];

// 19. 숫자 배열의 평균을 구하시오.
const arr7 = [5, 10, 15];

// 20. 숫자 배열에서 짝수만 곱해서 그 총합을 구하시오.
const arr8 = [1, 2, 3, 4, 5, 6];

