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

    **C++のエラー（API）はトライキャッチできない**
*/
/*
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
*/

/*
  Promise
  ・Promiseは、new Promiseが作られた瞬間に処理を実行する
  ・第一引数に、resolveオブジェクトを持つ
  ・第二引数に、rejectオブジェクトを持つ
  ・promiseは、オブジェクト[PromiseState],[promiseResult]を返す
*/
/*
let promise = new Promise((resolve, reject) => {
  resolve('hello');
  console.log('hello promise');
});
console.log(promise);
*/

/*
  [[Prototype]]: Promise
  [[PromiseState]]: "fulfilled"
  [[PromiseResult]]: "hello"
*/

// promiseがresolveされるまでは、終わらねえって話
/*
promise = new Promise(resolve => {
  let tmpPromise = new Promise(resolve2 => {
    setTimeout(() => {
      resolve2();
    }, 1000);
  });
  resolve(tmpPromise);
});
*/

/*
  promise チェーンでできること
  １．thenは何回でも繰り返して使える
  ２．catchのあとにthenが使える
  ３．then or catch で return されたあとは、thenを探し始める
  ４．throw では catch 探し
  ５．finallyはじゅんばんが来たら必ず実行
  ６．そのあとthen探しを再開する
  ７．then探し中にfinallyでthrowされたらキャッチ探しが始まる
*/
new Promise(resolve => resolve(1))
  .then(value => {
    console.log(value);
    return 2;
  })
  .then(value => {
    console.log(value);
    throw new Error(3);
  })
  .catch(error => {
    console.log(error.message);
    throw new Error(4);
  })
  .catch(error => {
    console.log(error.message);
    return 5;
  })
  .then(value => {
    console.log(value);
    return 6;
  })
  // then or catch で return されたあとは、thenを探し始める
  .catch(() => console.log('skip'))
  .catch(() => console.log('skip'))
  .then(value => {
    console.log(value);
    throw new Error(7);
  })
  .then(() => console.log('skip'))
  .then(() => console.log('skip'))
  // throwはcatchで
  .catch(error => console.log(error.message));

// 上のPromise内部構造は以下の通り
/*
  thenメソッドが呼ばれたときは以下の3つの挙動が起こる
  １．返り値として返す用のPromiseオブジェクトを作成
  ２．func2をnweFunc2に変更
  ３．promiseFulfillReactionsをnewFunc2に変更

  promise2: {
    [[PromiseFulfilReactions]]: "pendeing"
    [[PromiseFulfillReactions]]: [newFunc2]
  }
  let newFunc2 = (value) => {
    try {
      let result = func2(value);
      resolve3(result)
    } catch (error) {
      reject3(error)
    }
  }
*/
promise = new Promise(resolve => resolve(1));
let promise2 = promise.then(value => {
  console.log(value);
  return 2;
});
let func2 = value => {
  console.log(value);
  throw new Error(3);
};
let promise3 = promise2.then(func2);
let promise4 = promise3
  .catch(error => {
    console.log(error.message);
    throw new Error(4);
  })
  .catch(error => console.log(error.message));

// WebAPIsをpromise化する方法=>ES2015以降のAPIはPromiseを返す
/*
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log('error', err.message);
  })
  // ネストが深くならないように一旦掃き出す
  .then(() => {
    return navigator.clipboard.readText();
  })
  .catch(err => {
    console.log(err.message);
  });
*/

/*
  async, awaitを使って簡潔に非同期処理を作る
*/
let asyncFunc = async () => {
  /*
  return new Promise((resolve, reject) => {
    try {
      let result = func() <=async内で実行する関数のこと
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
  */
  // return 'hello';
  // throw new Error('error');

  /*
  await の内部で起こっていること
  ⇒ Promise.resolve(1).then(onFullfilled, onRejected);
  ⇒ async await は try catch を使う
  ＊awaitは呼び出されたら、Promise.resolve(1).then(onFullfilled, onRejected);を行って、
  　それから処理を中断して、スコープの外側に行く
  ＊awaitはasyncとセットじゃないと使えない
  */
  let result = await 1;
  console.log('await1', result);
  result = await new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
  console.log('await2', result);
};
let result = asyncFunc();
console.log(result);
