// let array = [10, 20, 30, 40, 50];
// let i = 0;

// for (; i < array.length;) {
//   console.log(array[i]);
//   i++;
// }

// array.forEach(e => console.log(e * 3));

// // for-in: index 
// for (let value in array){
//   console.log(value);
// }

// for (let variable in array) {
//   console.log(array[variable]);
// }

// // for-of: value
// for (let variable of array) {
//   console.log(variable);
// }

// // for-of를 사용하여 array의 평균 구하기
// let sum = 0;
// for(let val of array){
//   sum += val;
// }
// console.log('array의 평균은', sum/array.length);


// // while 문
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// // while문 사용하여 1~100 짝수의 합구하기
// i = 0;
// let result = 0;
// while (i < 101) {
//   result += i;
//   i += 2;
// }
// console.log(result);

// // do-while 문
// let num = 0;
// do {
//   console.log(num);
//   num += 1;
// } while (num < 11);


// while문으로 구구단
// let i = 2;
// let j = 1;
// while (i < 10) {
//   while (j < 10) {
//     console.log(`${i} X ${j} = ${i*j}`)
//     j++;
//   }
//   i++;
//   j = 1;
// }

// while 한 번으로 구구단
// let i = 2;
// let j = 1;
// while (i < 10) {
//     console.log(`${i} X ${j} = ${i*j}`);
//     j++;
//     if (j == 10) {
//         i++;
//         j = 1;
//     }
// }

// 반복문 안에서의 선언
// let i = 0;
// while (i <= 9) {
//     //두번째 순회부터 j가 있는지 확인
//     if (i > 1) console.log(j); // Uncaught ReferenceError: Cannot access 'j' before initialization
//     let j = 1;
//     i++;
// }


// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
// outer는 단순 레이블임. 다른 이름을 써도 상관없음.
outer: for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
      // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
      if (i === 5) break outer;
      console.log(`${i} X ${j} = ${i*j}`);
  }
}