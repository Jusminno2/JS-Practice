/* property によってイベントを起こす方法 */
/* 
  onclick の場合は、関数をいれる必要がある
    ＊一つの関数に関して一つしか関数を割り当てることができない
*/
const button = document.querySelector('button');
button.onclick = () => {
  button.style.backgroundColor = 'pink';
};

// button.onclick = null;

/* addEventListener()を用いる */
// イベントハンドラー（関数のこと）の設定
const clickListener = () => {
  console.log('button clicked');
};
// 第二引数に定数に入れた関数をいれる方法
button.addEventListener('click', clickListener);
// 第二引数に関数を直接入れ込む方法
button.addEventListener('click', () => {
  console.log('button clicked again!');
});
// 1度イベントが起こったら、そのイベントが二度と起こらないようにする once => 使い捨てイベント
button.addEventListener(
  'click', // event name
  () => {
    console.log('button clicked never again!'); // function when event happened
  },
  {
    once: true, // use only once
  }
);

// 削除したい場合=>関数を一度定数か何かに入れたものを指定する
button.removeEventListener('click', clickListener);

// ブラウザが関数を実行するときに、第一引数に情報を教えてくれている
button.addEventListener('click', event => {
  console.log(event);
});

// イベントハンドラー内のthisについて
button.addEventListener('click', function (event) {
  // this はイベントハンドラーが登録されている要素を指し示す⇒今回は、ボタン要素
  console.log(this); //<button style="background-color: pink;">click me</button>
});

// バブリングについて
const input = document.querySelector('input');
input.addEventListener('input', () => {
  console.log('input from input in the bubbling phase');
});
document.body.addEventListener('input', () => {
  console.log('input from body in the bubbling phase');
});
document.addEventListener('input', () => {
  console.log('input from document in the bubbling phase');
});
window.addEventListener('input', () => {
  console.log('input from window in the bubbling phase');
});
/*
  上記のコードを実行したところ、以下のような結果が得られる

  input from input
  input from body
  input from document
  input from window

  よって、一つのイベントにいくつもイベントハンドラーを設定できる
*/

// バブリングよりも先に行われるキャプチャー
input.addEventListener(
  'input',
  () => {
    console.log('input from input in the capture phase');
  },
  { capture: true }
);
document.body.addEventListener(
  'input',
  () => {
    console.log('input from body in the capture phase');
  },
  { capture: true }
);
document.addEventListener(
  'input',
  () => {
    console.log('input from document in the capture phase');
  },
  { capture: true }
);
window.addEventListener(
  'input',
  () => {
    console.log('input from window in the capture phase');
  },
  { capture: true }
);
/* 
  input from window in the capture phase
  input from document in the capture phase
  input from body in the capture phase
  input from input in the capture phase
  input from input in the bubbling phase
  input from body in the bubbling phase
  input from document in the bubbling phase
  input from window in the bubbling phase
*/

// 滑らかなスクロール=>passive property
document.documentElement.style.height = '1500px';
window.addEventListener(
  'wheel',
  event => {
    for (let i = 0; i < 1e9; i++);
    console.log(event);
  },
  {
    // passive: false, //カクつく
    passive: true,
  }
);
