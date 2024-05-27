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

/*----------------cookie の生存期間を決定する---------------------------------------------------*/
// ちなみに、何も指定しなかった場合はブラウザ自体が終了するまで行き続ける
// よって、次回からはブラウザが終了したらクッキーも死んでまうんかと思うようにしよう
document.cookie = 'name=John; max-age=3600'; //1 hour ago

/* 
  <cookieのpath属性に関する深い部分>
  ・cookieにパスを指定すると、そのパスが通ったブラウザ間でしかクッキーが共有されない
  ・cookieを設定したときのパスが、"/"以降に設定されていた場合は"/"の一番右のものを引いたものでパスが設定される
    localhost/items/01 でsession.setItemsしたら、path=/itemsとしてクッキーが保存される

  cookie にパスを指定する理由
  たとえば、ユーザーがログインした後、そのユーザーのセッション情報を保存するためにクッキーを使用する場合、
  そのクッキーをログインしたユーザーがアクセスするページのみに制限することが望ましいです。
  そうすることで、不必要に他のページにそのクッキーが送信されることを防ぎ、セキュリティを向上させることができます。
*/
document.cookie = 'user=yoshipi; path=/items; max-age=0';
