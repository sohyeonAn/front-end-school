// 공식문서: https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');


console.log(`구분자 : ${path.sep}`); // 구분자는 OS 마다 다를 수 있다.
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.log(path.parse(__filename));
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source'));

// 이렇게 쓰지 말아라. 경로 구분자가 다를 수 있다.
console.log(__dirname + '/node');