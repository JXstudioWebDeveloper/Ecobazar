const minusBtn1 = document.getElementById('minus1');
const plusBtn1 = document.getElementById('plus1');
const son1 = document.getElementById('count1');
let s1 = 1;
function increment1() {
  s1++;
  son1.innerText = s1;
}
function decrement1() {
  if (s1 > 1) {
    s1--;
    son1.innerText = s1;
  }
}
plusBtn1.addEventListener('click', increment1);
minusBtn1.addEventListener('click', decrement1);

const minusBtn2 = document.getElementById('minus2');
const plusBtn2 = document.getElementById('plus2');
const son2 = document.getElementById('count2');
let s2 = 5;
function increment2() {
  s2++;
  son2.innerText = s2;
}
function decrement2() {
  if (s2 > 1) {
    s2--;
    son2.innerText = s2;
  }
}
plusBtn2.addEventListener('click', increment2);
minusBtn2.addEventListener('click', decrement2);
