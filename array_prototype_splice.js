// Array.prototype.splice
// ✅ 원본 배열을 직접 수정하며,
// 중간에 요소를 추가하거나 제거할 수 있는 메서드

// 구문: arr.splice(start, deleteCount, item1, item2, ...)

// 📌 매개변수:
// - start: 변경을 시작할 배열의 인덱스
// - deleteCount: start부터 제거할 요소의 개수 (0이면 제거 없이 추가만 가능)
// - items: start 위치에 추가할 요소들 (없으면 제거만 수행)

// 📌 반환값:
// 제거된 요소들의 배열 (없으면 빈 배열 반환)

//연습문제
// 1. 배열 ['a', 'b', 'c']에서 'b'를 제거하세요.
let arr1 = ['a','b','c'];
arr1.splice(1,1);


// 2. 배열 [1, 2, 3, 4]에서 2와 3을 제거하세요.
let arr2 = [1, 2, 3, 4];
arr2.splice(1,2)


// 3. 배열 [10, 20, 30]에서 10과 20 사이에 15를 삽입하세요.
let arr3 = [10, 20, 30];
arr3.splice(1,0,15);



// 4. 배열 [5, 6, 7]의 맨 앞에 1, 2, 3, 4를 삽입하세요.
let arr4 = [5,6,7];
arr4.splice(0,0,1,2,3,4);



// 5. 배열 [1, 2, 3]에서 모든 요소를 제거하세요.
let arr5 = [1,2,3];
arr5.splice(0,arr5.length)
// 더 좋은 답 arr5.splice(0);



// 6. 배열 [1, 2, 3, 4, 5]에서 3을 제거하고 맨 앞에 다시 삽입하세요.
let arr6 = [1,2,3,4,5]
arr6.splice(2,1)
arr6.splice(0,0,3)


// 7. 배열 ['a', 'b', 'c']에서 'b'를 'x', 'y'로 교체하세요.

let arr7 = ['a','b','c'];
arr7.splice(1,2,'x','y');

// 8. 배열 [10, 20, 30]에서 1번 인덱스에 아무것도 삭제하지 않고 'new'를 삽입하세요.
let arr8 = [10,20,30];
arr8.splice(0,0,'new')
//console.log(arr8);

// 9. 배열 [1, 2, 3, 4, 5]에서 인덱스 2부터 끝까지 제거하세요.
let arr9 = [1,2,3,4,5];
arr9.splice(2);

// 10. 배열 [100, 200, 300]의 맨 끝에 400을 splice로 추가하세요.
let arr10 = [100,200,300];
arr10.splice(arr10.length,0,400);


// 11. 배열 [9, 8, 7, 6]에서 8과 7을 삭제하고, 삭제된 값을 removed 변수에 저장하세요.
let arr11 = [9,8,7,6];
let removed = arr11.splice(1,2);


// 12. 배열 [1, 2, 3, 4, 5]에서 가운데 3개를 삭제하고, 삭제된 배열과 남은 배열을 모두 출력하세요.
let arr12 = [1,2,3,4,5];
let removed12 = arr12.splice(1,3);


// 13. 배열 [1, 2, 3, 4, 5]의 짝수 인덱스마다 splice로 'x'를 삽입한 새 배열을 만드세요.
/*
let arr13 = [1,2,3,4,5];
for(let i=0;i<arr13.length;i++){
    if(i%2==0){ 
        arr13.splice(i,0,'x')
    }
}; 
*/
// 결과는 맞지만  정답이 아님

let arr13 =[1,2,3,4,5];
let result = [...arr13];
for (let i=0; i<result.length; i += 2){
    result.splice(i,0,'x');
    i++;; // x 삽입으로 인덱스가 밀리므로 보정해야함
}



// 14. 배열 [1, 2, 3, 4]에서 마지막 요소를 splice로 제거하고 반환값만 출력하세요.
let arr14 = [1,2,3,4];
let result14 = arr14.splice(arr14.length-1,1)
console.log(result14)


// 15. 배열 ['a', 'b', 'c']에서 'b'를 제거하고, 제거된 값을 콘솔에 출력하세요.
let arr15 = ['a','b','c'];
let removed15 = arr15.splice(1,1)
console.log(removed15)

// 16. 배열 [1, 2, 3, 4, 5]에서 3을 제거하고 맨 뒤로 이동시키세요.
let arr16 = [1,2,3,4,5];
arr16.splice(2,1)
arr16.splice(arr16.length,0,3)

// 17. 배열 [1, 2, 3, 4, 5]에서 splice만 사용해서 짝수(2, 4)를 제거하세요.
let arr17 = [1,2,3,4,5];
arr17.splice(1,1);
arr17.splice(2,1);
console.log(arr17)



// 18. 배열 ['a', 'b', 'c', 'd']를 splice만 사용해 ['b', 'c', 'a', 'd']로 변경하세요.
let arr18 = ['a','b','c','d'];
arr18.splice(0,1,'b');
arr18.splice(1,1,'c');
arr18.splice(2,1,'a');
arr18.splice(3,1,'d');
console.log(arr18)

