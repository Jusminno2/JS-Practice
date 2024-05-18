/* property によってイベントを起こす方法 */
// onclick の場合は、関数をいれる必要がある
const button = document.querySelector('button');
button.onclick = () => {
  button.style.backgroundColor = 'pink';
};
