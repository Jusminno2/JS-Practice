// ただオブジェクトを作っただけでも、プロトタイプが内部で密かに作成される
const obj = {
  a: 1,
  b: 2,
  // [[Prototype]]: Object
};
// obj.__proto__ = {
//   c: 3,
// };

// Object.create
const ob = Object.create({ c: 333 });
ob.a = 1;
ob.b = 2;
// Prototype を見るための関数
console.log(Object.getPrototypeOf(obj));

console.log(ob);

// for in loop はプロトタイプまで見る => 例外 => 使う機会少ない
for (const key in ob) {
  console.log(key);
}

// Object.keys/values/entories はプロトタイプまでみない
console.log(Object.keys(ob));

// for of loop はプロトタイプをみない
for (const key of Object.keys(ob)) {
  console.log(key);
}
