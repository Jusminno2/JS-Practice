/* 

論理否定演算子=>! をつける演算子


ブロック文の厳密な定義は、ブロック分を使うとそれを一つの文章として一つの文章としてカウント
するため、何個も分を書きたいときに代表になってくれるもの

・if文では通常1つの文しか取らないが、ブロック分があると文章を複数書くことができ、条件に当てはまった
　ときの挙動が増える
・if文のあとはブロック要素である必要はない
・else if の文も実はelseノアとに文を入れて良いという決まりがあるだけで、
　そこにたまたまifがあるという感じ

*/

// 参考演算子
ok = "hello";
// ok がTrue(Truthy)の場合は左側（OK)を、false(Falthy)の場合は右側(NO)を返す
ok = ok ? "OK" : "NO";
console.log(ok);

//Switch文
//まずはif文から
function vegetableColor(vegetable) {
  if (vegetable === "tomato") {
    console.log("tomato is red!");
  } else if (vegetable === "pumpkin") {
    console.log("pumpkin is orange!");
  } else if (vegetable === "onion") {
    console.log("onion is white!");
  }
}
vegetableColor("tomato");

// 続いてswitch文（簡潔に書ける）
function vegetableColor(vegetable) {
  switch (vegetable) {
    case "tomato":
      console.log("tomato is red!"); //vegetable === "tomato"と意味同じ
      break;
    case "pumpkin":
      console.log("pumpkin is orange!");
      break;
    case "onion":
      console.log("onion is white!");
  }
}
vegetableColor("tomato");

/*
do-while文
doでかいた内容は、whileの真偽の否応なしに必ず実行される
*/
let tomatoCount = 0;
do {
  console.log("do-while: ", tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 3);

/*
[for sentence]
for (変数または定数の定義（基本的には変数） ; 条件式 ; 最後に行いたい式文)
*/
for (let i = 0; i < 3; i++) {
  console.log("i = ", i);
}

//for of sentence
const fruits = ["apple", "banana", "orange", "grape", "mango"];
//まずはfor文から
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//for of
for (const fruit of fruits /*iterable object しか取れない*/) {
  console.log(fruit);
}
