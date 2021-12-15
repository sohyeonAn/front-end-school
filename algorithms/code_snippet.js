// /*
// https://codingdojang.com/scode/393?answer_mode=hide

// 1부터 10000까지 8이라는 숫자가 총 몇 번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
// */

// // 빈 배열을 만드는 방법
// // null이나 undefined가 들어가 있는게 아니라 진짜 비어있다.
// // 메모리가 할당되지 않았다.
// Array(10);
// let x = Array(10);
// x[2] = undefined;
// x[3] = null;
// console.log(x); // [비어 있음 × 2, undefined, null, 비어 있음 × 6]

// x.length = 20;
// console.log(x); // [비어 있음 × 2, undefined, null, 비어 있음 × 16]

// Array(10).fill(0);
// Array(10).fill(10);

// // find, filter, map, foreach
// // 1부터 100까지
// Array(100).fill(1).map((v, i) => v + i);

// // undefined로 초기화된 배열
// [...Array(100)] // [undefined, undefined, undefined, ....]

// // 빈 문자열 어레이 만들기
// '.'.repeat(10).split('.');

// // 문자열을 배열로 만들기
// Array.from('abc'); // ['a', 'b', 'c']
// Array.from('a'.repeat(10)); // (10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']

// // 1 ~ 100으로 초기화된 배열을 string으로 만듦
// Array(100).fill(1).map((v, i) => v + i) + '';

// // 8을 기준으로 배열을 자르고 개수를 셈.
// (Array(100).fill(1).map((v, i) => v + i) + '').split('8').length - 1;
// (Array(100).fill(1).map((v, i) => v + i) + '').split(/8/g).length - 1;



// /*
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
// */
// let s = [1, 3, 4, 8, 13, 17, 20];
// let arr = new Array();
// for (let i = 1; i < s.length; i++) {
//   arr.push(s[i] - s[i - 1]);
// }

// let result = arr.indexOf(Math.min(...arr));
// console.log(s[result], s[result + 1]);
// // let minDist = s[1] - s[0];
// // let n1 = s[0], n2=s[1];
// // for (let i = 1; i < s.length-1; i++) {
// //   let diff =  s[i+1] - s[i];
// //   if(minDist > diff){
// //     n1 = s[i];
// //     n2 = s[i+1]
// //     minDist = diff;
// //   }
// // }
// // console.log(n1, n2);

// let s = [1, 3, 4, 8, 13, 17, 20];
// // let ss = [3, 4, 8, 13, 17, 20, undefined];

// const zip = (a, b) => a.map((v, i) => [v, b[i]]);

// // zip([1,2,3], [10, 20, 30]);
// // zip(s.slice(), s.slice(1)).slice(0, -1);
// zip(s.slice(0, -1), s.slice(1));
// let pairs = zip(s.slice(0, -1), s.slice(1));
// pairs.sort(compare);


// function compare(a, b) {
//   if (a[1] - a[0] < b[1] - b[0]) {
//     return -1;
//   }
//   if (a[1] - a[0] > b[1] - b[0]) {
//     return 1;
//   }
//   return 0;
// }
// console.log(pairs[0]);

// Number.MAX_SAFE_INTEGER;
// Number.MIN_SAFE_INTEGER;

// 1. 스택과 큐
// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(value) {
//     this.arr.push(value);
//   }

//   // pop() {
//   //   return this.arr.pop();
//   // }

//   pop(index = this.arr.length - 1) {
//     // index가 입력되지 않으면
//     if (index === this.arr.length - 1) {
//       return this.arr.pop();
//     }
//     // index가 입력 되면
//     return this.arr.splice(index, 1);
//   }

//   isEmpty() {
//     if(this.arr.length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   top() {
//     return this.arr[this.arr.length -1]; 
//   }

//   bottom() {
//     return this.arr[0];
//   }
// }

// let s = new Stack();
// s.push(10);
// s.push(20);
// s.push(30);
// s.pop(1);
// s.pop();
// s.pop();
// s.bottom();
// console.log(s);

// 연결리스트(Linked List)
// const list = {
//   head: {
//     value: 90,
//     next: {
//       value: 2,
//       next: {
//         value: 77,
//         next: {
//           value: 35,
//           next: null
//         }
//       }
//     }
//   }
// };

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     let init = new Node('init');
//     this.head = init;
//     this.tail = init;

//     this.cnt = 0;
//   }

//   get fullData() {
//     let currNode = this.head;
//     currNode = currNode.next;

//     let s = ''
//     for (let i = 0; i < this.cnt; i++) {
//       s += `${currNode.data}, `;
//       currNode = currNode.next;
//     }
//     return JSON.parse(`[${s.slice(0, -2)}]`);
//   }

//   length() {
//     return this.cnt;
//   }

//   append(value) {
//     let newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.cnt += 1;
//   }

//   insert(index, value) {
//     let currNode = this.head;
//     for (let i = 0; i < index; i++) {
//       currNode = currNode.next;
//     }

//     let newNode = new Node(value);
//     newNode.next = currNode.next;
//     currNode.next = newNode;
//     this.cnt += 1;
//   }

//   toString() {
//     let currNode = this.head;
//     currNode = currNode.next;

//     let s = '';
//     for (let i = 0; i < this.cnt; i++) {
//       s += `${currNode.value}, `;
//       currNode = currNode.next;
//     }

//     return s.slice(0, -2);
//   }
// }

// let list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.insert(1, 15);
// list.toString();

// 정렬
// 선택정렬
// let input = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// let inputLen = input.length;
// let sorted = [];

// for (let i = 0; i < inputLen; i++) {
//   let min = Math.min(...input);
//   sorted.push(min);
//   input.splice(input.indexOf(min), 1);
// }

// console.log(sorted);

// 삽입정렬
// let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// let 정렬된배열 = [];
// let 배열의길이 = 입력값.length;

// function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
//     for (const i in 정렬된배열) {
//         if (삽입값 < 정렬된배열[i]) {
//             return i
//         }
//     }
//     return 정렬된배열.length;
// }

// for (let i = 0; i < 배열의길이; i++) {
//     let 삽입값 = 입력값.shift()
//     let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
//     정렬된배열.splice(인덱스, 0, 삽입값);
//     console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`)
// }

// 병합정렬
// function mergeSort(input){
//   let inputLen = input.length;
//   let result = [];

//   if(inputLen <= 1){
//     return input;
//   }

//   let middle = parseInt(inputLen / 2);
//   let grp1 = mergeSort(input.slice(0, middle));
//   let grp2 = mergeSort(input.slice(middle));

//   while(grp1.length !== 0 && grp2.length !== 0){
//     if(grp1[0] <= grp2[0]){
//       result.push(grp1.shift());
//     } else {
//       result.push(grp2.shift());
//     }
//   }
//   while(grp1.length > 0){
//     result.push(grp1.shift());
//   }
//   while(grp2.length > 0){
//     result.push(grp2.shift());
//   }

//   return result;
// }

// let input = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// console.log(mergeSort(input));


// 퀵 정렬
function quickSort(input){
  let inputLen = input.length;

  if(inputLen <= 1){
    return input;
  }

  const pivot = input.shift(); // 기준값
  const grp1 = [];
  const grp2 = [];

  for(let i in input) {
    if(input[i] < pivot){
      grp1.push(input[i]);
    } else {
      grp2.push(input[i]);
    }
  }

  return quickSort(grp1).concat(pivot, quickSort(grp2));
}
let input = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(quickSort(input));