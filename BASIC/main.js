let count = 0;
const daysInWeek = 7;

let additionResult = 2 + 5;
console.log(additionResult);

// 文字列を数値に変換する方法
const userInput = "10.9";
let calcResult;
calcResult = Number(userInput) + 10; //20.9
console.log(calcResult);
calcResult = parseInt(calcResult) + 10; //30
console.log(calcResult);
calcResult = parseFloat(userInput) + 10; //20.9
console.log(calcResult);
calcResult = +userInput + 10; //20.9
console.log(calcResult);

// 配列に要素を追加する方法
array = [];
array.push("apple");
console.log(array);

/*

null と undefined の違いはなにか？
null => 予定通り何も無い, 明示的に示したい場合
undefined => あると思っていたけどなにもなかった

*/

// 関数
function add(num1, num2) {
  console.log(num1 + num2);
}
add(2, 3);

// スコープ
/*

スコープとはなにか？ => 変数を参照できる範囲のこと

関数の外で定義したもののスコープは => ファイル全体 => グローバルスコープ
関数内で定義したもののスコープは => 関数内のみ => ローカルスコープ

*/

function add() {
  num1 = 0;
  num2 = 1;
  const value = num1 + num2;
  return value;
}
// console.log(value); => 関数の中で定義した変数は関数の外側から定義することができない
