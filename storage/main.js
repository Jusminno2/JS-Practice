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
