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
*/
window.addEventListener('storage', event => {
  console.log('storage event', event);
});
/* 
  data の変更を検知できる
  ⇒片方で、セッターを用いると、もう一つのタブでは変更を検知してくれる
*/
