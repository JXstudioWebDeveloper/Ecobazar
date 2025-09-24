const mainDiv = document.getElementById('main');
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    mainDiv.style.backgroundImage = `url("${thumb.src}")`;

    thumbs.forEach((t) => t.classList.remove('active-thumb'));
    thumb.classList.add('active-thumb');
  });
});
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const son = document.getElementById('count');
let s = 0;
function increment() {
  s++;
  son.innerText = s;
}
function decrement() {
  if (s > 0) {
    s--;
    son.innerText = s;
  }
}
plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);

