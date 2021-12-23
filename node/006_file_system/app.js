// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');

//rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1. rename
let 변수 = '안소현' // 사용자 이름
let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getFullYear()}.txt`, (err) => {
//     console.log(err);
// });


// 2-1. readFile 
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 2-2. readdir
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 3. writeFile(내용을 바꿀 파일명, 바꿀 내용, ..)
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err)
// });

// 4. appendFile
// fs.appendFile('./test2.txt', 'hello world 3', (err)=>{
//     console.log(err)
// });

// 5. copyFile(카피하고 싶은 파일, 카피된 파일명, ..)
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err)
// });

// 6. mkdir(만들 폴더명, ..)
fs.mkdir('./yoyo', (err)=>{
  console.log(err)
});