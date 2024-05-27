/*
  文字列の情報しか保存できない localStorage
  => developper tools => application
*/
localStorage.setItem('name', 'john');
let result = localStorage.getItem('name');
console.log(result); // john

/*
  データの生存期間が違うlocalStorageとsessionStrage
  localStrage=> 一生
  sessionStrage=> タブが消えるまで残り続ける

  ⇒ 基本はsessionStrageを使う
*/
sessionStorage.setItem('name', 'John');

/*
  同じオリジンを持つもの、すなわちURLが等しい者同士であれば、タブが違っても変更が同期して変更される

  一方でクッキーは、同じホスト間でデータを共有している
  ・クッキーはhttpじゃないと見ることができない
  ・クッキーは、ホスト番号さえあっていればタブとか関係なく保存して共有してくれる
*/
window.addEventListener('storage', event => {
  console.log('storage event', event);
});
/* 
  data の変更を検知できる
  ⇒片方で、セッターを用いると、もう一つのタブでは変更を検知してくれる
*/

// ここからクッキー
document.cookie = 'name=John';
document.cookie = 'id=12345678';
result = document.cookie;
console.log(result); //id=12345678; name=John

// 一気にクッキーが表示されちゃうから、地道に一つずつ表示させる
result = document.cookie;
document.cookie.split(';').forEach(cookie => {
  let [key, value] = cookie.split('=');
  if (key === 'name') {
    result = value;
  }
});
console.log(result); //John
