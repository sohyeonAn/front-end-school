## 변수(타입, typeof로 확인 가능)
- Array(배열) 
    * 형태 : ['하나', '둘', '셋'], [100, 200, 300],
    * 호출 : 변수명, 변수명[0], 변수명[0][0] (변수명[index])
- String(문자열)
    * 형태 : 'abcde', "abcde", `abcde`
    * 호출 : 변수명, 변수명[0] (변수명[index])
- Number(숫자)
    * 형태 : 10, 10.123
    * 호출 : 변수명
- Boolean(논리값)
    * 형태 : true, false
    * 호출 : 변수명
- Object(객체)
    * 형태 : 
        ```javascript
        {
            "지역이름": "전국",
            "확진자수": 24889,
            "격리해제수": 23030,
            "사망자수": 438,
            "십만명당발생율": 48.0
        }
        ```
    * 호출 : 변수명, 변수명.지역이름, 변수명['지역이름'] (변수명.key, 변수명[key])
- undefine : undefind
- null : object
- NaN : number

## 산술연산
- `+`
- `-`
- `/`
- `*`
- `**`
- `%`

## 논리연산
- `!`
- `&&`
- `||`

## 비교연산
- `==`
- `!=`
- `>`
- `>=`
- `>`
- `<=`
- `<`
- `===`
- `!==`

## 조건문
- if
- else if
- else
- switch

## 반복문
- for
- for in
- for of
- while
- do while
- forEach
- break
- continue
```js
//예제
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```
```js
//예제
let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i);
}
```
```js
//예제
let a = [10, 20, 30, 40];
for (let i in a) {
    console.log(i);
}
```
```js
//예제
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
```
```js
//예제
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10)
```
```js
//예제
let a = [10, 20, 30, 40];
a.forEach(e => console.log(e**2));
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
}
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}
```
```js
//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}
```

## 함수
- 함수
    * 여기서 x, y를 보통 한국에서는 인자
    * 전달인자(아규먼트, argument) : 3, 5
    * 매개변수(파라미터, parameter) : x, y
    ```js
    function add(x, y){
        return x + y;
    }

    add(3, 5)
    ```

- 콜백함수
    ```js
    function add(x, y) {
        return x + y;
    }

    function mul(x, y) {
        return x * y;
    }

    function cal(a, b){
        return a(10, 10) + b(10, 10);
    }

    cal(add, mul);
    ```


- 화살표함수
    ```js
    function add(x, y) {
        return x + y
    }

    let addArrow = (x, y) => x + y;
    ```

- 기명 함수
    ```js
    // 기명 함수
    let aa = function sum(x, y) {
        return x + y
    }

    // 익명 함수인것 같지만 바뀜
    let bb = function(x, y) {
        return x + y
    }
    // ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다.
    let cc = (x, y) => x + y;
    ```

- 익명 함수
    ```js
    console.dir(function (x, y) {return x + y;})
    ```

## 선언
* let x : 변수로 사용하세요.
* var x : (전역에서 사용할 변수값, 실무에서 되도록 사용X)
* const x :(변하지 않는 상수값)

## 전개표현식 사용
* 전개구문 사용 예제
    ```js
    function add(...x){
        return x;
    }

    add(1, 2, 3, 4, 5)
    ```

    ```js
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];
    Math.max(1, ...arr1, 2, ...arr2, 25); // 25
    ```

    ```js
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr = [3, 5, 1];
    let arr2 = [8, 9, 15];

    let merged = [0, ...arr, 2, ...arr2];
    ```

## 블록스코프
* 아래 예제에서hojun이 not defined 되었다고 나옵니다.
* 참고 블로그 : https://velog.io/@fromzoo/%ED%95%A8%EC%88%98%EC%8A%A4%EC%BD%94%ED%94%84-vs-%EB%B8%94%EB%A1%9D%EC%8A%A4%EC%BD%94%ED%94%84
    ```js
    if (true){
        let hojun = 100;
    }

    console.log(hojun);
    ```

## 정규표현식
* 특정 패턴을 찾아낼 때 사용
* 연습사이트 : https://regexr.com/5nvc2

## 리터럴
* 리터럴은 코드에 보여지는 타입의 표현을 의미
* 예를 들어 원래 배열을 생성하려면
new Array(4,5,6); 이렇게 해야하지만 [4,5,6] 이렇게 만들수도 있는데요. 이렇게 배열을 의미하는 코드( [4,5,6] )를 배열의 리터럴 표현이라고 합니다.
* 마찬가지로 new Object() 의 리터럴 표현이 {}, new Number(5) 의 리터럴 표현이 5, new String("hello") 의 리터럴 표현이 "hello" 입니다.

## 사용자와 상호작용
* prompt('hello')
* comfirm('hello')
* alert('hello')