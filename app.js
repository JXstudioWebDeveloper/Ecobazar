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

const btn1 = document.getElementById('tab1-btn');
const btn2 = document.getElementById('tab2-btn');
const btn3 = document.getElementById('tab3-btn');

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');

btn1.addEventListener('click', () => {
  tab1.style.display = 'block';
  tab2.style.display = 'none';
  tab3.style.display = 'none';
  tab4.style.display = 'block';
});
btn2.addEventListener('click', () => {
  tab1.style.display = 'none';
  tab2.style.display = 'block';
  tab3.style.display = 'none';
  tab4.style.display = 'block';
});
btn3.addEventListener('click', () => {
  tab1.style.display = 'none';
  tab2.style.display = 'none';
  tab3.style.display = 'block';
  tab4.style.display = 'none';
});
