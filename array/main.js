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
