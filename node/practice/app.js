const fs = require('fs');

fs.readFile('./userInfo.csv', 'utf8', (err, data) => {
  const users = data.split('\n').slice(1); // 0번째 값은 필드명이므로 제외한다.

  users.forEach(user => {
    const parsedUser = user.split(',');
    makeFile(parsedUser[0], parsedUser[1], parsedUser[2]);
  });

  if(err){
    console.log(err);
  }
});

function makeFile(name, id, job) {
  const writeContent = `Username : ${name}\nIdentifier : ${id}\njob : ${job}`;

  fs.mkdir(`./${name}`, (err) => {
    console.log(err)
  });


  fs.writeFile(`./${name}/userInfo.txt`, writeContent, (err) => {
    console.log(err)
  });
}