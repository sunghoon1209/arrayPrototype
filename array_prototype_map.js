// Array.prototype.map
// map(callbackFn, thisArg)
// callback (3개의 인수를 가짐)
//  - currentValue (배열 내에서 처리할 현재 요소)
//  - index (배열 내에서 처리할 현재 요소의 인덱스)
//  - array (map 호출한 배열)

// map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서
// 인수로 전달 받은 콜백 함수를 반복 하여 호출
// 콜백 함수의 반환값들로 구성된 새로운 배열을 반환하며 원본 배열은 반환하지 않는다.

// const numbers = [1,4,9];
// const roots = numbers.map(item=> Math.sqrt(item));

// numbers.forEach(item=>Math.sqrt(item));
// console.log(numbers);

// forEach 메서드와 map 메서드의 공통점: 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출
// forEach는 언제나 undefined를 반환하고 , map은 콜백 함수의 반환값들로 구성된 새로운 배열을 반환
// forEach는 단순히 반복문을 대체하기 위한 고차함수, map은 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수

// map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼치 값 = map 메서드를 호출한 배열의 length 프로퍼티 값과 반드시 일치 (원본배열과 반환값이 1:1로 매핑 됨)


// 1. 배열 [1, 2, 3]을 각각 2배한 배열로 변환하세요.
const arr1 = [1, 2, 3];
const result1 = arr1.map(item=>item*2);
// console.log(result1);

// 2. 문자열 배열 ["a", "b", "c"]를 모두 대문자로 변환하세요.
const arr2 = ["a", "b", "c"];
const result2 = arr2.map(item=>item.toUpperCase())
// console.log(result2)
// 3. 배열 [true, false, true]를 문자열 "Yes" 또는 "No"로 변환하세요.
const arr3 = [true, false, true];
const result3 = arr3.map(item=>item?'Yes':'No');
// console.log(result3);
// 4. 숫자 배열 [1, 2, 3, 4]를 각각 문자열 "1", "2"... 로 바꾸세요.
const arr4 = [1, 2, 3, 4];
const result4 = arr4.map(item=>item.toString())
// console.log(result4)
// 5. 배열 [1, 2, 3]에 각각 "Item: "을 붙이세요.
const arr5 = [1, 2, 3];
const result5 = arr5.map(item=>`Item:${item}`);
// console.log(result5);
// 6. 배열 [null, undefined, 0]를 각각의 타입 이름 문자열로 바꾸세요.
const arr6 = [null, undefined, 0];
const result6 = arr6.map(type=>typeof(type))
// console.log(result6)

// 7. 배열 [1, 4, 9]의 각 요소를 제곱근으로 바꾸세요.
const arr7 = [1, 4, 9];
const result7 = arr7.map(item=>Math.sqrt(item));
// console.log(result7);

// 8. 배열 [10, 20, 30]을 “10원”, “20원” 형식의 문자열 배열로 만드세요.
const arr8 = [10, 20, 30];
const result8 = arr8.map(item=>`${item}원`);
// console.log(result8);



// 9. 문자열 배열 ["10", "20", "30"]을 숫자형 배열 [10, 20, 30]으로 바꾸세요.
const arr9 = ["10", "20", "30"];
const result9 = arr9.map(item=>Number(item));
// console.log(result9);

// 10. 배열 ["apple", "banana", "cherry"]의 각 글자 수를 구한 배열로 바꾸세요.
const arr10 = ["apple", "banana", "cherry"];
const result10 = arr10.map(item=>item.length);
// console.log(result10)
// 11. 배열 ["sun", "moon", "star"]를 인덱스와 함께 "0: sun" 형식의 배열로 바꾸세요.
const arr11 = ["sun", "moon", "star"];
const result11 = arr11.map((item,index)=>{return `${item}:${index}`});
// console.log(result11);





// 13. 배열 ["hello", "world"]를 각 단어의 첫 글자만 추출한 배열로 바꾸세요.
const arr13 = ["hello", "world"];
const result13 = arr13.map(item=>item[0]);
// console.log(result13);

// 14. 배열 ["10px", "20px", "30px"]에서 숫자만 추출하세요.
const arr14 = ["10px", "20px", "30px"];
const result14 = arr14.map(item => item.replace(/[^0-9]/g, ""))
//console.log(result14)

// 15. 배열 [1,2,3,4,5]의 짝수면 "Even", 홀수면 "Odd" 문자열로 바꾸세요.
const arr15 = [1, 2, 3, 4, 5];
const result15 = arr15.map(item=>item%2?'Odd':'Even');
// console.log(result15)



// 17. 배열 [1, 2, 3, 4]의 마지막 요소만 "last" 문자열로 바꾸고 나머지는 그대로 유지하세요.
const arr17 = [1, 2, 3, 4];
const result17 = arr17.map((item,index,array)=>{
    return(index==array.length-1?'last':item);
})



// 18. 배열 ["A", "B", "C", "D"]를 역순 인덱스와 함께 "3: A" 형식으로 바꾸세요.
const arr18 = ["A", "B", "C", "D"];
const result18 = arr18.map((item,index,array)=>{
    return(
        `${array.length-index-1}:${item}`
    )
})


// 19. 배열 [10, 20, 30]을 각 요소의 위치(인덱스)만큼 더해서 [10, 21, 32]로 만드세요.
const arr19 = [10, 20, 30];
const result19 = arr19.map((item,index)=>{
    return(item+index)
})
console.log(result19);


// 20. 배열 ["dog", "cat", "bird"]를 알파벳 순으로 정렬된 순번을 붙여 "1. bird" 형식으로 바꾸세요.
const arr20 = ["dog", "cat", "bird"];

const result20 = arr20.sort().map((item,index)=>{
    return(`${index+1}. ${item}`);
});

console.log(result20)