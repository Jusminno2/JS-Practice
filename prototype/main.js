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
// concar = UserFactory('Yoshiki', 20);
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

/* 
    インスタンス生成の知られざる裏側２
    ・すべての関数（arrow関数を除く）は、prototypeを持っている
    ・オブジェクトの中に入っているprototypeとは別もの
    ・new演算子によってコンストラクタ関数が作られたときに、使われるprototype
    ・メモリの節約になる
*/
const CarConstructor = function (name, price) {
  // new で呼び出す=>ここで暗黙的にthisが"create"で作られる. this.~はオブジェクトに要素を追加している
  //this = Object.create(CarConstructor.prototype)
  this.name = name;
  this.price = price;
  // this.greeting = function () {};
  //return this;
};
CarConstructor.prototype.greeting = function () {
  return `Hi! This car's name is ${this.name}. This costs you ${this.price} to buy.`;
};
const car1 = new CarConstructor('Toyota', 300000);
const car2 = new CarConstructor('Tesla', 20000);
const car3 = new CarConstructor('Honda', 81000);
console.log(car1, car2, car3);

//in演算子に似ているhasOwnProperty
o = {
  a: 1,
};
console.log(o);
console.log(o.hasOwnProperty('a'));
// console.log('a' in o);

/*--------------------------------------------------------------------------------------
  ES6以降で追加されたclass
  ・メソッドを羅列するだけで"CarConstructor.prototype.greeting"みたいな挙動になる
  ・constructorというメソッドの中だけは変数定義などができる
  ・逆にconstructorの外では、メソッドの羅列しかできない
  ・クラスの中身には、'use strict'モードが使用されている
  ・コロンは使えないが、イコールは使える
---------------------------------------------------------------------------------------*/
class User {
  // フィールド宣言 => 先にコンストラクターにthisとしてはいる
  id = 120;
  /*
     ・プライベートフィールド化=> "#"を先頭につける
     ・必ずクラスのフィールド（constructor）の外につける
     ・クラス内部からしかアクセスできない
  */
  #gender = 'man';
  constructor(name, age) {
    // Object.defineProperty(this, 'id', {})
    this.name = name;
    this.age = age;
    this.#gender = gender;
  }
  // フィールド宣言
  birthday = '1991/05/03';
  // getter settter の簡単設定
  get greeting() {}
  set post(newValue) {}
  /* prototype の前につくstatic, getter setter にもつけられる
  static greeteing() {}
  */
  private() {
    return this.#gender;
  }
}
// console.log(new User('Yodhiki', 29));

/*--------------------------------------------------------------------------------------------
  クラスの継承について
  ・thisはsuperのあとに使ってね！
  ・sub class で constructor 使うときは、必ずsuper()を使えよ！
  ・親クラスから子クラスを呼び出せる
  ・プライベートフィールドは継承できない

  sub class が呼ばれたとき
  １．まずsuperの上の部分が実行される
  ２．super が呼び出されると、親のフィールド->子のフィールド

  super()とsuper.(dot)は別物
  ・super()はconstructorの中でのみ使用可能
  ・super. は省略記法の中であればどこでもOK
  ・super. はsetterとしても使うことができる
    ・super.eat = this.eat
-----------------------------------------------------------------------------------------------*/
// super class
class Animal {
  age = 0;
  constructor(age) {
    // this = Object.create(Animal.prototype); <= super()を呼び出したときにmake
    this.age = age;
  }
  eat() {
    console.log('eat from Animal.');
  }
}
/*
  <sub class>
  Bird.__proto__ = Animal;
  Bird.prototype.__proto__ = Animal.prototype;
*/
class Bird extends Animal {
  name = 'pi';
  constructor(age, name) {
    super(age);
    this.name = name;
  }
  eat() {
    super.eat(); //eat from Animal を引き継ぎ、追加できる
    console.log('eat from bird');
  }
  fly() {}
}

const bird = new Bird(3, 'pi');
console.log(bird);
bird.eat(); // eat from bird
