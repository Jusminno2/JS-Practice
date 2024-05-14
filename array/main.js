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
