// Array.prototype.filter
// 주어진 배열의 일부에 대한 얕은 복사본 생성, 
// 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소만 필터링
// 매개변수
// filter(callbackFn, thisArg)
// callbackFn 

// 1. 숫자 배열에서 짝수만 골라 새로운 배열로 만들기
const nums1 = [1, 2, 3, 4, 5, 6];
const evenArr = nums1.filter(item=>item%2==0)


// 2. 길이가 5 이상인 문자열만 필터링
const words1 = ['apple', 'dog', 'banana', 'cat', 'strawberry'];
// 여기에 filter 코드를 작성
const moreFiveArr = words1.filter(item=>item.length>=5);


// 3. true인 값만 필터링
const bools = [true, false, true, false, false, true];

// 4. 음수만 골라내기
const nums2 = [3, -1, -7, 8, 0, -5];
// 여기에 filter 코드를 작성
const minusArr = nums2.filter(item=>item<0);


// 5. 사용자 객체 중 성인이 아닌 사람만 걸러내기 (나이 < 20)
const users1 = [
  { name: 'A', age: 15 },
  { name: 'B', age: 25 },
  { name: 'C', age: 19 }
];

const youthArr = users1.filter(item=>item.age<20)
// 여기에 map 추가하면됨

// 6. 특정 키워드가 포함된 항목만 필터링 (문자열 includes)
const products1 = ['iPhone', 'Galaxy', 'iPad', 'MacBook'];
// 여기에 filter 코드를 작성

// 7. null 또는 undefined 제외하고 필터링
const mixed = [1, null, 3, undefined, 5, null];

// 여기에 filter 코드를 작성

// 8. 10보다 크고 50보다 작은 숫자만 필터링
const nums3 = [5, 12, 30, 55, 60, 7, 44];
const filtered3 = nums3.filter(item=>item>10&&item<50)
console.log(filtered3)
// 여기에 filter 코드를 작성

// 9. 이름이 3글자 이하인 사람만 필터링
const users2 = [
  { name: 'Sue' },
  { name: 'John' },
  { name: 'Li' },
  { name: 'Kate' }
];

const under3 = users2.filter(item=>item.name.length <= 3)
console.log(under3)
// 여기에 filter 코드를 작성

// 10. 0이 아닌 값만 필터링
const values1 = [0, 1, 2, 0, 3, 0];
// 여기에 filter 코드를 작성
const noZero = values1.filter(num=>num)
console.log(noZero)

// 11. 특정 도메인 이메일만 필터링 (@gmail.com)
const emails = ['test@gmail.com', 'hello@naver.com', 'me@gmail.com'];
const gmailArr = emails.filter(item=>item.includes('@gmail.com'));
console.log(gmailArr)
// 여기에 filter 코드를 작성

// 12. 완료되지 않은 할 일만 필터링
const todos = [
  { text: 'html', done: true },
  { text: 'css', done: false },
  { text: 'js', done: false }
];
const notDone = todos.filter(item=> !item.done)
console.log(notDone)
// 여기에 filter 코드를 작성

// 13. 가격이 1만원 이상인 상품만 필터링
const products2 = [
  { name: 'Pen', price: 500 },
  { name: 'Bag', price: 12000 },
  { name: 'Shoes', price: 30000 }
];
// 여기에 filter 코드를 작성

// 14. 길이가 짝수인 문자열만 필터링
const words2 = ['hi', 'hello', 'yes', 'no', 'okay'];
const evenLength = words2.filter(item=>!((item.length)%2));
console.log(evenLength);

// 여기에 filter 코드를 작성

// 15. 중복된 숫자 제거 (힌트: indexOf 또는 index)
const nums4 = [1, 2, 2, 3, 4, 4, 5];

const filter4 = nums4.filter(item=>item.indexof)

// 16. 현재 연도 기준, 2000년 이후 태어난 사람만 필터링
const people = [
  { name: 'Kim', birth: 1998 },
  { name: 'Lee', birth: 2002 },
  { name: 'Park', birth: 2010 }
];
// 여기에 filter 코드를 작성

// 17. 숫자로 시작하는 문자열만 필터링
const codes = ['1A', 'B2', '3C', 'D4'];
const codesF = codes.filter(item=>Number(item[0]))
console.log(codesF)
// 여기에 filter 코드를 작성

// 18. 길이가 0이 아닌 배열만 필터링
const lists = [[1, 2], [], [3], []];
// 여기에 filter 코드를 작성
const noZeroArr = lists.filter(item=> item.length)
console.log(noZeroArr);

// 19. 객체 중 특정 키가 존재하는 항목만 필터링
const items = [
  { name: 'A', price: 100 },
  { name: 'B' },
  { name: 'C', price: 300 }
];

const isExist = items.filter(item=>(item?.price))
console.log(isExist);
// 여기에 filter 코드를 작성

// 20. 중복 없이 고유한 값만 필터링 (Set 안 쓰고 filter로만)
const colors = ['red', 'blue', 'red', 'green', 'blue'];
// 여기에 filter 코드를 작성
