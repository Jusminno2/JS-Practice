// let result = confirm('Are you sure you?');
// console.log(result); // OKやったらtrueを返す

// 入力できるよ
// result = prompt('name', 'ug');
// console.log(result); //ug

// 指定したurlを解析したものをオブジェクトとして展開している
let url = new URL('https://sports.yahoo.co.jp/');
console.log(url);
/*-------------------------------------------------------------------------------------------------------
URL {origin: 'https://sports.yahoo.co.jp', protocol: 'https:', username: '', password: '', host: 'sports.yahoo.co.jp', …}
hash: ""
host: "sports.yahoo.co.jp"
hostname: "sports.yahoo.co.jp"
href: "https://sports.yahoo.co.jp/"
origin: "https://sports.yahoo.co.jp"
password: ""
pathname: "/"
port: ""
protocol: "https:"
search: ""
--------------------------------------------------------------------------------------------------------------*/

// 少なくとも2000msは待つという意味
setTimeout(() => {
  console.log('hello world!!');
}, 2000);
console.log('hello super world!!'); // 先に実行

// setTImeoutが0sのときでも、その後の処理が先に実行される
setTimeout(() => {
  console.log('hello world!!');
}, 0);
console.log('hello super world!!'); // 先に実行
console.log('apple');
/*
  hello super world!!
  apple
  hello world!!
*/

// 一定間隔で処理を実行したいとき
let timerId = setInterval(() => {
  console.log('hello super apple!!');
}, 1000);
// 処理をある時やめたいとき
setTimeout(() => {
  clearInterval(timerId);
}, 5000);
