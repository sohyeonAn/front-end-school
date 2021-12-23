const sohyeonInfo = require('./two');

console.log(sohyeonInfo.name);
console.log(sohyeonInfo.age);

sohyeonInfo.addAge();

console.log(`${sohyeonInfo.name}은/는 지금 ${sohyeonInfo.age}살 이고`);
console.log(`내년에는 ${sohyeonInfo.getAge()}살 이야.`);