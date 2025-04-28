//Q1変数
let nickname = 'ごっしー';
let age = '28歳'
let selfIntroduce = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。'

console.log(selfIntroduce);


//Q2配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go']
let languagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(languagesText);

//Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4配列✖️オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5四則演算
let ageSum = [playerList[0].age + playerList[1].age + playerList[2].age]

console.log(ageSum / playerList.length);

//Q6関数
function sayHello(){
  let greeting = 'Hello';

  console.log(greeting);
}

sayHello();

const greet = function(){
  let sayWorld = 'World';

  console.log(sayWorld);
}

greet();

//Q7メソッド
user.birthday = '2000-09-27';

console.log(user.birthday);

user.sayHello = function() {
  console.log("Hello!");
};
user.sayHello();

//Q8引数

let calc = {};

calc.add = function(x,y) {
  console.log(x + y);
}

calc.add(3,4);

calc.subtract = function(x,y) {
  console.log(x - y);
}

calc.subtract(13,3);

calc.multiply = function(x,y) {
  console.log(x * y);
}

calc.multiply(7,7);

calc.divide = function(x,y) {
  console.log(x / y);
}

calc.divide(15,3);

//Q9返り値

function remainder(x,y){
  let mod = x % y;
  return mod;
}

let x = 5;
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder(x,y) + 'です。');

//Q10スコープ
/*

function foo() {
  let x = 1;
}
console.log(x);


エラーが出力される理由として
JavaScriptではスコープの有効範囲は関数内だけとなっており、関数の中で定義した変数は関数の中でしか参照することができない
変数xは関数fooの中で定義をしているので関数fooの外で関数の外で参照をしようとしても
x is not defined（変数 x が定義されていない)というエラーが出力をされてしまう。
*/


//section６

//Q1標準組み込み関数
let random = Math.floor(Math.random() * 10);
console.log('random =>' ,random);

//Q2コールバック関数
setTimeout (function() {
  console.log('Hello World!');
},3000 );

//Q3if
let num = 0;
if (num > 0) {
  console.log('num is greater than 0')
} else if (num < 0) {
  console.log('num is less than 0')
} else if (num === 0) {
  console.log('num is 0')
}

//Q4for
let numbers= [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

//Q5for✖️if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  let number = mixed[i];

  if (typeof number === 'number') {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}