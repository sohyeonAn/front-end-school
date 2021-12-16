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
// function quickSort(input){
//   let inputLen = input.length;

//   if(inputLen <= 1){
//     return input;
//   }

//   const pivot = input.shift(); // 기준값
//   const grp1 = [];
//   const grp2 = [];

//   for(let i in input) {
//     if(input[i] < pivot){
//       grp1.push(input[i]);
//     } else {
//       grp2.push(input[i]);
//     }
//   }

//   return quickSort(grp1).concat(pivot, quickSort(grp2));
// }
// let input = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// console.log(quickSort(input));

// 트리
// 너비우선탐색(BFS) - 큐 (push, shift)
// 깊이우선탐색(DFS) - 스택 (push, pop)
// current에서 visitPath로 가는 순간 자신의 자식 노드가 스택/큐에 추가

// 트리의 기본 형태
// const tree = {
//   root: {
//       value: 5,
//       left: {
//           value: 3,
//           left: {
//               value: 1,
//               left : null,
//               right: null
//           },
//           right : {
//               value: 4,
//               left : null,
//               right: null
//           }
//       },
//       right: {
//           value: 8,
//           left: {
//               value: 6,
//               left : null,
//               right: null
//           },
//           right : {
//               value: 9,
//               left : null,
//               right: null
//           }
//       }
//   }
// };
// // 트리를 object로 만들 수 있었는데 굳이 클래스로 만드는 이유는?
// // 구조적 확장 가능성.
// // 객체 지향 프로그래밍의 철학과 맞기 때문
// class Node {
//   constructor(value){
//     this.value = value;
//     this.child = []; // 이렇게 하면 이진트리말고 그 이상도 만들 수 있다.
//   }

// }

// class BinaryTree {
//   constructor(value){
//     let init = new Node(value);
//     this.root = init;
//     this.cnt = 0;
//   }

//   length() {
//     return this.cnt;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     let currNode = this.root;

//     while(currNode) {
//       if(value === currNode.value) {
//         // 데이터 중복은 있지 않다.
//         return ;
//       }

//       if(value < currNode.value){
//         // 들어온 데이터가 작으면 왼쪽에
//         // 비어있으면 데이터를 넣고 비어있지 않으면 while반복
//         if(!currNode.child[0]){
//           currNode.child[0] = newNode;
//           return ;
//         }
//         currNode = currNode.child[0];
//       } else {
//         if(!currNode.child[1]){
//           currNode.child[1] = newNode;
//           return ;
//         }
//         currNode = currNode.child[1];
//       }
//     }

//     this.cnt += 1;
//   }

//   DFS() {
//     // 깊이 우선 탐색, 스택 이용
//     let visitPath = [];
//     let stack = [this.root];

//     while(stack.length){
//       let current = stack.pop();
//       let left = current.child[0], right = current.child[1];
//       if(left)
//         stack.push(left);
//       if(right)
//         stack.push(right);

//       visitPath.push(current.value);
//     }

//     return visitPath;
//   }


//   BFS() {
//     // 너비 우선 탐색, 큐 이용
//     let visitPath = [];
//     let que = [this.root];

//     while(que.length){
//       let current = que.shift();
//       let left = current.child[0], right = current.child[1];
//       if(left)
//         que.push(left);
//       if(right)
//         que.push(right);

//       visitPath.push(current.value);
//     }

//     return visitPath;
//   }
// }

// let t = new BinaryTree(5);
// t.insert(3);
// t.insert(8);
// t.insert(1);
// t.insert(4);
// t.insert(6);
// t.insert(9);

// console.log(t.DFS());
// console.log(t.BFS());



// 실전 코딩테스트 풀이
// 카카오 18년도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 주제 : 2진법, 진법 연산, replace, or 연산
// let n = 5;
// let arr1 = [9, 20, 28, 18, 11];
// let arr2 = [30, 1, 21, 17, 28];

// function solution(n, arr1, arr2) {
//     let result = []
//     const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
//     const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
//     for (let [i, j] of zip(arr1, arr2)) {
//         result.push(fillSpace(n, (i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' ')));
//     }
//     return result;
// }

// console.log(solution(n, arr1, arr2));

// https://programmers.co.kr/learn/courses/30/lessons/17682
// 1S*2T*3S
//[1* 2 * 2, 2^3 * 2, 3]
//[4, 16, 3] = 23

// const testcase = [
//   '1S2D*3T',
//   '1D2S#10S',
//   '1D2S0T'
// ];

// for (const c of testcase) {
//   console.log(solution(c));
// }

// const dartResult = '1S2D3T'
// let answer = [];
// let result = 0;
// let temp = 0; // 임시점수

// function solution(dartResult) {
//   let answer = [];
//   let result = 0;
//   let temp = 0; // 임시점수
  
//   for (let i = 0; i < dartResult.length; i++) {
//       // console.log(dartResult[i]);
//       if (dartResult[i] >= 0 && dartResult[i] <=9 ) {
//           if (dartResult[i] == 1 && dartResult[i+1] == 0) {
//               temp = 10;
//               i++;
//           } else {
//               temp = parseInt(dartResult[i]);
//           }
//       } else if (dartResult[i] == 'S'){
//           answer.push(temp);
//       } else if (dartResult[i] == 'D'){
//           // answer.push(Math.pow(temp, 2));
//           answer.push(temp**2);
//       } else if (dartResult[i] == 'T'){
//           // answer.push(Math.pow(temp, 3));
//           answer.push(temp**3);
//       } else if (dartResult[i] == '*'){
//           answer[answer.length-1] *= 2;
//           answer[answer.length-2] *= 2;
//       } else if (dartResult[i] == '#'){
//           answer[answer.length-1] *= -1;
//       }
//   }
//   for (let i = 0; i < answer.length; i++) {
//       result += answer[i];
//   }
//   return result;
// }

// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시문제
// 키워드 : LRU 알고리즘, 페이지 교체 알고리즘
// 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
// 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
// 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60

const testcase = [
  [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
  [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
  [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
];

for (const [cacheSize, cities] of testcase) {
  console.log(solution(cacheSize, cities));
}

// 50, 21, 60

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
      let city = cities[i].toLowerCase();
      let index = cache.indexOf(city);
      if (index !== -1) {
          // hit(캐시에 존재함)
          cache.splice(index, 1);
          cache.push(city);
          time += 1;
      } else {
          // miss(캐시에 존재하지 않음)
          time += 5;
          cache.push(city);
          if (cacheSize < cache.length) {
              cache.shift();
          }
      }
  }
  return time;
}