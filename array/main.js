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

/*------------------------- 配列自体を変えるメソッド ----------------------------------------------*/
items = [0, 1, 2];
// splice(削除始めたいindex, 削除する数, 削除したものと置き換えるもの)
items.splice(0, 1, 22);
console.log(items);

items = [0, 1, 2, 3];
// copyWithin(入れ替えたい場所, コピーの始まり, コピーの終わり)
items.copyWithin(0, 2, 4);
console.log(items); //[2,3,2,3,]

items = [0, 1, 2, 3];
// 逆転
items.reverse();
console.log(items);

items = [0, 1, undefined, 2, 3, undefined];
// 文字列に変換して辞書順に並べ替える
items.sort();
console.log(items);

/*--------------------------配列は変えないメソッド ----------------------------------------------------*/
items = [0, 1, 2, 3, 4];
// itemsには、変更を加えずに返り値だけを取るメソッド
let result = items.slice(2, 4); //[2,3]
console.log(result);

items = [0, 1, 2, 3, 4, 5];
result = items.concat([6, 7, 8]);
console.log(result);

items = [0, 1, 2, 3, 4, 5];
result = items.join('');
console.log(result);

items = ['banana', 'apple', 'orange', 'banana'];
// 第一引数：探したい文字列
// 第二引数：探すのスタートしたい場所
// 返り値：その文字列があるindex番号 => 何もなかった場合は-1が返る
result = items.indexOf('banana', 2);
// 返り値=>あったらTrue, なかったらFalse
result_2 = items.includes('banana', 2);
console.log(result);
console.log(result_2);
