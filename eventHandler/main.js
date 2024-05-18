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
  'click',
  () => {
    console.log('button clicked never again!');
  },
  {
    once: true,
  }
);

// 削除したい場合=>関数を一度定数か何かに入れたものを指定する
button.removeEventListener('click', clickListener);
