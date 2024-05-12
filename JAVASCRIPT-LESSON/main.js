//　関数はオブジェクト(辞書）に過ぎない
// let add = {オブジェクト}
function add(a, b) {
  return a + b;
}
console.log(add);
console.log(add.name);
console.log(add.length);

// 関数式は、変数を作り出さないため、外から呼び出すことができない => 名前付き関数式
let sayHi = function hi() {
  return 'Hi';
};
console.log(sayHi);
// hi がなくても行ける => 無名関数
sayHi = function () {
  return 'Hi';
};

// 関数をオブジェクトのようにかける例 => value にある関数のことをメソッドという
// key と value をあわせてプロパティという
const person = {
  name: 'Gen',
  sayHi: function () {
    return 'Hi';
  },
};

// アロー関数について => 以下2つは同値
sayHi = function (name) {
  return `Hi ${name}!`;
};
sayHi = name => {
  return `Hi ${name}!`;
};

// arrow関数において、引数に何も渡されなかったときには、デフォルトを表示するようにする
sayHi = (name = 'User') => `Hi ${name}!`;
console.log(sayHi());

// コールバック関数（引数に関数を渡すことができる）=> 何度も再利用できる
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(10, 3, result => {
  console.log(result);
});
subtract(10, 4, result => {
  console.log(result);
});

/*----------参照渡しによる不思議な出来事---------------------------------------------------------*/
const coffee = {
  name: 'Caffe Latte',
};
//coffee2 に coffee のポインタを格納 => coffee と coffee2は同じところを指す
const coffee2 = coffee;
//coffee2の値を変える => coffeeも変わっていしまう
coffee2.name = 'Espresso';
console.log(coffee);

// 再帰関数式 => 階乗の計算を例に取る
let factorial = function (n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};
console.log(3); // 6

// arrow 関数におけるthisの挙動
let sayThis = () => {
  console.log(this);
};
const car = {
  color: 'red',
  sayThis,
  changeColor: function (color) {
    this.color = color;
  },
};
car.sayThis();

// this の内容を無理やり指定する方法=>arrow関数には使えない（arrow関数はthisを持たないから）
// 1. 普通の関数の場合
sayThis = function (a, b) {
  console.log(this, a, b);
};
// 2.arrow関数の場合
// sayThis = (a, b) => {
//   console.log(this, a, b);
// };

sayThis.call({ hello: 'hello' }); //{ hello: 'hello' }
sayThis.apply({ hello: 'hello' }, [1, 2]); //applyは引数を配列にしなければならない

//this オブジェクトをガチガチに固めるbind関数というやつ
sayThis = sayThis.bind({ hello: 'hello' }, 2); //第一引数aまで固めて、第2引数は下の行のように一つだけ入れてみる
sayThis(111, 2222); //普通の関数の場合{hello: 'hello'} 2 111=>2222は無視, arrow関数の場合=>Window {window: Window, self: Window, document: document, name: '', location: Location, …} 2 111
// bind vs arrow 関数。勝者arrow関数

/*-------------------getter と setter---------------------------------------------------*/
const pastaCalculator = {
  servingSize: 60,
  member: 4,
  // total: this.servingSize * this.member,  //関数呼び出しされていないため、this=undefined
  get total() {
    // getter は関数をプロパティのように扱える役割を持つ
    return this.servingSize * this.member;
  },
  set total(newValue) {
    //total になにか値が代入されたときに初めてsetterはお呼ばれする
    this.member = newValue / this.servingSize;
  },
};
pastaCalculator.total = 600; //newValue=600
// console.log(pastaCalculator.total());
console.log(pastaCalculator.total);
console.log(pastaCalculator);
