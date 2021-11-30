// String
let s = 'abcdefABCDEF';
console.dir(s); // abcdefABCDEF
console.log(s.length); // 12
console.log(s.indexOf('cde')); // 2, 처음 발견된 인덱스를 반환
console.log(s.search('ABC')); // 6
console.log(s.indexOf('G')); // -1, 찾을 수 없는 문자열인 경우
console.log(s.slice(0, 3)); // 'abc'
console.log(s.slice(1, 3)); // 'bc'
console.log(s.slice(3, 5)); // 'de'
console.log(s.slice(s.indexOf('A'), s.indexOf('C') + 1)); // 'ABC'
console.log(s.substr(s.indexOf('A'), 3)); // 'ABC'
console.log(s.substring(s.indexOf('A'), s.indexOf('C') + 1)); // 'ABC'
console.log(s.substring(2, -2)); // 'ab', 마이너스 인덱스를 0으로 처리
console.log(s.replace('abc', '가나다')); // '가나다defABCDEF'

let x = '100,000,000';
console.log(x.replace(',', '')); // 100000,000
console.log(x.replaceAll(',', '')); // 100000000 
console.log(x.replace(/,/g, '')); // 100000000
