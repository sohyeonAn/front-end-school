// 객체 지향 프로그래밍

// 1. 모듈 패턴
function person() {
  let age = 26;

  return {
    getAge: function () {
      return age
    },
    setAge: function (data) {
      age = data
    }
  };
}

// const myPerson = person();
// console.log(myPerson.getAge());

// 2. 사용자 정의 타입 패턴
function PersonType() {
  this.age = 26;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson = new PersonType();
console.log(instancePerson.getAge());
console.log(instancePerson.age); // 값 은닉 불가

// 3. 모듈 + 사용자 정의 타입
function PersonType2() {
  let age = 25;

  function innerPersonType() { }

  innerPersonType.prototype.getAge = function () {
    return age;
  }

  return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());


// IIFE 패턴으로 만들어보기
const PersonType3 = (function () {
  let age = 15;

  function innerPersonType() { }

  innerPersonType.prototype.getAge = function () {
    return age;
  }

  return innerPersonType;
})();

const person4 = new PersonType3();
console.log(person4.getAge());