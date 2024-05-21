/*
  非同期とは･･･ある処理を待たずに次の処理を実行すること

  【非同期には2つのステップがある】
  １．C++的な処理（setTimeoutを数えるなど）
      ⇒内部的にやってくれている
  ２．JavaScriptの処理（ハンドラーの実行）
      ⇒直接触る部分でもあるから、知っておく必要がある
*/

/*
  コールバック地獄・破滅のピラミッド
  1. コードが膨れ上がって見にくいコードになってしまう

  2. エラー処理がうまく動かない
    ⇒トライキャッチでうまくキャッチできない／トライから抜けてしまう

  （例）以下の処理でエラーがキャッチされずガチエラーになっちゃう
      ⇒setTimeout は制限が０秒でも他のコードが実行されたあとにしか実行されない
      
    try{
      setTimeout(() => {
        throw new Error("error");
      },1000);
    }catch (error) {
      console.log(error);
    }
*/
window.addEventListener('click', e => {
  console.log(e);
  setTimeout(() => {
    console.log('setTimeout');
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      setInterval(() => {
        console.log('setInterval');
      }, 1000);
    });
  }, 1000);
});
