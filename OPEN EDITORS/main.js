let result = confirm('Are you sure you?');
console.log(result); // OKやったらtrueを返す

// 入力できるよ
result = prompt('name', 'ug');
console.log(result); //ug

// 指定したurlを解析したものをオブジェクトとして展開している
let url = new URL('https://sports.yahoo.co.jp/');
console.log(url);
/*-------------------------------------------------------------------------------------------------------
URL {origin: 'https://sports.yahoo.co.jp', protocol: 'https:', username: '', password: '', host: 'sports.yahoo.co.jp', …}
hash: ""
host: "sports.yahoo.co.jp"
hostname: "sports.yahoo.co.jp"
href: "https://sports.yahoo.co.jp/"
origin: "https://sports.yahoo.co.jp"
password: ""
pathname: "/"
port: ""
protocol: "https:"
search: ""
--------------------------------------------------------------------------------------------------------------*/
