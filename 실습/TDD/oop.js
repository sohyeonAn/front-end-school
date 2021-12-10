// 객체 지향 프로그래밍

// 1. 모듈 패턴
function Person() {
  let age = 26;

  return {
    getAge : function () { return age },
    setAge: function (data) { age = data }
  };
}

// const person = Person();
// console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
function PersonType() {
  this.age = 26;
}

PersonType.prototype.getAge = function () { return this.age; };

const instancePerson = new PersonType();
console.log(instancePerson.getAge());
console.log(instancePerson.age);