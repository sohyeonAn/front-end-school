// import {name, age, addAge, getAge} from './two.js';
// // const sohyeonInfo = require('/two');

// console.log(name);
// console.log(age);

// addAge();

// // require은 age를 가져온 시점의 age가 고정되었는데
// // import는 출처파일에서 변수의 변화가 있는 경우
// // 그 변수를 사용하는 파일에서도 변화가 반영된다.
// console.log(`${name}은/는 지금 ${age}살 이고`);
// console.log(`내년에는 ${getAge()}살 이야.`);

import * as sohyeonInfo from './two.js';
// // const sohyeonInfo = require('/two');

console.log(sohyeonInfo.name);
console.log(sohyeonInfo.age);

sohyeonInfo.addAge();

console.log(`${sohyeonInfo.name}은/는 지금 ${sohyeonInfo.age}살 이고`);
console.log(`내년에는 ${sohyeonInfo.getAge()}살 이야.`);