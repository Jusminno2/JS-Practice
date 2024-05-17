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
