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
// Prototype を見るための関数
console.log(Object.getPrototypeOf(obj));

console.log(ob);
