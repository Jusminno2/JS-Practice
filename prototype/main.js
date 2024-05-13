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

/*                                class について                                                 */
const UserFactory = (name, age) => {
  return {
    name,
    age,
    greeting() {},
  };
};
// const user1 = UserFactory('Yoshipi', 30);
// const user2 = UserFactory('Yoshiki', 20);
// const user3 = UserFactory('Konno', 81);

// インスタンス生成の知られざる裏側
const UserConstructor = function (name, age) {
  // new で呼び出す=>ここで暗黙的にthisが作られる. this.~はオブジェクトに要素を追加している
  //this = {}
  this.name = name;
  this.age = age;
  this.greeting = function () {};
  //return this;
};
const user1 = new UserConstructor('Yoshipi', 30);
const user2 = new UserConstructor('Yoshiki', 20);
const user3 = new UserConstructor('Konno', 81);
console.log(user1, user2, user3);
