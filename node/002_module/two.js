let name = 'sohyeon';
let age = 26;

function addAge() {
  age += 1;
}

function getAge() {
  return age;
}

module.exports.name = name;
module.exports.age = age;
module.exports.addAge = addAge;
module.exports.getAge = getAge;