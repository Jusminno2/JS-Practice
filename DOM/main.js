let result = document.documentElement;
result = document.head;
result = document.body;
console.dir(result); //HTML要素の取得

//親子間のノードの取得
result = document.childNodes;
result = document.body.childNodes;
console.log(result);
result = document.firstChild; //<!DOCTYPE html> <= 左から読み込まれていくから、htmlはあと
console.log(result);

// 親子間の要素の取得
result = document.body.children;
// sibling 系は要素ノード(body, head, not html)にしか使えない
// 兄弟ノード（左側）の取得
result = document.body.previousElementSibling; //head
// 兄弟ノード（右側）の取得
result = document.head.nextElementSibling; //body
console.log(result); //HTMLCollection(3) [h1, p, script]

result = document.body.children;
console.log(result);
/*
  Interface は HTMLCollection
  HTMLCollection(3) [h1#title, p, script, title: h1#title, hello: p]
    0: h1#title
    1: p
    2: script
    hello: p   <= ここがHTMLCOllectionの特徴, idも表示してくれる
    title: h1#title  <= ここがHTMLCOllectionの特徴
    length: 3
*/

// childNodesと比較
result = document.body.childNodes;
console.log(result);
/*
  Interface は NodeList
  NodeList(6) [text, h1#title, text, p, text, script]
    0: text
    1: h1#title
    2: text
    3: p
    4: text
    5: script
    6: text
    length: 7
*/

/*------------------------------------最頻出：querySelector----------------------------------------------*/
// querySelectorはdocument-interfaceとelement-interfaceどちらでも使える
// 第一引数はCSSセレクター
// 上から探索していって、最初にマッチしたものの要素だけを返す
result = document.head.querySelector('p'); //null
result = document.querySelector('#title');
console.log(result); //<h1 id="title">Document</h1>

// getElementById('ID名')
result = document.getElementById('title');
console.log(result); //<h1 id="title">

/*
  Domを変更する方法
  １．innerHTML･･･主に、setter（値を能動的に操作する）として使う。要素Elementsにしか使えない
  ２．insertAdjacentHTML･･･ごっそり変えたくないときもあるやん。追加もしたいやん。
  
  ＊＊大注意＊＊
  ・クロスサイトスクリプティング(XSS)には注意せよ！
  ・変なURLを貼らせるな！
  ・なぜ危険かというと、タグも入力できちゃうからだ！！！

  =>textContentはセキュリティー対策に使えるよ！！！
    ・タグが入力できないんだよ!!!
*/

// 一度指定したノードの子孫ノードをすべて削除し、ごっそり入れ替える
document.body.innerHTML = '<h1>Welcome Aboard</h1><div>I am a Winner</div>';
// クエセレとの組み合わせ。divだけ変えちゃう
document.querySelector('div').innerHTML = 'I am a Loser';
// 追加する方法＋=
document.querySelector('div').innerHTML += '<p>I am 30 years old.</p>';
// ごっそり変えたくないときもあるやん。追加もしたいやん。=> insertAdjacentHTML
document
  .querySelector('div')
  .insertAdjacentHTML('beforeend', '<p>Hey! Are you happy now??</p>');

// textContent をセッターとして使うと安心
// document.body.querySelector('div').textContent =
//   '<h1>Hey! Are you happy now?????</h1>'; //<h1>Hey! Are you happy now?????</h1>
