/*
配列と配列のようなオブジェクトの最も大きな違いは、length property

  ・length は配列に要素を加えると増えるが、削除されても変わらない
  ・疎な配列はメモリを使う
  ・length は削除するときに独特な挙動を示す
*/
let fruits = ['apple', 'orange', 'banana'];
// fruits = new Array('apple', 'orange', 'banana')
fruits[3] = 'grape';
console.log(fruits);

/*-----------------------スプレット構文---------------------------------------------------------*/
fruits = ['apple', 'orange', 'banana'];
const newFruits = ['peach', ...fruits, 'mango'];
fruits.push('grape');
let sum = (...nums) => {
  console.log(nums);
};
let nums = [1, 2, 3, 4];
sum(...nums); //しっかりと配列として返る
/*
  もし、sum(nums)だったら、[[1,2,3,4]]となっちゃう
  ⇒スプレット構文はこれを解決
*/

/*------------------------分割代入---------------------------------------------------------------*/
const gen = [
  'gen',
  20,
  'man',
  ['music', 'travel'],
  { first: 'geni', last: 'chin' },
];
//分割代入
let [, , gender, [music, travel], { first: firstName /*keyも変えれちゃう*/ }] =
  gen;
console.log(gender, music, travel, firstName);

/*----------------------------------------------------------------------------------------------------------
  Array.prototype
    ・push:末尾に追加
    ・unshift:先頭に追加⇒全部一つずつずらすから遅い
    ・pop:末尾から削除
    ・shift:逆pop⇒全部一つずつずらすから遅い
-----------------------------------------------------------------------------------------------------------*/
let items = [0, 1, 2];
items.pop();
console.log(items);

/*-------------------オブジェクトとしてどう動くの？編-------------------------------------------------------*/
arrayLikeObject = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  length: 4,
};
// length で指定した長さしかないと判断して（今回なら1:1まで）、次に指定した値を追加しlength+1
Array.prototype.push.call(arrayLikeObject, 5);
console.log(arrayLikeObject);
//配列のようなものから、本物の配列を作る
//厳密にはarrayLikeObjectを参考にして、新たな配列を作る
const realArray = Array.from(arrayLikeObject);
console.log(realArray, arrayLikeObject);
